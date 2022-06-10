interface NewMyUser {
    name: string;
};

function asseertUser(obj: unknown): asserts obj is NewMyUser {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }

    throw new Error('Not one');
};

const a = {};
asseertUser(a);
a.name = 'Don';
