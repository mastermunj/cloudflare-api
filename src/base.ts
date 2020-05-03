import { API } from './api';
import { DataObject } from './types';

export abstract class Base {
  private _api!: API;

  constructor(data?: DataObject<Base>) {
    Object.assign(this, data);
  }

  set api(api: API) {
    this._api = api;
  }

  get api(): API {
    return this._api;
  }
}
