// 检查字符串是否为合法邮政编码
export default str => {
  // 起始数字不能为0，然后是5个数字  [1-9]\d{5}
  var reg = /^[1-9]\d{5}$/g
  // var reg = /^[1-9]\d{5}(?!\d)$/;
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
