class Notify {
    send(template: string, to: string) {
        console.log(`Send ${template}: ${to}`);        
    }
}

class Log {
    log(message: string) {
        console.log(message);        
    }
}

class Template {
    private templates = [
        { name: 'other', template: '<h1>Tamplate!</h1>' }
    ];

    getByName(name: string) {       
        return this.templates.find(temp => temp.name === name);
    }
}

class NotificationFacade {
    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }

    send(to: string, templateName: string) {
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
