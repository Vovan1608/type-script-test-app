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

    getArreyHalf([1,2,3,4])
})();