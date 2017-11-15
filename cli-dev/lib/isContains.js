/**
   * @desc 是否包含字符串
   * @param { str, substr}  
   * @return  { Boolean }
   */
module.exports = (str, substr) => {
  return new RegExp(substr).test(str)
}
