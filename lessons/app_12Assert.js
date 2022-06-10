"use strict";
;
function asseertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not one');
}
;
const a = {};
asseertUser(a);
a.name = 'Don';
