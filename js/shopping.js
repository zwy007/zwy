//--------------全选,全不选
$(function(){
	let checkBoxs = $('.trs input[type="checkbox"]');
	$('.checkAll').each(function(){
		$(this).click(() => {
			let isChecked = this.checked;
			checkBoxs.each(function(){
				this.checked = isChecked;
			})
			$('.checkAll').each(function(){
				this.checked = isChecked;
			})
		})
	})
	checkBoxs.click(function(){
		let isCheckAll = true;
		checkBoxs.each(function(){
			if (!this.checked) {
				isCheckAll = false;
			}
		})
		$('.checkAll').each(function(){
			$(this).attr('checked',isCheckAll);
		})
	})
	
})




//购物车
$(function(){
	let allCount = 0;
//给add按钮加单击事件
	$('.add').each(function(){
		$(this).click(() => {
			add($(this));
		})
	})
//给expect按钮加单击事件
	$('.expect').each(function(){
		$(this).click(() => {
			expect($(this));
		})
	})
//给删除按钮加单击事件
	$('.delete').each(function(){
		$(this).click(() => {
			del($(this));
		})
	})
	
//每件商品的小计 = 数量(goodCount)  * 单价(goodUnit)
	function getEveryGoodsAllPrices(goodsCount, goodsPrice) {
		return parseInt(goodsCount) * parseFloat(goodsPrice);
	}
//购物车所有商品的总价 = 每个商品小计的和
	function getSummaryMoney() {
		var everyGoodsAllPrices = $('.everyGoodsAllPrices');
		var res = 0;
		everyGoodsAllPrices.each(function(){
			res += parseFloat($(this).html())
		})
		return res;
	}
//	获取购物车已勾选商品数量
	function getAllCount(){
		let num = 0;
		$('.goodsCount').each(function(){
			num += parseInt($(this).val());
		})
		return num;
	}




//单击+按钮导致的商品数量,商品小计,商品总价
	function add(btn) {
		var num = btn.prev();   
		var n = parseInt(num.val());    //个数
		num.val(++n);
		allCount++;
		$('.allCount').html(getAllCount());
		var everyGoodsAllPrices = btn.parent().parent().find('.everyGoodsAllPrices');
		var goodsPrice = btn.parent().parent().find('.goodsPrice');
		everyGoodsAllPrices.html(getEveryGoodsAllPrices(num.val(),goodsPrice.html()));
		$('.summary_money b').html(getSummaryMoney());
	}
//单击-按钮导致的商品数量,商品小计,商品总价
	function expect(btn) {
		var num = btn.next();   
		var n = parseInt(num.val());    //个数
		if (parseInt(num.val()) > 0) {
			num.val(--n);
			allCount--;
			$('.allCount').html(getAllCount());
			var everyGoodsAllPrices = btn.parent().parent().find('.everyGoodsAllPrices');
			var goodsPrice = btn.parent().parent().find('.goodsPrice');
			everyGoodsAllPrices.html(getEveryGoodsAllPrices(num.val(),goodsPrice.html()));
			$('.summary_money b').html(getSummaryMoney());
		}
		
	}


//单击删除按钮导致的商品数量,商品小计,商品总价
	function del(btn){
		btn.parent().append('<div></div>');
		btn.parent().css('position','relative');
		btn.next().css({
			'position' : 'absolute',
			'width' : '120px',
			'height' : '32px',
			'border' : '1px solid #a10000',
			'background' : 'white',
			'font-size' : '12px',
			'color' : '595959',
			'padding' : '15px',
			'left' : '-70px',
			'top' : '-50px',
			'z-index' : 10
		});
		//	提示信息p
		btn.next().append('<p>确定删除此商品吗？</p>');
		btn.next().find('p').css('line-height','20px')
		//	操作p--->span+span
		btn.next().append('<p><span class="sure">确定</span><span class="cancel">取消</span></p>');
		btn.next().find('p span').css({
			'margin':'10px',
			'cursor' : 'pointer'
		})
		//	箭头span
		btn.next().append('<span></span>');
		btn.next().children().last().css({
			'position' : 'absolute',
			'width' : '9px',
			'height' : '8px',
			'overflow' : 'hidden',
			'background' : 'url(img/icon-shopping.gif) 0 0 no-repeat',
			'left' : '65%',
			'bottom' : '-8px',
			'z-index' : 10
		})
		//	给确定按钮和删除按钮加单击事件
		$('.sure').click(function(){
			this.parentNode.parentNode.parentNode.parentNode.remove();
			$('.summary_money b').html(getSummaryMoney());
			$('.allCount').html(getAllCount());
		})
		$('.cancel').click(function(){
			this.parentNode.parentNode.remove();
		})
		//	给确定按钮和删除按钮加鼠标划过事件
		$('.sure').hover(
			function(){ $(this).css('color','#A10000') },
			function(){ $(this).css('color','#000000') }
		)
		$('.cancel').hover(
			function(){ $(this).css('color','#A10000') },
			function(){ $(this).css('color','#000000') }
		)
	}
	
})	




	
