import { CloudflareResponse } from './cf-response';
import { Base } from './base';
import { CloudflareDate } from './types';

export type EditUser = Partial<
  Pick<User, 'first_name' | 'last_name' | 'telephone' | 'country' | 'zipcode'>
>;

export class User extends Base {
  id!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  username!: string;
  telephone!: string;
  country!: string;
  zipcode!: string;
  created_on!: CloudflareDate;
  modified_on!: CloudflareDate;
  two_factor_authentication_enabled!: boolean;
  suspended!: boolean;
  organizations!: {}[];
  betas!: string[];

  constructor(data?: User) {
    super(data);
  }

  async details(): Promise<CloudflareResponse> {
    return this.api.get('/user');
  }

  async edit(user: EditUser): Promise<CloudflareResponse> {
    return this.api.patch('/user', user);
  }
}
