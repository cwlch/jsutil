"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loactionReplace = exports.downBlobFile = exports.fillZero = exports.extend = exports.creatUUID = exports.loadScriptAwait = exports.loadScript = exports.formatMoneyNumCapital = exports.formatSearchJson = exports.formatJsonSearch = exports.formatBlobUrl = exports.formatMoney = exports.formatDate = exports.getUAInfo = exports.getVarType = exports.getLocalStorage = exports.getSessionStorage = exports.getCookie = exports.setLocalStorage = exports.setSessionStorage = exports.setCookie = exports.isMoney = exports.isIdCard = exports.isEmail = exports.isTel = exports.isPhone = exports.isName = exports.isEmpty = void 0;
/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2020-12-03 17:11:26
 */
var is_empty_1 = __importDefault(require("./tools/is-empty"));
exports.isEmpty = is_empty_1.default;
var is_name_1 = __importDefault(require("./tools/is-name"));
exports.isName = is_name_1.default;
var is_phone_1 = __importDefault(require("./tools/is-phone"));
exports.isPhone = is_phone_1.default;
var is_tel_1 = __importDefault(require("./tools/is-tel"));
exports.isTel = is_tel_1.default;
var is_email_1 = __importDefault(require("./tools/is-email"));
exports.isEmail = is_email_1.default;
var is_idCard_1 = __importDefault(require("./tools/is-idCard"));
exports.isIdCard = is_idCard_1.default;
var is_money_1 = __importDefault(require("./tools/is-money"));
exports.isMoney = is_money_1.default;
var set_cookie_1 = __importDefault(require("./tools/set-cookie"));
exports.setCookie = set_cookie_1.default;
var set_sessionStorage_1 = __importDefault(require("./tools/set-sessionStorage"));
exports.setSessionStorage = set_sessionStorage_1.default;
var set_localStorage_1 = __importDefault(require("./tools/set-localStorage"));
exports.setLocalStorage = set_localStorage_1.default;
var get_cookie_1 = __importDefault(require("./tools/get-cookie"));
exports.getCookie = get_cookie_1.default;
var get_sessionStorage_1 = __importDefault(require("./tools/get-sessionStorage"));
exports.getSessionStorage = get_sessionStorage_1.default;
var get_localStorage_1 = __importDefault(require("./tools/get-localStorage"));
exports.getLocalStorage = get_localStorage_1.default;
var get_varType_1 = __importDefault(require("./tools/get-varType"));
exports.getVarType = get_varType_1.default;
var get_uaInfo_1 = __importDefault(require("./tools/get-uaInfo"));
exports.getUAInfo = get_uaInfo_1.default;
var format_blob_url_1 = __importDefault(require("./tools/format-blob-url"));
exports.formatBlobUrl = format_blob_url_1.default;
var format_json_search_1 = __importDefault(require("./tools/format-json-search"));
exports.formatJsonSearch = format_json_search_1.default;
var format_search_json_1 = __importDefault(require("./tools/format-search-json"));
exports.formatSearchJson = format_search_json_1.default;
var format_moneyNum_capital_1 = __importDefault(require("./tools/format-moneyNum-capital"));
exports.formatMoneyNumCapital = format_moneyNum_capital_1.default;
var format_date_1 = __importDefault(require("./tools/format-date"));
exports.formatDate = format_date_1.default;
var format_money_1 = __importDefault(require("./tools/format-money"));
exports.formatMoney = format_money_1.default;
var other_load_script_1 = __importDefault(require("./tools/other-load-script"));
exports.loadScript = other_load_script_1.default;
var other_load_scriptAwait_1 = __importDefault(require("./tools/other-load-scriptAwait"));
exports.loadScriptAwait = other_load_scriptAwait_1.default;
var other_creat_uuid_1 = __importDefault(require("./tools/other-creat-uuid"));
exports.creatUUID = other_creat_uuid_1.default;
var other_extend_1 = __importDefault(require("./tools/other-extend"));
exports.extend = other_extend_1.default;
var other_fillZero_1 = __importDefault(require("./tools/other-fillZero"));
exports.fillZero = other_fillZero_1.default;
var other_down_blobFile_1 = __importDefault(require("./tools/other-down-blobFile"));
exports.downBlobFile = other_down_blobFile_1.default;
var other_loaction_replace_1 = __importDefault(require("./tools/other-loaction-replace"));
exports.loactionReplace = other_loaction_replace_1.default;
