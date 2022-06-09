interface Person {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string; 
};

interface PersonRole {
    roleId: number;
};

interface PersonWithRole extends Person, PersonRole {
    createdAt: Date;
};

const person: PersonWithRole = {
    name: 'Bob',
    age: 32,
    skills: ['Dev', 'DevOps'],
    roleId: 85022210002155,
    createdAt: new Date(),
    log(id) { return `somevalue - ${id}` }
};

interface UserDictionary {
    [index: number | string]: Person;
};