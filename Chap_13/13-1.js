window.onload = function(){
    var w;
    document.getElementById("open").onclick = function(){
        w = open("newpage.html", "new page", "width = 400, height = 300");
    };
    document.getElementById("close").onclick = function(){
        if (w) w.close;
    };
};