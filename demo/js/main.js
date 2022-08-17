//메인 navbar시작
function nav_change1() {
	$(".nav_detail_view1").css("display", "block");
	$(".nav_detail_view2").css("display", "none");
	$(".nav_detail_view3").css("display", "none");
	$(".nav_detail_view4").css("display", "none");
	$(".nav_detail_view5").css("display", "none");
	$(".nav_item_detail").css("background", "#638b82")
}
function nav_change2() {

	$(".nav_detail_view1").css("display", "none");
	$(".nav_detail_view2").css("display", "block");
	$(".nav_detail_view3").css("display", "none");
	$(".nav_detail_view4").css("display", "none");
	$(".nav_detail_view5").css("display", "none");
	$(".nav_item_detail").css("background", "#51aac8")
}
function nav_change3() {

	$(".nav_detail_view1").css("display", "none");
	$(".nav_detail_view2").css("display", "none");
	$(".nav_detail_view3").css("display", "block");
	$(".nav_detail_view4").css("display", "none");
	$(".nav_detail_view5").css("display", "none");
	$(".nav_item_detail").css("background", "#fc785f")
}
function nav_change4() {

	$(".nav_detail_view1").css("display", "none");
	$(".nav_detail_view2").css("display", "none");
	$(".nav_detail_view3").css("display", "none");
	$(".nav_detail_view4").css("display", "block");
	$(".nav_detail_view5").css("display", "none");
	$(".nav_item_detail").css("background", "#898fa6")
}
function nav_change5() {

	$(".nav_detail_view1").css("display", "none");
	$(".nav_detail_view2").css("display", "none");
	$(".nav_detail_view3").css("display", "none");
	$(".nav_detail_view4").css("display", "none");
	$(".nav_detail_view5").css("display", "block");
	$(".nav_item_detail").css("background", "#f2bb16")
}

function top_nav_over() {
	$(".nav_center").on("mouseover", function() {
		$(".top_container").css("display", "none");
		$(".top_container").css("opacity", "0");
		$(".top_container_over").css("display", "block");
		$(".top_container_over").animate({
			opacity: "1"
		}, 100)
		$(".nav_item_detail").css("transform", "translateY(0px)")

	})
}

function top_nav_out() {
	$(".navbar_position_over").on("mouseleave", function() {
		$(".nav_item_detail").css("transform", "translateY(-2000px)")

		setTimeout(function() {
			$(".top_container_over").animate({
				opacity: "0"
			}, 100)
			$(".top_container_over").animate({
				display: "none"
			}, 101)

			$(".top_container").css("display", "block");
			$(".top_container").animate({
				opacity: "1"
			}, 102)
		}, 1)

	})
}


//메인 navbar 끝

//메인 sidenavbar 시작
/*function sidenav_open() {
	$(".container_sidenav").css("transform", "translateY(0px)")
	$(".main_container").addClass("main_container_modal");
	$(document.body).css("overflow", "hidden");

}
function sidenav_close() {
	$(".container_sidenav").css("transform", "translateY(-2000px)")
	$(".main_container").removeClass("main_container_modal");
	$(document.body).css("overflow", "auto");
}*/

/*function sidenav_item(){
	$('.nav_soultion_title').on("mouseover",function(){
		$(this).next().addClass("nav_soultion_box_show");
	})
	
	$(".nav_list_item").on("mouseleave",function(){
		$(this).children(".nav_soultion_box").removeClass("nav_soultion_box_show");
	})
	

}*/
/*function sidenav_underline_out() {
	$('#nav_soultion_title1').css("text-decoration", "none");
	$('#nav_soultion_title2').css("text-decoration", "none");
	$('#nav_soultion_title3').css("text-decoration", "none");
	$('#nav_soultion_title4').css("text-decoration", "none");
}*/


//메인 sidenavbar 끝

