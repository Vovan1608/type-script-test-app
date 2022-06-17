(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): number;
    }
    
    @nullUsers
    @threeUserAdvanced
    class UserSrvice implements IUserService {
        users: number = 1000;
        getUsersInDB(): number {
            return this.users;
        }
    }
    
    function nullUsers(target: Function) {
        target.prototype.users = 0;
    }

    function threeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            users = 3;
        }
    }

    console.log(new UserSrvice().getUsersInDB());
    
})();