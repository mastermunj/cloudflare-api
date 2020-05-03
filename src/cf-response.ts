import { User } from './user';
import { CloudflareDate, AnyObject } from './types';
import { UserToken } from './user-token';

type Result = User | UserToken | AnyObject | string | null;

export class CloudflareResponse {
  result!: Result;
  success!: boolean;
  errors!: {
    code?: number;
    message?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
  messages!: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  constructor(response: CloudflareResponse) {
    Object.assign(this, response);
  }
}
