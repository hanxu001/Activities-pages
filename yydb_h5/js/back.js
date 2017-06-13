$(function(){
    $(function () {  
        $(window).scroll(function(){  
            if ($(window).scrollTop()>100){  
                $("#backToTop").fadeIn(1500);  
            }  
            else  
            {  
                $("#backToTop").fadeOut(1500);  
            }  
        });   
  
        $("#backToTop").click(function(){  
            $('body,html').animate({scrollTop:0},1000);  
            return false;  
        });  
    });  
})