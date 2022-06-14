class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}
}

class Delivery {
    constructor(
        public date: Date
    ) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;
    
    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public removeProduct(productId: number): void {
        this.products = this.products.filter((product: Product): boolean => product.id !== productId);
    }

    public getSum(): number {
        return this.products
            .map(({ price }: Product): number=> price)
            .reduce((cur: number, next: number): number => cur + next);
    }

    public setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery;
    }

    public checkOut(): Error | object {
        if (this.products.length === 0) {
            throw new Error('Not any products.');
        }

        if (!this.delivery) {
            throw new Error('Delivery method not specified ');
        }

        return { success: true };
    }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'socks', 25.26));
cart.addProduct(new Product(2, 't-short', 120));
cart.addProduct(new Product(3, 'shous', 250));
cart.removeProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), 'Dnepr'));

console.log(cart.getSum());
console.log(cart.checkOut());
