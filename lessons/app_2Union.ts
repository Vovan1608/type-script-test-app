function logId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(16));
    }
}

logId(10);
logId('twenty');
// logId(false);

function lofError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err.forEach(e => e.toUpperCase()));
    } else {
        console.log(err.toUpperCase());
    }
}

function logObj(obj: { a: number} | { b: string }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}