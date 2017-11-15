/**
 * @Created by SlaneYang
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */

module.exports = obj => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false
  return !Object.keys(obj).length
}
