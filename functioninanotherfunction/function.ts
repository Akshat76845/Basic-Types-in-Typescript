function sum(a: number, b:number) {
    return a + b;
}

function runAfer1S(fn: () => void) {
    setTimeout(fn, 1000);
}
runAfer1S(function() {
    console.log("hi there");
})