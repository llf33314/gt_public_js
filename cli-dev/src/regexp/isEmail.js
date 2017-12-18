/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
export default str => {
  return '/w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/'.test(str)
}
