class MyUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const myUser = new MyUser('Don');

class MyAdmin {
    role: number;
}

const myAdmin = new MyAdmin();
myAdmin.role = 1;
