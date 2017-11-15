/**
 * @desc webpack打包入口文件
 */
//---------- array ----------
const arrayEqual = require('./array/arrayEqual')
const arrayUnique = require('./array/arrayUnique')
const isArray = require('./array/isArray')
//---------- device ----------
const getExplore = require('./device/getExplore')
const getOS = require('./device/getOS')
const isWeChat = require('./device/isWeChat')
//---------- keycode ----------
const getKeyName = require('./keycode/getKeyName')
//---------- number ----------
const digitUppercase = require('./number/digitUppercase')
const getMd5 = require('./number/getMd5')
const isNumber = require('./number/isNumber')
const isPrice = require('./number/isPrice')
//---------- object ----------
const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')
const isObject = require('./object/isObject')
const stringfyQueryString = require('./object/stringfyQueryString')
//---------- random ----------
const getRandom = require('./random/getRandom')
const randomColor = require('./random/randomColor')
//---------- regexp ----------
const fixedTelephone = require('./regexp/fixedTelephone')
const isCarNo = require('./regexp/isCarNo')
const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const mobilePhone = require('./regexp/mobilePhone')
const phone = require('./regexp/phone')
//---------- string ----------
const isContains = require('./string/isContains')
const isString = require('./string/isString')
const removeSpaces = require('./string/removeSpaces')
//---------- time ----------
const dateFormat = require('./time/dateFormat')
const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')
const getWeekDay = require('./time/getWeekDay')
//---------- url ----------
const isUrl = require('./url/isUrl')
const parseQueryString = require('./url/parseQueryString')
const urlJsonLsit = require('./url/urlJsonLsit')

module.exports = {
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
  urlJsonLsit,
}
