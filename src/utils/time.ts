/*
 * @Author: your name
 * @Date: 2021-03-15 16:23:20
 * @LastEditTime: 2021-03-15 16:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/utils/time.ts
 */
// 转换年月日时分秒函数
export const Format = (datetime:any,fmt='yyyy-MM-dd hh:mm:ss')=> {
    if (parseInt(datetime)===datetime) {
      if (datetime.length===10) {
        datetime=parseInt(datetime)*1000;
      } else if(datetime.length===13) {
        datetime=parseInt(datetime);
      }
    }
    datetime=new Date(datetime);
    var o:any = {
    "M+" : datetime.getMonth()+1,                 //月份
    "d+" : datetime.getDate(),                    //日
    "h+" : datetime.getHours(),                   //小时
    "m+" : datetime.getMinutes(),                 //分
    "s+" : datetime.getSeconds(),                 //秒
    "q+" : Math.floor((datetime.getMonth()+3)/3), //季度
    "S"  : datetime.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (datetime.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}