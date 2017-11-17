/**
   * @desc 固话验证
   * @param { number }  
   * @return  { Boolean }
   */
module.exports = obj => {
  var isfixed = '/^([0-9]{3,4})?[0-9]{7,8}$/'
  return isfixed.test(obj)
}
