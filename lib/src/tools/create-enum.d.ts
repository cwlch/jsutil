interface ParamType {
    [key: string]: unknown;
}
declare const finalSymbol: unique symbol;
declare const paramSymbol: unique symbol;
declare class EsEnum {
    private [finalSymbol];
    private [paramSymbol];
    constructor(params: ParamType);
    getOriginalObject(): ParamType;
    getEnumObject(): ParamType;
}
declare const _CreateEnum: (par: ParamType) => Readonly<EsEnum>;
export default _CreateEnum;
