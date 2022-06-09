type httpMethod = 'get' | 'put';

function fetchWithAuthAlias(url: string, method: httpMethod) {}

type User = {
    name: string,
    age: number,
    skills: string[]
};

const user: User = {
    name: 'Bob',
    age: 32,
    skills: ['Dev', 'DevOps']
}