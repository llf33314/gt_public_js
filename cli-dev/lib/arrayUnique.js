/**
   * @desc 数组去重
   * @param { Array }  
   * @return  { Array }
   */
module.exports = array => {
  //数组去重
  var r = []
  for (var i = 0, l = array.length; i < l; i++) {
    for (var j = i + 1; j < l; j++) if (array[i] === array[j]) j = ++i
    r.push(array[i])
  }
  return r
}
