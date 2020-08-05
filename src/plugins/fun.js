// 日期格式化
export const dateformatting = (time) => {
  let date = new Date(time);
  let year = date.getFullYear(),
    month = date.getMonth() + 1, // 月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes();
  /*
  if (min.length == 1) {
      min = '0'+min;
  }
  */
  // sec = date.getSeconds();
  let newTime = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
  return newTime;
}

// 违禁词
const text = {

}


// 文字格式化
// 去电话，去违禁词，去联系方式，去外链，
