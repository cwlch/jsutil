/**
 * 创建一个UUID
 * @param len 长度
 * @param radix  基数
 *
 * uuid() // EB4479E4-CA4A-4377-AC97-5C3424CCA6EF
 * uuid(8, 2)  //  "10010100000011100011101010001011"
 * uuid(8, 10) // "82841022800573848567251899801403"
 * uuid(8, 16) // "F743098834031FDFCE1D8976F9769222"
 */
declare const _CreateUUID: (len?: number, radix?: number) => string;
export default _CreateUUID;
