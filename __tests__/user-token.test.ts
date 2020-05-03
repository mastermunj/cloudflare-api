import { Cloudflare } from '../src/cloudflare';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { CloudflareResponse } from '../src/cf-response';

import { CloudflareDate } from '../src/types';
import { UserToken } from '../src/user-token';

describe('User Tokens', () => {
  const cf = new Cloudflare({
    token: '460be8e549b9174ffa518e5e26a99e67',
  });
  const mock = new AxiosMockAdapter(axios);

  test(`Token List`, async () => {
    const mockResponse = new CloudflareResponse({
      result: [
        {
          id: '77a580f9498a6aad300d8ed8614a2c62',
          name: 'Readonly Token 2',
          status: 'active',
          issued_on: '2020-05-02T12:43:36Z',
          modified_on: '2020-05-02T12:43:36Z',
          last_used_on: null,
          expires_on: '2020-08-08T18:30:00Z',
          policies: [
            {
              id: '8b5e949648ad42b9d412aed72515d6f5',
              effect: 'allow',
              resources: { 'com.cloudflare.api.account.zone.*': '*' },
              permission_groups: [
                {
                  id: 'c8fed203ed3043cba015a93ad1616f1f',
                  name: 'Zone Read',
                },
                {
                  id: '82e64a83756745bbbb1c9c2701bf816b',
                  name: 'DNS Read',
                },
              ],
            },
          ],
        },
        {
          id: '5dff14da80c674f92d5a59502ae28542',
          name: 'Readonly Token 33',
          status: 'active',
          issued_on: '2020-05-02T12:55:40Z',
          modified_on: '2020-05-02T13:41:28Z',
          last_used_on: '2020-05-02T13:43:50Z',
          expires_on: '2020-07-08T18:30:00Z',
          policies: [
            {
              id: '51fe342a38098a81a9e3db7bfb53ed1c',
              effect: 'allow',
              resources: { 'com.cloudflare.api.account.zone.*': '*' },
              permission_groups: [
                {
                  id: 'c8fed203ed3043cba015a93ad1616f1f',
                  name: 'Zone Read',
                },
                {
                  id: '82e64a83756745bbbb1c9c2701bf816b',
                  name: 'DNS Read',
                },
              ],
            },
          ],
        },
      ],
      result_info: {
        page: 1,
        per_page: 20,
        total_pages: 1,
        count: 7,
        total_count: 7,
      },
      success: true,
      errors: [],
      messages: [],
    });

    mock.onGet('/user/tokens').reply(200, mockResponse);
    const response = await cf.userToken.list();
    expect(response).toEqual(mockResponse);
  });

  test(`Token Create`, async () => {
    const mockResponse = new CloudflareResponse({
      result: {
        id: '9b5a02d4f2a3b982095571fd261f992d',
        name: 'Readonly Token',
        status: 'active',
        issued_on: '2020-05-03T09:53:17Z',
        modified_on: '2020-05-03T09:53:17Z',
        last_used_on: null,
        expires_on: '2020-07-08T18:30:00Z',
        value: 'T1_Or5ES2a_MqR9pwO83SPwo8ynBg3r3etuvolLs',
        policies: [
          {
            id: 'f3dd4697bd3b9f71dd96247ff267e341',
            effect: 'allow',
            resources: { 'com.cloudflare.api.account.zone.*': '*' },
            permission_groups: [
              { id: 'c8fed203ed3043cba015a93ad1616f1f', name: 'Zone Read' },
              { id: '82e64a83756745bbbb1c9c2701bf816b', name: 'DNS Read' },
            ],
          },
        ],
      },
      success: true,
      errors: [],
      messages: [],
    });
    const token = {
      name: 'Readonly Token',
      policies: [
        {
          effect: 'allow',
          resources: {
            'com.cloudflare.api.account.zone.*': '*',
          },
          permission_groups: [
            {
              id: 'c8fed203ed3043cba015a93ad1616f1f',
              name: 'Zone Read',
            },
            {
              id: '82e64a83756745bbbb1c9c2701bf816b',
              name: 'DNS Read',
            },
          ],
        },
      ],
      expires_on: new CloudflareDate(2020, 7, 9),
    };

    mock.onPost('/user/tokens').reply(200, mockResponse);
    const response = await cf.userToken.create(token);
    expect(response).toEqual(mockResponse);
  });

  test(`Token Details`, async () => {
    const mockResponse = new CloudflareResponse({
      result: {
        id: '9b5a02d4f2a3b982095571fd261f992d',
        name: 'Readonly Token',
        status: 'active',
        issued_on: '2020-05-03T09:53:17Z',
        modified_on: '2020-05-03T09:53:17Z',
        last_used_on: null,
        expires_on: '2020-07-08T18:30:00Z',
        value: 'T1_Or5ES2a_MqR9pwO83SPwo8ynBg3r3etuvolLs',
        policies: [
          {
            id: 'f3dd4697bd3b9f71dd96247ff267e341',
            effect: 'allow',
            resources: { 'com.cloudflare.api.account.zone.*': '*' },
            permission_groups: [
              { id: 'c8fed203ed3043cba015a93ad1616f1f', name: 'Zone Read' },
              { id: '82e64a83756745bbbb1c9c2701bf816b', name: 'DNS Read' },
            ],
          },
        ],
      },
      success: true,
      errors: [],
      messages: [],
    });

    const identifier = '9b5a02d4f2a3b982095571fd261f992d';
    mock.onGet(`/user/tokens/${identifier}`).reply(200, mockResponse);
    const response = await cf.userToken.details(identifier);
    expect(response).toEqual(mockResponse);
  });

  test(`Token Update`, async () => {
    const mockResponse = new CloudflareResponse({
      result: {
        id: '9b5a02d4f2a3b982095571fd261f992d',
        name: 'Readonly Token',
        status: 'active',
        issued_on: '2020-05-03T09:53:17Z',
        modified_on: '2020-05-03T09:53:17Z',
        last_used_on: null,
        expires_on: '2020-07-08T18:30:00Z',
        value: 'T1_Or5ES2a_MqR9pwO83SPwo8ynBg3r3etuvolLs',
        policies: [
          {
            id: 'f3dd4697bd3b9f71dd96247ff267e341',
            effect: 'allow',
            resources: { 'com.cloudflare.api.account.zone.*': '*' },
            permission_groups: [
              { id: 'c8fed203ed3043cba015a93ad1616f1f', name: 'Zone Read' },
              { id: '82e64a83756745bbbb1c9c2701bf816b', name: 'DNS Read' },
            ],
          },
        ],
      },
      success: true,
      errors: [],
      messages: [],
    });

    const identifier = '9b5a02d4f2a3b982095571fd261f992d';
    const newName = 'Readonly Token 999';
    (mockResponse.result as UserToken).name = newName;
    mock.onPut(`/user/tokens/${identifier}`).reply(200, mockResponse);
    const response = await cf.userToken.update(identifier, {
      name: newName,
    });
    expect(response).toEqual(mockResponse);
  });

  test(`Token Delete`, async () => {
    const mockResponse = new CloudflareResponse({
      result: { id: '9b5a02d4f2a3b982095571fd261f992d' },
      success: true,
      errors: [],
      messages: [],
    });

    const identifier = '9b5a02d4f2a3b982095571fd261f992d';
    mock.onDelete(`/user/tokens/${identifier}`).reply(200, mockResponse);
    const response = await cf.userToken.delete(identifier);
    expect(response).toEqual(mockResponse);
  });

  test(`Token Roll`, async () => {
    const mockResponse = new CloudflareResponse({
      result: 'JPOOao10W0n98cCGR0z2_peLsBUdf_83b1m-v9A1',
      success: true,
      errors: [],
      messages: [],
    });

    const identifier = '9b5a02d4f2a3b982095571fd261f992d';
    mock.onPut(`/user/tokens/${identifier}/value`).reply(200, mockResponse);
    const response = await cf.userToken.roll(identifier);
    expect(response).toEqual(mockResponse);
  });

  test(`Token Verify`, async () => {
    const mockResponse = new CloudflareResponse({
      result: { id: '460be8e549b9174ffa518e5e26a99e67', status: 'active' },
      success: true,
      errors: [],
      messages: [
        {
          code: 10000,
          message: 'This API Token is valid and active',
          type: null,
        },
      ],
    });

    mock.onGet(`/user/tokens/verify`).reply(200, mockResponse);
    const response = await cf.userToken.verify();
    expect(response).toEqual(mockResponse);
  });
});
