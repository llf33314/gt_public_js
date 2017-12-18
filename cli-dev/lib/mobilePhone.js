/**
 * @desc 手机号码验证
 * @param { number }
 * @return  { Boolean }
 */
export default obj => {
  var isPhone =
    '/^((+?86)|((+86)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/'
  return isPhone.test(obj)
}
