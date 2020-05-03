import { API, APIAuthOptions } from './api';
import { User } from './user';
import { UserToken } from './user-token';

export class Cloudflare {
  private _api: API;
  private _user!: User;
  private _userToken!: UserToken;

  constructor(authOptions?: APIAuthOptions) {
    this._api = new API(authOptions);
  }

  get api(): API {
    return this._api;
  }

  get user(): User {
    if (!(this._user instanceof User)) {
      this._user = new User();
      this._user.api = this.api;
    }
    return this._user;
  }

  get userToken(): UserToken {
    if (!(this._userToken instanceof UserToken)) {
      this._userToken = new UserToken();
      this._userToken.api = this.api;
    }
    return this._userToken;
  }
}
