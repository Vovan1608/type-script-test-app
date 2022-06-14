"use strict";
(() => {
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    class Users extends Array {
        searchByName(name) {
            return this.filter(user => user.name === name);
        }
    }
    class UsersList {
        push(user) {
            this.users.push(user);
        }
    }
    const users = new Users();
    users.push(new User('Bob'));
    console.log(users.toString());
})();
