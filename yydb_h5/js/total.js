var iftrue=true;


$('#hide').hide();
//首页切换商品
$('.list_top_ul li').click(function (e) {
    $(this).addClass('cur').siblings().removeClass('cur');
});
//首页商品价格排序
$('.list_top_ul li:eq(3)').click(function (e) {
    if(iftrue){
        iftrue=false;
        $(this).removeClass('small');
        console.log('正序');
    }else{
        iftrue=true;
        $(this).addClass('small');
        console.log('倒序')
    }

});
//底部导航
$('.nav_ul a').click(function(){
    $(this).addClass('cur').siblings().removeClass('cur');
});

//详情页切换分类
$('.classify_left li').click(function(){
    $(this).addClass('cur').siblings().removeClass('cur');
});
//晒单页点赞
$('span.praise').click(function(){
    $(this).addClass('cur');
    var text=$(this).text();
    $(this).text(parseInt(text)+1);

});


//倒计时
function countDown(id,name) {
    var minute=1;//分钟
    var second=0;//秒
    var millisecond=0;//毫秒
    var m=6000*minute;//距离结束总毫秒数
    var timer=setInterval(function () {
        if(m>0){
            --m;
            --millisecond;
            if(millisecond<0){
                --second;
                millisecond=99;
            }
            if(second<0){
                --minute;
                second=59
            }
        }

        if(m<=0){
            $(id).html('<p class="center"><span class="marquees_back">恭喜</span><span>'+name+'</span></p>');
            clearInterval(timer);
        }else {
            $(id).html('<p style="text-align:left;padding-left:0.65rem;"><span>'+(minute>=10?minute:'0'+minute)+':'+(second>=10?second:'0'+second)+':'+millisecond+'</span></p>');
        }

    },10)
}
//倒计时1
countDown('#countDown1','获奖用户名用户名用户名用户名');
//倒计时2
countDown('#countDown2','dsadalkdjfasfafafagd');
//倒计时3
countDown('#countDown3','fajdkasjdlasjdafas');

//详情页导航条
$(window).bind("scroll", function () {//给窗口添加一个事件
    var sTop = $(window).scrollTop();//获取窗口的垂直距离
    var sTop = parseInt(sTop);//将字符串串转化成数字
    if(sTop>=40) $('.nav_white_bg').css('opacity','0.1');
    if(sTop>=80) $('.nav_white_bg').css('opacity','0.2');
    if(sTop>=120) $('.nav_white_bg').css('opacity','0.3');
    if(sTop>=160) $('.nav_white_bg').css('opacity','0.4');
    if(sTop>=200) $('.nav_white_bg').css('opacity','0.5');
    if(sTop>=240) $('.nav_white_bg').css('opacity','0.6');
    if(sTop>=280) $('.nav_white_bg').css('opacity','0.7');
    if(sTop>=320) $('.nav_white_bg').css('opacity','0.8');
    if(sTop>=360) $('.nav_white_bg').css('opacity','0.9');
    if(sTop>=400) $('.nav_white_bg').css({'opacity':'1','box-shadow':'0px 1px 5px #cacaca'});
    if(sTop==0) $('.nav_white_bg').css('opacity','0');

});

//详情页包尾
$('#but_01').click(function () {
    var text=parseInt(1000);
    $('#sum').text(text);
    $('#money').text(text)
});

//详情页减少金额
$('span.circle:eq(0)').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur');
    var text=parseInt($('#sum').text());

    if(text!=1){
        $('#sum').text(text-1);
        $('#money').text(text-1)
    }
});
//详情页添加金额
$('span.circle:eq(1)').click(function () {
    var text=parseInt($('#sum').text());

    $(this).addClass('cur').siblings().removeClass('cur');
    $('#sum').text(text+1);
    $('#money').text(text+1);
});












