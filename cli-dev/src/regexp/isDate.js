// 检查字符串是否为合法日期格式 yyyy-mm-dd
export default str => {
  var reg = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
