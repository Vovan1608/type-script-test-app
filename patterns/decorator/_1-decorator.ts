interface IUserService {
    users: number;
    getUsersInDB(): number;
}

class UserSrvice implements IUserService {
    users: number = 1000;
    getUsersInDB(): number {
        return this.users;
    }
}

function nullUser(obj: IUserService): IUserService {
    obj.users = 0;

    return obj;
}

function logUsers(obj: IUserService): IUserService {
    console.log(`Users in DB are ${obj.users}`);
    
    return obj;
}

// console.log('nums of the users befor decorating: ', new UserSrvice().getUsersInDB());

// console.log('nums of the users after decorating: ', nullUser(new UserSrvice()).getUsersInDB());

logUsers(new UserSrvice());

logUsers(nullUser(new UserSrvice())).getUsersInDB();
