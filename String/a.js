function sum(a, b) {
    return a + b;
}
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(function () {
    console.log("hi there");
    return 1;
});
