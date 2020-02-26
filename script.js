var api = "trnsl.1.1.20200220T213404Z.a824d72928c6b677.5a78e7813b7639cc7f382011ae3e28ff1cd1e443"

//make sure DOM is loaded before proceeding
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', submitEnglish);
}
else {
    submitEnglish();
}

function submitEnglish() {
    var par = document.getElementById("response");
    console.log(par.childNodes);

    document.getElementById("submitEnglish").addEventListener('click', function(event) {
        var req = new XMLHttpRequest();

        var text = document.getElementById("english").value;
        var url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${api}&text=${text}&lang=en-it`
        req.open('POST', url, true);
        req.setRequestHeader("Access-Control-Allow-Origin", "file://");
        req.setRequestHeader('Content-Type', 'multipart/form-data');
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                var paragraph = document.getElementById("response");
                //remove previous entry if there is one
                if (par.childNodes.length > 1) {
                    par.removeChild(par.childNodes[1]);
                }
                var italian = document.createTextNode(response.text[0]);
                paragraph.appendChild(italian);
            }
            else {
                console.log("Network request error" +  req.statusText);
            }
            event.preventDefault();
        });
        req.send();
        event.preventDefault();
    });
}

