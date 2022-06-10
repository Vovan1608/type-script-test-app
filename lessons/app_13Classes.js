"use strict";
class MyUser {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
        if (typeof age === 'number') {
            this.age = age;
        }
    }
}
const myUser = new MyUser('Don');
const myUser2 = new MyUser();
const myUser3 = new MyUser(33);
const myUser4 = new MyUser('Tom', 45);
// class MyAdmin {
//     role: number;
// }
// const myAdmin = new MyAdmin();
// myAdmin.role = 1;
