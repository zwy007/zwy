//获取随机色a-f A-F 0-9
function getColor(){
	let bgColor = '#';
	let str = 'abcdefABCDEF0123456789';
	for (var i=0;i<6;i++){
		let n = Math.floor(Math.random()*str.length);
		bgColor += str[n];
	}
	return bgColor;
}

//获取随机数a-z A-Z 0-9
function getRandom(){
	let htmlStr = '';
	let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (var i=0;i<6;i++){
		let n = Math.floor(Math.random()*str.length);
		htmlStr += str[n];
	}
	return htmlStr;
}


//	❤搜索框的划入选中内容,单击内容为空效果
	$('#search_txt').mouseover(function(){
		this.select();
	})
	$('#search_txt').click(function(){
		this.value = '';
	})



//	❤导航栏效果
	let lis = $('#naver ul>li:gt(0)');
	lis.each(function(i){
		lis.on('mouseenter',function(){
			$(this).find('ol').slideDown(200);
			$(this).find('a').first().css('color','#A10000');
		})
		lis.on('mouseleave',function(){
			$(this).find('ol').slideUp(200);
			$(this).find('a').first().css('color','#737171');
		})
	})
	


	

	