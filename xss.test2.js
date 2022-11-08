alert("xss.test2.js from outer file script");
test();

function test() {
    // let script = document.createElement('script');
    // script.src = "/static/js/xsstest/xss.test3.js";
    // document.getElementsByTagName('body')[0].appendChild(script);
    eval("alert('eval - xss.test2.js')");
}
