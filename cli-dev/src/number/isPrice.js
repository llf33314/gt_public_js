/**
 * @desc 验证价格
 * @param { number }
 * @return  { Boolean }
 */
export default val => {
  var res = '/^[0-9]+(.[0-9]{1,2})?$/'
  return res.test(val)
}
