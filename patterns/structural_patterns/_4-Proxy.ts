interface IPaimentAPI {
    getPaymentDetail(id: number): IPaymentDetail | undefined; 
}

interface IPaymentDetail {
    id: number;
    sum: number;
}

class PaymentAPI implements IPaimentAPI {
    private data = [{ id: 1, sum: 5000 }];

    getPaymentDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id === id);
    }
}

class PaymentAccessProxy implements IPaimentAPI {
    constructor(private api: PaymentAPI, private userId: number) {}
    
    getPaymentDetail(id: number): IPaymentDetail | undefined {
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
