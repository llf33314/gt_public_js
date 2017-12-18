// 检查字符串是否存在中文
export default str => {
  var reg = /[\u4e00-\u9fa5]/gm
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
