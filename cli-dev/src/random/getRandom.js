/**
 * @desc 闭区间  获取随机数
 * @param { min, max }
 * @return  { Number }
 */
export default (min, max) => {
  return Math.round(Math.random() * (max - min + 1) + min, 10)
}
