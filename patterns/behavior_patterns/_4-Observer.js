"use strict";
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observes = [];
    }
    attach(observer) {
        if (this.observes.includes(observer)) {
            return;
        }
        this.observes.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observes.indexOf(observer);
        if (observerIndex === -1) {
            return;
        }
        this.observes.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observes) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log(`NotificationService recieved notification`);
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log(`LeadService recieved notification`);
        console.log(subject);
    }
}
const subject = new NewLead();
subject.state = new Lead('Bibon', '09901326547');
const u1 = new NotificationService();
const u2 = new LeadService();
subject.attach(u1);
subject.attach(u2);
subject.notify();
subject.detach(u1);
subject.notify();
