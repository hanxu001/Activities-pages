$(function(){ 
	$(".w-nav-item").each(function(i){ 
		$(this).click(function(){ 
			$(this).addClass("w-nav-item-on").siblings().removeClass("w-nav-item-on"); 
			$(".qiehuan-list:eq("+i+")").show().siblings(".qiehuan-list").hide(); 
		}) 
	}) 
}) 