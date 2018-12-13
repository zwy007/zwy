
//----------------放大镜
$(function(){
//	获取所有li,获取每个li的背景图赋值给bigBox和showBox
	let lis = $('#imgList li');
	lis.each(function(){
		$(this).click(function(){
			let bgImg = $(this).css('backgroundImage');
			$("#bigBox").css('backgroundImage',bgImg);
			$("#showBox").css('backgroundImage',bgImg);
		})
	})
	
	$("#bigBox").mouseenter(function(){
		$("#mirrorBox").css({
			'display':'block',
			'cursor' : 'crosshair'
		});
		$("#showBox").css('display','block');
	});
	$("#bigBox").mouseleave(function(){
		$("#mirrorBox").css('display','none');
		$("#showBox").css('display','none');
	});
	$("#bigBox").mousemove(function(ev){
		scale(ev);
	});
	function scale(ev){
//		1----值的变化
		let x = ev.pageX - $("#bigBox")[0].offsetLeft - $("#mirrorBox")[0].offsetWidth/2;
		let y = ev.pageY - $("#bigBox")[0].offsetTop - $("#mirrorBox")[0].offsetWidth/2;
//		2----边界处理
		if (x < 0) {
			x = 0;
		}else if(x > $("#bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth){
			x = $("#bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth;
		}
		if (y < 0) {
			y= 0;
		}else if(y > $("#bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight){
			y = $("#bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight;
		}
//		3----外观样式
		$("#mirrorBox").css({
			'left' : x+'px',
			'top' : y+'px'
		});
//		算出遮罩层左侧距离和小图之间的比例
		let scaleX = x/($("#bigBox")[0].offsetWidth - $("#mirrorBox")[0].offsetWidth);
		let scaleY = y/($("#bigBox")[0].offsetHeight - $("#mirrorBox")[0].offsetHeight);
		$("#showBox").css({
			'backgroundPositionX' : -scaleX*(800-$("#showBox")[0].offsetWidth) + 'px',
			'backgroundPositionY' : -scaleY*(800-$("#showBox")[0].offsetHeight) + 'px'
		})
	}
})

//----------------单击加入购物车按钮时弹出提示框.....
$(function(){
	$('.gwc').click(function(){
		let isChecked = false;
		$('.size_choice a').each(function(){
			if ($(this).attr('class') == 'color_on') {
				isChecked = true;
			}
		})
		if (isChecked) {
			$('#add_success').css('display','block');
		}else{
			alert('请选择商品属性');
		}
	});
	
//	可拖动的div
	let $status = '关';
	$('#add_success').mousedown(function(ev){
//		获取鼠标距离盒子的距离
		$status = '开';
		let mouseX = ev.pageX - this.offsetLeft;
		let mouseY = ev.pageY - this.offsetTop;
		$(document).mousemove((ev) => {
			if($status == '开'){
				let currentX = ev.pageX - mouseX;
				let currentY = ev.pageY - mouseY;
				
				var maxWidth = document.body.clientWidth - this.offsetWidth;
				var maxHeight = document.documentElement.clientHeight - this.offsetHeight;
				if (currentX < 0) {
					currentX = 0;
				} else if(currentX > maxWidth){
					currentX = maxWidth;
				}
				
				$(this).css({
					'left' : currentX + 'px',
					'top' : currentY + 'px'
				})
			}
		});
		$(document).mouseup(()=>{
			$status = '关';
		});
		
	})
	
//	点击X 隐藏盒子
	$('.close').click(function(){
		$('#add_success').css('display','none');
	})

})












//----------------单击选中,加边框
$(function(){
	$('.tab a').each(function(){
		$(this).click(function(){
			$('.tab a').each(function(){
				$(this).removeClass('color_on');
			})
			$(this).addClass('color_on');
		})
	})
	$('.size_choice a').each(function(){
		$(this).on('click',function(){
			$('.size_choice a').each(function(){
				$(this).removeClass('color_on');
			})
			$(this).addClass('color_on');
		})
	})
})



//----------------当页面到一定位置时nav固定
$(function(){
	$(document).scroll(function(){
		let top = $('#mtdp')[0].offsetTop;
		let scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(scroll > top){
			$('.nav').css({
				'position' : 'fixed',
				'left' : '0px',
				'top' : '0px',
				'width' : '100%',
				'z-index' : 100,
				'background' : 'white'
			});
			$('.nav_gwc').css('display','block');
		}else{
			$('.nav').css({'position' : 'static'})
			$('.nav_gwc').css('display','none');
		}
	})	
})


//----------------点击a变色
$(function(){
	let nav_list = $('.nav_list li a');
	nav_list.each(function(){
		$(this).click(function(){
			nav_list.each(function(){
				$(this).removeClass('nav_on');
			})
			$(this).addClass('nav_on');
		})
	})
})	
	


	





