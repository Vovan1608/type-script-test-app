(() => {
    abstract class Logger {
        abstract log(message: string): void;

        printDate(date: Date): void {
            this.log(date.toString());            
        }
    }

    class PrintLogger extends Logger {
        log(message: string) {
            console.log(message);            
        }

        logWithDate(message: string): void {
            this.printDate(new Date());
            this.log(message);
        }
    }

    const printLogger = new PrintLogger();
    printLogger.logWithDate('Hello, World!)');
})();
