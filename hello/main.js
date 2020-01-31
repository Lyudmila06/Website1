

let xhr = new XmlHttpRequest();
xhr.onload = (res)=>console.log(res);
xhr.open('get', 'index.html', true);
xhr.send();
