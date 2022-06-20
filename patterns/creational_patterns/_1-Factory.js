"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TFInsurance {
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('', {
                method: 'POST',
                body: JSON.stringify({ vehicle: this.vehicle })
            });
            const data = yield res.json();
            return data.isSuccess;
        });
    }
}
class ABInsurance {
    setVehicle(persone) {
        this.persone = persone;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch('ab', {
                method: 'POST',
                body: JSON.stringify({ persone: this.persone })
            });
            const data = yield res.json();
            return data.yes;
        });
    }
}
class InsuranceFactory {
    saveHistory(insurance) {
        this.db.save(insurance.id, insurance.status);
    }
}
class TFInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new TFInsurance();
    }
}
class ABInsuranceFactory extends InsuranceFactory {
    createInsurance() {
        return new ABInsurance();
    }
}
const tsInsuranceFactory = new TFInsuranceFactory();
const insurance = tsInsuranceFactory.createInsurance();
tsInsuranceFactory.saveHistory(insurance);
const INSURANCE_TYPE = {
    tf: TFInsurance,
    ab: ABInsurance
};
class InsuranceFactoryAlt {
    createInsurance(type) {
        return INSURANCE_TYPE[type];
    }
    saveHistory(insurance) {
        this.db.save(insurance.id, insurance.status);
    }
}
const insuranceFactoryAlt = new InsuranceFactoryAlt();
const insurance2 = new (insuranceFactoryAlt.createInsurance('ab'));
insuranceFactoryAlt.saveHistory(insurance2);
