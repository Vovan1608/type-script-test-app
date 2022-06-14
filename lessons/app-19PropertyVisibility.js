"use strict";
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    get model() {
        return this.vehicleModel;
    }
    set model(model) {
        this.vehicleModel = model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setRun(km) {
        this.run = km / 0.62;
    }
}
const vehicle = new Vehicle();
vehicle.name = 'BMW';
console.log(vehicle);
