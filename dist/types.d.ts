export interface Class<T> {
    new (...args: any[]): T;
    [property: string]: any;
}
export interface ConstructorFunction<T> {
    (...args: any[]): T;
}
export declare type Constructor<T> = Class<T> | ConstructorFunction<T>;
export interface AnyObject {
    [property: string]: any;
}
export declare type DeepPartial<T> = Partial<T> | {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare type DataObject<T extends object> = T | DeepPartial<T>;
export declare class CloudflareDate extends Date {
    constructor(...args: any);
    toISOString(): string;
}
