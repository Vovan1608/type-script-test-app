enum MyPaymentStatus {
    HOLDED,
    PROCESSED,
    REVERSED
};

class MyPayment {
    id: number;
    status: MyPaymentStatus = MyPaymentStatus.HOLDED;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
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

