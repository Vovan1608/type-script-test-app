abstract class Controller {
    abstract handle(req: any): void;
}

// new Controller() - error

class UserController extends Controller {
    handle(req: any): void {
        console.log(req);
    }

    handleWithLogs(req: any) {
        console.log('start');
        this.handle(req);
        console.log('finish');
    }
}

const uc = new UserController();

uc.handleWithLogs('request');
