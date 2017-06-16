//每天签到
$(".check_middle_detail").click(function()
{
    var myDate = new Date();
    var day= myDate.getDate() - 1;
    $(".pup_up .pup_detail").html(
        `<div class="pup_title">签到成功</div>
        <div class="pup_text">积分+50</div>
        <div class="go_share">
        <a href="#">分享+50积分</a>
        </div>
<div class="close_detail"></div>`);
    $(".pup_text").css({
        'margin-top':35
    });
    $(".pup_up").fadeIn();
    $(".close_detail").click(function()
    {
        $(".pup_up").fadeOut();
        $(".is_check").html("已签到")
    })
    $(".dayBox .day").eq(day).addClass("current");
});
//签到说明
$(".check_content_right").click(function()
{
    $(".pup_text").css({
        'margin':0
    });
    $(".instructions").fadeIn();
    $(".go_share").click(function()
    {
        $(".instructions").fadeOut();
    });
});
//三个不同天数的礼包领取
$(".number_days_content .seven_day_pic").click(function()
{
    $(".pup_up .pup_detail").html(
        `<div class="pup_title">签到成功</div>
        <div class="pup_text">积分+50*2</div>
        <div class="go_share">
        <a href="#">分享+50积分</a>
        </div>
        <div class="close_detail"></div>
`);
    $(".pup_text").css({
        'margin-top':35
    });
    $(".pup_up").fadeIn();
    $(".close_detail").click(function()
    {
        $(".pup_up").fadeOut();
        $(".seven_day_pic").append(`<div class="received">已领取</div>`);
    })
});
$(".number_days_content .fifteen_day_pic").click(function()
{
    $(".pup_up .pup_detail").html(
        `<div class="pup_title">签到成功</div>
        <div class="pup_text">积分+50*2</div>
        <div class="pup_text">2元红包</div>
        <div class="go_share">
        <a href="#">分享+50积分</a>
        </div>
        <div class="close_detail"></div>
`);
    $(".pup_text").css({
        'margin':16
    });
    $(".pup_up").fadeIn();
    $(".close_detail").click(function()
    {
        $(".pup_up").fadeOut();
        $(".fifteen_day_pic").append(`<div class="received">已领取</div>`);
    })
});
$(".number_days_content .thirty_day_pic").click(function()
{
    $(".pup_up .pup_detail").html(
        `<div class="pup_title">签到成功</div>
        <div class="pup_text">积分+50*3</div>
        <div class="pup_text">5元红包</div>
        <div class="pup_text">5金币</div>
        <div class="go_share">
        <a href="#">分享+50积分</a>
        </div>
        <div class="close_detail"></div>
`);
    $(".pup_up").fadeIn();
    $(".close_detail").click(function()
    {
        $(".pup_up").fadeOut();
        $(".thirty_day_pic").append(`<div class="received">已领取</div>`);
    })
});