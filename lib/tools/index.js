/*
 * @Author: ch
 * @Date: 2020-11-07 16:41:04
 * @Last Modified by: ch
 * @Last Modified time: 2021-01-21 09:58:33
 */
import _IsEmpty from './is-empty';
import _IsName from './is-name';
import _IsPhone from './is-phone';
import _IsTel from './is-tel';
import _IsEmail from './is-email';
import _IsIdCard from './is-id-card';
import _IsMoney from './is-money';
import _SetCookie from './set-cookie';
import _SetSessionStorage from './set-session-storage';
import _SetLocalStorage from './set-local-storage';
import _GetCookie from './get-cookie';
import _GetSessionStorage from './get-session-storage';
import _GetLocalStorage from './get-local-storage';
import _GetVarType from './get-var-type';
import _GetUaInfo from './get-ua-info';
import _GetIdCardSex from './get-id-card-sex';
import _GetIdCardBrithDay from './get-id-card-brith-day';
import _FormatBlobUrl from './format-blob-url';
import _FormatJsonSearch from './format-json-search';
import _FormatSearchJson from './format-search-json';
import _FormatMoneyNumCapital from './format-money-num-capital';
import _FormatDate from './format-date';
import _FormatMoneySymbol from './format-money-symbol';
import _LimitInt from './limit-int';
import _LimitIntFloat from './limit-int-float';
import _LimitPNInt from './limit-p-n-int';
import _LimitPNIntFloat from './limit-p-n-int-float';
import _LimitMoney from './limit-money';
import _LoadScript from './load-script';
import _LoadScriptAwait from './load-script-await';
import _CreatUUID from './creat-uuid';
import _Extend from './extend';
import _FillZero from './fill-zero';
import _DownBlobFile from './down-blob-file';
import _LoactionReplace from './loaction-replace';
import _CopyText from './copy-text';
import _ToAsyncAwait from './to-async-await';
import _Calc from './calc';
import _Debounce from './debounce';
import _Throttle from './throttle';
export { 
// 验证是否为空
_IsEmpty, 
// 验证姓名格式
_IsName, 
// 验证手机
_IsPhone, 
// 验证座机号
_IsTel, 
// 验证邮箱地址
_IsEmail, 
// 验证身份证号
_IsIdCard, 
// 验证金额格式
_IsMoney, 
// 设置cookie
_SetCookie, 
// 设置seesionStorage，json格式
_SetSessionStorage, 
// 设置localStorage，JSON格式
_SetLocalStorage, 
// 获取cookie
_GetCookie, 
// 获取sessionStorage
_GetSessionStorage, 
// 获取localStorage
_GetLocalStorage, 
// 获取变量类型
_GetVarType, 
// 获取userAgent信息
_GetUaInfo, 
// 获取身份证号性别
_GetIdCardSex, 
// 获取身份证号生日
_GetIdCardBrithDay, 
// 格式化时间
_FormatDate, 
// 格式化金额，添加千分符
_FormatMoneySymbol, 
// 数字金额转中文大写
_FormatMoneyNumCapital, 
// 二进制文件流转可访问URL
_FormatBlobUrl, 
// JSON转URLSearch格式串
_FormatJsonSearch, 
// URLSearch串转JSON对象
_FormatSearchJson, 
// 限制输入整数
_LimitInt, 
// 限制输入整数和浮点数
_LimitIntFloat, 
// 限制输入正负整数
_LimitPNInt, 
// 限制输入正负整数及浮点数
_LimitPNIntFloat, 
// 限制输入金额
_LimitMoney, 
// 动态加载JS 并联
_LoadScript, 
// 动态加载JS 串联
_LoadScriptAwait, 
// 创建UUID
_CreatUUID, 
// 对象拷贝
_Extend, 
// 个位数补0
_FillZero, 
// 下载二进制文件流文件
_DownBlobFile, 
// 浏览器replace方法
_LoactionReplace, 
// 文本拷贝
_CopyText, 
// 同步方法
_ToAsyncAwait, 
// 精度计算
_Calc, 
// 防抖
_Debounce, 
// 节流
_Throttle, };
