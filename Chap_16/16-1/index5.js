window.onload = function(){
    var req = new XMLHttpRequest();
    var jsonObj;
    req.addEventListener('load', function(){
        jsonObj = JSON.parse(req.responseText);
        document.getElementById('view').innerHTML = req.responseText
        console.log(jsonObj)
    }, false);
    req.open('GET', 'data.json', true);
    req.send(null)
};