<?php

error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING );

// 보안설정이나 프레임이 달라도 쿠키가 통하도록 설정
header('P3P: CP="ALL CURa ADMa DEVa TAIa OUR BUS IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC OTC"');

$ext_arr = array ('PHP_SELF', '_ENV', '_GET', '_POST', '_FILES', '_SERVER', '_COOKIE', '_SESSION', '_REQUEST',
                  'HTTP_ENV_VARS', 'HTTP_GET_VARS', 'HTTP_POST_VARS', 'HTTP_POST_FILES', 'HTTP_SERVER_VARS',
                  'HTTP_COOKIE_VARS', 'HTTP_SESSION_VARS', 'GLOBALS');
$ext_cnt = count($ext_arr);
for ($i=0; $i<$ext_cnt; $i++) {
    // POST, GET 으로 선언된 전역변수가 있다면 unset() 시킴
    if (isset($_GET[$ext_arr[$i]]))  unset($_GET[$ext_arr[$i]]);
    if (isset($_POST[$ext_arr[$i]])) unset($_POST[$ext_arr[$i]]);
}


// Root URL
$uri= "/".explode('/', $_SERVER['REQUEST_URI'])[1];
$demouri = "/".explode('/', $_SERVER['REQUEST_URI'])[1]."/".explode('/', $_SERVER['REQUEST_URI'])[2];

function path()
{
    $chroot = substr($_SERVER['SCRIPT_FILENAME'], 0, strpos($_SERVER['SCRIPT_FILENAME'], dirname(__FILE__))); 
    $result['path'] = str_replace('\\', '/', $chroot.dirname(__FILE__)); 
    $server_script_name = preg_replace('/\/+/', '/', str_replace('\\', '/', $_SERVER['SCRIPT_NAME'])); 
    $server_script_filename = preg_replace('/\/+/', '/', str_replace('\\', '/', $_SERVER['SCRIPT_FILENAME'])); 
    $tilde_remove = preg_replace('/^\/\~[^\/]+(.*)$/', '$1', $server_script_name); 
    $document_root = str_replace($tilde_remove, '', $server_script_filename); 
    $pattern = '/' . preg_quote($document_root, '/') . '/i'; 
    $root = preg_replace($pattern, '', $result['path']); 
    $port = ($_SERVER['SERVER_PORT'] == 80 || $_SERVER['SERVER_PORT'] == 443) ? '' : ':'.$_SERVER['SERVER_PORT']; 
    $http = 'http' . ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on') ? 's' : '') . '://'; 
    $user = str_replace(preg_replace($pattern, '', $server_script_filename), '', $server_script_name); 
    $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : $_SERVER['SERVER_NAME']; 
    if(isset($_SERVER['HTTP_HOST']) && preg_match('/:[0-9]+$/', $host)) 
        $host = preg_replace('/:[0-9]+$/', '', $host); 
    $host = preg_replace("/[\<\>\'\"\\\'\\\"\%\=\(\)\/\^\*]/", '', $host); 
    $result['url'] = $http.$host.$port.$user.$root; 
    return $result;
}

$path = path();

// 설정 파일
include_once($path['path'].'/config.php');

unset($path);


// multi-dimensional array에 사용자지정 함수적용
function array_map_deep($fn, $array)
{
    if(is_array($array)) {
        foreach($array as $key => $value) {
            if(is_array($value)) {
                $array[$key] = array_map_deep($fn, $value);
            } else {
                $array[$key] = call_user_func($fn, $value);
            }
        }
    } else {
        $array = call_user_func($fn, $array);
    }

    return $array;
}

// SQL Injection 대응 문자열 필터링
function sql_escape_string($str)
{
    if(defined('ESCAPE_PATTERN') && defined('ESCAPE_REPLACE')) {
        $pattern = ESCAPE_PATTERN;
        $replace = ESCAPE_REPLACE;

        if($pattern)
            $str = preg_replace($pattern, $replace, $str);
    }

    $str = call_user_func('addslashes', $str);

    return $str;
}

if (get_magic_quotes_gpc()) {
    $_POST    = array_map_deep('stripslashes',  $_POST);
    $_GET     = array_map_deep('stripslashes',  $_GET);
    $_COOKIE  = array_map_deep('stripslashes',  $_COOKIE);
    $_REQUEST = array_map_deep('stripslashes',  $_REQUEST);
}

// sql_escape_string 적용
$_POST    = array_map_deep(ESCAPE_FUNCTION,  $_POST);
$_GET     = array_map_deep(ESCAPE_FUNCTION,  $_GET);
$_COOKIE  = array_map_deep(ESCAPE_FUNCTION,  $_COOKIE);
$_REQUEST = array_map_deep(ESCAPE_FUNCTION,  $_REQUEST);

// php.ini 의 register_globals=off 일 경우
@extract($_GET);
@extract($_POST);
@extract($_SERVER);


$gmit = array();
$path = array();
$member = array();

