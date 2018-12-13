
//通过ajax从数据库中获取数据输出到页面中
$(function(){
	let xhr = new XMLHttpRequest();
	xhr.open('get','php/getGoodsFromSqlToPage.php?goodsName=');
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			showgoodlist(xhr.responseText);   //逻辑短路
		}
	}	
	
	function showgoodlist(str){
		let allShoppingListArr = str.split('#');
		let htmlStr = '';
		let shoppingsParent = $('.yl_list ul li a');
		for (var i=0;i<allShoppingListArr.length-1;i++) {
			allShoppingListArr[i] = JSON.parse(allShoppingListArr[i]);
			htmlStr = "<img src = '"+allShoppingListArr[i].goodsImg+"'/><h3>"+ allShoppingListArr[i].goodsName+"</h3><p><span>售价￥156</span><b>充值购买相当于￥ "+ allShoppingListArr[i].goodsPrice+".0</b></p>";
			shoppingsParent[i].innerHTML = htmlStr;
		}
	}
	
})



//给每个图片加放大效果
var allAs = $('.yl_list ul li a');
console.log(allAs);
$(function(){
	allAs.each(function(){
		$(this).mouseenter(()=>{
			
		})
		$(this).mouseleave(()=>{
			
		})
	})
})
