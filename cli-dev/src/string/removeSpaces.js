/**
 * @desc 去除空格
 * @param { value }
 * @return  { value }
 */
export default str => {
  return str.replace('/(^s*)|(s*$)/g', '')
}
