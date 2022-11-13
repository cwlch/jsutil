interface ParamType {
    [key: string]: unknown;
}
declare const objectSymbol: unique symbol;
declare const arraySymbol: unique symbol;
declare const paramSymbol: unique symbol;
declare class EsEnum {
    private [objectSymbol];
    private [arraySymbol];
    private [paramSymbol];
    constructor(params: ParamType);
    getOriginalObject(): ParamType;
    getEnumArray(): ParamType[];
    getEnumObject(): ParamType;
}
declare const _CreateEnum: (par: ParamType) => Readonly<EsEnum>;
export default _CreateEnum;
