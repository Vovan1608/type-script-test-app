(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): void;
    }
    
    
    class UserSrvice implements IUserService {
        users: number = 1000;

        @Log
        getUsersInDB(): void {
            console.log('Error!!!');
        }
    }
    
    function Log(
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>

    ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
        const oldValue = descriptor.value;

        descriptor.value = () => {
            console.log('No Error)))');
            // oldValue(); 
        }
    }

    const us = new UserSrvice();

    us.getUsersInDB();
})();