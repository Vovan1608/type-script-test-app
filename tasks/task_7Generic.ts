function toString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return data.toString();
    }

    switch (typeof data) {
        case 'string':
            return data;

        case 'bigint':
        case 'boolean':
        case 'number':
        case 'symbol':
        case 'function':
            return data.toString();

        case 'object':
            return JSON.stringify(data);

        default:
            return undefined;
    }
};

console.log(toString('gjhsdgkf'));
console.log(toString(125));
console.log(toString(()=> 8976));
console.log(toString([1, 'eewfe', true]));
console.log(toString({ a: 21 }));