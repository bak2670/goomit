<?php

if (!defined('_GMIT_')) exit;

/*************************************************************************
**
**  SQL 관련 함수 모음
**
*************************************************************************/

// DB 연결
function sql_connect($host, $user, $pass, $db=MYSQL_DB)
{
    global $gmit;

    if(function_exists('mysqli_connect') && MYSQLI_USE) {
        $link = mysqli_connect($host, $user, $pass, $db);

        // 연결 오류 발생 시 스크립트 종료
        if (mysqli_connect_errno()) {
            die('Connect Error: '.mysqli_connect_error());
        }
    } else {
        $link = mysql_connect($host, $user, $pass);
    }

    return $link;
}
 

// DB 선택
function sql_select_db($db, $connect)
{
    global $gmit;

    if(function_exists('mysqli_select_db') && MYSQLI_USE)
        return @mysqli_select_db($connect, $db);
    else
        return @mysql_select_db($db, $connect);
}


function sql_set_charset($charset, $link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    if(function_exists('mysqli_set_charset') && MYSQLI_USE)
        mysqli_set_charset($link, $charset);
    else
        mysql_query(" set names {$charset} ", $link);
}


// mysqli_query 와 mysqli_error 를 한꺼번에 처리
// mysql connect resource 지정 - 명랑폐인님 제안
function sql_query($sql, $error=DISPLAY_SQL_ERROR, $link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    // Blind SQL Injection 취약점 해결
    $sql = trim($sql);
    // union의 사용을 허락하지 않습니다.
    //$sql = preg_replace("#^select.*from.*union.*#i", "select 1", $sql);
    $sql = preg_replace("#^select.*from.*[\s\(]+union[\s\)]+.*#i ", "select 1", $sql);
    // `information_schema` DB로의 접근을 허락하지 않습니다.
    $sql = preg_replace("#^select.*from.*where.*`?information_schema`?.*#i", "select 1", $sql);

    if(function_exists('mysqli_query') && MYSQLI_USE) {
        if ($error) {
            $result = @mysqli_query($link, $sql) or die("<p>$sql<p>" . mysqli_errno($link) . " : " .  mysqli_error($link) . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
        } else {
            $result = @mysqli_query($link, $sql);
        }
    } else {
        if ($error) {
            $result = @mysql_query($sql, $link) or die("<p>$sql<p>" . mysql_errno() . " : " .  mysql_error() . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
        } else {
            $result = @mysql_query($sql, $link);
        }
    }

    return $result;
}


// 쿼리를 실행한 후 결과값에서 한행을 얻는다.
function sql_fetch($sql, $error=DISPLAY_SQL_ERROR, $link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    $result = sql_query($sql, $error, $link);
    $row = sql_fetch_array($result);
    return $row;
}


// 결과값에서 한행 연관배열(이름으로)로 얻는다.
function sql_fetch_array($result)
{
    if(function_exists('mysqli_fetch_assoc') && MYSQLI_USE)
        $row = @mysqli_fetch_assoc($result);
    else
        $row = @mysql_fetch_assoc($result);

    return $row;
}


// $result에 대한 메모리(memory)에 있는 내용을 모두 제거한다.
// sql_free_result()는 결과로부터 얻은 질의 값이 커서 많은 메모리를 사용할 염려가 있을 때 사용된다.
// 단, 결과 값은 스크립트(script) 실행부가 종료되면서 메모리에서 자동적으로 지워진다.
function sql_free_result($result)
{
    if(function_exists('mysqli_free_result') && MYSQLI_USE)
        return mysqli_free_result($result);
    else
        return mysql_free_result($result);
}


function sql_password($value)
{
    $row = sql_fetch(" select password('$value') as pass ");
    return $row['pass'];
}


function sql_insert_id($link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    if(function_exists('mysqli_insert_id') && MYSQLI_USE)
        return mysqli_insert_id($link);
    else
        return mysql_insert_id($link);
}


function sql_num_rows($result)
{
    if(function_exists('mysqli_num_rows') && MYSQLI_USE)
        return mysqli_num_rows($result);
    else
        return mysql_num_rows($result);
}


function sql_field_names($table, $link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    $columns = array();

    $sql = " select * from `$table` limit 1 ";
    $result = sql_query($sql, $link);

    if(function_exists('mysqli_fetch_field') && MYSQLI_USE) {
        while($field = mysqli_fetch_field($result)) {
            $columns[] = $field->name;
        }
    } else {
        $i = 0;
        $cnt = mysql_num_fields($result);
        while($i < $cnt) {
            $field = mysql_fetch_field($result, $i);
            $columns[] = $field->name;
            $i++;
        }
    }

    return $columns;
}


function sql_error_info($link=null)
{
    global $gmit;

    if(!$link)
        $link = $gmit['connect_db'];

    if(function_exists('mysqli_error') && MYSQLI_USE) {
        return mysqli_errno($link) . ' : ' . mysqli_error($link);
    } else {
        return mysql_errno($link) . ' : ' . mysql_error($link);
    }
}

// 모바일 검사
function is_mobile()
{
    return preg_match('/'.MOBILE_AGENT.'/i', $_SERVER['HTTP_USER_AGENT']);
}
// XSS 관련 태그 제거
function clean_xss_tags($str, $check_entities=0)
{
    $str_len = strlen($str);
    
    $i = 0;
    while($i <= $str_len){
        $result = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $str);
        
        if( $check_entities ){
            $result = str_replace(array('&colon;', '&lpar;', '&rpar;', '&NewLine;', '&Tab;'), '', $result);
        }

        if((string)$result === (string)$str) break;

        $str = $result;
        $i++;
    }

    return $str;
}

// XSS 어트리뷰트 태그 제거
function clean_xss_attributes($str)
{
    $str = preg_replace('#(onabort|onactivate|onafterprint|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onblur|onbounce|oncellchange|onchange|onclick|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavaible|ondatasetchanged|ondatasetcomplete|ondblclick|ondeactivate|ondrag|ondragdrop|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|onerror|onerrorupdate|onfilterupdate|onfinish|onfocus|onfocusin|onfocusout|onhelp|onkeydown|onkeypress|onkeyup|onlayoutcomplete|onload|onlosecapture|onmousedown|onmouseenter|onmouseleave|onmousemove|onmoveout|onmouseover|onmouseup|onmousewheel|onmove|onmoveend|onmovestart|onpaste|onpropertychange|onreadystatechange|onreset|onresize|onresizeend|onresizestart|onrowexit|onrowsdelete|onrowsinserted|onscroll|onselect|onselectionchange|onselectstart|onstart|onstop|onsubmit|onunload)\\s*=\\s*\\\?".*?"#is', '', $str);

    return $str;
}

// URL 이동
function goto_url($url)
{
    $url = str_replace("&amp;", "&", $url);
    //echo "<script> location.replace('$url'); </script>";

    if (!headers_sent())
        header('Location: '.$url);
    else {
        echo '<script>';
        echo 'location.replace("'.$url.'");';
        echo '</script>';
        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url='.$url.'" />';
        echo '</noscript>';
    }
    exit;
}

// 경고메세지를 경고창으로
function alert($msg='', $url=''){
    $msg = $msg ? strip_tags($msg, '<br>') : '올바른 방법으로 이용해 주십시오.';
    
    $return_str = "";
	$return_str .= "<script> alert(\"{$msg}\"); ";
	if($url) {
		$return_str .= "document.location.replace(\"".str_replace('&amp;', '&', $url)."\"); ";
	} else {
		$return_str .= "history.back();";
	}
	$return_str .= "</script>";
	
	echo $return_str;
    exit;
}

// 세션변수 생성
function set_session($session_name, $value)
{
    if (PHP_VERSION < '5.3.0')
        session_register($session_name);
    // PHP 버전별 차이를 없애기 위한 방법
    $session_name = $_SESSION[$session_name] = $value;
}

// 세션변수값 얻음
function get_session($session_name)
{
    return isset($_SESSION[$session_name]) ? $_SESSION[$session_name] : '';
}


// 쿠키변수 생성
function set_cookie($cookie_name, $value, $expire)
{
    global $gmit;

    setcookie(md5($cookie_name), base64_encode($value), SERVER_TIME + $expire, '/goodmit', COOKIE_DOMAIN);
}

// 쿠키변수값 얻음
function get_cookie($cookie_name)
{
    $cookie = md5($cookie_name);
    if (array_key_exists($cookie, $_COOKIE))
        return base64_decode($_COOKIE[$cookie]);
    else
        return "";
}

function get_real_client_ip(){

    $real_ip = $_SERVER['REMOTE_ADDR'];

    if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && preg_match('/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\z/', $_SERVER['HTTP_X_FORWARDED_FOR']) ){
        $real_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    return preg_replace('/[^0-9.]/', '', $real_ip);
}

function escape_trim($field)
{
    $str = call_user_func(ESCAPE_FUNCTION, $field);
    return $str;
}

function get_brow($agent)
{
    $agent = strtolower($agent);

    //echo $agent; echo "<br/>";

    if (preg_match("/msie ([1-9][0-9]\.[0-9]+)/", $agent, $m)) { $s = 'MSIE '.$m[1]; }
    else if(preg_match("/firefox/", $agent)) { $s = "FireFox"; }
    else if(preg_match("/chrome/", $agent)) { $s = "Chrome"; }
    else if(preg_match("/x11/", $agent)) { $s = "Netscape"; }
    else if(preg_match("/opera/", $agent)) { $s = "Opera"; }
    else if(preg_match("/safari/", $agent)) { $s = "Safari"; }
    else if(preg_match("/gec/", $agent)) { $s = "Gecko"; }
    else if(preg_match("/bot|slurp/", $agent)) { $s = "Robot"; }
    else if(preg_match("/internet explorer/", $agent)) { $s = "IE"; }
    else if(preg_match("/mozilla/", $agent)) { $s = "Mozilla"; }
    else { $s = "기타"; }

    return $s;
}




function get_os($agent)
{
    $agent = strtolower($agent);

    //echo $agent; echo "<br/>";

    if (preg_match("/windows 98/", $agent)) { $s = "98"; }
    else if(preg_match("/windows 95/", $agent)) { $s = "95"; }
    else if(preg_match("/windows nt 4\.[0-9]*/", $agent)) { $s = "NT"; }
    else if(preg_match("/windows nt 5\.0/", $agent)) { $s = "2000"; }
    else if(preg_match("/windows nt 5\.1/", $agent)) { $s = "XP"; }
    else if(preg_match("/windows nt 5\.2/", $agent)) { $s = "2003"; }
    else if(preg_match("/windows nt 6\.0/", $agent)) { $s = "Vista"; }
    else if(preg_match("/windows nt 6\.1/", $agent)) { $s = "Windows7"; }
    else if(preg_match("/windows nt 6\.2/", $agent)) { $s = "Windows8"; }
    else if(preg_match("/windows 9x/", $agent)) { $s = "ME"; }
    else if(preg_match("/windows ce/", $agent)) { $s = "CE"; }
    else if(preg_match("/mac/", $agent)) { $s = "MAC"; }
    else if(preg_match("/linux/", $agent)) { $s = "Linux"; }
    else if(preg_match("/sunos/", $agent)) { $s = "sunOS"; }
    else if(preg_match("/irix/", $agent)) { $s = "IRIX"; }
    else if(preg_match("/phone/", $agent)) { $s = "Phone"; }
    else if(preg_match("/bot|slurp/", $agent)) { $s = "Robot"; }
    else if(preg_match("/internet explorer/", $agent)) { $s = "IE"; }
    else if(preg_match("/mozilla/", $agent)) { $s = "Mozilla"; }
    else { $s = "기타"; }

    return $s;
}




// 회원로그인점검
function get_member($id='', $password=''){
	global $gmit;
	if($password != ''){
		$password = sql_password($password);
		$sql = " SELECT gmem_id, gmem_userid, gmem_auth, gmem_name, gmem_part, gmem_position, gmem_email, gmem_hp, gmem_isadmin, gmem_memo, gmem_today_login, gmem_login_ip, gmem_datetime, gmem_intercept, gmem_intercept_date, gmem_useyn, gmem_create_uid, gmem_update_uid, gmem_create_date, gmem_update_date FROM {$gmit['member_table']} WHERE `gmem_userid` = '{$id}' AND `gmem_password` = '{$password}' ";
	}else{
		$sql = " SELECT gmem_id, gmem_userid, gmem_auth, gmem_name, gmem_part, gmem_position, gmem_email, gmem_hp, gmem_isadmin, gmem_memo, gmem_today_login, gmem_login_ip, gmem_datetime, gmem_intercept, gmem_intercept_date, gmem_useyn, gmem_create_uid, gmem_update_uid, gmem_create_date, gmem_update_date FROM {$gmit['member_table']} WHERE `gmem_userid` = '{$id}' ";
	}
	$result = sql_fetch($sql);
	
	return $result;
}

// 로그인 정보 저장
function set_login_info($input_userid) {
    global $gmit, $member;

    $remote_addr = escape_trim($_SERVER['REMOTE_ADDR']);
    $user_agent  = escape_trim(clean_xss_tags(strip_tags($_SERVER['HTTP_USER_AGENT'])));

    $gllog_os = get_os($user_agent);
    $gllog_device = (IS_MOBILE ? 'mobile' : 'pc');
	
	if($member['gmem_id'] > 0){
		$sql = " INSERT {$gmit['login_log_table']} ( gllog_id, gllog_ip, gllog_userid, gllog_name, gllog_os, gllog_device, gllog_datetime, gllog_state ) values ( '{$member['gmem_id']}', '{$remote_addr}', '{$member['gmem_userid']}', '{$member['gmem_name']}', '$gllog_os', '$gllog_device', '".TIME_YMDHIS."', '성공' ) ";
	}else{
		$basic_info_user_sql = " SELECT gmem_id, gmem_userid, gmem_name FROM {$gmit['member_table']} WHERE gmem_userid = '{$input_userid}' ";
		$basic_info_row = sql_fetch($basic_info_user_sql);
		$sql = " INSERT {$gmit['login_log_table']} ( gllog_id, gllog_ip, gllog_userid, gllog_name, gllog_os, gllog_device, gllog_datetime, gllog_state ) values ( '{$basic_info_row['gmem_id']}', '{$remote_addr}', '{$basic_info_row['gmem_userid']}', '{$basic_info_row['gmem_name']}', '$gllog_os', '$gllog_device', '".TIME_YMDHIS."', '실패' ) ";
	}
	sql_query($sql);
}


?>