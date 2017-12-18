/**
 * @desc webpack打包入口文件
 */
//---------- array ----------
import arrayEqual from './array/arrayEqual'
import arrayUnique from './array/arrayUnique'
import isArray from './array/isArray'
//---------- device ----------
import getExplore from './device/getExplore'
import getOS from './device/getOS'
import isWeChat from './device/isWeChat'
//---------- keycode ----------
import getKeyName from './keycode/getKeyName'
//---------- number ----------
import digitUppercase from './number/digitUppercase'
import getMd5 from './number/getMd5'
import isNumber from './number/isNumber'
import isPrice from './number/isPrice'
//---------- object ----------
import deepClone from './object/deepClone'
import isEmptyObject from './object/isEmptyObject'
import isObject from './object/isObject'
import stringfyQueryString from './object/stringfyQueryString'
//---------- random ----------
import getRandom from './random/getRandom'
import randomColor from './random/randomColor'
//---------- regexp ----------
import fixedTelephone from './regexp/fixedTelephone'
import isCarNo from './regexp/isCarNo'
import isEmail from './regexp/isEmail'
import isIdCard from './regexp/isIdCard'
import mobilePhone from './regexp/mobilePhone'
import phone from './regexp/phone'
//---------- string ----------
import isContains from './string/isContains'
import isString from './string/isString'
import removeSpaces from './string/removeSpaces'
//---------- time ----------
import dateFormat from './time/dateFormat'
import formatPassTime from './time/formatPassTime'
import formatRemainTime from './time/formatRemainTime'
import getWeekDay from './time/getWeekDay'
//---------- url ----------
import isUrl from './url/isUrl'
import parseQueryString from './url/parseQueryString'
import urlJsonLsit from './url/urlJsonLsit'

export {
  //array
  arrayEqual,
  arrayUnique,
  isArray,
  //device
  getExplore,
  getOS,
  isWeChat,
  //keycode
  getKeyName,
  //number
  digitUppercase,
  getMd5,
  isNumber,
  isPrice,
  //object
  deepClone,
  isEmptyObject,
  isObject,
  stringfyQueryString,
  //random
  getRandom,
  randomColor,
  //regexp
  fixedTelephone,
  isCarNo,
  isEmail,
  isIdCard,
  mobilePhone,
  phone,
  //string
  isContains,
  isString,
  removeSpaces,
  //time
  dateFormat,
  formatPassTime,
  formatRemainTime,
  getWeekDay,
  //url
  isUrl,
  parseQueryString,
  urlJsonLsit
}
