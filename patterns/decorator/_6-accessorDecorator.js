"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(() => {
    class UserSrvice {
        set users(num) {
            this._users = num;
        }
        get users() {
            return this._users;
        }
        getUsersInDB() {
            console.log('Error!!!');
        }
    }
    __decorate([
        Log()
    ], UserSrvice.prototype, "users", null);
    function Log() {
        return (target, _, descriptor) => {
            const set = descriptor.set;
            descriptor.set = (...args) => {
                console.log(args);
                set === null || set === void 0 ? void 0 : set.apply(target, args);
            };
        };
    }
    const us = new UserSrvice();
    us.users = 122;
    // console.log(us.users);    
})();
