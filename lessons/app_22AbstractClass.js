"use strict";
class Controller {
}
// new Controller() - error
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('finish');
    }
}
const uc = new UserController();
uc.handleWithLogs('request');
