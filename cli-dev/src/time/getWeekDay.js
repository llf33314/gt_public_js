/**
   * @desc 获取星期几
   * @param { }  
   * @return  { week }
   */
module.exports = () => {
  var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return arr[new Date().getDay()]
}
