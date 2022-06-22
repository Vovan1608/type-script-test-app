"use strict";
(() => {
    class Mediated {
        setMediator(mediator) {
            this.mediator = mediator;
        }
    }
    class Notifications {
        send() {
            console.log('Sending notification.');
        }
    }
    class Log {
        log(message) {
            console.log(message);
        }
    }
    class EventHandler extends Mediated {
        myEvent() {
            this.mediator.notify('EventHandler', 'MyEvent');
        }
    }
    class NotificationMediator {
        constructor(notifications, logger, handler) {
            this.notifications = notifications;
            this.logger = logger;
            this.handler = handler;
        }
        notify(_, event) {
            switch (event) {
                case 'MyEvent':
                    this.notifications.send();
                    this.logger.log('Sent');
                    break;
            }
        }
    }
    const handler = new EventHandler();
    const logger = new Log();
    const notifications = new Notifications();
    const mediator = new NotificationMediator(notifications, logger, handler);
    handler.setMediator(mediator);
    handler.myEvent();
})();
