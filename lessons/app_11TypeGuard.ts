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
    if (typeof id === 'string') {
        console.log(id);
    } else {
        console.log(id);
    }
}

