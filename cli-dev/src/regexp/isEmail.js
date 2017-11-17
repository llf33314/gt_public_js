/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
module.exports = str => {
  return '/w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/'.test(str)
}
