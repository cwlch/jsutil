export * from './tools/index';
declare const _default: {
    isEmpty: (params?: any) => boolean;
    isName: (val: string) => boolean;
    isPhone: (val: string) => boolean;
    isTel: (val: string) => boolean;
    isEmail: (val: string) => boolean;
    isIdCard: (val: string) => boolean;
    isMoney: (val: string | number) => boolean;
    setCookie: (key: string, value: string, { domain, path, expires, secure }?: any) => void;
    setSessionStorage: (key: string, val: any) => any;
    setLocalStorage: (key: string, val: any) => any;
    getCookie: (key: string) => any;
    getSessionStorage: (key: string) => any;
    getLocalStorage: (key: string) => any;
    getVarType: (o: any) => string;
    getUaInfo: () => object;
    getIdCardSex: (idCard: string, sexDesc?: string[]) => {
        sex: number;
        sexName: string;
    };
    getIdCardBrithDay: (idCard: string) => string;
    formatDate: (date: any, fmt?: string) => string;
    formatMoneySymbol: (money: string | number) => string | number | null;
    formatMoneyNumCapital: (n: number, h: string) => string;
    formatBlobUrl: (blob: any) => any;
    formatJsonSearch: (myJson: any, connector?: string) => string;
    formatSearchJson: (search: string) => object;
    limitInt: (val: string | number) => string;
    limitIntFloat: (val: string | number, digit: number) => number;
    limitPNInt: (val: string | number) => string;
    limitPNIntFloat: (val: string | number, digit: number) => number;
    loadScript: (scripts: string | string[]) => Promise<boolean>;
    loadScriptAwait: (scripts: string | string[]) => Promise<void>;
    creatUuid: (len?: number | undefined, radix?: number | undefined) => string;
    extend: (target: any, ...args: any) => object;
    fillZero: (num: string | number) => string | number;
    downBlobFile: (blob: any, { name, suffix }?: any) => void;
    loactionReplace: (url: string) => void;
    copyText: (str: string) => boolean;
    toAsyncAwait: (promise: Promise<any>, fromatResult?: boolean) => Promise<any>;
};
export default _default;
