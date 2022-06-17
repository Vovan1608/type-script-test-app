(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): number;
    }
    
    @CreatedAt
    class UserSrvice implements IUserService {
        users: number = 1000;
        getUsersInDB(): number {
            return this.users;
        }
    }

    function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            createdAt = new Date()
        }
    }

    type CreatedAt = {
        createdAt: Date;
    };

    const us = new UserSrvice() as UserSrvice & CreatedAt;
    console.log(us.createdAt);
})();