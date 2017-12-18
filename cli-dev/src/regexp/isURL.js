// 检查字符串是否为合法URL
export default str => {
  var reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
