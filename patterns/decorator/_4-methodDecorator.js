"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(() => {
    class UserSrvice {
        constructor() {
            this.users = 1000;
        }
        getUsersInDB() {
            console.log('Error!!!');
        }
    }
    __decorate([
        Log
    ], UserSrvice.prototype, "getUsersInDB", null);
    function Log(target, propertyKey, descriptor) {
        const oldValue = descriptor.value;
        descriptor.value = () => {
            console.log('No Error)))');
            oldValue();
        };
    }
    const us = new UserSrvice();
    us.getUsersInDB();
})();
