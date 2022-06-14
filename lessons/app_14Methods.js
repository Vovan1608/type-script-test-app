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
        this.status = MyPaymentStatus.HOLDED;
        this.createdAt = new Date();
        this.id = id;
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
console.log(payment);
payment.unholdPayment();
const time = payment.getPaymentLifeTime();
console.log(time);
// const time = payment.getPaymentLifeTime();
