var a = 42;
var b = "foo";

console.log(a < b);     // false
console.log(a > b);     // false
console.log(a == b);    // false

/*
The reason for the behaviour
of the first two lines is that 
"foo" is being coerced to a number,
and in doing so, is assigned NaN.
Any equality and any inequality
checks will return false when
NaN is being compared on either
side. 
*/