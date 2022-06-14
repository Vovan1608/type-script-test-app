"use strict";
var MyPaymentStatus;
(function (MyPaymentStatus) {
    MyPaymentStatus[MyPaymentStatus["HOLDED"] = 0] = "HOLDED";
    MyPaymentStatus[MyPaymentStatus["PROCESSED"] = 1] = "PROCESSED";
    MyPaymentStatus[MyPaymentStatus["REVERSED"] = 2] = "REVERSED";
})(MyPaymentStatus || (MyPaymentStatus = {}));
;
class MyPayment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = MyPaymentStatus.HOLDED;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === MyPaymentStatus.PROCESSED) {
            throw new Error('Payment can`t be brinning');
        }
        this.status = MyPaymentStatus.REVERSED;
        this.updatedAt = new Date();
    }
}
const payment = new MyPayment(1);
payment.unholdPayment();
setTimeout(() => {
    const time = payment.getPaymentLifeTime();
    console.log(time);
}, 2000);
// const time = payment.getPaymentLifeTime();
console.log(payment);
