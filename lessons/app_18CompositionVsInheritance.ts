(() => {
    class User {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Users extends Array<User> {
        searchByName(name: string): Array<User> {
            return this.filter(user => user.name === name);
        }
    }

    class UsersList {
        users: User[];

        push(user: User): void {
            this.users.push(user);
        }
    }

    const users = new Users();

    users.push(new User('Bob'));

    console.log(users.toString());    
})();