import { User } from './user';
import { CloudflareDate, AnyObject } from './types';
import { UserToken } from './user-token';
declare type Result = User | UserToken | AnyObject | string | null;
export declare class CloudflareResponse {
    result: Result;
    success: boolean;
    errors: {
        code?: number;
        message?: string;
        [key: string]: any;
    }[];
    messages: {
        [key: string]: any;
    }[];
    result_info?: {
        page?: number;
        per_page?: number;
        total_pages?: number;
        count?: number;
        total_count?: number;
        cursor?: string;
        cursors?: {
            after?: string;
            before?: string;
        };
        scanned_range?: {
            since?: CloudflareDate;
            until?: CloudflareDate;
        };
    };
    constructor(response: CloudflareResponse);
}
export {};
