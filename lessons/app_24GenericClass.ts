class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E ) {
        if (data) {
            this.data = data;
        }

        if (error) {
            this.error = error;
        }
    }
}

const res = new Resp<string, number>('data', 0);


class HTTPresp<F> extends Resp<string, number> {
    code: F;

    setCode(code: F): void {
        this.code = code;
    }
}

const res22 = new HTTPresp();
