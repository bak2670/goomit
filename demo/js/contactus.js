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


//오시는길(directions) 시작
/*function directionsbtn1(){
	$(".directions_btn1").css("background","#4b5c6b");
	$(".directions_btn1").css("font-weight","bold");
	$(".directions_btn1").css("color","white");
	$(".directions_btn2,.directions_btn3,.directions_btn4,.directions_btn5,.directions_btn6").css("background","white");
	$(".directions_btn2,.directions_btn3,.directions_btn4,.directions_btn5,.directions_btn6").css("font-weight","400");
	$(".directions_btn2,.directions_btn3,.directions_btn4,.directions_btn5,.directions_btn6").css("color","black");
	
	$(".direcions_box1").css("display","block");
	$(".direcions_box1").animate({
		opacity:"1"
	},400);
	
	$(".direcions_box2,.direcions_box3,.direcions_box4,.direcions_box5").css("display","none");
	$(".direcions_box2,.direcions_box3,.direcions_box4,.direcions_box5").css("opacity","0");
}*/

function directionsbtn(){
	
	
	$(".directions_btn").click(function(){
		var htmlapp = "";
		let idx = $(this).index();
		$(".directions_btn").removeClass("active");
		$(this).addClass("active");
		$(".direcions_box").removeClass("active");
		$(".direcions_box").eq(idx).addClass("active");
		if(idx == 1){
			htmlapp = "<div style=\"width: 100%;\" id=\"daumRoughmapContainer1658208642062\" class=\"root_daum_roughmap root_daum_roughmap_landing\"></div>";
			$("#googleMap2").html(htmlapp);
			new daum.roughmap.Lander({
				"timestamp" : "1658208642062",
				"key" : "2b2p6",
				//"mapWidth" : "640",
				"mapHeight" : "360"
			}).render();
		}else if(idx == 2){
			htmlapp = "<div style=\"width: 100%;\" id=\"daumRoughmapContainer1658209068286\" class=\"root_daum_roughmap root_daum_roughmap_landing\"></div>";
			$("#googleMap3").html(htmlapp);
			new daum.roughmap.Lander({
				"timestamp" : "1658209068286",
				"key" : "2b2ph",
				//"mapWidth" : "640",
				"mapHeight" : "360"
			}).render();
		}else if(idx == 3){
			htmlapp = "<div style=\"width: 100%;\" id=\"daumRoughmapContainer1658209273566\" class=\"root_daum_roughmap root_daum_roughmap_landing\"></div>";
			$("#googleMap4").html(htmlapp);
			new daum.roughmap.Lander({
				"timestamp" : "1658209273566",
				"key" : "2b2pk",
				//"mapWidth" : "640",
				"mapHeight" : "360"
			}).render();
		}else if(idx == 4){
			htmlapp = "<div style=\"width: 100%;\" id=\"daumRoughmapContainer1658209431558\" class=\"root_daum_roughmap root_daum_roughmap_landing\"></div>";
			$("#googleMap5").html(htmlapp);
			new daum.roughmap.Lander({
				"timestamp" : "1658209431558",
				"key" : "2b2pp",
				//"mapWidth" : "640",
				"mapHeight" : "360"
			}).render();
		}else if(idx == 5){
			htmlapp = "<div style=\"width: 100%;\" id=\"daumRoughmapContainer1658216714432\" class=\"root_daum_roughmap root_daum_roughmap_landing\"></div>";
			$("#googleMap6").html(htmlapp);
			new daum.roughmap.Lander({
				"timestamp" : "1658216714432",
				"key" : "2b2tp",
				"mapWidth" : "640",
				"mapHeight" : "360"
			}).render();
		}
	});
}
//오시는길(directions) 끝

//문의(inquiry) 시작
function inquirybtn1(){
	$(".inquiry_btn1").css("background","#4b5c6b");
	$(".inquiry_btn1").css("font-weight","bold");
	$(".inquiry_btn1").css("color","white");
	$(".inquiry_btn2,.inquiry_btn3,.inquiry_btn4").css("background","white");
	$(".inquiry_btn2,.inquiry_btn3,.inquiry_btn4").css("font-weight","400");
	$(".inquiry_btn2,.inquiry_btn3,.inquiry_btn4").css("color","black");
	
	$(".inquiry_box1").css("display","block");
	$(".inquiry_box1").animate({
		opacity:"1"
	},400);
	
	$(".inquiry_box2,.inquiry_box3,.inquiry_box4").css("display","none");
	$(".inquiry_box2,.inquiry_box3,.inquiry_box4").css("opacity","0");
}

function inquirybtn2(){
	$(".inquiry_btn2").css("background","#4b5c6b");
	$(".inquiry_btn2").css("font-weight","bold");
	$(".inquiry_btn2").css("color","white");
	$(".inquiry_btn1,.inquiry_btn3,.inquiry_btn4").css("background","white");
	$(".inquiry_btn1,.inquiry_btn3,.inquiry_btn4").css("font-weight","400");
	$(".inquiry_btn1,.inquiry_btn3,.inquiry_btn4").css("color","black");
	
	$(".inquiry_box2").css("display","block");
	$(".inquiry_box2").animate({
		opacity:"1"
	},400);
	
	$(".inquiry_box1,.inquiry_box3,.inquiry_box4").css("display","none");
	$(".inquiry_box1,.inquiry_box3,.inquiry_box4").css("opacity","0");
}

function inquirybtn3(){
	$(".inquiry_btn3").css("background","#4b5c6b");
	$(".inquiry_btn3").css("font-weight","bold");
	$(".inquiry_btn3").css("color","white");
	$(".inquiry_btn2,.inquiry_btn1,.inquiry_btn4").css("background","white");
	$(".inquiry_btn2,.inquiry_btn1,.inquiry_btn4").css("font-weight","400");
	$(".inquiry_btn2,.inquiry_btn1,.inquiry_btn4").css("color","black");
	
	$(".inquiry_box3").css("display","block");
	$(".inquiry_box3").animate({
		opacity:"1"
	},400);
	
	$(".inquiry_box2,.inquiry_box1,.inquiry_box4").css("display","none");
	$(".inquiry_box2,.inquiry_box1,.inquiry_box4").css("opacity","0");
}


function inquirybtn4(){
	$(".inquiry_btn4").css("background","#4b5c6b");
	$(".inquiry_btn4").css("font-weight","bold");
	$(".inquiry_btn4").css("color","white");
	$(".inquiry_btn1,.inquiry_btn2,.inquiry_btn3").css("background","white");
	$(".inquiry_btn1,.inquiry_btn2,.inquiry_btn3").css("font-weight","400");
	$(".inquiry_btn1,.inquiry_btn2,.inquiry_btn3").css("color","black");
	
	$(".inquiry_box4").css("display","block");
	$(".inquiry_box4").animate({
		opacity:"1"
	},400);
	
	$(".inquiry_box2,.inquiry_box1,.inquiry_box3").css("display","none");
	$(".inquiry_box2,.inquiry_box1,.inquiry_box3").css("opacity","0");
}

//문의(inquiry) 끝



/*모바일 시작 */

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