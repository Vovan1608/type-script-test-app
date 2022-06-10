function log(a: number | string) {
    console.log(a);
};

// const res = log(5);

function mul(a: number, b?: number) {
    if (!b) {
        return a * a;
    }

    return a * b;
};

function mul2(a: number, b?: number) {
    if (!b) {
        return a * a;
    }

    return a * b;
};

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => true;

const d = f2();
console.log(typeof d);
