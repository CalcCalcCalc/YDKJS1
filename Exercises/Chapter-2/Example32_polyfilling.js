if (!Number.isNaN){
    Number.isNaN = function isNaN(x){
        return x !== x;
    };
}

/*
    This polyfill only works due to 
    a quirk with NaN

    Best to use an already vetted set of 
    polyfills that you can trust, 
    such as those provided by 
    ES5-Shim (https://github.com/es-shims/es5-shim) 
    and ES6-Shim (https://github.com/es-shims/es6-shim).
*/