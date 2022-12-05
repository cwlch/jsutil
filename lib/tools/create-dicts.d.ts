interface ParamType {
    [key: string]: unknown;
}
interface ResultType extends ParamType {
}
declare const objectSymbol: unique symbol;
declare const arraySymbol: unique symbol;
declare const exampleSymbol: unique symbol;
declare class Dicts {
    private [objectSymbol];
    private [arraySymbol];
    private [exampleSymbol];
    constructor(params: ParamType);
    getArray(): ResultType[];
    getObject(): ResultType;
}
declare const _CreateDicts: (par: ParamType) => Dicts;
export default _CreateDicts;
