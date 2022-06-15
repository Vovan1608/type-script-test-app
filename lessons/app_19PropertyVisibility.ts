class Vehicle {
    public name: string;
    private damages: string[];
    private vehicleModel: string;
    protected run: number;
    #price: number;

    get model() {
        return this.vehicleModel;
    }

    set model(model: string) {
        this.vehicleModel = model;
    }

    addDamage(damage: string): void {
        this.damages.push(damage);
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62;
    }
}

const vehicle = new Vehicle();
vehicle.name = 'BMW';


console.log(vehicle);

