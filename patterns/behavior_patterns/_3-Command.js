"use strict";
class UserCommand {
    constructor(userId) {
        this.userId = userId;
    }
}
class UserServiceCommand {
    saveUser(user) {
        console.log(`Saving user with id: ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Deleting user with id: ${userId}`);
    }
}
class CommonCotroller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReciever(reciever) {
        this.reciever = reciever;
    }
    run() {
        const addUserCommand = new AddUserCommand(new UserCommand(101), this.reciever, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
class CommandHistory {
    constructor() {
        this.comands = [];
    }
    push(command) {
        this.comands.push(command);
    }
    remove(command) {
        this.comands = this.comands.filter(el => el.commonId !== command.commonId);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commonId = Math.round(Math.random() * 100);
    }
}
class AddUserCommand extends Command {
    constructor(user, reciever, history) {
        super(history);
        this.user = user;
        this.reciever = reciever;
    }
    execute() {
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
