"use strict";
const data = [
    { id: 1, name: 'Bob' },
    { id: 3, name: 'Sam' },
    { id: 2, name: 'Tom' }
];
function sortById(data, descendingSort = true) {
    return data.sort((a, b) => {
        switch (descendingSort) {
            case false:
                return b.id - a.id;
            default:
                return a.id - b.id;
        }
    });
}
;
const sortResDesc = sortById(data);
console.log(sortResDesc);
const sortRes = sortById(data, false);
console.log(sortRes);
