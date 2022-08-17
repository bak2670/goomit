<?php

/********************
    상수 선언
********************/

// 이 상수가 정의되지 않으면 각각의 개별 페이지는 별도로 실행될 수 없음
define('_GMIT_', true);

if (PHP_VERSION >= '5.1.0') {
    date_default_timezone_set("Asia/Seoul");
}

/********************
    경로 상수
********************/

define('DOMAIN', '');
define('HTTPS_DOMAIN', '');

define('COOKIE_DOMAIN', '');

define('DBCONFIG_FILE', 'db_config.php');
define('TBCONFIG_FILE', 'tb_config.php');

define('DATA_DIR', 'data');
define('LIB_DIR', '_lib');
define('INC_DIR', '_inc');
define('SESSION_DIR', 'session');
define('IMAGE_DIR', 'image');
define('MGMT_DIR', 'mgmt');


if (DOMAIN) {
    define('URL', DOMAIN);
} else {
    if (isset($path['url']))
        define('URL', $path['url']);
    else
        define('URL', '');
}

if (isset($path['path'])) {
    define('PATH', $path['path']);
} else {
    define('PATH', '');
}

define('DATA_URL', URL.'/'.DATA_DIR);
define('IMAGE_URL', URL.'/'.IMAGE_DIR);
define('MGMT_URL', URL.'/'.MGMT_DIR);

// PATH 는 서버상에서의 절대경로
define('DATA_PATH', PATH.'/'.DATA_DIR);
define('LIB_PATH', PATH.'/'.LIB_DIR);
define('SESSION_PATH', DATA_PATH.'/'.SESSION_DIR);
define('IMAGE_PATH', PATH.'/'.IMAGE_DIR);
define('MGMT_PATH', PATH.'/'.MGMT_DIR);
define('MGMT_INC_PATH', MGMT_PATH.'/'.INC_DIR);




//==============================================================================


//==============================================================================
// 사용기기 설정
// pc 설정 시 모바일 기기에서도 PC화면 보여짐
// mobile 설정 시 PC에서도 모바일화면 보여짐
// both 설정 시 접속 기기에 따른 화면 보여짐
//------------------------------------------------------------------------------
define('SET_DEVICE', 'both');

define('USE_MOBILE', true); // 모바일 홈페이지를 사용하지 않을 경우 false 로 설정
define('USE_CACHE',  true); // 최신글등에 cache 기능 사용 여부


/********************
    시간 상수
********************/
define('SERVER_TIME',    time());
define('TIME_YMDHIS',    date('Y-m-d H:i:s', SERVER_TIME));
define('TIME_YM',        substr(TIME_YMDHIS, 0, 7));
define('TIME_YMD',       substr(TIME_YMDHIS, 0, 10));
define('TIME_HIS',       substr(TIME_YMDHIS, 11, 8));

// 입력값 검사 상수 (숫자를 변경하시면 안됩니다.)
define('ALPHAUPPER',      1); // 영대문자
define('ALPHALOWER',      2); // 영소문자
define('ALPHABETIC',      4); // 영대,소문자
define('NUMERIC',         8); // 숫자
define('HANGUL',         16); // 한글
define('SPACE',          32); // 공백
define('SPECIAL',        64); // 특수문자

// 퍼미션
define('DIR_PERMISSION',  0755); // 디렉토리 생성시 퍼미션
define('FILE_PERMISSION', 0644); // 파일 생성시 퍼미션

// 모바일 인지 결정 $_SERVER['HTTP_USER_AGENT']
define('MOBILE_AGENT',   'phone|samsung|lgtel|mobile|[^A]skt|nokia|blackberry|BB10|android|sony');

/********************
    기타 상수
********************/

// 직책
define('COMPANY_POSITION', '');
// 파트
define('COMPANY_PART', '');

// 암호화 함수 지정
// 사이트 운영 중 설정을 변경하면 로그인이 안되는 등의 문제가 발생합니다.
define('STRING_ENCRYPT_FUNCTION', 'sql_password');

// SQL 에러를 표시할 것인지 지정
// 에러를 표시하려면 TRUE 로 변경
define('DISPLAY_SQL_ERROR', FALSE);

// escape string 처리 함수 지정
// addslashes 로 변경 가능
define('ESCAPE_FUNCTION', 'sql_escape_string');

// sql_escape_string 함수에서 사용될 패턴
//define('ESCAPE_PATTERN',  '/(and|or).*(union|select|insert|update|delete|from|where|limit|create|drop).*/i');
//define('ESCAPE_REPLACE',  '');

// MySQLi 사용여부를 설정합니다.
define('MYSQLI_USE', true);

// Browscap 사용여부를 설정합니다.
define('BROWSCAP_USE', true);

// 접속자 기록 때 Browscap 사용여부를 설정합니다.
define('VISIT_BROWSCAP_USE', false);

?>