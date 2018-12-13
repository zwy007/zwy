<?php
	header("Content-Type:text/html;charset=utf-8");
?>	

<?php 
	require_once('public.php');
	
	//1、接受客户端的数据（用户输入的数据）
	$goodsId   = $_POST['goodsId'];
	$goodsName = $_POST['goodsName'];
	$goodsType = $_POST['goodsType'];
	$goodsPrice = $_POST['goodsPrice'];
	$goodsCount = $_POST['goodsCount'];
	$goodsDesc = $_POST['goodsDesc'];
	$goodsImg  = $_POST['goodsImg'];
	$beiyong1  = $_POST['beiyong1'];
	$beiyong2  = $_POST['beiyong2'];
	$beiyong3  = $_POST['beiyong3'];
	$beiyong4  = $_POST['beiyong4'];
	$beiyong5  = $_POST['beiyong5'];
	$beiyong6  = $_POST['beiyong6'];
	$beiyong7  = $_POST['beiyong7'];
	$beiyong8  = $_POST['beiyong8'];
	$beiyong9  = $_POST['beiyong9'];
	$beiyong10 = $_POST['beiyong10'];
	$beiyong11 = $_POST['beiyong11'];
	$beiyong12 = $_POST['beiyong12'];
	$beiyong13 = $_POST['beiyong13'];
	
	
	//2）、传输数据（过桥）
	$saveGoodsToSql = "insert into goodsInfo values('".$goodsId."','".$goodsName."','".$goodsType."'
	,'".$goodsPrice."','".$goodsCount."','".$goodsDesc."','".$goodsImg."'
	,'".$beiyong1."','".$beiyong2."','".$beiyong3."','".$beiyong4."'
	,'".$beiyong5."','".$beiyong6."','".$beiyong7."','".$beiyong8."'
	,'".$beiyong9."','".$beiyong10."','".$beiyong11."','".$beiyong12."','".$beiyong13."')";
	
	$saveGoodsToSqlRes = $conn->query($saveGoodsToSql);
	if($saveGoodsToSqlRes){
		echo "
			<script>
				alert('保存成功');
				window.location.href = '../saveGoodsToSql.html';
			</script>
		";
	}else{
		echo "
			<script>
				alert('失败');
				window.location.href = '../saveGoodsToSql.html';
			</script>
		";
	}
	
	$conn->close();
?>
	
