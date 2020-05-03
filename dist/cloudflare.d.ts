import { API, APIAuthOptions } from './api';
import { User } from './user';
import { UserToken } from './user-token';
export declare class Cloudflare {
    private _api;
    private _user;
    private _userToken;
    constructor(authOptions?: APIAuthOptions);
    get api(): API;
    get user(): User;
    get userToken(): UserToken;
}
