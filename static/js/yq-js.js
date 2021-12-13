import $ from "./jquery.js"


function produce_pointJson(data) {
    var pointsJSON = {};
    var arr = [];
    data.forEach(function(row) {
        var adcode = row["address"]; //获取城市代码
        var num = row["mblog_total"]; //获取微博数，即为要生成的坐标数目
        var pos_num = row["pos_num"];
        var neg_num = row["neg_num"];
        var startdate = row["startdate"];
        var enddate = row["enddate"];
        let province_code = adcode.substring(0, 2) + "0000"; //省份代码
        var features = {};
        var geometry = {};
        var properties = {};
        features.type = "Feature";
        geometry.type = "Point";
        properties.adcode = adcode;
        properties.mblog_total = num;
        properties.pos_num = pos_num;
        properties.neg_num = neg_num;
        properties.startdate = startdate;
        properties.enddate = enddate;
        features.properties = properties;
        $.ajax({
            type: "get", //请求方式
            async: false,
            url: "../../static/data/publicSent/api/provinces/" + province_code + ".json",
            dataType: "json",
            success: function(result) {
                result = result.features;
                result.forEach(function(e) {
                    if (e['properties']['adcode'].toString() === adcode) {
                        geometry.coordinates = e['properties']['center'];
                        features.geometry = geometry;
                        arr.push(features);
                    }
                })
            }
        })
    });
    pointsJSON.type = "FeatureCollection";
    pointsJSON.features = arr;
    console.log(pointsJSON);
    return pointsJSON;
};

//从json数据中匹配键值对
//参数：需要匹配的相等的key，目标key，需要匹配的相等的value，json数组
function match_json(mkey, aim_key, value, json_array) {
    var n = 0;
    json_array.forEach(function(row) {
        if (row["properties"][mkey] === value) {
            n = row["properties"][aim_key];
        }
    });
    return n;
};




// //ajax获取json数据
//       //参数：json数据url
//       //返回json数据
// function getJson(url) {
// var data = [];
// $.ajax({
//     type: "GET", //请求方式
//     url: url, //地址，就是json文件的请求路径
//     async: false, //同步加载json
//     dataType: "json", //数据类型可以为 text xmljson  script  jsonp
//     success: function(result) {
//     //返回的参数就是 action里面所有的有get和set方法的参数
//     data = result.message;
//     }
// });
// return data;
// }

//将按周/月得到的全时间段的热力图数据按照当前时间筛选
//参数：全时间段的geojson数据
function filterGeojson(data) {
    let filitered = [];
    data.forEach(function(row) {
        if (row["properties"]["startdate"] === global.startdate) {
            filitered.push(row);
        }
    });
    return filitered;
};

export default {
    produce_pointJson,
    match_json,
    filterGeojson,
}