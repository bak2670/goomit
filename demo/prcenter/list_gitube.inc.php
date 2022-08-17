
<?php
$sfl = $_GET['sfl'];
$stx = $_GET['stx'];
$page = $_GET['page'];
if (!$page) $page = 1;

$sql_search = "";
if ($stx) {
    if ($sfl == "") {
        $sql_search .= " and (wr_subject like '%$stx%' or wr_content like '%$stx%') ";
    } else {
        $sql_search .= " and $sfl like '%$stx%' ";
    }
} else {
    $sfl = "";
}

$sql = " select count(*) as cnt from $table_name where wr_is_comment = '0' and wr_show = '1' $sql_search ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];

$page_rows = 10;
$list_page_rows = 5;
$total_page  = ceil($total_count / $page_rows);  // 전체 페이지 계산
$from_record = ($page - 1) * $page_rows; // 시작 열을 구함

$sql = " select * from $table_name where wr_is_comment = '0' and wr_show = '1' $sql_search order by wr_num, wr_reply desc limit {$from_record}, $page_rows ";
$result = sql_query($sql);

$colspan = 8;
?>
				<div class="row board-row">
					<div class="board-col">
						<div class="board-top">
							<div class="video_btn_box">
								<div class="video_btn active">추천영상</div>
								<div class="video_btn">회사소개</div>
								<div class="video_btn">Git Web Talk</div>
								<div class="video_btn">GIT Sulutions Day</div>
								<div class="video_btn">G-commenmndation</div>
								<div class="video_btn">GIT Solutions</div>
							</div>
						</div>
						
						<div class="board-body">
							<div class="only-pc gitube">

								<div class="row board-card-item">
									<?php
                                    $list_num = $total_count - ($page - 1) * $page_rows;
									for ($i=0; $row = sql_fetch_array($result); $i++) {
                                        $row['num'] = $list_num - $i;

                                        if ($i % 3 == 0) {
                                            ?>
								</div>
								<div class="row board-card-item">
                                            <?php
                                        }
									?>

									<div class="col-3">
										<div class="v-row card-content">
											<div class="col h60p">
												<div class="card-image">
													<iframe title="YouTube video player" src="<?php echo $row['wr_link1'] ?>" width="360" height="237" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
												</div>
											</div>
											<div class="col h30p">
												<div class="tit table-tit-new">
													<span><a href="view?bbs_id=<?php echo $bbs_id ?>&wr_id=<?php echo $row['wr_id'] ?>&page=<?php echo $page ?>"><?php echo $row['wr_subject'] ?></a></span> <!--<span class="icon-new">N</span>-->
												</div>
											</div>
											<div class="col h10p">
												<div class="date">
													<span>작성일</span> <span><?php echo str_replace("-", "/", substr($row['wr_datetime'], 0, 10)) ?></span> | <span>조회수</span> <span><?php echo $row['wr_hit'] ?></span>
												</div>
											</div>
										</div>	
									</div>
								    <?php } ?>

								</div>
							</div>
							
							<div class="only-mobile">
                                <?php
                                $list_num = $total_count - ($page - 1) * $page_rows;
                                for ($i=0; $row = sql_fetch_array($result); $i++) {
                                    $row['num'] = $list_num - $i;
                                ?>
								<div class="row board-card-item">
									<div class="col">
										<div class="v-row card-content">
											<div class="col h60p">
												<div class="card-image">
													<iframe title="YouTube video player" src="<?php echo $row['wr_link1'] ?>" width="360" height="237" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
												</div>
											</div>
											<div class="col h30p">
												<div class="tit table-tit-new">
													<span><span><a href="view?bbs_id=<?php echo $bbs_id ?>&wr_id=<?php echo $row['wr_id'] ?>&page=<?php echo $page ?>"><?php echo $row['wr_subject'] ?></a></span></span>
												</div>
											</div>
											<div class="col h10p">
												<div class="date">
													<span>작성일</span> <span><?php echo str_replace("-", "/", substr($row['wr_datetime'], 0, 10)) ?></span> | <span>조회수</span> <span><?php echo $row['wr_hit'] ?></span>
												</div>
											</div>
										</div>	
									</div>
								</div>
								<?php } ?>
							</div>

						</div>
						
						<div class="board-page">
							<div class="default-pagenation">
								
								<ul class="page-index">
									<?php echo get_paging($list_page_rows, $page, $total_page, './list?bbs_id='.$bbs_id.$qstr.'&amp;page='); ?>
								</ul>
								
							</div>
						</div>
						
						<div class="board-foot">
							
						</div>
						
					</div>
				</div>
				<script>
					$(".video_btn").click(function(){
						
						$(".video_btn").removeClass("active");
						$(this).addClass("active");
						
					})
				</script>
