$(function(){
//	点击按钮获取随机验证码
	$('.yzm em').click(function(){
		$(this).css({
			color : getColor(),
			background : getColor()
		});
		$(this).html(getRandom());
	})
	
//	获取短信验证码
	$('.phone em').click(function(){
		alert('验证码已发送');
		setTimeout(function(){
			$('#phone_yzm').val(getRandom());
		},Math.floor(Math.random()*30)*100);
	})


//	登录方式的切换
	let lis = $('.login_fs_name li');
	let forms = $('.login_fs').children();
	for (var i=0;i<lis.length;i++) {
		lis[i].index = i;
		lis[i].onclick = function(){
			for (var j=0;j<lis.length;j++) {
				lis[j].className = '';
				forms[j].style.display = 'none';
			}
			lis[this.index].className = 'login_li';
			forms[this.index].style.display = 'block';
		}
	}
	
})


//	表单验证
$(function(){
//	账号密码方式
	let inputs = $('#logon_normal input');
	inputs.each(function(){
		if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password') {
			$(this).on('blur',()=>{
				testBlur($(this));
			})
		}
	})
//	账号验证码方式
	let inputss = $('#logon_fast input');
	inputss.each(function(){
		if ($(this).attr('type') == 'text') {
			$(this).on('blur',()=>{
				testBlur($(this));
			})
		}
	})	
	function testBlur(obj){
		let str = '';
		let txt = obj.val();
		let pattern;
		switch (obj.attr('name')){
			case 'phone' : 
				pattern = /^[1][35789][\d]{9}$/g;
				str = '请填写正确的手机号码';
				break;
			case 'yzm' : 
				if (obj.attr('value') != obj.next().html()) {
					console.log(obj.parent().children().last());
					obj.parent().children().last().html('验证码不正确，请重新输入');
				}else{
					obj.parent().children().last().html('');
				}
				str = '请填写正确的手机号码';
				break;
			case 'pwd' : 
				pattern = /^[\w\_\@\%\.]{6,16}$/g;
				str = '6-16位，可以是数字，字母和符号的组合';
				break;
		}
		if (pattern != undefined) {
			if (!pattern.test(txt)) {
				obj.parent().children().last().html(str);
			} else{
				obj.parent().children().last().html('');
			}
		}
		
	}
//	如果没有填写短信验证码则不可登录
	$('#logon_fast input[type=submit]').click(function(){
		if($('#phone_yzm').val() == ''){
			alert('请填写短信验证码');
			return false;
		}else{
			return true;
		}
	});
})

