export interface Class<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}

export interface ConstructorFunction<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any[]): T;
}

export type Constructor<T> = Class<T> | ConstructorFunction<T>;

export interface AnyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}

export type DeepPartial<T> =
  | Partial<T>
  | { [P in keyof T]?: DeepPartial<T[P]> };

export type DataObject<T extends object> = T | DeepPartial<T>;

export class CloudflareDate extends Date {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any) {
    super(args);
  }
  toISOString(): string {
    return super.toISOString().split('.')[0] + 'Z';
  }
}
