import { Cloudflare } from '../src/cloudflare';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { CloudflareResponse } from '../src/cf-response';

import { cloneDeep } from 'lodash';
import { User } from '../src/user';

describe('User', () => {
  const cf = new Cloudflare({
    token: '460be8e549b9174ffa518e5e26a99e67',
  });
  const mock = new AxiosMockAdapter(axios);

  const mockResponse = new CloudflareResponse({
    result: {
      id: 'b5806d458924db621bbda07e7046f6b4',
      email: 'test@mail.com',
      username: 'a545a9929b578ba5099ea283f3fc2303',
      first_name: 'First',
      last_name: 'Man',
      telephone: '9876543210',
      country: 'IN',
      zipcode: '400001',
      two_factor_authentication_enabled: true,
      two_factor_authentication_locked: false,
      created_on: '2019-09-29T09:35:27.823360Z',
      modified_on: '2020-05-02T11:20:03.941980Z',
      organizations: [],
      has_pro_zones: false,
      has_business_zones: false,
      has_enterprise_zones: false,
      suspended: false,
      betas: ['api_tokens_beta'],
    },
    success: true,
    errors: [],
    messages: [],
    result_info: {},
  });

  test(`Get User Details`, async () => {
    mock.onGet('/user').reply(200, mockResponse);
    const response = await cf.user.details();
    expect(response).toEqual(mockResponse);
  });

  test(`Edit User Details`, async () => {
    const country = 'US';
    const userEditResponse = cloneDeep(mockResponse);
    (userEditResponse.result as User).country = country;

    mock.onPatch('/user').reply(200, userEditResponse);
    const response = await cf.user.edit({ country });
    expect(response).toEqual(userEditResponse);
  });
});
