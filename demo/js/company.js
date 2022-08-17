/*conpany navbar 시작 */
function top_nav_over(){
	$(".nav_center").on("mouseover",function(){
		console.log("asdsadsad");

		$(".top_container_over").animate({
			opacity:"1"
		},100)
		$(".nav_item_detail").css("transform","translateY(0px)")
		
	})
}

function top_nav_out(){
	$(".top_container_over").on("mouseleave",function(){
		$(".nav_item_detail").css("transform","translateY(-2000px)")
		

		
	})
}

function nav_change1(){
		$(".nav_detail_view1").css("display","block");
		$(".nav_detail_view2").css("display","none");
		$(".nav_detail_view3").css("display","none");
		$(".nav_detail_view4").css("display","none");
		$(".nav_detail_view5").css("display","none");
		$(".nav_item_detail").css("background","#638b82")
}
function nav_change2(){

		$(".nav_detail_view1").css("display","none");
		$(".nav_detail_view2").css("display","block");
		$(".nav_detail_view3").css("display","none");
		$(".nav_detail_view4").css("display","none");
		$(".nav_detail_view5").css("display","none");
		$(".nav_item_detail").css("background","#51aac8")
}
function nav_change3(){

		$(".nav_detail_view1").css("display","none");
		$(".nav_detail_view2").css("display","none");
		$(".nav_detail_view3").css("display","block");
		$(".nav_detail_view4").css("display","none");
		$(".nav_detail_view5").css("display","none");
		$(".nav_item_detail").css("background","#fc785f")
}
function nav_change4(){

		$(".nav_detail_view1").css("display","none");
		$(".nav_detail_view2").css("display","none");
		$(".nav_detail_view3").css("display","none");
		$(".nav_detail_view4").css("display","block");
		$(".nav_detail_view5").css("display","none");
		$(".nav_item_detail").css("background","#898fa6")
}
function nav_change5(){

		$(".nav_detail_view1").css("display","none");
		$(".nav_detail_view2").css("display","none");
		$(".nav_detail_view3").css("display","none");
		$(".nav_detail_view4").css("display","none");
		$(".nav_detail_view5").css("display","block");
		$(".nav_item_detail").css("background","#f2bb16")
}
/*conpany navbar 끝 */

//메인 sidenavbar 시작
function sidenav_open() {
	$(".container_sidenav").css("transform", "translateY(0px)")
	$(".main_container").addClass("main_container_modal");
	$(document.body).css("overflow", "hidden");

}
function sidenav_close() {
	$(".container_sidenav").css("transform", "translateY(-2000px)")
	$(".main_container").removeClass("main_container_modal");
	$(document.body).css("overflow", "auto");
}

function sidenav_item(){
	$('.nav_soultion_title').on("mouseover",function(){
		$(this).next().addClass("nav_soultion_box_show");
	})
	
	$(".nav_list_item").on("mouseleave",function(){
		$(this).children(".nav_soultion_box").removeClass("nav_soultion_box_show");
	})
	

}
function sidenav_underline_out() {
	$('#nav_soultion_title1').css("text-decoration", "none");
	$('#nav_soultion_title2').css("text-decoration", "none");
	$('#nav_soultion_title3').css("text-decoration", "none");
	$('#nav_soultion_title4').css("text-decoration", "none");
}


//메인 sidenavbar 끝

//사업개요(overview) 시작
function overviewbtn1(){
	$(".overview_btn1").css("color","white");
	$(".overview_btn1").css("font-weight","bold");
	$(".overview_btn1").css("background","#4b5c6b");
	
	$(".overview_btn2").css("color","black");
	$(".overview_btn2").css("font-weight","300");
	$(".overview_btn2").css("background","white");
	
	$(".overview_video_box1").css("display","block")
	$(".overview_video_box1").animate({
			opacity:"1"
		},400)
	
	$(".overview_video_box2").css("display","none")
	$(".overview_video_box2").css("opacity","0")
	
		

}
function overviewbtn2(){
	$(".overview_btn2").css("color","white");
	$(".overview_btn2").css("font-weight","bold");
	$(".overview_btn2").css("background","#4b5c6b");
	
	$(".overview_btn1").css("color","black");
	$(".overview_btn1").css("font-weight","300");
	$(".overview_btn1").css("background","white");
	
	
	
	$(".overview_video_box2").css("display","block")
		$(".overview_video_box2").animate({
			opacity:"1"
		},400)
	
	$(".overview_video_box1").css("display","none")
	$(".overview_video_box1").css("opacity","0")
	

}
//사업개요(overview) 끝

