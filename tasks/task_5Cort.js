"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    getSum() {
        return this.products
            .map(({ price }) => price)
            .reduce((cur, next) => cur + next);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
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
