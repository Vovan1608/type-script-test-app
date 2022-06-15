(() => {
    class Payment {
        private date: Date = new Date();

        getDate(this: Payment): Date {
            return this.date;
        }

        getDateArrow = (): Date => this.date;
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
        name: string;

        setName(name: string): this {
            this.name = name;

            return this;
        }

        //  type guard
        isAdmin(): this is AdminBuilder {
            return this instanceof AdminBuilder;
        }
    }


    class AdminBuilder extends UserBuilder {
        roles: string[];
    }

    const res = new UserBuilder().setName('Bob');
    const res2 = new AdminBuilder().setName('Tom');

    let user2: UserBuilder | AdminBuilder = new UserBuilder();

    if (user2.isAdmin()) {  
        console.log(user2);
    } else {
        
        console.log(user2);
    }
})();