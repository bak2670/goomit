
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
$result2 = sql_query($sql);

$colspan = 8;
?>
				<div class="row board-row">
					<div class="board-col">
						<div class="board-top">
							<div class="col-left">
						<!--  		<span >전체</span> <span class="line">15건</span>  <span>페이지</span><span>1</span>/<span>1</span>-->
							</div>
							<div class="col-right">
								<div class="search-box">
									<form name="fsearch" method="get">
									<input type="hidden" name="bbs_id" value="<?php echo $bbs_id ?>">
									<select class="form-select search-select" name="sfl">
										<option value="">전체</option>
                                        <option value="wr_subject"<?php echo get_selected($sfl, 'wr_subject', true); ?>>제목</option>
                                        <option value="wr_content"<?php echo get_selected($sfl, 'wr_content'); ?>>내용</option>
									</select>
									<input class="form-input search-input" type="text" name="stx" value="<?php echo stripslashes($stx) ?>" placeholder="검색어를 입력하세요"/>
									<button class="btn search-btn" onClick="this.form.submit();">검색</button>
                                    </form>
								</div>
							</div>
						</div>
						
						<div class="board-body">
							<table class="default-table-skin only-pc dis-table">
								<colgroup>
									<col width="7%" style="width:7%;">
									<col width="65%" style="width:65%;">
									<col width="7%" style="width:7%;">
									<col width="7%" style="width:7%;">
									<col width="7%" style="width:7%;">
									<col width="7%" style="width:7%;">
								</colgroup>
								<thead>
									<tr>
										<th>번호</th>
										<th>제목</th>
										<th>작성자</th>
										<th>등록일</th>
										<th>첨부파일</th>
										<th>조회수</th>
									</tr>
								</thead>
								<tbody>
									<?php
                                    $list_num = $total_count - ($page - 1) * $page_rows;
									for ($i=0; $row = sql_fetch_array($result); $i++) {
                                        $row['num'] = $list_num - $i;
                                        $file = get_file($bbs_id, $row['wr_id']);
                                        if ($file[0]['file']) {
                                            $file_icon = file_type($file[0]['file']);
                                        }
									?>
									<tr>
										<td><?php echo $row['num']; ?></td>
										<!-- 클레스 table-tit-new 추가하면 new 텍스트 생겨요 !-->
										<td class="table-tit table-tit-new">
											<a href="view?bbs_id=<?php echo $bbs_id ?>&wr_id=<?php echo $row['wr_id'] ?>&page=<?php echo $page ?>"><?php echo $row['wr_subject'] ?></a>
										</td>
										<td><?php echo $row['wr_name'] ?></td>
										<td><?php echo str_replace("-", "/", substr($row['wr_datetime'], 0, 10)) ?></td>
										<td>
											<?php if ($file_icon['icon']) { ?>
                                            <img style="width: 20%" src="<?php echo URL; ?>/image/common/<?php echo $file_icon['icon'] ?>"/>
                                            <?php } else { ?>
											<div style="width:84px;">-</div>
                                            <?php } ?>

										</td>
										<td><?php echo $row['wr_hit'] ?></td>
									</tr>
									<?php } ?>
								</tbody>
							</table>
							
							<div class="mobile-default-table-skin only-mobile">
								<div class="v-row">
									<?php
                                    $list_num = $total_count - ($page - 1) * $page_rows;
									for ($i=0; $row = sql_fetch_array($result2); $i++) {
                                        $row['num'] = $list_num - $i;
									?>
									<div class="item-content">
										<div class="tit mb-10">
											<a href="view?no=1"><span class="category">[분류]</span> <span><?php echo $row['wr_subject'] ?> <?php echo $i; ?></span></a>
										</div>
										<div class="info">
											<span class="writer"><?php echo $row['wr_name'] ?></span> | <span class="read">조회수 <?php echo $row['wr_hit'] ?></span> | <span class="date">등록일 <?php echo str_replace("-", "/", substr($row['wr_datetime'], 0, 10)) ?></span> 
										</div>
									</div>
									<?php } ?>
								</div>
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
