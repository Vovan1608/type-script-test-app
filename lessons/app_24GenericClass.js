"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
const res = new Resp('data', 0);
class HTTPresp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const res22 = new HTTPresp();
