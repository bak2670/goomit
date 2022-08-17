<?php

if (!defined('_GMIT_')) exit;

/*************************************************************************
**
**  SQL 관련 함수 모음
**
*************************************************************************/

// Login Url 전달
function login_url($url='')
{
	global $login_mobile;

    if (!$url) {
		if (IS_MOBILE || $login_mobile == "mobile")
			$url = MOBILE_URL;
		else
			$url = URL;
	}

    return urlencode(clean_xss_tags(urldecode($url)));
}

// 관리화면 접근
function check_login_mgmt(){
	global $member;
	
	if(!$member['gmem_name']){
		if (IS_MOBILE || $login_mobile == "mobile") {
			goto_url(MGMT_URL); // 모바일경로
		} else {
			goto_url(MGMT_URL);
		}
	}
	
	// 관리자의 아이피, 브라우저와 다르다면 세션을 끊고 관리자에게 메일을 보낸다.
	$admin_key = md5($member['gmem_datetime'] . get_real_client_ip() . $_SERVER['HTTP_USER_AGENT']);
	if (get_session('ss_key') !== $admin_key) {
		
	    session_destroy();
	
		if (IS_MOBILE || $login_mobile == "mobile") {
			goto_url(MGMT_URL); // 모바일경로
		} else {
			goto_url(MGMT_URL);
		}
	}
}



?>