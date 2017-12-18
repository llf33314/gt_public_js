// 去掉前后空格
export default str => {
  var reg = /^\s+|\s+$/g
  return str.replace(reg, '')
}
