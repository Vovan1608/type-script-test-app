enum MyPaymentStatus {
    HOLDED,
    PROCESSED,
    REVERSED
};

class MyPayment {
    id: number;
    status: MyPaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = MyPaymentStatus.HOLDED;
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
payment.unholdPayment();

setTimeout(() => {
    const time = payment.getPaymentLifeTime();
    console.log(time);
}, 2000);
// const time = payment.getPaymentLifeTime();
console.log(payment);
