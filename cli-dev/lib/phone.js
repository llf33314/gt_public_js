/**
   * @desc 固话+手机验证
   * @param { number }  
   * @return  { Boolean }
   */
module.exports = obj => {
  var isPhone =
    '/^((+?86)|((+86)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/'
  var isfixed = '/^([0-9]{3,4})?[0-9]{7,8}$/'
  return isPhone.test(obj) || isfixed.test(obj) ? true : false
}
