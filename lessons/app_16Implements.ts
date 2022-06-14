interface ILogger {
    log(...args: string[]): void;
    error(...args: string[]): void;
}

class Logger implements ILogger {
    log(...args: string[]): void {
        console.log(args);
    };

    async error(...args: string[]): Promise<void> {
        console.log(args);
    };
}

interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeleateable {
    delete(): void;
}

class Payable implements IPayable, IDeleateable {
    pay(paymentId: number | string): void {
        // ...
    }

    delete(): void {
        // ...
    }
}