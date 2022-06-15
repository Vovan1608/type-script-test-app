"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    const num = [1, 2, 3];
    function test() {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield new Promise((res, rej) => {
                res(1);
            });
        });
    }
    ;
    const check = {
        some: true,
        another: false
    };
    function logMiddleWare(data) {
        console.log(data);
        return data;
    }
    ;
    const res = logMiddleWare(10);
    function getArreyHalf(data) {
        const half = data.length / 2;
        return data.splice(0, half);
    }
    getArreyHalf([1, 2, 3, 4]);
})();
