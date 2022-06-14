"use strict";
(function () {
    class Payment {
        constructor(id) {
            this.paymentStatus = 'new';
            this.id = id;
        }
        pay() {
            this.paymentStatus = 'paid';
        }
    }
    class PersistantedPayment extends Payment {
        constructor() {
            const id = Math.random();
            super(id);
        }
        pay(date) {
            super.pay();
            if (date) {
                this.paidAt = date;
            }
        }
    }
    class User {
        constructor() {
            this.name = 'user';
            console.log(this.name);
        }
    }
    class Admin extends User {
        constructor() {
            super();
            this.name = 'admin';
            console.log(this.name);
        }
    }
    class newError extends Error {
        constructor(message, code) {
            super(message);
            this.code = code !== null && code !== void 0 ? code : 500;
        }
    }
})();
