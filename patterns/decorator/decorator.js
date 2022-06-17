"use strict";
class UserSrvice {
    constructor() {
        this.users = 1000;
    }
    getUsersInDB() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log(`Users in DB are ${obj.users}`);
    return obj;
}
// console.log('nums of the users befor decorating: ', new UserSrvice().getUsersInDB());
// console.log('nums of the users after decorating: ', nullUser(new UserSrvice()).getUsersInDB());
logUsers(new UserSrvice());
logUsers(nullUser(new UserSrvice())).getUsersInDB();
