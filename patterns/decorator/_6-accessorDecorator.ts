(() => {
    interface IUserService {
        getUsersInDB(): void;
    }
    
    class UserSrvice implements IUserService {
        private _users: number;

        set users(num: number) {
            this._users = num;
        }
        
        @Log()
        get users() {
            return this._users;
        }

        getUsersInDB(): void {
            console.log('Error!!!');
        }
    }
    
    function Log() {
        return (
            target: Object,
            _: string | symbol,
            descriptor: PropertyDescriptor
        ) => {
            const set = descriptor.set;

            descriptor.set = (...args: any) => {
                console.log(args);
                set?.apply(target, args);                
            }
        }
    }

    const us = new UserSrvice();

    us.users = 122;
    // console.log(us.users);    
})();