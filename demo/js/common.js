function new_sidenav_open(){
	$(".container_sidenav").slideDown();
	$("body").css("overflow", "hidden");
}

function new_sidenav_close(){
	$(".container_sidenav").slideUp();
	$("body").css("overflow", "auto");
}

/*function sidenav_item(){
	$('.nav_soultion_title').on("mouseover",function(){
		$(this).next().addClass("nav_soultion_box_show");
	})
	
	$(".nav_list_item").on("mouseleave",function(){
		$(this).children(".nav_soultion_box").removeClass("nav_soultion_box_show");
	})
	

}*/