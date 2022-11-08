alert("xss.test2.js from outer file script with dynamic");
test();

function test() {
    let script = document.createElement('script');
    script.src = "https://alents.github.io/static/xss.test3.js";
    document.getElementsByTagName('body')[0].appendChild(script);    
}

function onClick() {
    alert('onClick-outer');
}
