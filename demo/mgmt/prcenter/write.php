<?php
	include_once('./_common.php');
    include_once(MGMT_PATH.'/plugin/editor/summernote/editor.lib.php');
	include_once(MGMT_PATH.'/classes/pagenation.class.php');
	$category = "prcenter";

	$w = $_GET['w'];
	$bbs_id = $_GET['bbs_id'];
	$wr_id = $_GET['wr_id'];
	$page = $_GET['page'];
    $table_name = "gmit_write_".$bbs_id;
    $bbs_title = get_board_title($bbs_id);

    $sql = " select * from $table_name where wr_id = '$wr_id' ";
    $write = sql_fetch($sql);

    if ($w == "") {
        $sub_title = "글작성";
    } else if ($w == "u") {
        $sub_title = "글수정";
    }
    
    $is_dhtml_editor = true;
    $editor_html = editor_html('wr_content', $write['wr_content'], $is_dhtml_editor);
    $editor_js = '';
    $editor_js .= get_editor_js('wr_content', $is_dhtml_editor);
    $editor_js .= chk_editor_js('wr_content', $is_dhtml_editor);

    $file = get_file($bbs_id, $wr_id);
?>

<!DOCTYPE html>
<html>
<head>
<?php include_once(MGMT_INC_PATH."/head.html"); ?>
</head>

<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<div class="col-md-3 left_col menu_fixed">
				<div class="left_col scroll-view">
					<?php include_once(MGMT_INC_PATH."/left_nav.html"); ?>
				</div>
			</div>
			<?php include_once(MGMT_INC_PATH."/top_nav.html"); ?>

			<!-- page content -->
			<div class="right_col" role="main">
				<div class="page-title">
					<div class="title_left">
						<h5><?php echo $bbs_title ?> : <?php echo $sub_title ?></h5>
					</div>
					<ul class="nav navbar-right panel_toolbox">
						<li>
							<button class="btn btn-sm btn-primary" id="btn_submit" onClick="fwrite_submit()">
								<i class="fa fa-edit"></i> 등록
							</button>
							<button class="btn btn-sm btn-primary" onClick="location.href='./list?bbs_id=<?php echo $bbs_id ?>&page=<?php echo $page ?>';">
								<i class="fa fa-list"></i> 목록
							</button>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>

                <form name="fwrite" id="fwrite" action="./write_update.php" method="post" enctype="multipart/form-data" autocomplete="off">
                <input type="hidden" name="uid" value="<?php //echo get_uniqid(); ?>">
                <input type="hidden" name="w" value="<?php echo $w ?>">
                <input type="hidden" name="bbs_id" value="<?php echo $bbs_id ?>">
                <input type="hidden" name="wr_id" value="<?php echo $wr_id ?>">
                <input type="hidden" name="sca" value="<?php echo $sca ?>">
                <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
                <input type="hidden" name="stx" value="<?php echo $stx ?>">
                <input type="hidden" name="spt" value="<?php echo $spt ?>">
                <input type="hidden" name="sst" value="<?php echo $sst ?>">
                <input type="hidden" name="sod" value="<?php echo $sod ?>">
                <input type="hidden" name="page" value="<?php echo $page ?>">
				<div class="row">
					<div class="col-md-12 col-sm-12 ">
						<div class="x_panel">
							<div class="x_content">
								<div class="row">
									<div class="col-md-12">
										<!-- Infomation Write -->
										<div class="form-group row">
											<div class="col-md-12">
												<input type="text" class="sto-input-text1 w_550p" placeholder="제목을 입력하세요." name="wr_subject" id="wr_subject" value="<?php echo $write['wr_subject'] ?>" />
											</div>
										</div>
										<div class="form-group row">
											<div class="col-md-12">
												<label class="sto-label-1">추천</label>
											 	<input type="checkbox" class="flat" id="wr_recommend" name="wr_recommend" value="1" <?php echo $write['wr_recommend'] ? 'checked' : ''; ?> />
											</div>
										</div>
										<div class="form-group row">
											<div class="col-md-12">
												<label class="sto-label-1">표출</label>
											 	<input type="checkbox" class="flat" id="wr_show" name="wr_show" value="1" <?php echo $write['wr_show'] ? 'checked' : ''; ?> />
											</div>
										</div>
                                        <?php if ($bbs_id == "event") { ?>
										<div class="form-group row">
											<div class="col-md-12">
												<label class="sto-label-1">기간</label>
											 	<input type="text" class="sto-input-text1 w_100p" name="wr_1" value="<?php echo $write['wr_1'] ?>" />
                                                ~
											 	<input type="text" class="sto-input-text1 w_100p" name="wr_2" value="<?php echo $write['wr_2'] ?>" />
											</div>
										</div>
                                        <?php } ?>

                                        <?php if ($bbs_id == "gitube") { ?>
										<div class="form-group row">
											<div class="col-md-12 mb_10">
												<label class="sto-label-1">분류</label>
												<select>
												<option>추천영상</option>
												<option>회사소개</option>
												<option>Git Web Talk</option>
												<option>GIT Sulutions Days</option>
												<option>G-commendation</option>
												<option>GIT Solutions</option>
												</select>
											</div>
											<div class="col-md-12">
												
												<label class="sto-label-1">링크</label>
											 	<input type="text" class="sto-input-text1 w_550p" name="wr_link1" value="<?php echo $write['wr_link1'] ?>" />
											</div>
										</div>
                                        <?php } else { ?>
										<div class="form-group row">
											<div class="col-md-12">
												<label class="sto-label-1">파일첨부</label>
											 	<input type="file" name="bf_file[]" id="bf_file_0" />

                                                <?php if($w == 'u' && $file[0]['file']) { ?>
                                                <input type="checkbox" class="flat" id="bf_file_del0" name="bf_file_del[0]" value="1"> <label for="bf_file_del0"><?php echo $file[0]['source'].'('.$file[0]['size'].')';  ?> 파일 삭제</label>
                                                <?php } ?>

											</div>
										</div>
                                        <?php } ?>

										<!-- Infomation Write END -->
										<!-- Text Area -->
										<div class="row">
											<div class="col-md-12">
                                                <?php echo $editor_html; ?>

											</div>
										</div>
										<!-- Text Area END -->
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<br />
                </form>

			</div>
			<!-- /page content -->

		</div>
	</div>
	<?php include_once(MGMT_INC_PATH."/jshead.html"); ?>

    <script>
    function fwrite_submit()
    {
        <?php echo $editor_js; // 에디터 사용시 자바스크립트에서 내용을 폼필드로 넣어주며 내용이 입력되었는지 검사함   ?>

        if ($("#wr_subject").val() == "") {
            alert("제목을 입력해 주세요.");
            $("#wr_subject").focus();
        } else if ($("#wr_content").val() == "") {
            alert("내용을 입력해 주세요.");
            $("#wr_content").focus();
        } else {
            //alert($("#wr_content").val());
            $("#btn_submit").attr("disabled", true);
            $("#fwrite").submit();
        }
    }
    </script>
</body>
</html>