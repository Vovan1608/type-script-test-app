import 'reflect-metadata';

const POSITIVE_METADATA_KEY =  Symbol('POSITIVE_METADATA_KEY');

interface IUserService {
    getUsersInDB(): number;
}

class UserSrvice implements IUserService {
    private _users: number;

    getUsersInDB(): number {
        return this._users;
    }

    @Validate()
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
        let existParams: number[] =  Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    }
}

function Validate() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        let nativeMethod = descriptor.value;

        descriptor.value = (...args: any) => {
            let positiveParams: number[] =  Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);

            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error('Number should be greater than 0');
                    }
                }
            }

            return nativeMethod?.apply(target, args);
        }
    }
}

const us = new UserSrvice();

// us.users = 122;
console.log(us.setUsersInDB(10));
console.log(us.setUsersInDB(-10));