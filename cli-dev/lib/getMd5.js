/**
 * @desc js仿照md5
 * @param { }
 * @return  { Number }
 */
export default () => {
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  return str
    .split('')
    .sort(function(v1, v2) {
      return Math.random() > 0.5
    })
    .join('')
    .slice(0, 32)
}
