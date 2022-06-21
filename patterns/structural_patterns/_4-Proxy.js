"use strict";
class PaymentAPI {
    constructor() {
        this.data = [{ id: 1, sum: 5000 }];
    }
    getPaymentDetail(id) {
        return this.data.find(d => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Trying to get payment details');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(1));
