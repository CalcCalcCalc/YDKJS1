function foo(){
    a = 1;  // 'a' not formally declared
}

foo();
a;         // 1 -- oops, auto global variable :(

/* 
    This can easily lead to losing track
    of scope, especially when reusing
    names of variables for different scopes
    (count, x, y)
*/