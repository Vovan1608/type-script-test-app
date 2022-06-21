class KVDatabase {
    private db: Map<string, string> = new Map();

    save(key: string, value: string): void {
        this.db.set(key, value);
    }
}

class PersistantDB {
    savePersistant(data: Object) {
        console.log(data);        
    }
}

class PersistantDBAdapter extends KVDatabase{
    constructor(public database: PersistantDB) {
        super();
    }

    override save(key: string, value: string): void {
        this.database.savePersistant({ key, value });
    }
}

function running(base: KVDatabase): void {
    base.save('key', 'myValue');
}

running(new PersistantDBAdapter(new PersistantDB));
