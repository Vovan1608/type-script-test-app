abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    addItem(item: DeliveryItem): void {
        this.items.push(item);
    }

    getItemPrices(): number {
        return this.items.reduce((acc: number, item: DeliveryItem) => acc += item.getPrice(), 0);
    }

    abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {
    constructor(private deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return this.getItemPrices() + this.deliveryFee;
    }

}

class Package extends DeliveryItem {
    getPrice(): number {
        return this.getItemPrices();
    }

}

class MyProduct extends DeliveryItem {
    constructor(private price: number) {
        super();
    }

    getPrice(): number {
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
