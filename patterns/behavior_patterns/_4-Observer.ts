interface IObserver {
    update(subject: ISubject): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}

class Lead {
    constructor(public name: string, public phone: string) {}
}

class NewLead implements ISubject {
    private observes: IObserver[] = [];
    public state: Lead;

    attach(observer: IObserver): void {
        if (this.observes.includes(observer)) {
            return ;
        }

        this.observes.push(observer);
    }

    detach(observer: IObserver): void {
        const observerIndex = this.observes.indexOf(observer);

        if (observerIndex === -1) {
            return ;
        }

        this.observes.splice(observerIndex, 1);
    }

    notify(): void {
        for (const observer of this.observes) {
            observer.update(this);
        }
    }
}

class NotificationService implements IObserver {
    update(subject: ISubject): void {
        console.log(`NotificationService recieved notification`);    
        console.log(subject);
    }
}

class LeadService implements IObserver {
    update(subject: ISubject): void {
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