// 연혁시작

function history_btn(){
	$(".tab_btn").click(function(){
		let idx = $(this).index();
		$(".tab_btn").removeClass("btn_show");
		$(".his_table").removeClass("show-table");
		$(this).addClass("btn_show");
		$(".his_table").eq(idx).addClass("show-table");
		
	})
}

// 연혁 끝

//협력사(Cooperative) 시작
function cooperativebtn1(){
	$(".Cooperative_btn1").css("color","white");
	$(".Cooperative_btn1").css("background","#4b5c6b");
	$(".Cooperative_btn1").css("font-weight","bold");
	
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("color","black");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("background","white");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("font-weight","300");
	
	$(".Cooperative_box1").css("display","block");
	$(".Cooperative_box1").animate({
		opacity:"1"
	},400)
	
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box4,.Cooperative_box5").css("display","none");
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box4,.Cooperative_box5").css("opacity","0");
}

function cooperativebtn2(){
	$(".Cooperative_btn2").css("color","white");
	$(".Cooperative_btn2").css("background","#4b5c6b");
	$(".Cooperative_btn2").css("font-weight","bold");
	
	$(".Cooperative_btn1,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("color","black");
	$(".Cooperative_btn1,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("background","white");
	$(".Cooperative_btn1,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn5").css("font-weight","300");
	
	$(".Cooperative_box2").css("display","block");
	$(".Cooperative_box2").animate({
		opacity:"1"
	},400)
	
	$(".Cooperative_box1,.Cooperative_box3,.Cooperative_box4,.Cooperative_box5").css("display","none");
	$(".Cooperative_box1,.Cooperative_box3,.Cooperative_box4,.Cooperative_box5").css("opacity","0");
}

function cooperativebtn3(){
	$(".Cooperative_btn3").css("color","white");
	$(".Cooperative_btn3").css("background","#4b5c6b");
	$(".Cooperative_btn3").css("font-weight","bold");
	
	$(".Cooperative_btn2,.Cooperative_btn1,.Cooperative_btn4,.Cooperative_btn5").css("color","black");
	$(".Cooperative_btn2,.Cooperative_btn1,.Cooperative_btn4,.Cooperative_btn5").css("background","white");
	$(".Cooperative_btn2,.Cooperative_btn1,.Cooperative_btn4,.Cooperative_btn5").css("font-weight","300");
	
	$(".Cooperative_box3").css("display","block");
	$(".Cooperative_box3").animate({
		opacity:"1"
	},400)
	
	$(".Cooperative_box2,.Cooperative_box1,.Cooperative_box4,.Cooperative_box5").css("display","none");
	$(".Cooperative_box2,.Cooperative_box1,.Cooperative_box4,.Cooperative_box5").css("opacity","0");
}

function cooperativebtn4(){
	$(".Cooperative_btn4").css("color","white");
	$(".Cooperative_btn4").css("background","#4b5c6b");
	$(".Cooperative_btn4").css("font-weight","bold");
	
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn1,.Cooperative_btn5").css("color","black");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn1,.Cooperative_btn5").css("background","white");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn1,.Cooperative_btn5").css("font-weight","300");
	
	$(".Cooperative_box4").css("display","block");
	$(".Cooperative_box4").animate({
		opacity:"1"
	},400)
	
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box1,.Cooperative_box5").css("display","none");
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box1,.Cooperative_box5").css("opacity","0");
}

function cooperativebtn5(){
	$(".Cooperative_btn5").css("color","white");
	$(".Cooperative_btn5").css("background","#4b5c6b");
	$(".Cooperative_btn5").css("font-weight","bold");
	
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn1").css("color","black");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn1").css("background","white");
	$(".Cooperative_btn2,.Cooperative_btn3,.Cooperative_btn4,.Cooperative_btn1").css("font-weight","300");
	
	$(".Cooperative_box5").css("display","block");
	$(".Cooperative_box5").animate({
		opacity:"1"
	},400)
	
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box4,.Cooperative_box1").css("display","none");
	$(".Cooperative_box2,.Cooperative_box3,.Cooperative_box4,.Cooperative_box1").css("opacity","0");
}
//협력사(Cooperative) 끝

