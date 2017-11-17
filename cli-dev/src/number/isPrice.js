/**
   * @desc 验证价格
   * @param { number }  
   * @return  { Boolean }
   */
module.exports = val => {
  var res = '/^[0-9]+(.[0-9]{1,2})?$/'
  return res.test(val)
}
