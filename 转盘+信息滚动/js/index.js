// 点击抽奖
$('.circle').one('click',function(){
	clearTimeout(timer);
	var index=Math.round(Math.random()*5);
	if($('.pointer').hasClass('go')){
		$('.pointer').removeClass('go');
	}
	else{
		$('.pointer').addClass('go');
	}
	var timer=setTimeout(function(){
		$('.pic').eq(index).css('display','block')
	},4000)
});

// 信息轮播
$(function(){
	function move(){
	$(".scrollNews ul").animate({"margin-bottom":"-20px"},500,function(){
		var first=$(".scrollNews ul li:last-child");
		$(".scrollNews ul").prepend(first);
			$(".scrollNews ul").css("margin-bottom",0);
		});
	}	
	var id=setInterval(move,1000);
	$(".scrollNews ").hover(function(){clearInterval(id);},function(){id=setInterval(move,1000);})//开始停止调用
})

// 奖品页面点击跳转事件
$('.pic').on('click',function(){
	console.log('跳转')
})