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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    console.log(`Initializing ${name}`);
    return () => {
        console.log(`Calling ${name}`);
    };
}
;
let MyCkass = class MyCkass {
    constructor(_) { }
    getAny(_) { }
    getAny2(_) { }
};
__decorate([
    Uni('Property'),
    __metadata("design:type", Object)
], MyCkass.prototype, "prop", void 0);
__decorate([
    Uni("Method"),
    __param(0, Uni('Parameter of method')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyCkass.prototype, "getAny", null);
__decorate([
    Uni("Method static"),
    __param(0, Uni('Parameter of static method')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyCkass.prototype, "getAny2", null);
__decorate([
    Uni('Property static'),
    __metadata("design:type", Object)
], MyCkass, "prop2", void 0);
MyCkass = __decorate([
    Uni('Class'),
    __param(0, Uni('Parameter of construcnor')),
    __metadata("design:paramtypes", [Object])
], MyCkass);
