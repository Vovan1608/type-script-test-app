"use strict";
(() => {
    class Payment {
        constructor() {
            this.date = new Date();
            this.getDateArrow = () => this.date;
        }
        getDate() {
            return this.date;
        }
    }
    const p = new Payment();
    const user = {
        id: 1,
        getPaymentDate: p.getDate.bind(p),
        getPaymentDateArrow: p.getDateArrow
    };
    // console.log(p.getDate());
    // console.log(user.getPaymentDate());
    // console.log(user.getPaymentDateArrow());
    class PaymentPersistant extends Payment {
        save() {
            // super.getDateArrow();
            this.getDateArrow();
        }
    }
    // console.log(new PaymentPersistant().save());
    class UserBuilder {
        setName(name) {
            this.name = name;
            return this;
        }
        //  type guard
        isAdmin() {
            return this instanceof AdminBuilder;
        }
    }
    class AdminBuilder extends UserBuilder {
    }
    const res = new UserBuilder().setName('Bob');
    const res2 = new AdminBuilder().setName('Tom');
    let user2 = new UserBuilder();
    if (user2.isAdmin()) {
        console.log(user2);
    }
    else {
        console.log(user2);
    }
})();
