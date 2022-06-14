"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findId(id);
    }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = 'gjf';
})();
const userService = new UserService();
userService.create();
