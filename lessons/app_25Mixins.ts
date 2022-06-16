type Constructor = new (...args: any[]) => {};

type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]) {};
}

class Accordion {
    isOpoen: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];

        }
    }
}

class AccordionList {
    isOpoen: boolean;
    constructor(public items: string[]) {};
}

const list = ExtendedList(AccordionList);

const res25 = new list(['first', 'second']); 

console.log(res25.first());
