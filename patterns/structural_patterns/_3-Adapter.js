"use strict";
class KVDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistantDB {
    savePersistant(data) {
        console.log(data);
    }
}
class PersistantDBAdapter extends KVDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistant({ key, value });
    }
}
function running(base) {
    base.save('key', 'myValue');
}
running(new PersistantDBAdapter(new PersistantDB));
