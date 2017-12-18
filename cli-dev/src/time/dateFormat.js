/**
 * @Created by xiandan on 2017-10-09
 * @desc 根据时间,格式 戳返回日期
 * @param { date } - 时间戳  @param { fmt }  - 格式格式
 * @return { fmt }
 * @dome01 DateFormat(1507513800642, 'yyyy/MM/dd hh:mm:ss')  => 2017/10/09 09:50:00
 * @dome02 DateFormat(1507513800642, 'yyyy-MM-dd hh:mm:ss')  => 2017-10-09 09:50:00
 * @dome03 DateFormat(1507513800642, 'yyyy.MM.dd , hh-mm-ss') => 2017.10.09 , 09-50-00
 */

export default (date, fmt) => {
  if (!(date && true)) {
    return date
  }
  date = new Date(parseInt(date))
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if ('/(y+)/'.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  }
  return fmt
}
