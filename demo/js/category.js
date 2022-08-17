let bigbtn = false;
let middlebtn = false;
let smallbtn = false;
let s_smallbtn = false;
function big_category_btn(){
    bigbtn = !bigbtn;

    if(bigbtn==false){
        $(".big_category_item_box").css("transform","translateY(-1000px)");
        $(".big_category_item_box").css("z-index","0");
        $(".category_item_hide_line").css("z-index","-1");
    }else{
        $(".big_category_item_box").css("transform","translateY(0px)");
        $(".big_category_item_box").css("z-index","9999");
        $(".category_item_hide_line").css("z-index","10");
    }
    
    $(".big_category_box .category_item").on("click",function(){
		catrgory_reset();
	})
}

function middle_category_btn(){
    middlebtn = !middlebtn;

    if(middlebtn==false){
        $(".middle_category_item_box").css("transform","translateY(-1000px)");
        $(".Cooperative_btn1").css("z-index","100");
        $(".ELocation_btn1").css("z-index","100");
        $(".category_item_hide_line").css("z-index","-1");
        
    }else{
        $(".middle_category_item_box").css("transform","translateY(0px)")
        $(".Cooperative_btn1").css("z-index","-1");
        $(".ELocation_btn1").css("z-index","-1");
        $(".category_item_hide_line").css("z-index","10");
    }
    
     $(".middle_category_box1 .category_item").on("click",function(){
		catrgory_reset();
	})
}


function small_category_btn(){
    smallbtn = !smallbtn;

    if(smallbtn==false){
        $(".small_category_item_box").css("transform","translateY(-1000px)");
        $(".big_category_item_box").css("z-index","0");
        $(".category_item_hide_line").css("z-index","-1");
        
    }else{
        $(".small_category_item_box").css("transform","translateY(0px)")
        $(".big_category_item_box").css("z-index","9999");
        $(".category_item_hide_line").css("z-index","10");
    }
    
    $(".small_category_box .category_item").on("click",function(){
		catrgory_reset();
	})
}


function s_small_category_btn(){
    s_smallbtn = !s_smallbtn;

    if(s_smallbtn==false){
        $(".s_small_category_item_box").css("transform","translateY(-1000px)");
		$(".big_category_item_box").css("z-index","0");
		$(".category_item_hide_line").css("z-index","-1");
        
    }else{
        $(".s_small_category_item_box").css("transform","translateY(0px)")
		$(".big_category_item_box").css("z-index","9999");
		$(".category_item_hide_line").css("z-index","10");
    }
    
    
    $(".s_small_category_box .category_item").on("click",function(){
		catrgory_reset();
	})
}

function M_big_category_btn(){
    bigbtn = !bigbtn;


    if(bigbtn==false){
        $(".M_big_category_item_box").css("transform","translateY(-1000px)");
        $(".M_big_category_item_box").css("z-index","-9999");
        $(".M_category_item_hide_line").css("z-index","-9999");
        $(".category_item_hide_line").css("z-index","-1");
    }else{
        $(".M_big_category_item_box").css("transform","translateY(0px)");
        $(".M_big_category_item_box").css("z-index","9999");
        $(".M_category_item_hide_line").css("z-index","9999");
        $(".category_item_hide_line").css("z-index","10");
    }
    
    
    $(".M_big_category_box .M_category_item").on("click",function(){
		catrgory_reset();
	})
}

function catrgory_reset(){
	bigbtn = false;
	middlebtn = false;
	smallbtn = false;
	s_smallbtn = false;
	
	    $(".big_category_item_box").css("transform","translateY(-1000px)");
        $(".big_category_item_box").css("z-index","0");
        $(".category_item_hide_line").css("z-index","-1");
        $(".middle_category_item_box").css("transform","translateY(-1000px)");
        $(".Cooperative_btn1").css("z-index","100");
        $(".ELocation_btn1").css("z-index","100");
        $(".small_category_item_box").css("transform","translateY(-1000px)");
        $(".s_small_category_item_box").css("transform","translateY(-1000px)");
		$(".M_big_category_item_box").css("transform","translateY(-1000px)");
        $(".M_big_category_item_box").css("z-index","-9999");
        $(".M_category_item_hide_line").css("z-index","-9999");

}