"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(req) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('AuthMiddleware');
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: 'Yu`re not auth!' };
    }
}
class ValidationMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('ValidationMiddleware');
        if (req.body) {
            return super.handle(req);
        }
        return { error: 'There`s no body!' };
    }
}
class ControllerMiddle extends AbstractMiddleware {
    handle(req) {
        console.log('ControllerMiddle');
        return { success: req };
    }
}
const controller = new ControllerMiddle();
const validate = new ValidationMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({
    userId: 1,
    body: 'I`m OK!'
}));
