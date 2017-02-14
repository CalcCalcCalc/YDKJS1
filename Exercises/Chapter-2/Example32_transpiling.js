function fooES6(a = 2){
    console.log(a);
}

fooES6();      // 2
fooES6(42);    // 42

function fooPreES6(){
    var a = arguments[0] !== (void 0) ? arguments[0] :2;
    console.log(a);
}

fooPreES6();    // 2
fooPreES6(42);  // 42

/*
    Some good transpilers:
    Babel (https://babeljs.io) (formerly 6to5): Transpiles ES6+ into ES5
    Traceur (https://github.com/google/traceur-compiler): Transpiles ES6, ES7, and beyond into ES5
*/