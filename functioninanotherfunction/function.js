function sum(a, b) {
    return a + b;
}
function runAfer1S(fn) {
    setTimeout(fn, 1000);
}
runAfer1S(function () {
    console.log("hi there");
});
