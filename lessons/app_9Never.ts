function generateError(msg: string): never {
    throw new Error(msg);
};

// type paymentAction = 'pay' | 'checkout';
type paymentAction = 'pay' | 'checkout' | 'reject';

function proccesAction(action: paymentAction) {
    switch (action) {
        case 'pay':
            // ...
            break;
        case 'checkout':
            //  ...
            break;
        case 'reject':
            //  ...
            break;
        default:
            const _: never = action;
            throw new Error("Not that action");
    }
};
