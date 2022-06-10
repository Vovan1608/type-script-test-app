interface EndUser {
    name: string;
    email: string;
    login: string;
};

const endUser: EndUser = {
    name: 'Bpb',
    email: 'as@sa.com',
    login: 'victim'
};

interface MyAdmin {
    name: string;
    role: number;
};

function logIdNew(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
};

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

