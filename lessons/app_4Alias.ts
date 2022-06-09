type httpMethod = 'get' | 'put';

function fetchWithAuthAlias(url: string, method: httpMethod) {}

type User = {
    name: string;
    age: number;
    skills: string[];
};

type Role = {
    id: number;
}

type UserWithRole = User & Role;

const user: UserWithRole = {
    name: 'Bob',
    age: 32,
    skills: ['Dev', 'DevOps'],
    id: 85022210002155
};