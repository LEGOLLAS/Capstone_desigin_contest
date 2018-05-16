function moveNext(obj, len, nextId) {
    if (obj.value.length == len) {
        $('#' + nextId).focus();
    }
}

function checkNumber(event) {
    var key = event.which || event.keyCode;

    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 9 || key == 8 || key == 13 || key == 37 || key == 39 || key == 46 || key == 109 || key == 189) {
        return true;
    } else {
        if (window.event) {
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;
        } else e.preventDefault();
    }
}

function checkEmail(obj){
    var regexp  = /^([a-zA-Z0-9_\-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!regexp.test(obj.value)){
        alert('Please input collect email address.');
        return;
    }
}

function getDateFormatValue(v, format){
    if(v == '' || format == undefined || format == '') return v;

    if(v.length != 8) return v;

    var year = v.substring(0,4);
    var month = v.substring(4,6);
    var day = v.substring(6,8);

    var fValue = format.toLowerCase();
    fValue = fValue.replace('yyyy', year);
    fValue = fValue.replace('mm', month);
    fValue = fValue.replace('dd', day);

    return fValue;
}

function getUnformatDateValue(v, format){
    if(v == '' || format == undefined || format == '') return v;

    var fValue = format.toLowerCase();
    var year = v.substr(fValue.indexOf('yyyy'), 4);
    var month = v.substr(fValue.indexOf('mm'), 2);
    var day = v.substr(fValue.indexOf('dd'), 2);

    return String(year) + String(month) + String(day);
}

// 현재 날짜 반환
function getCurrentDate(format){
    var date = new date();
    var year = date.getFullYear();
    var month = date.getMonth();
    month = month + 1;
    if(month < 10) month = "0" + month;
    var day = date.getDate();
    if(day < 10) day = "0" + day;

    if(format != undefined){
        var date_format = format.toLowerCase();
        date_format = date_format.replace("yyyy",year);
        date_format = date_format.replace("mm",month);
        date_format = date_format.replace("dd",day);

        return date_format;
    }else{
        return String(year)+String(month)+String(day);
    }
}

// 현재 날짜를 기준으로 일주일전을 알고 싶은경우는 -7
function getDateFromCurrentDate(interval, format){
    var now = new Date();
    var date = new Date(Date.parse(now) + (interval*1000*60*60*24));

    var year = date.getFullYear();
    var month = date.getMonth();
    month = month + 1;
    if(month < 10) month = "0" + month;
    var day = date.getDate();
    if(day < 10) day = "0" + day;

    if(format != undefined){
        var date_format = format.toLowerCase();
        date_format = date_format.replace("yyyy",year);
        date_format = date_format.replace("mm",month);
        date_format = date_format.replace("dd",day);

        return date_format;
    }else{
        return String(year)+String(month)+String(day);
    }
}

var dateUtil = {
    getFormatValue: function(v, format){
        if(v == '' || format == undefined || format == '') return v;

        if(v.length != 8) return v;

        var year = v.substring(0,4);
        var month = v.substring(4,6);
        var day = v.substring(6,8);

        var fValue = format.toLowerCase();
        fValue = fValue.replace('yyyy', year);
        fValue = fValue.replace('mm', month);
        fValue = fValue.replace('dd', day);

        return fValue;
    },

    getUnformatValue: function(v, format){
        if(v == '' || format == undefined || format == '') return v;

        var fValue = format.toLowerCase();
        var year = v.substr(fValue.indexOf('yyyy'), 4);
        var month = v.substr(fValue.indexOf('mm'), 2);
        var day = v.substr(fValue.indexOf('dd'), 2);

        return String(year) + String(month) + String(day);
    },

    getCurrentDate: function(format){
        var date = new date();
        var year = date.getFullYear();
        var month = date.getMonth();
        month = month + 1;
        if(month < 10) month = "0" + month;
        var day = date.getDate();
        if(day < 10) day = "0" + day;

        if(format != undefined){
            var date_format = format.toLowerCase();
            date_format = date_format.replace("yyyy",year);
            date_format = date_format.replace("mm",month);
            date_format = date_format.replace("dd",day);

            return date_format;
        }else{
            return String(year)+String(month)+String(day);
        }
    },

    getDateFromCurrentDate(interval, format){
        var now = new Date();
        var date = new Date(Date.parse(now) + (interval*1000*60*60*24));

        var year = date.getFullYear();
        var month = date.getMonth();
        month = month + 1;
        if(month < 10) month = "0" + month;
        var day = date.getDate();
        if(day < 10) day = "0" + day;

        if(format != undefined){
            var date_format = format.toLowerCase();
            date_format = date_format.replace("yyyy",year);
            date_format = date_format.replace("mm",month);
            date_format = date_format.replace("dd",day);

            return date_format;
        }else{
            return String(year)+String(month)+String(day);
        }
    }
};
