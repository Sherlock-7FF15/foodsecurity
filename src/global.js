const eventId = 'E0001';
const datasetId = 'E00010001'
const areaId = '100000'
const startdate = "2018-11-05";
const enddate = "2019-04-21"
const timeflag = 4;
const data = [];
const mpos_num = 0;
const mneg_num = 0;

export default {
    eventId, //食品安全事件id
    datasetId, //数据集id
    areaId, //当前城市编码
    startdate, //开始日期
    enddate, //结束日期
    timeflag, //时间标签，0表示得到以周为单位的数据
    //1表示得到以月为单位的数据
    //2表示得到6个月为单位的数据
    //3表示得到以天为单位的数据
    //4表示默认累加的数据
    data,
    mpos_num,
    mneg_num,
}