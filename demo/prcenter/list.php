<?php
	include_once '_common.php';

	$bbs_id = $_GET['bbs_id'];
    $table_name = "gmit_write_".$bbs_id;
    $bbs_title = get_board_title($bbs_id);
    $bbs_title = get_board_title($bbs_id);

	$_category1 = 'PR CENTER';
    if ($bbs_id == "notice") $_category2 = '공지사항';
    else if ($bbs_id == "news") $_category2 = '언론보도';
    else if ($bbs_id == "gitube") $_category2 = '영상';
    else if ($bbs_id == "event") $_category2 = '이벤트';
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<?php include_once '../_inc/head.html'; ?>
	<link href="<?php echo URL; ?>/_css/common.css" rel="stylesheet" type="text/css">
	<link href="<?php echo URL; ?>/_css/font-face.css" rel="stylesheet" type="text/css">
	
	<link href="<?php echo URL; ?>/_css/detail_page.css" rel="stylesheet" type="text/css">
	<link href="<?php echo URL; ?>/_css/category.css" rel="stylesheet" type="text/css">
	<link href="<?php echo URL; ?>/_css/default_board_skin.css" rel="stylesheet" type="text/css">
    <?php if ($bbs_id == "news") { ?>
	<link href="<?php echo URL; ?>/_css/card_board_skin1.css" rel="stylesheet" type="text/css">
    <?php } else if ($bbs_id == "gitube") { ?>
	<link href="<?php echo URL; ?>/_css/card_board_skin2.css" rel="stylesheet" type="text/css">
    <?php } ?>
	
	<script src="<?php echo URL; ?>/js/common.js"></script>
	<script src="<?php echo URL; ?>/js/category.js"></script>
	<script src="<?php echo URL; ?>/js/main.js"></script>
	<script>
		new WOW().init();
        <?php if ($bbs_id == "notice") { ?>
		$(document).ready(function() {
			top_nav_over();
			top_nav_out();
			M_sidenav_accordion();
		});
        <?php } ?>

        <?php if ($bbs_id == "news") { ?>
		$(document).ready(function() {
			top_nav_over();
			top_nav_out();
			sidenav_item();
			M_sidenav_accordion();
		});
        <?php } ?>

        <?php if ($bbs_id == "gitube") { ?>
		$(document).ready(function() {
			top_nav_over();
			top_nav_out();
			M_sidenav_accordion();
			$(window).on("scroll", function(){
				if($(window).scrollTop() > 50){
					$(".M_main_top_position").css("position", "fixed");
					$(".M_main_top_position").css("top", "0");
					$(".M_main_top_position").css("left", "0");
				}else{
					$(".M_main_top_position").css("position", "relative");
					$(".M_main_top_position").css("top", "AUTO");
					$(".M_main_top_position").css("left", "AUTO");
				}
			});
			
		});
        <?php } ?>

        <?php if ($bbs_id == "event") { ?>
		$(document).ready(function() {
			top_nav_over();
			top_nav_out();
			M_sidenav_accordion();
		});
        <?php } ?>
	</script>
	<title>굿모닝아이텍(주) - 유저페이지[데모]</title>
</head>
<body>
	
	<!-- Head Navigator Start -->
	<?php include_once '../_inc/head_nav.html'; ?>
	<!-- Head Navigator End -->
	
	<!-- top background Start -->
	<div class="main_top_background">
		<div class="background_text_box only-pc">
			<p class="background_text1">PR CENTER</p>
			<p class="background_text2">우리의 고객 한분,한분이 모두 좋은 아침을 맞이하기를 기대합니다.</p>
		</div>
		<div class="M_background_text_box only-mobile">
			<p>PR CENTER</p>
			<p>우리의 고객 한 분, 한 분이 모두 좋은</p>
			<p>아침을 맞이하기를 기대합니다.</p>
		</div>
		<div class="top-background-image-box">
			<img src="<?php echo URL; ?>/image/common/bbs_background/prcenter.jpg" alt="" />
		</div>
	</div>
	<!-- top background End -->


	<!-- Contents Start -->
	<div class="detail-wrap">
		<div class="container">
			<!-- Detail Category Start -->
			<?php include_once '../_inc/category_nav.html'; ?>
			<!-- Detail Category End -->
			
			<!-- pc버전 시작 -->
			<div class="container notice-container">
				<div class="row top-title-row">
					<div class="tit-col">
						<p class="top_tit prcenter">
							<span>PR CENTER</span>
						</p>
						<h1 class="tit"><?php echo $bbs_title ?></h1>
					</div>
				</div>

                <?php
                if ($bbs_id == "notice" || $bbs_id == "news") {
                    include_once('./list_basic.inc.php');
                } else if ($bbs_id == "gitube") {
                    include_once('./list_gitube.inc.php');
                } else if ($bbs_id == "event") {
                    include_once('./list_event.inc.php');
                }
                ?>

			</div>
			<!-- pc버전 끝 -->


			
		</div>
	</div>
	<!-- Contents End -->
	
	<!-- footer Start -->
	<?php include_once '../_inc/footer.html'; ?>
	<!-- footer End -->
	
	<!-- Side Navigator Start -->
	<?php include_once '../_inc/side_nav.html'; ?>
	<!-- Side Navigator End -->
</body>
</html>