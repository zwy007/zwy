<?php
	header('Content-Type: text/html; charset=utf-8')
?>

<?php
	require_once('public.php');
	
	$goodsName = $_GET['goodsName'];
	
	$findgoodsNameFromSql = "select * from goodsInfo where goodsName like '%" . $goodsName . "%'";
	
	$findgoodsNameFromSqlRes = $conn->query($findgoodsNameFromSql);
	
	$str = '';
	
	if($findgoodsNameFromSqlRes->num_rows > 0){
		while ($row = $findgoodsNameFromSqlRes -> fetch_array(MYSQLI_ASSOC)) {
			$str = $str . '{"goodsId":"' . $row['goodsId'] . '","goodsName":"' . $row['goodsName'] . 
			'","goodsPrice":"' . $row['goodsPrice'] . '","goodsImg":"' . $row['goodsImg'] . '"}#';
		}
		echo $str;
	}else{
		echo '没有找到';
	}
	
	$conn->close();
?>	