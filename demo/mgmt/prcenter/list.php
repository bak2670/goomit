<?php
error_reporting(E_ALL); // 모든 에러 표시
ini_set("display_errors", 1); // 에러 나타내기

	include_once('./_common.php');
	include_once(MGMT_PATH.'/classes/pagenation.class.php');
	$category = "prcenter";

	$bbs_id = $_GET['bbs_id'];
    $table_name = "gmit_write_".$bbs_id;
    $bbs_title = get_board_title($bbs_id);

    set_session('ss_delete_token', $token = uniqid(time()));
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
						<h5><?php echo $bbs_title ?></h5>
					</div>
					<ul class="nav navbar-right panel_toolbox">
						<li>
							<a href="write?bbs_id=<?php echo $bbs_id ?>">
								<button class="btn btn-sm btn-primary" >
									<i class="fa fa-edit"></i> 글작성
								</button>
							</a>
						</li>
					</ul>
				</div>
				<div class="clearfix"></div>
				
				<div class="row">
					<div class="col-md-12 col-sm-12 ">
						<div class="x_panel">
							<div class="x_content">
								<div class="row">

<?php
$page = $_GET['page'];
if (!$page) $page = 1;


$sql = " select count(*) as cnt from $table_name where wr_is_comment = '0' ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];

$page_rows = 10;
$list_page_rows = 5;
$total_page  = ceil($total_count / $page_rows);  // 전체 페이지 계산
$from_record = ($page - 1) * $page_rows; // 시작 열을 구함

$sql = " select * from $table_name where wr_is_comment = '0' order by wr_num, wr_reply desc limit {$from_record}, $page_rows ";
$result = sql_query($sql);

$colspan = 8;
?>
									<div class="col-sm-12">
										<div class="card-box table-responsive">
											<table class="table sto_tableStyle3">
												<thead>
													<tr>
														<th>번호</th>
														<th>분류</th>
														<th>썸네일</th>
														<th>제목</th>
														<th>최종수정자</th>
														<th>생성일자</th>
														<th>변경일자</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
									<?php
                                    $list_num = $total_count - ($page - 1) * $page_rows;
									for ($i=0; $row = sql_fetch_array($result); $i++) {
                                        $row['num'] = $list_num - $i;

                                        if ($bbs_id == "gitube") {
                                            $row['ca_name'] = get_gitube_category($row['ca_name']);
                                        }
									?>
										<tr>
											<td><?php echo $row['num'] ?></td>

											<td><?php echo $row['ca_name'] ?></td>
											<td></td>
											<td>
												<a href="./view?bbs_id=<?php echo $bbs_id ?>&wr_id=<?php echo $row['wr_id'] ?>&page=<?php echo $page ?>"><?php echo $row['wr_subject'] ?></a>
											</td>
											<td><?php echo $row['wr_name'] ?></td>
											<td><?php echo substr($row['wr_datetime'], 0, 16) ?></td>
											<td><?php echo substr($row['wr_last'], 0, 16) ?></td>
											<td>
                                                <a href="write?w=u&bbs_id=<?php echo $bbs_id ?>&wr_id=<?php echo $row['wr_id'] ?>&page=<?php echo $page ?>">
                                                    <button class="btn btn-sm btn-primary" >
                                                        <i class="fa fa-edit"></i> 수정
                                                    </button>
                                                </a>
                                                <a href="javascript:;" onClick="delete_confirm(this, '<?php echo $bbs_id ?>', '<?php echo $row['wr_id'] ?>', '<?php echo $token ?>');">
                                                    <button class="btn btn-sm btn-primary" >
                                                        <i class="fa fa-trash-can"></i> 삭제
                                                    </button>
                                                </a>

											</td>
										</tr>
									<?php } ?>
									<?php if ($i == 0) { echo '<tr><td colspan="'.$colspan.'">게시물이 없습니다.</td></tr>'; } ?>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="pagination-wrap">
										<?php echo get_paging($list_page_rows, $page, $total_page, './list?bbs_id='.$bbs_id.$qstr.'&amp;page='); ?>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<br />
				
			</div>
			<!-- /page content -->
			
		</div>
	</div>
	<?php include_once(MGMT_INC_PATH."/jshead.html"); ?>
</body>
<script>
function delete_confirm(e, bbs_id, wr_id, token) {
    if (confirm('정말로 삭제하시겠습니까?\n\n삭제후에는 복구가 불가능합니다.')) {
        var url = "./delete.php";
        $.ajax({
            url: url,
            type: 'POST',
            data: {'bbs_id':bbs_id, 'wr_id':wr_id, 'token':token},
            dataType: 'html',
            success: function(response) {
                if (response == "OK") $(e).parent().parent().hide();
                else alert(response);
            }
        });
    }
}
</script>
</html>