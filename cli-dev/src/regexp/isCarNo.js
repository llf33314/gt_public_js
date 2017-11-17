/**
   * @desc 车牌号码验证 ,大小写不区分
   * @param { String value }  
   * @return  { Boolean }
   */
module.exports = value => {
  var reg =
    '/^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]$|^[a-zA-Z]{2}d{7}$ /'
  return reg.test(value)
}
