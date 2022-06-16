(() => {
    const num: Array<number> = [1, 2, 3];

    async function test() {
        const a = await new Promise<number>((res, rej) => {
            res(1);
        });
    };

    const check: Record<string, boolean> = {
        some: true,
        another: false
    };

    function logMiddleWare<T>(data: T): T {
        console.log(data);

        return data;
    };
    
    const res = logMiddleWare<number>(10);

    function getArreyHalf<T>(data: Array<T>): Array<T> {
        const half = data.length / 2;

        return data.splice(0, half);
    }

    // getArreyHalf([1,2,3,4])

    const split: <T>(data: Array<T>) => Array<T> = getArreyHalf;

    interface ILogLine<T> {
        time: Date,
        data: T
    }

    type LogLine<T> = {
        time: Date,
        data: T
    }

    const logLine: ILogLine<{ a: number }> = {
        time: new Date(),
        data: {
            a: 1
        }
    };

    class Vehicle {
        run: number;
    }

    function kmToMile<T extends Vehicle>(vehicle: T): T {
        vehicle.run = vehicle.run / 0.62;

        return vehicle;
    }

    function getId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, additionalData: Y } {
        console.log(id);
        console.log(additionalData);
        
        return { id, additionalData };
    }
})();