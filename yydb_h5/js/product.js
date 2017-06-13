
$(function () {

    //计算已售件数
    var start = parseInt(mySeedRandom() * 50) + 600;//开始量
    var end = parseInt(mySeedRandom() * 50) + 930;//截止量
    var arr = [30, 15, 12, 8, 6, 4, 15, 35, 60, 80, 90, 85, 80, 75, 80, 90, 90, 85, 80, 85, 90, 90, 100, 95];//权重数组
    buyCount(start, end, arr);

    loadProvinces();


    setInterval(countDown, 1000);

    $(".product_option").click(function () {
        var self = $(this);
        var image = self.data('image');
        $(".goods-thumb").attr("src", image);
        $(".product_option").removeClass('active');
        self.addClass('active');

        $("#product_option_id").val(self.data('id'));
        $(".js-goods-price").html(self.data('price'));
    });

    if ($(".product_option").length == 1) {
        $(".product_option").trigger("click");
    }
    if ($(".product_option").length > 1) {
        $("#product_option_id").val('');
    }


    $("#province_id").change(function () {
        changeProvince();
    });

    $("#city_id").change(function () {
        changeCity();
    });


    $(".buy_btn").click(function (event) {

        event.preventDefault();
        event.stopPropagation();
        var order_form = $("#order_form");

        if ($(".product_option").length > 0) {
            var product_option_id = $("#product_option_id").val();
            if (product_option_id == "") {
                tipFlash('请选择规格');
                return;
            }
        }
        var receiver = $("#receiver").val();
        if (receiver.length <= 0) {
            tipFlash('请填写收货人姓名');
            return;
        }
        var mobile = $("#mobile").val();
        if (!/^1[\d]{10}$/.test(mobile)) {
            tipFlash('请填写正确的手机号码');
            return;
        }
        var street_address = $("#street_address").val();
        if (street_address.length < 2) {
            tipFlash('请填写详细地址');
            return;
        }
        if ($("#auth_code").length > 0) {
            var auth_code = $("#auth_code").val();
            if (auth_code.length < 1) {
                tipFlash('请填写验证码');
                return;
            }
        }

        var submitting = order_form.data("submitting");
        if (submitting == "1") {
            return;
        }
        order_form.data('submitting', "1");

        var url = order_form.attr('action');
        var data = order_form.serialize();
        $.post(url, data, function (resp) {

            order_form.data('submitting', "0");
            if (resp.error_code < 0) {
                tipFlash(resp.error_reason);
            } else {
                if (resp.redirect_url) {
                    location.href = resp.redirect_url;
                }
            }

        });


    });

    $("#order_form").submit(function (event) {
        event.preventDefault();
        return false;
    });

    $(".back_top").click(function () {
        $('body,html').scrollTop(0);
        return false;
    });


    $(".online_chat").click(function (event) {
        event.preventDefault();

        var url = $("#QIAO_ICON_CONTAINER").attr('href');
        window.open(url);
        return false;
    });

    $("#auth_code_btn").click(function (event) {
        event.preventDefault();
        var self = $(this);
        var mobile = $("#mobile").val();
        if (!/^1[\d]{10}$/.test(mobile)) {
            tipFlash('请填写正确的手机号码');
            return;
        }
        if (self.attr('disabled') == 'disabled') {
            return;
        }
        self.attr('disabled', 'disabled');

        var order_form = $("#order_form");
        var data = order_form.serialize();

        $.post('/orders/auth', data, function (resp) {
            tipFlash(resp.error_reason);

            if (resp.error_code == 0) {
                authTimedCount();
            } else {
                self.removeAttr('disabled');
            }
        });

        return false;
    });

    $(".payment_channel").click(function () {
        var self = $(this);
        $(".payment_channel").removeClass('pro_select');
        self.addClass('pro_select');

        $("#payment_channel_id").val(self.data('id'));
    });

    if($(".payment_channel").length > 0){
        $(".payment_channel")[0].click();
    }


    statVisitor();

    $(".top_btn").hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".top_btn").fadeIn(1500);
        } else {
            $(".top_btn").fadeOut(1500);
        }
    });

    $(".top_btn").click(function () {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });

    $('.product_fix').css('display','none');
    $('.js-buy-it').click(function(){
        $('.product_fix').css('display','block');
    });

    $('.product_fix .js-cancel').click(function(){
        $('.product_fix').css('display','none');
    });

    //购买数量减1
    $('.response-area-minus').click(function(){
        var disabled = $('.minus').attr('disabled');
        if(disabled){
            return;
        }
        var num = $('.quantity .txt').val();
        var new_num = parseInt(num) - 1;
        $('.quantity .txt').val(new_num);
        $('#num_id').val(new_num);
        if(new_num == 1){
            $('.minus').addClass('disabled');
            $('.minus').attr('disabled','true');
        }
    });
    //购买数量加1
    $('.response-area-plus').click(function(){
        var num = $('.quantity .txt').val();
        var new_num = parseInt(num) + 1;
        $('.quantity .txt').val(new_num);
        $('#num_id').val(new_num);
        if(new_num > 1){
            $('.minus').removeClass('disabled');
            $('.minus').removeAttr('disabled');
        }
    });

});
