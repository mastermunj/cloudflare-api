import { CloudflareResponse } from './cf-response';
import { Base } from './base';
import { CloudflareDate } from './types';

export type CreateToken =
  | Pick<UserToken, 'name' | 'policies'>
  | Partial<Pick<UserToken, 'not_before' | 'expires_on' | 'condition'>>;

export type UpdateToken = Partial<UserToken>;

export class UserToken extends Base {
  id!: string;
  name!: string;
  status!: string;
  issued_on!: CloudflareDate;
  modified_on!: CloudflareDate;
  not_before!: CloudflareDate;
  expires_on!: CloudflareDate;
  policies!: {}[];
  condition!: {};

  constructor(data?: UserToken) {
    super(data);
  }

  async list(): Promise<CloudflareResponse> {
    return this.api.get('/user/tokens');
  }

  async create(token: CreateToken): Promise<CloudflareResponse> {
    return this.api.post('/user/tokens', token);
  }

  async details(identifier: string): Promise<CloudflareResponse> {
    return this.api.get(`/user/tokens/${identifier}`);
  }

  async update(
    identifier: string,
    token: UpdateToken,
  ): Promise<CloudflareResponse> {
    return this.api.put(`/user/tokens/${identifier}`, token);
  }

  async delete(identifier: string): Promise<CloudflareResponse> {
    return this.api.delete(`/user/tokens/${identifier}`);
  }

  async roll(identifier: string): Promise<CloudflareResponse> {
    return this.api.put(`/user/tokens/${identifier}/value`);
  }

  async verify(): Promise<CloudflareResponse> {
    return this.api.get(`/user/tokens/verify`);
  }
}
