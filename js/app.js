let xhttp = new XMLHttpRequest(),
    method = 'GET',
    url = ' https://0pfbnesch2.execute-api.us-east-2.amazonaws.com/dev/aitc';

xhttp.open(method, url, true)
xhttp.onload = function(){
    const count = document.getElementById('count')
    count.innerHTML = xhttp.responseText
    console.log(xhttp.responseText)
};
xhttp.send();



//'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'