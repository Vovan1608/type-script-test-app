(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): void;
    }
    
    
    class UserSrvice implements IUserService {
        @Max(125)
        users: number = 1000;

        getUsersInDB(): void {
            console.log('Error!!!');
        }
    }
    
    function Max(max: number) {
        return (
            target: Object,
            propertyKey: string | symbol,
        ) => {
            let value: number;

            const setter = (newValue: number): void => {
                if (newValue > max) {
                    console.log(`It shouldn't possibility to set value more than ${max}`);                    
                } else {
                    value = newValue;
                }
            };

            const getter = (): number => value;

            Object.defineProperty(target, propertyKey, {
                set: setter,
                get: getter
            });
        }
    }

    const us = new UserSrvice();

    us.users = 122;
    console.log(us.users);    

    // us.users = 1000;
    // console.log(us.users); 
})();