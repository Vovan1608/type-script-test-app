(function () {
    type PaymentStatus = 'new' | 'paid';

    class Payment {
        id: number;
        paymentStatus: PaymentStatus = 'new';

        constructor(id: number) {
            this.id = id;
        }

        pay() {
            this.paymentStatus = 'paid';
        }
    }

    class PersistantedPayment extends Payment{
        dataBaseId: number;
        paidAt: Date;

        constructor() {
            const id = Math.random();
            super(id);
        }

        override pay(date?: Date) {
            super.pay();
            if (date) {
                this.paidAt = date;
            }
        }
    }

    class User {
        name: string = 'user';

        constructor() {
            console.log(this.name);
        }
    }   
    
    class Admin extends User {
        name: string = 'admin';

        constructor() {
            super();
            console.log(this.name);            
        }
    }

    class newError extends Error {
        code: number;

        constructor(message: string, code?: number) {
            super(message);
            this.code = code ?? 500;
        }
    }   
})();

