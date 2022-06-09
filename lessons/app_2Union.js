"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(16));
    }
}
logId(10);
logId('twenty');
// logId(false);
function lofError(err) {
    if (Array.isArray(err)) {
        console.log(err.forEach(e => e.toUpperCase()));
    }
    else {
        console.log(err.toUpperCase());
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
