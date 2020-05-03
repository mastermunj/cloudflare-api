import { CloudflareResponse } from './cf-response';
import { Base } from './base';
import { CloudflareDate } from './types';
export declare type EditUser = Partial<Pick<User, 'first_name' | 'last_name' | 'telephone' | 'country' | 'zipcode'>>;
export declare class User extends Base {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    telephone: string;
    country: string;
    zipcode: string;
    created_on: CloudflareDate;
    modified_on: CloudflareDate;
    two_factor_authentication_enabled: boolean;
    suspended: boolean;
    organizations: {}[];
    betas: string[];
    constructor(data?: User);
    details(): Promise<CloudflareResponse>;
    edit(user: EditUser): Promise<CloudflareResponse>;
}
