"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(data) {
        Object.assign(this, data);
    }
    set api(api) {
        this._api = api;
    }
    get api() {
        return this._api;
    }
}
exports.Base = Base;
