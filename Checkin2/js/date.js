/**
 * Created by axuan on 2017/3/21.
 */
function getCSS(obj, style) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj)[style];
    }
    return obj.currentStyle[style];
}

function get_data(year, month) {
    var result = {};
    var d = new Date();
    //如果是2月
    if (month == 2) {
        //如果是闰年
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            result.days = 29;
            //如果是平年
        } else {
            result.days = 28;
        }
        //如果是第4、6、9、11月
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        result.days = 30;
    } else {
        result.days = 31;
        //当月第31天是星期几
        result.day31week = d.getDay(d.setFullYear(year, month - 1, 31));
    }
    //当月第一天是星期几
    result.day1week = d.getDay(d.setFullYear(year, month - 1, 1));
    if (month != 2) {
        //当月第30天是星期几
        result.day30week = d.getDay(d.setFullYear(year, month - 1, 30));
    }
    return result;
}

//实现二：根据当月第一天的星期x，设置第一天的margin-left=宽度*x，使其对应到正确的星期位置上
function move_day1(year, month) {
    var week1 = get_data(year, month).day1week;
    day1.style.marginLeft = week1 % 7 * parseInt(getCSS(day1, 'width')) + 'px';
}
//实现三：根据当月的天数，来隐藏多余的天数。当然首先要先显示在其他月份被隐藏的天数
function hide_days(year, month) {
    //恢复其他月份可能隐藏的天数
    for (var i = 28; i < 31; i++) {
        dayBox.children[i].style.display = 'block';
    }
    //隐藏当月多余的天数
    var days = get_data(year, month).days;
    for (var i = days; i < 30; i++) {
        dayBox.children[i].style.display = 'none';
    }
};

//实现四：如果当月30日或31日是星期日，则会新占一行，通过设置margin-top把新占一行的天移动到第一行
function move_day30(year, month) {
    //如果当月30日是星期日
    if (get_data(year, month).day30week === 0) {
        day30.style.marginTop = parseInt(getCSS(day30, 'height')) * (-5) + 'px';
        day31.style.marginTop = parseInt(getCSS(day31, 'height')) * (-5) + 'px';
        day31.style.marginLeft = getCSS(day31, 'width');
        return;
    } else {
        day30.style.marginTop = day31.style.marginTop = day31.style.marginLeft = '0';
    }
    //如果当月31日是星期日
    if (get_data(year, month).day31week === 0) {
        day31.style.marginTop = parseInt(getCSS(day31, 'height')) * (-5) + 'px';
    } else {
        day31.style.marginTop = '0';
    }
}

//实现五：当载入页面时，获取当前年和月，显示当月日历；当改变年或月时，获取改变后的年和月，更新当月日历
var year = conYear.value = new Date().getFullYear();
var month = conMonth.value = new Date().getMonth() + 1;
move_day1(year, month);
hide_days(year, month);
move_day30(year, month);

conYear.onchange = conMonth.onchange = function() {
    var year = conYear.value;
    var month = conMonth.value;
    if (year < 1900 || year > 2100) {
        year = conYear.value = new Date().getFullYear();
    }
    if (month < 1 || month > 12) {
        month = conMonth.value = new Date().getMonth() + 1;
    }
    move_day1(year, month);
    hide_days(year, month);
    move_day30(year, month);
}
