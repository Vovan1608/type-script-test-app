class UserService {
    // static name: string = 'aksjch';
    private static db: any;

    static getUser(id: number): number {
        return UserService.db.findId(id);
    }

    create(): void {
        UserService.db;
    }

    static {
        UserService.db = 'gjf';
    }
}

const userService = new UserService();

userService.create();