import { AxiosStatic } from 'axios';
import { CloudflareResponse } from './cf-response';
export declare type APIAuthOptions = {
    token?: string;
    authKey?: string;
    authEmail?: string;
    userServiceKey?: string;
};
export declare class API {
    private token;
    private authKey;
    private authEmail;
    private userServiceKey;
    private baseUrl;
    private _axios;
    constructor(authOptions?: APIAuthOptions);
    set axios(axios: AxiosStatic);
    get axios(): AxiosStatic;
    private getAxiosConfig;
    private request;
    get(endpoint: string, data?: {}): Promise<CloudflareResponse>;
    patch(endpoint: string, data: {}): Promise<CloudflareResponse>;
    post(endpoint: string, data: {}): Promise<CloudflareResponse>;
    put(endpoint: string, data?: {}): Promise<CloudflareResponse>;
    delete(endpoint: string): Promise<CloudflareResponse>;
}
