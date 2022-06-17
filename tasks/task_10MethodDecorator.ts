(() => {
    interface IUserService {
        users: number;
        getUsersInDB(): void;
    }
    
    
    class UserSrvice implements IUserService {
        users: number = 1000;

        @Catch({ rethrow: true })
        getUsersInDB(): void {
            throw new Error('ERROR');
        }
    }
    
    function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
        return (
            target: Object,
            _: string | symbol,
            descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
        ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
            const oldMetod = descriptor.value;

            descriptor.value = async (...args: any[]) => {
                try {
                    const res = await oldMetod?.apply(target, args);

                    return res;
                } catch(e) {
                    if (e instanceof Error) {
                        console.log(e.message);
                        
                        if (rethrow) {
                            throw e;
                        }
                    }
                }
            }
        }
    }

    const us = new UserSrvice();

    us.getUsersInDB();
})();