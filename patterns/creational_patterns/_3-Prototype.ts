interface IPrototype<T> {
    clone(): T;
}

class UserHistory implements IPrototype<UserHistory> {
    constructor(public email: string, public name: string) {}
    
    clone(): UserHistory {
        let target = new UserHistory(this.name, this.email);

        return target;
    }

}

const uh = new UserHistory('auwg@g.com', 'Bob');

console.log(uh);

let uh2 = uh.clone();
uh2.name = 'Tom';
console.log(uh2);

