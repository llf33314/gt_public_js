/**
 * @Created by xiandan on 2017-10-09
 * @desc 验证数据类型
 * @param { val }  需要判断的值
 * @return  返回true or false
 */
module.exports = val => {
    return Object.prototype.toString.call(val) === '[object Object]' ? true : false
}
  