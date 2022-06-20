"use strict";
class Notify {
    send(template, to) {
        console.log(`Send ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: 'other', template: '<h1>Tamplate!</h1>' }
        ];
    }
    getByName(name) {
        return this.templates.find(temp => temp.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            return this.logger.log('Not found the template');
        }
        this.notify.send(data.template, to);
        this.logger.log('The template was sent');
    }
}
const nf = new NotificationFacade();
nf.send('abn@sadf.com', 'other');
