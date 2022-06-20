"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    clone() {
        let target = new UserHistory(this.name, this.email);
        return target;
    }
}
const uh = new UserHistory('auwg@g.com', 'Bob');
console.log(uh);
let uh2 = uh.clone();
uh2.name = 'Tom';
console.log(uh2);