//사회공헌활동(Contribution) 시작

function contributonbtn1(){
	$(".Contribution_btn1").css("color","white");
	$(".Contribution_btn1").css("background","#4b5c6b");
	$(".Contribution_btn1").css("font-weight","bold");
	
	$(".Contribution_btn2,.Contribution_btn3").css("color","black");
	$(".Contribution_btn2,.Contribution_btn3").css("background","white");
	$(".Contribution_btn2,.Contribution_btn3").css("font-weight","400");
	
	$(".tab_content1").css("display","block");
	$(".tab_content1").animate({
		opacity:"1"
	},400)
	
	$(".tab_content2,.tab_content3").css("display","none");
	$(".tab_content2,.tab_content3").css("opacity","0");
}

function contributonbtn2(){
	$(".Contribution_btn2").css("color","white");
	$(".Contribution_btn2").css("background","#4b5c6b");
	$(".Contribution_btn2").css("font-weight","bold");
	
	$(".Contribution_btn1,.Contribution_btn3").css("color","black");
	$(".Contribution_btn1,.Contribution_btn3").css("background","white");
	$(".Contribution_btn1,.Contribution_btn3").css("font-weight","400");
	
	$(".tab_content2").css("display","block");
	$(".tab_content2").animate({
		opacity:"1"
	},400)
	
	$(".tab_content1,.tab_content3").css("display","none");
	$(".tab_content1,.tab_content3").css("opacity","0");
}

function contributonbtn3(){
	$(".Contribution_btn3").css("color","white");
	$(".Contribution_btn3").css("background","#4b5c6b");
	$(".Contribution_btn3").css("font-weight","bold");
	
	$(".Contribution_btn2,.Contribution_btn1").css("color","black");
	$(".Contribution_btn2,.Contribution_btn1").css("background","white");
	$(".Contribution_btn2,.Contribution_btn1").css("font-weight","400");
	
	$(".tab_content3").css("display","block");
	$(".tab_content3").animate({
		opacity:"1"
	},400)
	
	$(".tab_content2,.tab_content1").css("display","none");
	$(".tab_content2,.tab_content1").css("opacity","0");
}

//사회공헌활동(Contribution) 끝







/**모바일 시작 */


/*모바일 공통 부분 시작*/
function M_main_navbar() {
	$(window).scroll(function() {
		let M_nav = $('.M_main_top_position').offset().top;
		let scrollValue = $(document).scrollTop();
		
		if (M_nav < scrollValue) {
			$(".M_main_top").css("background", "white");
			$(".M_main_top_img_box img").attr('src', '../image/common/mainlogo_black.png');
			$(".M_main_top_menu").css("color", "black");
		} else {
			$(".M_main_top").css("background", "none");
			$(".M_main_top_img_box img").attr('src', '../image/common/mainlogo_white.png');
			$(".M_main_top_menu").css("color", "white");
		}
	})
}


function M_sidenav_accordion(){
	$(".M_sidenav_menu_title").click(function(){
		$(this).next().next().slideToggle();
		$(this).next().next().siblings(".M_sidenav_menu_list_box").slideUp();
	})
}

function M_sidenav_accordion12(){
	$(".M_sidenav_menu_title").click(function(){
		$(this).next().next().css("color","red")
		/*if($(".M_sidenav_menu_list_box").css("display")=="none"){
			$(".M_sidenav_menu_list_box").slideUp();
			$(this).next().next().slideDown();
		}else{
			$(this).next().next().slideUp();
		}*/
		$(".M_sidenav_menu_list_box").slideUp();
		
		 if($(".M_sidenav_menu_list_box").css("display")=="none"){
			$(this).next().next().slideDown();
		}else{
			$(this).next().next().slideUp();
		}
		
		
	})
}



function M_side_menu_open(){
	$(".M_sidenav_container").css("display","block");
	
	setTimeout(function(){
		$(".M_sidenav_container").animate({
		opacity:"1"
	},1)
	},1)

	$(document.body).css("overflow", "hidden");
}
function M_side_menu_close(){
	
		setTimeout(function(){
		$(".M_sidenav_container").animate({
		opacity:"0"
	},1)
	},1)
	
	$(".M_sidenav_container").css("display","none");
	

	$(document.body).css("overflow", "visible");
}
/*모바일 공통 부분 끝*/

/**모바일 끝 */