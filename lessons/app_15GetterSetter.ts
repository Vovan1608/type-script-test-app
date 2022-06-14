class ElseUser {
    userLogin: string;
    password: string;
    createdAt: Date;
    
    set login(userPart: string | number) {
        this.userLogin = `user-${userPart}`;
        this.createdAt = new Date();
    }

    get login() {
        return this.userLogin;
    }

    async getPassword(word: string) {
        // .....
    }
}

const elseUser = new ElseUser();

elseUser.login = 'Bob';
console.log(elseUser.login);

elseUser.login = 56;
console.log(elseUser.login);



