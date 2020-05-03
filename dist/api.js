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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cf_response_1 = require("./cf-response");
class API {
    constructor(authOptions) {
        this.baseUrl = 'https://api.cloudflare.com/client/v4/';
        this.token = authOptions === null || authOptions === void 0 ? void 0 : authOptions.token;
        this.authKey = authOptions === null || authOptions === void 0 ? void 0 : authOptions.authKey;
        this.authEmail = authOptions === null || authOptions === void 0 ? void 0 : authOptions.authEmail;
        this.userServiceKey = authOptions === null || authOptions === void 0 ? void 0 : authOptions.userServiceKey;
        this.axios = axios_1.default;
    }
    set axios(axios) {
        this._axios = axios;
    }
    get axios() {
        return this._axios;
    }
    getAxiosConfig(config) {
        const configDefault = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if (this.token !== undefined) {
            configDefault.headers['Authorization'] = `Bearer ${this.token}`;
        }
        else if (this.authKey !== undefined && this.authEmail !== undefined) {
            configDefault.headers['X-Auth-Key'] = this.authKey;
            configDefault.headers['X-Auth-Email'] = this.authEmail;
        }
        else if (this.userServiceKey !== undefined) {
            configDefault.headers['X-Auth-User-Service-Key'] = this.userServiceKey;
        }
        else {
            throw new Error('Please provide one of the authentication parameters.');
        }
        return Object.assign({}, configDefault, config);
    }
    request(config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axios.request(config);
                return new cf_response_1.CloudflareResponse(response.data);
            }
            catch (e) {
                return new cf_response_1.CloudflareResponse(e.response.data);
            }
        });
    }
    get(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(this.getAxiosConfig({
                method: 'get',
                url: endpoint,
                data: data,
            }));
        });
    }
    patch(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(this.getAxiosConfig({
                method: 'patch',
                url: endpoint,
                data: data,
            }));
        });
    }
    post(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(this.getAxiosConfig({
                method: 'post',
                url: endpoint,
                data: data,
            }));
        });
    }
    put(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(this.getAxiosConfig({
                method: 'put',
                url: endpoint,
                data: data,
            }));
        });
    }
    delete(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(this.getAxiosConfig({
                method: 'delete',
                url: endpoint,
            }));
        });
    }
}
exports.API = API;
