import { CloudflareResponse } from './cf-response';
import { Base } from './base';
import { CloudflareDate } from './types';
export declare type CreateToken = Pick<UserToken, 'name' | 'policies'> | Partial<Pick<UserToken, 'not_before' | 'expires_on' | 'condition'>>;
export declare type UpdateToken = Partial<UserToken>;
export declare class UserToken extends Base {
    id: string;
    name: string;
    status: string;
    issued_on: CloudflareDate;
    modified_on: CloudflareDate;
    not_before: CloudflareDate;
    expires_on: CloudflareDate;
    policies: {}[];
    condition: {};
    constructor(data?: UserToken);
    list(): Promise<CloudflareResponse>;
    create(token: CreateToken): Promise<CloudflareResponse>;
    details(identifier: string): Promise<CloudflareResponse>;
    update(identifier: string, token: UpdateToken): Promise<CloudflareResponse>;
    delete(identifier: string): Promise<CloudflareResponse>;
    roll(identifier: string): Promise<CloudflareResponse>;
    verify(): Promise<CloudflareResponse>;
}
