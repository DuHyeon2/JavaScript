window.onload = function(){
    var req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(req.readyState==4){
            if(req.status == 200){
                document.getElementById('view').innerHTML = req.responseText
            }
        }
    }
    req.open('GET', 'data.json', true);
    req.send(null);
}