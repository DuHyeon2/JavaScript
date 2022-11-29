window.onload = function () {
    var req = new XMLHttpRequest();
    var jsonObj;
    req.addEventListener("load", function(){
        jsonObj = req.response;
        console.log(jsonObj);
    }, false);
    req.responseType = "json";
    req.open("GET", "data.json", true)
}