"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendedList(List);
const res25 = new list(['first', 'second']);
console.log(res25.first());
