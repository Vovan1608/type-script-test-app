"use strict";
function generateError(msg) {
    throw new Error(msg);
}
;
function proccesAction(action) {
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
            const _ = action;
            throw new Error("Not that action");
    }
}
;
