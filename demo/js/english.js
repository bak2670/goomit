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
function sidenav_open(){
	$(".container_sidenav").css("transform","translateY(0px)")
	$(".main_container").addClass("main_container_modal");
	$(document.body).css("overflow", "hidden");
	
}
function sidenav_close(){
	$(".container_sidenav").css("transform","translateY(-2000px)")
	$(".main_container").removeClass("main_container_modal");
	$(document.body).css("overflow", "auto");
}
function sidenav1(){
	$("#nav_solution1").css("opacity","1");
	$("#nav_solution2").css("opacity","0");
	$("#nav_solution3").css("opacity","0");
	$("#nav_solution4").css("opacity","0");
	$('#nav_soultion_title1').css("text-decoration","underline");
	$('#nav_soultion_title2').css("text-decoration","none");
	$('#nav_soultion_title3').css("text-decoration","none");
	$('#nav_soultion_title4').css("text-decoration","none");
}
function sidenav2(){
	$("#nav_solution1").css("opacity","0");
	$("#nav_solution2").css("opacity","1");
	$("#nav_solution3").css("opacity","0");
	$("#nav_solution4").css("opacity","0");
	$('#nav_soultion_title1').css("text-decoration","none");
	$('#nav_soultion_title2').css("text-decoration","underline");
	$('#nav_soultion_title3').css("text-decoration","none");
	$('#nav_soultion_title4').css("text-decoration","none");
}
function sidenav3(){
	$("#nav_solution1").css("opacity","0");
	$("#nav_solution2").css("opacity","0");
	$("#nav_solution3").css("opacity","1");
	$("#nav_solution4").css("opacity","0");
	$('#nav_soultion_title1').css("text-decoration","none");
	$('#nav_soultion_title2').css("text-decoration","none");
	$('#nav_soultion_title3').css("text-decoration","underline");
	$('#nav_soultion_title4').css("text-decoration","none");
}
function sidenav4(){
	$("#nav_solution1").css("opacity","0");
	$("#nav_solution2").css("opacity","0");
	$("#nav_solution3").css("opacity","0");
	$("#nav_solution4").css("opacity","1");
	$('#nav_soultion_title1').css("text-decoration","none");
	$('#nav_soultion_title2').css("text-decoration","none");
	$('#nav_soultion_title3').css("text-decoration","none");
	$('#nav_soultion_title4').css("text-decoration","underline");
}
function sidenav_underline_out(){
	$('#nav_soultion_title1').css("text-decoration","none");
	$('#nav_soultion_title2').css("text-decoration","none");
	$('#nav_soultion_title3').css("text-decoration","none");
	$('#nav_soultion_title4').css("text-decoration","none");
}

function sidenav_off(){
	$('#sidenav_off').on("mouseleave",function(){
	$("#nav_solution1").css("opacity","0");
	$("#nav_solution2").css("opacity","0");
	$("#nav_solution3").css("opacity","0");
	$("#nav_solution4").css("opacity","0");
	})
}


//메인 sidenavbar 끝

//ELocation 시작

function ELocationbtn1(){
	$(".ELocation_btn1").css("background","#4b5c6b");
	$(".ELocation_btn1").css("font-weight","bold");
	$(".ELocation_btn1").css("color","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("background","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("font-weight","400");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("color","black");
	
	$(".ELocation_box1").css("display","block");
	$(".ELocation_box1").animate({
		opacity:"1"
	},400);
	
	$(".ELocation_box2,.ELocation_box3,.ELocation_box4,.ELocation_box5").css("display","none");
	$(".ELocation_box2,.ELocation_box3,.ELocation_box4,.ELocation_box5").css("opacity","0");
}

function ELocationbtn2(){
	$(".ELocation_btn2").css("background","#4b5c6b");
	$(".ELocation_btn2").css("font-weight","bold");
	$(".ELocation_btn2").css("color","white");
	$(".ELocation_btn1,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("background","white");
	$(".ELocation_btn1,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("font-weight","400");
	$(".ELocation_btn1,.ELocation_btn3,.ELocation_btn4,.ELocation_btn5").css("color","black");
	
	$(".ELocation_box2").css("display","block");
	$(".ELocation_box2").animate({
		opacity:"1"
	},400);
	
	$(".ELocation_box1,.ELocation_box3,.ELocation_box4,.ELocation_box5").css("display","none");
	$(".ELocation_box1,.ELocation_box3,.ELocation_box4,.ELocation_box5").css("opacity","0");
}

function ELocationbtn3(){
	$(".ELocation_btn3").css("background","#4b5c6b");
	$(".ELocation_btn3").css("font-weight","bold");
	$(".ELocation_btn3").css("color","white");
	$(".ELocation_btn2,.ELocation_btn1,.ELocation_btn4,.ELocation_btn5").css("background","white");
	$(".ELocation_btn2,.ELocation_btn1,.ELocation_btn4,.ELocation_btn5").css("font-weight","400");
	$(".ELocation_btn2,.ELocation_btn1,.ELocation_btn4,.ELocation_btn5").css("color","black");
	
	$(".ELocation_box3").css("display","block");
	$(".ELocation_box3").animate({
		opacity:"1"
	},400);
	
	$(".ELocation_box2,.ELocation_box1,.ELocation_box4,.ELocation_box5").css("display","none");
	$(".ELocation_box2,.ELocation_box1,.ELocation_box4,.ELocation_box5").css("opacity","0");
}

function ELocationbtn4(){
	$(".ELocation_btn4").css("background","#4b5c6b");
	$(".ELocation_btn4").css("font-weight","bold");
	$(".ELocation_btn4").css("color","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn1,.ELocation_btn5").css("background","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn1,.ELocation_btn5").css("font-weight","400");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn1,.ELocation_btn5").css("color","black");
	
	$(".ELocation_box4").css("display","block");
	$(".ELocation_box4").animate({
		opacity:"1"
	},400);
	
	$(".ELocation_box2,.ELocation_box3,.ELocation_box1,.ELocation_box5").css("display","none");
	$(".ELocation_box2,.ELocation_box3,.ELocation_box1,.ELocation_box5").css("opacity","0");
}

function ELocationbtn5(){
	$(".ELocation_btn5").css("background","#4b5c6b");
	$(".ELocation_btn5").css("font-weight","bold");
	$(".ELocation_btn5").css("color","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn1").css("background","white");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn1").css("font-weight","400");
	$(".ELocation_btn2,.ELocation_btn3,.ELocation_btn4,.ELocation_btn1").css("color","black");
	
	$(".ELocation_box5").css("display","block");
	$(".ELocation_box5").animate({
		opacity:"1"
	},400);
	
	$(".ELocation_box2,.ELocation_box3,.ELocation_box4,.ELocation_box1").css("display","none");
	$(".ELocation_box2,.ELocation_box3,.ELocation_box4,.ELocation_box1").css("opacity","0");
}


//ELocation 끝


/*모바일 시작*/

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
