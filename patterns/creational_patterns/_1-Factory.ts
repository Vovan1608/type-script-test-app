interface IInsurance {
    id: number;
    status: string;
    setVehicle(vehicle: any): void;
    submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
    id: number;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle;
    }
    async submit(): Promise<boolean> {
        const res = await fetch('', { 
            method: 'POST', 
            body: JSON.stringify({ vehicle: this.vehicle})
        });

        const data = await res.json();

        return data.isSuccess;
    }
}


class ABInsurance implements IInsurance {
    id: number;
    status: string;
    private persone: any;

    setVehicle(persone: any): void {
        this.persone = persone;
    }
    async submit(): Promise<boolean> {
        const res = await fetch('ab', { 
            method: 'POST', 
            body: JSON.stringify({ persone: this.persone})
        });

        const data = await res.json();

        return data.yes;
    }
}

abstract class InsuranceFactory {
    db: any;

    abstract createInsurance(): IInsurance;

    saveHistory(insurance: IInsurance) {
        this.db.save(insurance.id, insurance.status);
    }
}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
        return new TFInsurance();
    }
}

class ABInsuranceFactory extends InsuranceFactory {
    createInsurance(): ABInsurance {
        return new ABInsurance();
    }
}

const tsInsuranceFactory = new TFInsuranceFactory();
const insurance = tsInsuranceFactory.createInsurance();
tsInsuranceFactory.saveHistory(insurance);



const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
}

type InsType = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
    db: any;

    createInsurance<T extends keyof InsType>(type: T): InsType[T] {
        return INSURANCE_TYPE[type];
    }

    saveHistory(insurance: IInsurance) {
        this.db.save(insurance.id, insurance.status);
    }
}


const insuranceFactoryAlt = new InsuranceFactoryAlt();
const insurance2 = new (insuranceFactoryAlt.createInsurance('ab'));
insuranceFactoryAlt.saveHistory(insurance2);
