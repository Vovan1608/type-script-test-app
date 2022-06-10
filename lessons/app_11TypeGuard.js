"use strict";
;
const endUser = {
    name: 'Bpb',
    email: 'as@sa.com',
    login: 'victim'
};
;
function logIdNew(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
;
function isString(x) {
    return typeof x === 'string';
}
;
function isAdmin(user) {
    return 'role' in user;
}
;
function setRole(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error();
    }
}
