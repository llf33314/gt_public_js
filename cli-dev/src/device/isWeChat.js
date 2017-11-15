/**
   * @desc 判断网页是否在微信浏览器打开
   * @param { }  
   * @return  { Boolean }
   */
module.exports = () => {
  return (
    navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ===
    'micromessenger'
  )
}
