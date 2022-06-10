"use strict";
class MyUser {
    constructor(name) {
        this.name = name;
    }
}
const myUser = new MyUser('Don');
class MyAdmin {
}
const myAdmin = new MyAdmin();
myAdmin.role = 1;
