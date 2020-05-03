"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const user_1 = require("./user");
const user_token_1 = require("./user-token");
class Cloudflare {
    constructor(authOptions) {
        this._api = new api_1.API(authOptions);
    }
    get api() {
        return this._api;
    }
    get user() {
        if (!(this._user instanceof user_1.User)) {
            this._user = new user_1.User();
            this._user.api = this.api;
        }
        return this._user;
    }
    get userToken() {
        if (!(this._userToken instanceof user_token_1.UserToken)) {
            this._userToken = new user_token_1.UserToken();
            this._userToken.api = this.api;
        }
        return this._userToken;
    }
}
exports.Cloudflare = Cloudflare;
