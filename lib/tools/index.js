"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:58:33
 */
var is_empty_1 = __importDefault(require("./is-empty"));
var is_name_1 = __importDefault(require("./is-name"));
var is_phone_1 = __importDefault(require("./is-phone"));
var is_tel_1 = __importDefault(require("./is-tel"));
var is_email_1 = __importDefault(require("./is-email"));
var is_id_card_1 = __importDefault(require("./is-id-card"));
var is_money_1 = __importDefault(require("./is-money"));
var set_cookie_1 = __importDefault(require("./set-cookie"));
var set_session_storage_1 = __importDefault(require("./set-session-storage"));
var set_local_storage_1 = __importDefault(require("./set-local-storage"));
var get_cookie_1 = __importDefault(require("./get-cookie"));
var get_session_storage_1 = __importDefault(require("./get-session-storage"));
var get_local_storage_1 = __importDefault(require("./get-local-storage"));
var get_var_type_1 = __importDefault(require("./get-var-type"));
var get_ua_info_1 = __importDefault(require("./get-ua-info"));
var format_blob_url_1 = __importDefault(require("./format-blob-url"));
var format_json_search_1 = __importDefault(require("./format-json-search"));
var format_search_json_1 = __importDefault(require("./format-search-json"));
var format_money_num_capital_1 = __importDefault(require("./format-money-num-capital"));
var format_date_1 = __importDefault(require("./format-date"));
var format_money_symbol_1 = __importDefault(require("./format-money-symbol"));
var limit_int_1 = __importDefault(require("./limit-int"));
var limit_int_float_1 = __importDefault(require("./limit-int-float"));
var limit_p_n_int_1 = __importDefault(require("./limit-p-n-int"));
var limit_p_n_int_float_1 = __importDefault(require("./limit-p-n-int-float"));
var load_script_1 = __importDefault(require("./load-script"));
var load_script_await_1 = __importDefault(require("./load-script-await"));
var creat_uuid_1 = __importDefault(require("./creat-uuid"));
var extend_1 = __importDefault(require("./extend"));
var fill_zero_1 = __importDefault(require("./fill-zero"));
var down_blob_file_1 = __importDefault(require("./down-blob-file"));
var loaction_replace_1 = __importDefault(require("./loaction-replace"));
var copy_text_1 = __importDefault(require("./copy-text"));
exports.default = {
    // 验证是否为空
    isEmpty: is_empty_1.default,
    // 验证姓名格式
    isName: is_name_1.default,
    // 验证手机
    isPhone: is_phone_1.default,
    // 验证座机号
    isTel: is_tel_1.default,
    // 验证邮箱地址
    isEmail: is_email_1.default,
    // 验证身份证号
    isIdCard: is_id_card_1.default,
    // 验证金额格式
    isMoney: is_money_1.default,
    // 设置cookie
    setCookie: set_cookie_1.default,
    // 设置seesionStorage，json格式
    setSessionStorage: set_session_storage_1.default,
    // 设置localStorage，JSON格式
    setLocalStorage: set_local_storage_1.default,
    // 获取cookie
    getCookie: get_cookie_1.default,
    // 获取sessionStorage
    getSessionStorage: get_session_storage_1.default,
    // 获取localStorage
    getLocalStorage: get_local_storage_1.default,
    // 获取变量类型
    getVarType: get_var_type_1.default,
    // 获取userAgent信息
    getUaInfo: get_ua_info_1.default,
    // 格式化时间
    formatDate: format_date_1.default,
    // 格式化金额，添加千分符
    formatMoneySymbol: format_money_symbol_1.default,
    // 数字金额转中文大写
    formatMoneyNumCapital: format_money_num_capital_1.default,
    // 二进制文件流转可访问URL
    formatBlobUrl: format_blob_url_1.default,
    // JSON转URLSearch格式串
    formatJsonSearch: format_json_search_1.default,
    // URLSearch串转JSON对象
    formatSearchJson: format_search_json_1.default,
    // 限制输入整数
    limitInt: limit_int_1.default,
    // 限制输入整数和浮点数
    limitIntFloat: limit_int_float_1.default,
    // 限制输入正负整数
    limitPNInt: limit_p_n_int_1.default,
    // 限制输入正负整数及浮点数
    limitPNIntFloat: limit_p_n_int_float_1.default,
    // 动态加载JS 并联
    loadScript: load_script_1.default,
    // 动态加载JS 串联
    loadScriptAwait: load_script_await_1.default,
    // 创建UUID
    creatUuid: creat_uuid_1.default,
    // 对象拷贝
    extend: extend_1.default,
    // 个位数补0
    fillZero: fill_zero_1.default,
    // 下载二进制文件流文件
    downBlobFile: down_blob_file_1.default,
    // 浏览器replace方法
    loactionReplace: loaction_replace_1.default,
    // 文本拷贝
    copyText: copy_text_1.default,
};
