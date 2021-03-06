"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        Max(125),
        __metadata("design:type", Number)
    ], UserSrvice.prototype, "users", void 0);
    function Max(max) {
        return (target, propertyKey) => {
            let value;
            const setter = (newValue) => {
                if (newValue > max) {
                    console.log(`It shouldn't possibility to set value more than ${max}`);
                }
                else {
                    value = newValue;
                }
            };
            const getter = () => value;
            Object.defineProperty(target, propertyKey, {
                set: setter,
                get: getter
            });
        };
    }
    const us = new UserSrvice();
    us.users = 122;
    console.log(us.users);
    // us.users = 1000;
    // console.log(us.users); 
})();
