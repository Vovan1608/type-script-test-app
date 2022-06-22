class UserCommand {
    constructor(public userId: number) {}
}

class UserServiceCommand {
    saveUser(user: UserCommand) {
        console.log(`Saving user with id: ${user.userId}`);        
    }

    deleteUser(userId: number) {
        console.log(`Deleting user with id: ${userId}`);        
    }
}

class CommonCotroller {
    reciever: UserServiceCommand;
    history: CommandHistory = new CommandHistory();

    addReciever(reciever: UserServiceCommand) {
        this.reciever = reciever;
    }

    run() {
        const addUserCommand = new AddUserCommand(
            new UserCommand(101),
            this.reciever,
            this.history
        );

        addUserCommand.execute();

        console.log(addUserCommand.history);
        
        addUserCommand.undo();

        console.log(addUserCommand.history);
    }
}

class CommandHistory {
    public comands: Command[] = [];

    push(command: Command): void {
        this.comands.push(command);
    }
    
    remove(command: Command): void {
        this.comands = this.comands.filter(el => el.commonId !== command.commonId);
    } 
}

abstract class Command {
    public commonId: number;

    abstract execute(): void;

    constructor(public history: CommandHistory) {
        this.commonId = Math.round(Math.random() * 100);
    }
}

class AddUserCommand extends Command {
    constructor(
        private user: UserCommand, 
        private reciever: UserServiceCommand, 
        history: CommandHistory
        ) {
        super(history);
    }

    execute(): void {
        this.reciever.saveUser(this.user);
        this.history.push(this);
    }
    
    undo() {
        this.reciever.deleteUser(this.user.userId);
        this.history.remove(this);
    }
}

const commonController = new CommonCotroller();
commonController.addReciever(new UserServiceCommand());
commonController.run();
