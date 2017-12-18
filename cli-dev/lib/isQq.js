// 检查字符串是否为合法QQ号码
export default str => {
  // 1 首位不能是0  ^[1-9]
  // 2 必须是 [5, 11] 位的数字  \d{4, 9}
  var reg = /^[1-9][0-9]{4,9}$/gim
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
