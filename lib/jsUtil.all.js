(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
     * @Author: ch
     * @Date: 2020-11-07 16:41:04
     * @Last Modified by: ch
     * @Last Modified time: 2020-12-03 17:21:56
     */
    var is_empty_1 = __importDefault(require("./tools/is-empty"));
    var is_name_1 = __importDefault(require("./tools/is-name"));
    var is_phone_1 = __importDefault(require("./tools/is-phone"));
    var is_tel_1 = __importDefault(require("./tools/is-tel"));
    var is_email_1 = __importDefault(require("./tools/is-email"));
    var is_idCard_1 = __importDefault(require("./tools/is-idCard"));
    var is_money_1 = __importDefault(require("./tools/is-money"));
    var set_cookie_1 = __importDefault(require("./tools/set-cookie"));
    var set_sessionStorage_1 = __importDefault(require("./tools/set-sessionStorage"));
    var set_localStorage_1 = __importDefault(require("./tools/set-localStorage"));
    var get_cookie_1 = __importDefault(require("./tools/get-cookie"));
    var get_sessionStorage_1 = __importDefault(require("./tools/get-sessionStorage"));
    var get_localStorage_1 = __importDefault(require("./tools/get-localStorage"));
    var get_varType_1 = __importDefault(require("./tools/get-varType"));
    var get_uaInfo_1 = __importDefault(require("./tools/get-uaInfo"));
    var format_blob_url_1 = __importDefault(require("./tools/format-blob-url"));
    var format_json_search_1 = __importDefault(require("./tools/format-json-search"));
    var format_search_json_1 = __importDefault(require("./tools/format-search-json"));
    var format_moneyNum_capital_1 = __importDefault(require("./tools/format-moneyNum-capital"));
    var format_date_1 = __importDefault(require("./tools/format-date"));
    var format_money_1 = __importDefault(require("./tools/format-money"));
    var other_load_script_1 = __importDefault(require("./tools/other-load-script"));
    var other_load_scriptAwait_1 = __importDefault(require("./tools/other-load-scriptAwait"));
    var other_creat_uuid_1 = __importDefault(require("./tools/other-creat-uuid"));
    var other_extend_1 = __importDefault(require("./tools/other-extend"));
    var other_fillZero_1 = __importDefault(require("./tools/other-fillZero"));
    var other_down_blobFile_1 = __importDefault(require("./tools/other-down-blobFile"));
    var other_loaction_replace_1 = __importDefault(require("./tools/other-loaction-replace"));
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
        isIdCard: is_idCard_1.default,
        // 验证金额格式
        isMoney: is_money_1.default,
        // 设置cookie
        setCookie: set_cookie_1.default,
        // 设置seesionStorage，json格式
        setSessionStorage: set_sessionStorage_1.default,
        // 设置localStorage，JSON格式
        setLocalStorage: set_localStorage_1.default,
        // 获取cookie
        getCookie: get_cookie_1.default,
        // 获取sessionStorage
        getSessionStorage: get_sessionStorage_1.default,
        // 获取localStorage
        getLocalStorage: get_localStorage_1.default,
        // 获取变量类型
        getVarType: get_varType_1.default,
        // 获取userAgent信息
        getUAInfo: get_uaInfo_1.default,
        // 格式化时间
        formatDate: format_date_1.default,
        // 格式化金额，添加千分符
        formatMoney: format_money_1.default,
        // 二进制文件流转可访问URL
        formatBlobUrl: format_blob_url_1.default,
        // JSON转URLSearch格式串
        formatJsonSearch: format_json_search_1.default,
        // URLSearch串转JSON对象
        formatSearchJson: format_search_json_1.default,
        // 数字金额转中文大写
        formatMoneyNumCapital: format_moneyNum_capital_1.default,
        // 动态加载JS 并联
        loadScript: other_load_script_1.default,
        // 动态加载JS 串联
        loadScriptAwait: other_load_scriptAwait_1.default,
        // 创建UUID
        creatUUID: other_creat_uuid_1.default,
        // 对象拷贝
        extend: other_extend_1.default,
        // 个位数补0
        fillZero: other_fillZero_1.default,
        // 下载二进制文件流文件
        downBlobFile: other_down_blobFile_1.default,
        // 浏览器replace方法
        loactionReplace: other_loaction_replace_1.default
    };

})));
