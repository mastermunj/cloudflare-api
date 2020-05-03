"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CloudflareDate extends Date {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args) {
        super(args);
    }
    toISOString() {
        return super.toISOString().split('.')[0] + 'Z';
    }
}
exports.CloudflareDate = CloudflareDate;
