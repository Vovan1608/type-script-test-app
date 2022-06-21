"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrices() {
        return this.items.reduce((acc, item) => acc += item.getPrice(), 0);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.getItemPrices() + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPrice() {
        return this.getItemPrices();
    }
}
class MyProduct extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const deliveryShop = new DeliveryShop(100);
deliveryShop.addItem(new MyProduct(150));
const pack1 = new Package();
deliveryShop.addItem(pack1);
pack1.addItem(new MyProduct(10));
pack1.addItem(new MyProduct(30));
const pack2 = new Package();
deliveryShop.addItem(pack2);
pack2.addItem(new MyProduct(40));
console.log(deliveryShop.getPrice());
