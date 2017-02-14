var a = 42;

(function IIFE(){
    var a = 10;
    console.log(a);     // 10
})();

console.log(a);         // 42

/*
IIFEs protect the variables of higher order
code blocks
*/