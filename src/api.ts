import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import { CloudflareResponse } from './cf-response';

export type APIAuthOptions = {
  token?: string;
  authKey?: string;
  authEmail?: string;
  userServiceKey?: string;
};

export class API {
  private token: string | undefined;
  private authKey: string | undefined;
  private authEmail: string | undefined;
  private userServiceKey: string | undefined;

  private baseUrl = 'https://api.cloudflare.com/client/v4/';

  private _axios!: AxiosStatic;

  constructor(authOptions?: APIAuthOptions) {
    this.token = authOptions?.token;
    this.authKey = authOptions?.authKey;
    this.authEmail = authOptions?.authEmail;
    this.userServiceKey = authOptions?.userServiceKey;

    this.axios = axios;
  }

  set axios(axios: AxiosStatic) {
    this._axios = axios;
  }

  get axios(): AxiosStatic {
    return this._axios;
  }

  private getAxiosConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    const configDefault: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (this.token !== undefined) {
      configDefault.headers['Authorization'] = `Bearer ${this.token}`;
    } else if (this.authKey !== undefined && this.authEmail !== undefined) {
      configDefault.headers['X-Auth-Key'] = this.authKey;
      configDefault.headers['X-Auth-Email'] = this.authEmail;
    } else if (this.userServiceKey !== undefined) {
      configDefault.headers['X-Auth-User-Service-Key'] = this.userServiceKey;
    } else {
      throw new Error('Please provide one of the authentication parameters.');
    }
    return Object.assign({}, configDefault, config);
  }

  private async request(
    config: AxiosRequestConfig,
  ): Promise<CloudflareResponse> {
    try {
      const response = await this.axios.request(config);
      return new CloudflareResponse(response.data);
    } catch (e) {
      return new CloudflareResponse(e.response.data);
    }
  }

  async get(endpoint: string, data?: {}): Promise<CloudflareResponse> {
    return this.request(
      this.getAxiosConfig({
        method: 'get',
        url: endpoint,
        data: data,
      }),
    );
  }

  async patch(endpoint: string, data: {}): Promise<CloudflareResponse> {
    return this.request(
      this.getAxiosConfig({
        method: 'patch',
        url: endpoint,
        data: data,
      }),
    );
  }

  async post(endpoint: string, data: {}): Promise<CloudflareResponse> {
    return this.request(
      this.getAxiosConfig({
        method: 'post',
        url: endpoint,
        data: data,
      }),
    );
  }

  async put(endpoint: string, data?: {}): Promise<CloudflareResponse> {
    return this.request(
      this.getAxiosConfig({
        method: 'put',
        url: endpoint,
        data: data,
      }),
    );
  }

  async delete(endpoint: string): Promise<CloudflareResponse> {
    return this.request(
      this.getAxiosConfig({
        method: 'delete',
        url: endpoint,
      }),
    );
  }
}
