let input: unknown;

input = 3;
input = ['Dev', 'DevOps'];

// let res: string = input;

let input2: any;

input2 = 3;
input2 = ['Dev', 'DevOps'];

let res2: string = input2;

async function getData() {
    try {
        fetch('');
    } catch(error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

type U = unknown | string;


type I = unknown & number;