"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected TG');
    }
}
class WatsUpProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log('Disconnected WU');
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DilayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelayed() {
    }
}
const senderTG = new NotificationSender(new TelegramProvider());
senderTG.send();
const senderWU = new NotificationSender(new WatsUpProvider());
senderWU.send();
