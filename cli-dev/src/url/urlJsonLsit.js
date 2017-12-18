/**
 * @desc 对象转为url字符串形式
 * @param { Obje}
 * @return  { String }
 */
export default obj => {
  return Object.keys(obj)
    .map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    })
    .join('&')
}
