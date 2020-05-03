import { API } from './api';
import { DataObject } from './types';
export declare abstract class Base {
    private _api;
    constructor(data?: DataObject<Base>);
    set api(api: API);
    get api(): API;
}
