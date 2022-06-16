const data = [
    { id: 1, name: 'Bob' },
    { id: 3, name: 'Sam' },
    { id: 2, name: 'Tom' }
];

interface IData {
    id: number;
}

function sortById<T extends IData>(data: Array<T>, descendingSort: boolean = true): Array<T> {
    return data.sort((a: T, b: T): number => {
        switch (descendingSort) {
            case false:
                return b.id - a.id;
            default: 
                return a.id - b.id;
        }
    });
};

const sortResDesc = sortById(data);
console.log(sortResDesc);

const sortRes = sortById(data, false);
console.log(sortRes);