// DB Config
$dbconfig_file = DATA_PATH.'/'.DBCONFIG_FILE;
$tbconfig_file = DATA_PATH.'/'.TBCONFIG_FILE;
if (file_exists($dbconfig_file)) {
    include_once($dbconfig_file);
    include_once($tbconfig_file);
	include_once(LIB_PATH.'/common.lib.php');
	
    $connect_db = sql_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD) or die('MySQL Connect Error!!!');
    $select_db  = sql_select_db(MYSQL_DB, $connect_db) or die('MySQL DB Error!!!');

    $gmit['connect_db'] = $connect_db;

    sql_set_charset('utf8', $connect_db);
    if(defined('MYSQL_SET_MODE') && MYSQL_SET_MODE) sql_query("SET SESSION sql_mode = ''");
    if (defined('TIMEZONE')) sql_query(" set time_zone = '".TIMEZONE."'");
} else {
    exit;
}

// SESSION SETTING
// PHPSESSID를 자동으로 넘기지 않음
@ini_set("session.use_trans_sid", 0);
// 링크에 PHPSESSID가 따라다니는것을 무력화함
@ini_set("url_rewriter.tags",""); 

session_save_path(SESSION_PATH);

if (isset($SESSION_CACHE_LIMITER))
    @session_cache_limiter($SESSION_CACHE_LIMITER);
else
    @session_cache_limiter("no-cache, must-revalidate");

ini_set("session.cache_expire", 180); // 세션 캐쉬 보관시간 (분)
ini_set("session.gc_maxlifetime", 10800); // session data의 garbage collection 존재 기간을 지정 (초)
ini_set("session.gc_probability", 1); // session.gc_probability는 session.gc_divisor와 연계하여 gc(쓰레기 수거) 루틴의 시작 확률을 관리합니다. 기본값은 1입니다.
ini_set("session.gc_divisor", 100); // session.gc_divisor는 session.gc_probability와 결합하여 각 세션 초기화 시에 gc(쓰레기 수거) 프로세스를 시작할 확률을 정의합니다. 확률은 gc_probability/gc_divisor를 사용하여 계산합니다. 즉, 1/100은 각 요청시에 GC 프로세스를 시작할 확률이 1%입니다. session.gc_divisor의 기본값은 100입니다.

session_set_cookie_params(0, '/goodmit/demo');
ini_set("session.cookie_domain", COOKIE_DOMAIN);

@session_start();

if(! is_dir(SESSION_PATH) ) {
	mkdir(SESSION_PATH, 0757);
	chmod(SESSION_PATH, 0757);
}

// 회원, 비회원 구분
$is_member = false; 
$is_guest = false;
$is_admin = '';

if (isset($_REQUEST['PHPSESSID']) && $_REQUEST['PHPSESSID'] != session_id()){
	goto_url('logout.php');
}

// URL ENCODING
if (isset($_REQUEST['url'])) {
    $url = strip_tags(trim($_REQUEST['url']));
    $urlencode = urlencode($url);
} else {
    $url = '';
    $urlencode = urlencode($_SERVER['REQUEST_URI']);
    if (DOMAIN) {
        $p = @parse_url(DOMAIN);
        $urlencode = DOMAIN.urldecode(preg_replace("/^".urlencode($p['path'])."/", "", $urlencode));
    }
}


if ($_SESSION['ss_id']) { // 로그인중이라면
    $member = get_member($_SESSION['ss_id']);

    // 차단된 회원이면 ss_id 초기화
    if($member['intercept'] == "Y") {
        set_session('ss_id', '');
        $member = array();
    } else {
        // 오늘 처음 로그인 이라면
        if (substr($member['gmem_today_login'], 0, 10) != TIME_YMD) {
            $sql = " update {$gmit['member_table']} set gmem_today_login = '".TIME_YMDHIS."', gmem_login_ip = '{$_SERVER['REMOTE_ADDR']}' where gmem_userid = '{$member['gmem_userid']}' ";
            sql_query($sql);
        }
    }
}

if ($member['gmem_userid']) {
    $is_member = true;
} else {
    $is_guest = true;
    $member['gmem_userid'] = '';
}


$is_mobile = false;
$set_device = true;

if(defined('SET_DEVICE') && $set_device) {
    switch(SET_DEVICE) {
        case 'pc':
            $is_mobile  = false;
            $set_device = false;
            break;
        case 'mobile':
            $is_mobile  = true;
            $set_device = false;
            break;
        default:
            break;
    }
}

if (USE_MOBILE && $set_device) {
    if ($_REQUEST['device']=='pc')
        $is_mobile = false;
    else if ($_REQUEST['device']=='mobile')
        $is_mobile = true;
    else if (isset($_SESSION['ss_is_mobile']))
        $is_mobile = $_SESSION['ss_is_mobile'];
    else if (is_mobile())
        $is_mobile = true;
} else {
    $set_device = false;
}

$_SESSION['ss_is_mobile'] = $is_mobile;
define('IS_MOBILE', $is_mobile);
define('DEVICE_BUTTON_DISPLAY', $set_device);

include_once(PATH."/_inc/visit.inc.php");

header('Content-Type: text/html; charset=utf-8');
$gmnow = gmdate('D, d M Y H:i:s') . ' GMT';
header('Expires: 0'); // rfc2616 - Section 14.21
header('Last-Modified: ' . $gmnow);
header('Cache-Control: no-store, no-cache, must-revalidate'); // HTTP/1.1
header('Cache-Control: pre-check=0, post-check=0, max-age=0'); // HTTP/1.1
header('Pragma: no-cache'); // HTTP/1.0

?>