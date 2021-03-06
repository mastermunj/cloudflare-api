"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UserToken extends base_1.Base {
    constructor(data) {
        super(data);
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.get('/user/tokens');
        });
    }
    create(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.post('/user/tokens', token);
        });
    }
    details(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.get(`/user/tokens/${identifier}`);
        });
    }
    update(identifier, token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.put(`/user/tokens/${identifier}`, token);
        });
    }
    delete(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.delete(`/user/tokens/${identifier}`);
        });
    }
    roll(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.put(`/user/tokens/${identifier}/value`);
        });
    }
    verify() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.get(`/user/tokens/verify`);
        });
    }
}
exports.UserToken = UserToken;
