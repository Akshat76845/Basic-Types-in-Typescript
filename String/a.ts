function sum(a:number,b:number):number {
    return a + b;
}

function runAfter1S(fn:() => void){
    setTimeout(fn,1000);
  }
  
  runAfter1S(function() {
    console.log("hi there");
    return 1;
  })