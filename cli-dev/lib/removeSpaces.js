/**
   * @desc 去除空格
   * @param { value }  
   * @return  { value }
   */
module.exports = str => {
  return str.replace('/(^\s*)|(\s*$)/g', '')
}
