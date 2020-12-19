//一个ajax对象
var ajax = {
    get:function (url,successCallBack,failCallBack) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                if(xhr.status == 200 || xhr.status == 304){
                    if(typeof successCallBack == "function"){
                        successCallBack(xhr.responseText,xhr);
                    }else if(typeof failCallBack == "function"){
                        failCallBack(xhr.responseText,xhr);
                    }
                }
 
            }};
        xhr.send(null);
    },
    post:function (url,data,successCallBack,failCallBack) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url,true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4){
                if(xhr.status == 200 || xhr.status == 304){
                    if(typeof successCallBack == "function"){
                        successCallBack(xhr.responseText,xhr);
                    }else if(typeof failCallBack == "function"){
                        failCallBack(xhr.responseText,xhr);
                    }
                }
 
            }};
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
};