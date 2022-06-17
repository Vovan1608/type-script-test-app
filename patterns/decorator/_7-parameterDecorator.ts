(() => {
    interface IUserService {
        getUsersInDB(): void;
    }
    
    class UserSrvice implements IUserService {
        private _users: number;

        getUsersInDB(): number {
            return this._users;
        }

        setUsersInDB(@Positive() num: number): void {
            this._users = num;
        }
    }
    
    function Positive() {
        return (
            target: Object,
            propertyKey: string | symbol,
            parameterIndex: number
        ) => {
            console.log('target: ', target);
            console.log('propertyKey: ', propertyKey);
            console.log('parameterIndex: ', parameterIndex);
        }
    }

    const us = new UserSrvice();

    // us.users = 122;
    // console.log(us.users);    
})();