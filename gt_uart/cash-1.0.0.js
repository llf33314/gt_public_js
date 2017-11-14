var DEFAULT_URL = "http://127.0.0.1:9092/gtuartservice";
/**
 * 开钱箱请求
 */
function openCashFn(CashCOM) {
    var param = "method={\"version\":\"1.0\",\"CashRequest\":{\"command\":\"1B-70-00-3C-FF\",\"port\":\"" + CashCOM + "-9600-8-n-1\",\"set\":\"open\"}}";
    printerAjax(DEFAULT_URL, param);
}

/*************** ajax请求 *******************/
function printerAjax(url, params){
    try {
        var xmlHttpRequest = null;
        if(window.ActiveXObject) {
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }else {
            xmlHttpRequest = new XMLHttpRequest();
        }
        if(xmlHttpRequest == null){
            alert("你的浏览器不支持该插件！");
            return;
        }
        xmlHttpRequest.open("post", url, true);
        xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttpRequest.send(params);
    }catch (e){
        // console.log(e);
    }
};