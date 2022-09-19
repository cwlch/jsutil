export * from './tools/index';
declare const _default: {
    _IsEmpty: (params?: any) => boolean;
    _IsName: (val: string) => boolean;
    _IsPhone: (val: string) => boolean;
    _IsTel: (val: string) => boolean;
    _IsEmail: (val: string) => boolean;
    _IsIdCard: (val: string) => boolean;
    _IsMoney: (val: string | number) => boolean;
    _SetCookie: (key: string, value: string, { domain, path, expires, secure }?: any) => void;
    _SetSessionStorage: (key: string, val: any) => any;
    _SetLocalStorage: (key: string, val: any) => any;
    _GetCookie: (key: string) => any;
    _GetSessionStorage: (key: string) => any;
    _GetLocalStorage: (key: string) => any;
    _GetVarType: (o: any) => string;
    _GetUaInfo: () => object;
    _GetIdCardSex: (idCard: string, sexDesc?: string[]) => {
        sex: number;
        sexName: string;
    };
    _GetIdCardBrithDay: (idCard: string) => string;
    _FormatDate: (date: any, fmt?: string) => string;
    _FormatMoneySymbol: (money: string | number) => string | number | null;
    _FormatMoneyNumCapital: (n: number, h: string) => string;
    _FormatBlobUrl: (blob: any) => any;
    _FormatJsonSearch: (myJson: any, connector?: string) => string;
    _FormatSearchJson: (search: string) => object;
    _LimitInt: (val: string | number) => string;
    _LimitIntFloat: (val: string | number, digit: number) => number;
    _LimitPNInt: (val: string | number) => string;
    _LimitPNIntFloat: (val: string | number, digit: number) => number;
    _LimitMoney: (val: any) => any;
    _LoadScript: (scripts: string | string[]) => Promise<boolean>;
    _LoadScriptAwait: (scripts: string | string[]) => Promise<void>;
    _CreatUUID: (len?: number | undefined, radix?: number | undefined) => string;
    _Extend: (target: any, ...args: any) => object;
    _FillZero: (num: string | number) => string | number;
    _DownBlobFile: (blob: any, { name, suffix }?: any) => void;
    _LoactionReplace: (url: string) => void;
    _CopyText: (str: string) => boolean;
    _ToAsyncAwait: (promise: Promise<any>, fromatResult?: boolean) => Promise<any>;
    _Calc: (symbol: string, number1: number, number2: number, ...args: number[]) => number;
    _Debounce: (fn: (args: any) => void, delay: number, immediate?: boolean | undefined) => (args: any) => void;
    _Throttle: (fn: (args: any) => void, delay: number, type?: Number) => (args: any) => void;
};
export default _default;
