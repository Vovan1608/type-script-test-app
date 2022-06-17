(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): number;
    }
    
    // @nullUsers
    @setUsers(105)
    // @threeUserAdvanced
    @setUserAdvanced(11005)
    class UserSrvice implements IUserService {
        users: number = 1000;
        getUsersInDB(): number {
            return this.users;
        }
    }
    
    function nullUsers(target: Function) {
        target.prototype.users = 0;
    }

    function setUsers(users: number) {
        return (target: Function) => {
            target.prototype.users = users;
        }
    }

    function threeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            users = 3;
        }
    }

    function setUserAdvanced(users: number) {
        return <T extends { new (...args: any[]): {} }>(constructor: T) => {
            return class extends constructor {
                users = users;
            }
        }
    }

    console.log(new UserSrvice().getUsersInDB());
    
})();