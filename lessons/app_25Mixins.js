"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
    ;
}
class Accordion {
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
    ;
}
const list = ExtendedList(AccordionList);
const res25 = new list(['first', 'second']);
console.log(res25.first());
