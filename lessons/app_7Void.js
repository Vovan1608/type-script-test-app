"use strict";
function log(a) {
    console.log(a);
}
;
// const res = log(5);
function mul(a, b) {
    if (!b) {
        return a * a;
    }
    return a * b;
}
;
function mul2(a, b) {
    if (!b) {
        return a * a;
    }
    return a * b;
}
;
const f1 = () => { };
const f2 = () => true;
const d = f2();
console.log(typeof d);