//메인 background 시작
function top_slick() {
	$('.main_top_slick').slick({
		dots: true,
		// vertical: true,
		// centerMode: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
}
//메인 background 끝



//메인 파트너 시작
function main_partner_slick() {
	$('.main_partner_slick').slick({
		// vertical: true,
		// centerMode: true,
		// prevArrow: $('.prev'),
		// nextArrow: $('.next'),
		//prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
		//nextArrow : "<button type='button' class='slick-next'>next</button>",
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 4,
	});
	
	
	$(".main_partner_left_item").click(function(){
		let idx=$(this).index();
		console.log(idx);
		$(".main_partner_box").removeClass("active");
		$(".main_partner_box").eq(idx).addClass("active");
		
		switch(idx){
			case 0:
				$(".main_partner_rigth_logo").css("background","#164781");
				$(".main_partner_item_text1").text("CLOUD / INFRA");
				$(".main_partner_item_img1 img").attr("src","./image/common/partnerlogo1.png")
				break;
			case 1:
				$(".main_partner_rigth_logo").css("background","#899cc2");
				$(".main_partner_item_text1").text("BIG DATA / AI");
				$(".main_partner_item_img1 img").attr("src","./image/common/partnerlogo6.png")
				break;
			case 2:
				$(".main_partner_rigth_logo").css("background","#94cbcc");
				$(".main_partner_item_text1").text("MANAGEMENT");
				$(".main_partner_item_img1 img").attr("src","./image/common/partnerlogo7.png")
				break;
			case 3:
				$(".main_partner_rigth_logo").css("background","#ec9b9f");
				$(".main_partner_item_text1").text("SECURITY");
				$(".main_partner_item_img1 img").attr("src","./image/common/partnerlogo5.png")
				break;
		}
	});
}
//메인 파트너 끝

/* 메인 미디어 영상 섹션 시작 */
function main_media_btn1(){
	$(".mediabtn1").css("background","#d84b49");
	$(".mediabtn1").css("color","white");
	$(".mediabtn1").css("fontWeight","bold");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("background","white");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("color","#d84b49");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_recommend").show();
}

function main_media_btn2(){
	$(".mediabtn2").css("background","#d84b49");
	$(".mediabtn2").css("color","white");
	$(".mediabtn2").css("fontWeight","bold");
	$(".mediabtn1,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("background","white");
	$(".mediabtn1,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("color","#d84b49");
	$(".mediabtn1,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn6").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_1001").show();
}

function main_media_btn3(){
	$(".mediabtn3").css("background","#d84b49");
	$(".mediabtn3").css("color","white");
	$(".mediabtn3").css("fontWeight","bold");
	$(".mediabtn2,.mediabtn1,.mediabtn4,.mediabtn5,.mediabtn6").css("background","white");
	$(".mediabtn2,.mediabtn1,.mediabtn4,.mediabtn5,.mediabtn6").css("color","#d84b49");
	$(".mediabtn2,.mediabtn1,.mediabtn4,.mediabtn5,.mediabtn6").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_1002").show();
}

function main_media_btn4(){
	$(".mediabtn4").css("background","#d84b49");
	$(".mediabtn4").css("color","white");
	$(".mediabtn4").css("fontWeight","bold");
	$(".mediabtn2,.mediabtn3,.mediabtn1,.mediabtn5,.mediabtn6").css("background","white");
	$(".mediabtn2,.mediabtn3,.mediabtn1,.mediabtn5,.mediabtn6").css("color","#d84b49");
	$(".mediabtn2,.mediabtn3,.mediabtn1,.mediabtn5,.mediabtn6").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_1003").show();
}

function main_media_btn5(){
	$(".mediabtn5").css("background","#d84b49");
	$(".mediabtn5").css("color","white");
	$(".mediabtn5").css("fontWeight","bold");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn1,.mediabtn6").css("background","white");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn1,.mediabtn6").css("color","#d84b49");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn1,.mediabtn6").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_1004").show();
}

function main_media_btn6(){
	$(".mediabtn6").css("background","#d84b49");
	$(".mediabtn6").css("color","white");
	$(".mediabtn6").css("fontWeight","bold");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn1").css("background","white");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn1").css("color","#d84b49");
	$(".mediabtn2,.mediabtn3,.mediabtn4,.mediabtn5,.mediabtn1").css("fontWeight","500");
	$(".main_media_item_box").hide();
	$("#media_item_1005").show();
}
/* 메인 미디어 영상 섹션 끝 */

//메인 미션과비전 시작
function number() {
	$({ value: 0 }).animate({ value: 2004 }, {
		duration: 1000,
		step: function() {
			$(".num1").text(Math.floor(this.value));
		},
		complete: function() {
			$(".num1").text(Math.floor(this.value));
		}
	});

	$({ value: 0 }).animate({ value: 80 }, {
		duration: 1000,
		step: function() {
			$(".num2").text(Math.floor(this.value) + "%");
		},
		complete: function() {
			$(".num2").text(Math.floor(this.value) + "%");
		}
	});

	$({ value: 0 }).animate({ value: 1100 }, {
		duration: 1000,
		step: function() {
			$(".num3").text(Math.floor(this.value) + "억");
		},
		complete: function() {
			$(".num3").text(Math.floor(this.value) + "억");
		}
	});

	$({ value: 0 }).animate({ value: 200 }, {
		duration: 1000,
		step: function() {
			$(".num4").text(Math.floor(this.value) + "+");
		},
		complete: function() {
			$(".num4").text(Math.floor(this.value) + "+");
		}
	});
}

//2218.75
function main_mittion_number() {
	let numbtn = false;
	console.log($('.main_mission_container').offset().top)
	$(window).scroll(function() {
		let threshold = $('.main_mission_container').offset().top - 510;

		if (numbtn == false) {
			if ($(window).scrollTop() >= threshold) {
				number();
				numbtn = true;
			}
		}
	})
}

//메인 미션과비전 끝

//메인 이벤트 시작

function main_event(){
	var event_width = document.querySelector(".main_event_img_item").clientWidth;
	var event_total = $(".main_event_img_item").length;
	var event_last = event_width*event_total
	
	let a=0;
	
	$(".main_event_rigth_btn").click(function(){
		a+=1;
	$(".main_event_img_list").css('transform', 'translateX(-' +event_width*a+ 'px)')
	
	if(a>event_total-1){
		$('.main_event_img_list').css('transform', 'translateX(-0px)')
          a=0;
	}
	event_switch(a);

	
})

	$(".main_event_left_btn").click(function(){
	a-=1;
	$(".main_event_img_list").css('transform', 'translateX(-'+ event_width*a+'px)')
	
	
	if(a<0){
		$('.main_event_img_list').css('transform', 'translateX(-'+event_width*(event_total-1)+'px)')
          a=event_total-1;
	}
	event_switch(a);

})



	$('.main_event_text_box p:nth-child(1)').click(function(){
		$(".main_event_text_item").css("font-weight","normal")
		$(".main_event_text_box p:nth-child(1)").css("font-weight","bold")
		$(".main_event_img_list").css('transform', 'translateX(0px)')
		a=0;
	})
	
	$('.main_event_text_box p:nth-child(2)').click(function(){
		$(".main_event_text_item").css("font-weight","normal")
		$(".main_event_text_box p:nth-child(2)").css("font-weight","bold")
		$(".main_event_img_list").css('transform', 'translateX(-'+event_width*1+'px)')
		a=1;
	})
	
	$('.main_event_text_box p:nth-child(3)').click(function(){
		$(".main_event_text_item").css("font-weight","normal")
		$(".main_event_text_box p:nth-child(3)").css("font-weight","bold")
		$(".main_event_img_list").css('transform', 'translateX(-'+event_width*2+'px)')
		a=2;
	})
	
	$('.main_event_text_box p:nth-child(4)').click(function(){
		$(".main_event_text_item").css("font-weight","normal")
		$(".main_event_text_box p:nth-child(4)").css("font-weight","bold")
		$(".main_event_img_list").css('transform', 'translateX(-'+event_width*3+'px)')
		a=3;
	})
	
	$('.main_event_text_box p:nth-child(5)').click(function(){
		$(".main_event_text_item").css("font-weight","normal")
		$(".main_event_text_box p:nth-child(5)").css("font-weight","bold")
		$(".main_event_img_list").css('transform', 'translateX(-'+event_width*4+'px)')
		a=4;
	})
}
function event_switch(a){
			switch(a){
		case 0:
			$(".main_event_text_item").css("font-weight","normal");
			$(".main_event_text_box p:nth-child(1)").css("font-weight","bold");

			break
		case 1:
			$(".main_event_text_item").css("font-weight","normal");
			$(".main_event_text_box p:nth-child(2)").css("font-weight","bold");

			break
		case 2:
			$(".main_event_text_item").css("font-weight","normal");
			$(".main_event_text_box p:nth-child(3)").css("font-weight","bold");

			break
		case 3:
			$(".main_event_text_item").css("font-weight","normal");
			$(".main_event_text_box p:nth-child(4)").css("font-weight","bold");

			break
		case 4:
			$(".main_event_text_item").css("font-weight","normal");
			$(".main_event_text_box p:nth-child(5)").css("font-weight","bold");

			break
	}
}

//메인 이벤트 끝

/* 모바일 시작 */

/*모바일 메인 파트너 시작 */
function M_main_partner_slick() {
	$('.M_main_partner_slick').slick({

		// vertical: true,
		// centerMode: true,
		// prevArrow: $('.prev'),
		// nextArrow: $('.next'),
		//prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
		//nextArrow : "<button type='button' class='slick-next'>next</button>",
		infinite: true,
		slidesToShow: 2.5,
		slidesToScroll: 1,
	});
	
	$(".M_main_partner_logo").click(function(){
		let idx=$(this).index();
		console.log(idx);
		
		$(".M_main_partner_box").removeClass("active");
		$(".M_main_partner_box").eq(idx).addClass("active");
	})
}

/*모바일 메인 파트너 끝 */

/*메인 탑 상단 변경 시작 */


function M_main_navbar() {
	$(window).scroll(function() {
		let M_nav = $('.M_main_top_position').offset().top;
		let scrollValue = $(document).scrollTop();
		
		if (M_nav < scrollValue) {
			$(".M_main_top").css("background", "white");
			$(".M_main_top_img_box img").attr('src', './image/common/mainlogo_black.png');
			$(".M_main_top_menu").css("color", "black");
		} else {
			$(".M_main_top").css("background", "none");
			$(".M_main_top_img_box img").attr('src', './image/common/mainlogo_white.png');
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










/*메인 탑 상단 변경 끝 */
/* 모바일 끝 */






