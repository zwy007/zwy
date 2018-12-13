$(function(){
//	获取随机验证码
	$('#getYzm').click(function(){
		$(this).css({
			background : getColor(),
			color : getColor()
		})
		$(this).html(getRandom())
	})



//	❤表单验证
	let inputs = $('form input');
	console.log(inputs);
	inputs.each(function(){
//		console.log($(this).attr('type'));		//text,text,password,password,checkbox,submit
		if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password') {
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
			case 'yzm' :
				if (obj.attr('value') != obj.next().html()) {
					console.log(obj.parent().children().last());
					obj.parent().children().last().html('验证码不正确，请重新输入');
				}else{
					obj.parent().children().last().html('');
				}
				break;
			case 'phone' : 
				pattern = /^[1][35789][\d]{9}$/g;
				str = '请填写正确的手机号码';
				break;
			case 'pwd' : 
				pattern = /^[\w\_\@\%\.]{6,16}$/g;
				str = '6-16位，可以是数字，字母和符号的组合';
				break;
			case 're_pwd' :
				let pwdValue = obj.parent().prev().children().first().attr('value');
				if (obj.attr('value') != pwdValue){
					obj.parent().children().last().html('两次密码不一致，请重新输入');
				} else{
					obj.parent().children().last().html('');
				}
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
//	如果复选框未选中阻止提交
	$('form input[type=submit]').click(function(){
		if ($('form input[type=checkbox]').attr('checked') == undefined) {
			alert('请阅读《VANCL凡客诚品服务条款》');
			return false;
		}
	})
})
