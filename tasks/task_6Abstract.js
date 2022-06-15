"use strict";
(() => {
    class Logger {
        printDate(date) {
            this.log(date.toString());
        }
    }
    class PrintLogger extends Logger {
        log(message) {
            console.log(message);
        }
        logWithDate(message) {
            this.printDate(new Date());
            this.log(message);
        }
    }
    const printLogger = new PrintLogger();
    printLogger.logWithDate('Hello, World!)');
})();
