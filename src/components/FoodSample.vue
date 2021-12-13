<style scoped>
@import "../../static/css/bootstrap.css";
@import "../../static/css/bootstrap.min.css";
@import "../../static/css/animate.css";
@import "../../static/css/style.css";
@import "../../static/css/jcfx.css";
@import "../../static/css/pe-icons.css";
@import "../../static/css/font-awesome-4.1.0/css/font-awesome.min.css";
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css");

#control {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #343332;
    height: 100%;
}
#jcmap {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    zoom: 1;
}
#jc-menu {
    position: absolute;
    top: 80px;
    left: 30px;
    border-radius: 40px;
    background: #fff;
    padding: 10px;
    font-family: "Open Sans", sans-serif;
}

.nav-content-title {
    font-size: 15px;
    padding-top: 5px;
    font-weight: bold;
}

.block {
    margin: 20px 0;
}

.food-table {
    height: 290px;
}

.el-picker-panel {
    margin-left: 20px;
}
.area-province {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    transform: translateX(-50%);
    width: fit-content;
    font-size: 85%;
    font-weight: bold;
    background: #0d1a287d;
    padding: 6px;
    border-radius: 5px;
    border: solid #666560 2px;
}

#jc-legend {
    position: absolute;
    width: 150px;
    margin: 0px;
    padding: 5px;
    bottom: 30px;
    right: 50px;
}
.jc-hd {
    margin-bottom: 2px;
    font-size: 14px;
    color: #fffabf;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 400;
    display: block;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    /* float: left; */
    clear: both;
    text-decoration: none;
    text-align: center;
}
.jc-hd img {
    padding-right: 3px;
}
.timeblock {
    position: absolute;
    width: 250px;
    top: 20px;
    left: 620px;
    z-index: 9999;
}
@-webkit-keyframes move_right {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@keyframes move_right {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@-webkit-keyframes move_left {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}

@keyframes move_left {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}
.move_right {
    -webkit-animation-name: move_right;
    animation-name: move_right;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.move_left {
    -webkit-animation-name: move_left;
    animation-name: move_left;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    border: 1px solid #fff;
}
@-webkit-keyframes move_up {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateY(-250px);
        transform: translateY(-250px);
    }
}

@keyframes move_up {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateY(-250px);
        transform: translateY(-250px);
    }
}

.move_up {
    -webkit-animation-name: move_up;
    animation-name: move_up;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

/**右侧关联模块样式 */
@-webkit-keyframes jcmove_right {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@keyframes jcmove_right {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@-webkit-keyframes jcmove_left {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}

@keyframes jcmove_left {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}
.jcmove_right {
    -webkit-animation-name: jcmove_right;
    animation-name: jcmove_right;
    -webkit-animation-duration: 1.4s;
    animation-duration: 1.4s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transition-timing-function: linear;
}

.jcmove_left {
    -webkit-animation-name: jcmove_left;
    animation-name: jcmove_left;
    -webkit-animation-duration: 1.4s;
    animation-duration: 1.4s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transition-timing-function: linear;
}
/**滚动条样式 */
/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 5px;
}
.food_event_table::-webkit-scrollbar {
    height: 5px;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.6);
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px RGB(243, 243, 244);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
/*::-webkit-scrollbar-thumb:window-inactive {*/
/*background: rgba(255,0,0,0.4);*/
/*}*/
/**公司地址后的地位图标 */
.jcr-marker {
    position: absolute;
    top: 20%;
    right: 1%;
    display: inline-block;
}
.el-range-editor--small.el-input__inner {
    width: 250px;
    border-radius: 15px;
}

/* .el-tooltip__popper,
.el-tooltip__popper.is-dark {
    width: 300px !important;
    font-size: 14px;
} */
</style>

<style>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.0/mapbox-gl.css");
@import "mapbox-gl/dist/mapbox-gl.css";
.jctooltip {
    background-color: darkgoldenrod !important;
    max-width: 240px !important;
    font-size: 14px;
    color: #f5f5f5;
    box-sizing: border-box !important;
}
/* .el-tooltip__popper，,
.el-tooltip__popper.is-dark {
    width: 500px !important;
    font-size: 14px;
}

.el-tooltip__popper,
.el-tooltip__popper.is-dark {
    background-color: darkgoldenrod !important;
    color: #f5f5f5;
} */
.mapboxgl-ctrl-group {
    border: none;
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    background: transparent;
}
.mapboxgl-ctrl-group > button,
.mapboxgl-ctrl-group > button:hover,
.mapboxgl-ctrl-group > button:focus,
.mapboxgl-ctrl-group > button:focus {
    width: 2.5em;
    height: 2.5em;
    display: inline-block;
    margin-top: 0.5em;
    border-radius: 2.5em !important;
    border: none !important;
    background-color: #fff !important;
    margin-right: 5px;
}
.mapboxgl-ctrl-top-right {
    top: auto;
    bottom: 90px !important;
}
.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass {
    display: none !important;
}

/**mapbox弹出框样式 */
.popup-item {
    width: 200px;
    display: block;
    float: left;
}
.popup-key {
    width: 60px;
    float: left;
    line-height: 20px;
    font-weight: 700;
    color: #3697d1;
}
.popup-value {
    width: 140px;
    line-height: 20px;
    float: left;
}
/**表格样式 */
.el-table tbody tr:hover > td {
    background-color: rgba(255, 255, 255, 0.3) !important;
}
.el-table {
    /* 表格字体颜色 */
    color: #ccc;
    /* 表格边框颜色 */
    max-height: 370px;
    background-color: rgba(0, 0, 0, 0.01);
}
/* 表格内背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
    border: 0;
    background-color: rgba(47, 50, 51, 0.78);
}
/* 双数行背景颜色 */
.el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color: rgba(33, 36, 37, 0.62);
}
/* 删除表格下横线 */
.el-table::before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    border: 0;
}

.tebale_card {
    /* background-color: #3f5c6d2c; */
    background-color: transparent;
}

.el-table__expanded-cell {
    /* background-color: #3f5c6d2c; */
    background-color: rgba(0, 0, 0, 0.01);
}
/**分页样式 */
.el-pager {
    color: #ccc;
}
.el-pagination--small button,
.el-pagination--small span:not([class*="suffix"]) {
    color: #ccc;
}
.el-pagination--small .btn-next,
.el-pagination--small .btn-prev {
    border-color: transparent;
    font-size: 12px;
    line-height: 22px;
    height: 22px;
    min-width: 22px;
    color: #ccc;
    background: transparent;
}
.el-pager li {
    background-color: transparent;
}
.el-pager li.active {
    color: #ffc107;
}
.el-pagination button:disabled {
    color: #ccc;
    background-color: transparent;
}
/**轮播样式 */

.el-carousel__arrow--right {
    right: 0px !important;
}
.el-carousel__arrow--left {
    left: 0px !important;
}
/* .el-carousel__arrow {
    background: rgba(100, 191, 255, .3) !important;
} */
/* tabs颜色 */
.el-tabs__item.is-top {
    color: rgba(255, 255, 255, 0.6);
}
.el-tabs__item:hover {
    color: #409eff;
    cursor: pointer;
}
.el-tabs__item.is-active {
    color: #409eff;
}

/* 时间轴*/
.timer-shaft-box {
    width: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
}
.timer-shaft {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
}

.timer-left {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 99;
    width: 23px;
    height: 37px;
    margin-top: -18.5px;
    background: url("../../static/image/icon_left.png");
    background-size: cover;
    cursor: pointer;
}

.timer-right {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 99;
    width: 23px;
    height: 37px;
    margin-top: -18.5px;
    background: url("../../static/image/icon_right.png") no-repeat;
    background-size: cover;
    cursor: pointer;
}
.timer-scale {
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    padding-left: 80px;
    font-size: 0;
    white-space: nowrap;
}
.timer-scale-cont {
    display: inline-block;
    height: 100%;
    line-height: 80px;
}
.time-circle {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    border-radius: 50%;
    background: #e2302e;
    transition: all 0.3s;
    cursor: pointer;
}
.timer-scale-cont.hov .time-circle {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    background: #ff8d3d;
}
.line-scale {
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    height: 22px;
    margin: 0 2px;
    background: url("../../static/image/icon_scale.png") no-repeat;
    background-size: cover;
}

.timer-shaft-content {
    width: 100%;
    margin-top: 45px;
    overflow: hidden;
    font-size: 0;
    box-sizing: border-box;
    white-space: nowrap;
}
.shaft-detail-cont {
    display: none;
    width: 100%;
}
.timer-year {
    padding-left: 20px;
    font-weight: bold;
    color: #333;
    font-size: 0;
}
.icon-year {
    display: inline-block;
    vertical-align: middle;
    width: 33px;
    height: 40px;
    background: url("../../static/image/icon_sign.png") no-repeat;
    background-size: cover;
}
.timer-year span {
    display: inline-block;
    vertical-align: middle;
    margin-left: 18px;
    font-size: 24px;
}
.month-detail-box {
    position: relative;
    width: 100%;
    min-height: 93px;
    padding-top: 30px;
    font-size: 0;
    box-sizing: border-box;
    white-space: normal;
}
.month-detail-box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 36.5px;
    height: 100%;
    border-right: 1px dashed #ff8d3d;
}
.month-detail-box .month-title {
    position: absolute;
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
.month-detail-box .month-title:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 30px;
    width: 13px;
    height: 13px;
    margin-top: -6.5px;
    background: url("../../static/image/icon_circle.png") no-repeat;
    background-size: cover;
}
.incident-record {
    display: inline-block;
    padding-left: 71px;
    line-height: 2;
    font-size: 14px;
    color: #333;
}
.incident-record a {
    font-size: 14px;
    color: #1d69a3;
}

.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
    width: 275px;
}
.el-date-editor .el-range-separator {
    width: 10%;
}

/* 左侧样式修改 */

/* tab样式 */
.jc-content /deep/ .el-tabs__item {
    font-weight: bolder;
    font-size: medium;
}
.jc-content /deep/ .el-tabs__active-bar {
    background-color: #5acae7 !important;
}
.jc-content /deep/ .el-tabs__item:hover,
.jc-content /deep/ .el-tabs__item.is-active {
    background-color: transparent !important;
    color: #5acae7 !important;
    font-weight: bolder !important;
}
/* 重点食品列表 */
/* 表头样式 */
#jcfood-content .jc-content /deep/ .el-table th .cell {
    color: #ffc675 !important;
    font-size: larger;
}
/* #jcfood-content .jc-content /deep/ .el-table th .cell {
    color: #ffc675 !important;
    font-size: larger;
} */
/* 重点区域部分样式 */
/* 省份名tab栏样式 */
#jcarea-content .jc-content .province_tab /deep/.el-tabs__nav-wrap::after {
    position: static !important;
}
#jcarea-content .jc-content .province_tab /deep/.el-tabs__item {
    padding: 0;
    margin: 0 5px;
    border: solid 1.5px #a09c81b0;
    border-radius: 26px;
    height: 100%;
    font-weight: 300;
    color: #ffce73de;
    background-color: #4d4932b6 !important;
}
#jcarea-content .jc-content .province_tab /deep/.el-tabs__item:hover,
#jcarea-content .jc-content .province_tab /deep/.el-tabs__item.is-active {
    font-weight: 300;
    color: #a66b00 !important;
    background-color: #ffec73 !important;
}
/*tabs 去掉el-tab-pane切换时的蓝色下划线*/
#jcarea-content .jc-content .province_tab /deep/.el-tabs__active-bar {
    background-color: transparent !important;
}
.jc-food-event .el-table__empty-text,
.jc-food-event .el-table--scrollable-x .el-table__body-wrapper {
    min-height: 16em;
}
</style>
<template>
    <div id="control">
        <div id="jcmap"></div>

        <div
            id="mrnu"
            style="position:absolute;top:80px;left:30px;width:350px;height:50px;z-index:1;background:#fff;border-radius:30px;padding:10px;display:none;"
        >
            <input id="era" type="radio" name="mapstyle" value="dark-v9" checked="checked" />
            <label for="dark">dark</label>
            <input id="erb" type="radio" name="mapstyle" value="streets-v9" />
            <label for="streets">streets</label>
            <input id="erc" type="radio" name="mapstyle" value="light-v9" />
            <label for="light">light</label>
            <input id="erd" type="radio" name="mapstyle" value="outdoors-v9" />
            <label for="outdoors">outdoors</label>
            <input id="ere" type="radio" name="mapstyle" value="satellite-v9" />
            <label for="satellite">satellite</label>
        </div>
        <div id="echartsBox"></div>

        <!-- 插件导航 -->

        <!-- Navigation 页面右上角导航页 -->
        <nav class="navbar navbar-default navbar-shrink bounceInDown">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header page-scroll">
                    <button
                        type="button"
                        class="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <!-- 菜单栏 -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form id="form-inline" class="form-inline my-2 my-lg-0 ty-search">
                        <h1>
                            <a href="./">食品安全</a>
                        </h1>
                        <label for="search-food">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            <input
                                class="search-input"
                                type="search"
                                placeholder="请输入食品名称"
                                v-model="searchVal"
                                v-on:focus="jcfocus()"
                                v-on:blur="jcblur()"
                                autocomplete="off"
                            />
                        </label>
                        <!--  <ul id="jc-search-list" class="jc-search-list closed">
                            <li
                                v-for="(item,index) in jcsearch"
                                :key="index"
                                @click="choosejcSearch(item)"
                            >
                                <a>
                                    <h3>
                                        <b>{{ selectSearch }}</b>
                                    </h3>
                                    <span>
                                        所属年份：{{ item.year }}
                                        <br />
                                        日期：{{item.date}}
                                        <br />
                                        批次号:{{item.batchid}}
                                    </span>
                                </a>
                            </li>
                        </ul>-->
                        <!-- 搜索列表 -->
                        <div id="jc-search-scrollbar" class="jc-search-scrollbar closed">
                            <div class="jc-search-fuzzy">
                                <ul class="jc-fuzzy-list" v-show="jcfuzzy.length">
                                    <li
                                        v-for="(item,index) in jcfuzzy"
                                        :key="index"
                                        @click="choosejcFuzzy(item)"
                                    >
                                        <a>
                                            <h3>
                                                <b>{{ item.product_name }}</b>
                                            </h3>
                                            <span>
                                                所属年份：{{ item.year }}
                                                <br />
                                                日期：{{item.date}}
                                                <br />
                                                批次号:{{item.batch_id}}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="jc-fuzzy-list" v-show="!jcfuzzy.length">
                                    <li>
                                        <span>暂无数据，请输入其他关键词</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a class="search-btn">
                            <i class="fa fa-location-arrow" aria-hidden="true"></i>
                        </a>
                    </form>
                </div>
                <v-nav></v-nav>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>

        <div class="timeblock">
            <el-date-picker
                v-show="isSearchItem"
                size="small"
                v-model="startTimePick"
                @change="getStartTime"
                type="monthrange"
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                value-format="yyyy-MM-dd"
            ></el-date-picker>
            <!-- <div style="color: #fff">至</div>
            <el-date-picker
                v-show="isSearchItem"
                size="small"
                v-model="endTimePick"
                @change="getEndTime"
                type="month"
                placeholder="选择结束时间"
                value-format="yyyy-MM-dd"
            ></el-date-picker>-->
        </div>

        <!-- 地图标题 -->
        <div class="jcmapTitle">
            <span>食品全链条监察可视化</span>
        </div>

        <!-- 数字面板 -->
        <div class="jcnumber_board">
            <!-- 商品名面板块 -->
            <div class="jcnumber_boardblock">
                <p class="jcnumber_boardtitle-total">
                    <span>食品名称</span>
                </p>
                <p class="jcnumber_boarddata">{{product_name}}</p>
            </div>
            <!-- 批次号板块 -->
            <div class="jcnumber_boardblock">
                <p class="jcnumber_boardtitle-pos">
                    <span>批次号</span>
                </p>
                <p class="jcnumber_boarddata">{{batchid}}</p>
            </div>
            <!-- 日期板块 -->
            <div class="jcnumber_boardblock">
                <p class="jcnumber_boardtitle-neg">
                    <span>日期</span>
                </p>
                <p class="jcnumber_boarddata">{{startTime}}</p>
            </div>
        </div>
        <!-- 左侧弹出框监察重页面：重点食物/重点区域/重点公司 -->
        <div id="sidebar">
            <div id="jc-wrap">
                <div id="jcfood" class="sidebar-item">
                    <div>重点食品</div>
                </div>
                <div id="jccompany" class="sidebar-item">
                    <div>重点企业</div>
                </div>
                <div id="jcarea" class="sidebar-item">
                    <div>重点区域</div>
                </div>
            </div>
            <!-- 侧边关闭按钮，可能不需要 -->
            <!-- <div id="closeBar">
                <span class="glyphicon glyphicon-remove"></span>
            </div>-->
        </div>
        <div id="jcfood-content" class="nav-content" style="height: 420px;">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>抽检不合格率前十食品列表</span>
                </span>
                <span class="left_modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>
            <div class="jc-content">
                <el-tabs tab-position="top" style="height: 32em;" stretch>
                    <el-tab-pane :label="tYear+'年'">
                        <div class="food-table">
                            <el-table
                                class="food_event_table"
                                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                :cell-style="jcRowClass"
                                :header-cell-style="jcHeadClass"
                                stripe
                                style="position:absolute;"
                            >
                                <el-table-column prop="id" label="序号"></el-table-column>
                                <el-table-column prop="rate" label="不合格率"></el-table-column>
                                <el-table-column prop="name" label="食品名称"></el-table-column>
                                <el-table-column label="批次号">
                                    <template slot-scope="scope">
                                        <el-tooltip
                                            popper-class="jctooltip"
                                            v-if="scope.row.batch.length>8"
                                            placement="bottom"
                                            :content="scope.row.batch"
                                        >
                                            <span>{{ scope.row.batch.substr(0,7)+'...' }}</span>
                                        </el-tooltip>
                                        <span v-else>{{ scope.row.batch }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="jcpage">
                            <el-pagination
                                small
                                :page-size="pagesize"
                                :pager-count="5"
                                :current-page="currentPage"
                                @current-change="handleCurrentChange"
                                layout="total, prev, pager, next"
                                :total="tableData.length"
                            ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear1+'年'">
                        <div class="food-table">
                            <el-table
                                class="food_event_table"
                                :data="table1Data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                :cell-style="jcRowClass"
                                :header-cell-style="jcHeadClass"
                                stripe
                                style="position:absolute;"
                            >
                                <el-table-column prop="id" label="序号"></el-table-column>
                                <el-table-column prop="rate" label="不合格率"></el-table-column>
                                <el-table-column prop="name" label="食品名称"></el-table-column>
                                <el-table-column label="批次号">
                                    <template slot-scope="scope">
                                        <el-tooltip
                                            popper-class="jctooltip"
                                            v-if="scope.row.batch.length>8"
                                            placement="bottom"
                                            :content="scope.row.batch"
                                        >
                                            <span>{{ scope.row.batch.substr(0,7)+'...' }}</span>
                                        </el-tooltip>
                                        <span v-else>{{ scope.row.batch }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="jcpage">
                            <el-pagination
                                small
                                :page-size="pagesize"
                                :pager-count="5"
                                :current-page="currentPage"
                                @current-change="handleCurrentChange"
                                layout="total, prev, pager, next"
                                :total="table1Data.length"
                            ></el-pagination>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear2+'年'">
                        <div class="food-table">
                            <el-table
                                class="food_event_table"
                                :data="table2Data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                :cell-style="jcRowClass"
                                :header-cell-style="jcHeadClass"
                                stripe
                                style="position:absolute;"
                            >
                                <el-table-column prop="id" label="序号"></el-table-column>
                                <el-table-column prop="rate" label="不合格率"></el-table-column>
                                <el-table-column prop="name" label="食品名称"></el-table-column>
                                <el-table-column label="批次号">
                                    <template slot-scope="scope">
                                        <el-tooltip
                                            popper-class="jctooltip"
                                            v-if="scope.row.batch.length>8"
                                            placement="bottom"
                                            :content="scope.row.batch"
                                        >
                                            <span>{{ scope.row.batch.substr(0,7)+'...' }}</span>
                                        </el-tooltip>
                                        <span v-else>{{ scope.row.batch }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="jcpage">
                            <el-pagination
                                small
                                :page-size="pagesize"
                                :pager-count="5"
                                :current-page="currentPage"
                                @current-change="handleCurrentChange"
                                layout="total, prev, pager, next"
                                :total="table2Data.length"
                            ></el-pagination>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div id="jccompany-content" class="nav-content" style="height: 600px;margin-bottom: 0;">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>全国食品安全不合格率TOP20企业空间分布情况</span>
                </span>
                <span class="left_modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>
            <div class="jc-content" style="overflow:hidden;">
                <el-tabs tab-position="top" stretch>
                    <el-tab-pane :label="tYear+'年'">
                        <div
                            id="scatterMap"
                            style="width:420px;height:310px;top:-30px;margin:auto;"
                            ref="myChart"
                        ></div>
                        <div
                            id="subChart_Company"
                            style="width:420px;height:210px;top:-15px;margin:auto;"
                        ></div>
                        <div id="companyMap"></div>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear1+'年'">
                        <div
                            id="scatterMap1"
                            style="width:420px;height:310px;top:-30px;margin:auto;"
                            ref="myChart1"
                        ></div>
                        <div
                            id="subChart_Company1"
                            style="width:420px;height:210px;top:-15px;margin:auto;"
                        ></div>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear2+'年'">
                        <div
                            id="scatterMap2"
                            style="width:420px;height:310px;top:-30px;margin:auto;"
                            ref="myChart2"
                        ></div>
                        <div
                            id="subChart_Company2"
                            style="width:420px;height:210px;top:-15px;margin:auto;"
                        ></div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div id="jcarea-content" class="nav-content" style="height: 600px;margin-bottom: 0;">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>全国食品安全不合格率TOP5省份统计</span>
                </span>
                <span class="left_modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>
            <div class="jc-content">
                <el-tabs tab-position="top" stretch>
                    <!-- 2019年 -->
                    <el-tab-pane :label="tYear+'年'">
                        <el-tabs
                            class="province_tab"
                            tab-position="top"
                            style="font-weight:bolder;"
                            stretch
                        >
                            <el-tab-pane
                                v-for="(provinceInfo,index) in topProvinceList"
                                :key="index"
                                :label="(index+1)+'.'+provinceInfo.province"
                            >
                                <!-- 省份地图 -->
                                <div
                                    :id="getProvinceMapId(index,0)"
                                    style="width:420px;height:440px;"
                                ></div>
                                <!-- 左下角框 -->
                                <div class="area-province">
                                    <table>
                                        <tr>
                                            <td
                                                style="color:#dcdfbd;text-align:right;"
                                            >{{provinceInfo.province}}年度平均不合格率：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.no_pass_rate_pvc}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">大规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_big}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">中规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_medium}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">小规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_small}}</td>
                                        </tr>
                                    </table>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear1+'年'">
                        <el-tabs
                            class="province_tab"
                            tab-position="top"
                            style="font-weight:bolder;"
                            stretch
                        >
                            <el-tab-pane
                                v-for="(provinceInfo,index) in topProvinceList1"
                                :key="index"
                                :label="(index+1)+'.'+provinceInfo.province"
                            >
                                <!-- 省份地图 -->
                                <div
                                    :id="getProvinceMapId(index,1)"
                                    style="width:420px;height:440px;"
                                ></div>
                                <!-- 左下角框 -->
                                <div class="area-province">
                                    <table>
                                        <tr>
                                            <td
                                                style="color:#dcdfbd;text-align:right;"
                                            >{{provinceInfo.province}}年度平均不合格率：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.no_pass_rate_pvc}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">大规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_big}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">中规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_medium}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">小规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_small}}</td>
                                        </tr>
                                    </table>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-tab-pane>
                    <el-tab-pane :label="tYear2+'年'">
                        <el-tabs
                            class="province_tab"
                            tab-position="top"
                            style="font-weight:bolder;"
                            stretch
                        >
                            <el-tab-pane
                                v-for="(provinceInfo,index) in topProvinceList2"
                                :key="index"
                                :label="(index+1)+'.'+provinceInfo.province"
                            >
                                <!-- 省份地图 -->
                                <div
                                    :id="getProvinceMapId(index,2)"
                                    style="width:420px;height:440px;"
                                ></div>
                                <!-- 左下角框 -->
                                <div class="area-province">
                                    <table>
                                        <tr>
                                            <td
                                                style="color:#dcdfbd;text-align:right;"
                                            >{{provinceInfo.province}}年度平均不合格率：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.no_pass_rate_pvc}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">大规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_big}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">中规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_medium}}</td>
                                        </tr>
                                        <tr>
                                            <td style="color:#dcdfbd;text-align:right;">小规模公司数：</td>
                                            <td
                                                style="color:#f56c6c;font-weight:bolder;text-align:left;"
                                            >{{provinceInfo.num_small}}</td>
                                        </tr>
                                    </table>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- 右侧关联信息展开栏  -->
        <div id="jc-sidebar">
            <div id="jc-right-wrap">
                <div id="jcrfood" class="jc-sidebar-item">
                    <div>全链条信息</div>
                </div>
                <div id="jcrcompany" class="jc-sidebar-item">
                    <div>相关食品事件</div>
                </div>
                <div id="jcrarea" class="jc-sidebar-item">
                    <div>食品风险知识</div>
                </div>
            </div>
        </div>

        <div id="jcrfood-content" class="jcnav-content">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>全链条信息</span>
                </span>
                <span class="modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>

            <div class="jcr-content">
                <div class="jcr-basic">
                    <img src="../../static/icon/food_link.png" class="jcr-content-icon" />
                    <div class="jcr-content-title">{{ batchfood.product_name }}</div>
                    <div class="jcr-content-subtitle">批次号：{{ batchid }}</div>
                    <div class="jcr-content-subtitle">抽检不合格率：{{ batchfood.no_pass_rate*100 }}%</div>
                    <div class="jcr-content-subtitle" v-if="batchfood.result==1">抽检结果：合格</div>
                    <div class="jcr-content-subtitle" v-else>抽检结果：不合格</div>
                </div>
                <div class="jcr-info">
                    <el-carousel
                        arrow="always"
                        :autoplay="false"
                        :initial-index="cardIndex"
                        ref="carousel"
                        @change="showIndex"
                        :interval="4000"
                        height="218px"
                        indicator-position="none"
                    >
                        <el-carousel-item
                            v-for="(item,index) in batchInfo"
                            :key="index"
                            style="background:transparent"
                        >
                            <div class="jcr-link-info">
                                <!-- <span class="jcr-link-icon">
                                    <i class="fa fa-leaf" aria-hidden="true"></i>
                                </span>-->
                                <div class="jcr-link-block">
                                    <span class="jcr-link-font">
                                        <img
                                            v-show="item.categoryid==='CPC01'"
                                            src="../../static/icon/111.png"
                                            width="8%"
                                        />
                                        <img
                                            v-show="item.categoryid==='CPC02'"
                                            src="../../static/icon/21.png"
                                            width="8%"
                                        />
                                        <img
                                            v-show="item.categoryid==='CPC03'"
                                            src="../../static/icon/31.png"
                                            width="8%"
                                        />
                                        <img
                                            v-show="item.categoryid==='CPC04'"
                                            src="../../static/icon/41.png"
                                            width="8%"
                                        />
                                        <span
                                            v-if="item.categoryid==='CPC01'"
                                            style="color: #ffc107;font-weight:700"
                                        >农业生产环节</span>
                                        <span
                                            v-else-if="item.categoryid==='CPC02'"
                                            style="color: #ffc107;font-weight:700"
                                        >制造加工环节</span>
                                        <span
                                            v-else-if="item.categoryid==='CPC03'"
                                            style="color: #ffc107;font-weight:700"
                                        >流通储存环节</span>
                                        <span v-else style="color: #ffc107;font-weight:700">终端销售环节</span>
                                    </span>
                                </div>
                                <div class="jcr-link-block">
                                    <span class="jcr-link-content">
                                        <i class="fa fa-building" aria-hidden="true"></i>公司名称:
                                    </span>
                                    <span class="jcr-link-font">{{item.company_name}}</span>
                                </div>
                                <div class="jcr-link-block">
                                    <span
                                        class="jcr-link-content"
                                        @click="getComAdress(item)"
                                        style="cursor:pointer"
                                    >
                                        <i class="fa fa-location-arrow" aria-hidden="true"></i>公司地址:
                                    </span>
                                    <span class="jcr-link-font">{{item.address}}</span>
                                    <!-- <span
                                        class="jcr-marker"
                                        @click="getComAdress(item)"
                                        style="cursor:pointer"
                                    >-->
                                    <!-- <i class="fa fa-map-marker" aria-hidden="true"></i> -->
                                    <img
                                        class="jcr-marker"
                                        @click="getComAdress(item)"
                                        style="cursor:pointer"
                                        src="../../static/icon/marker.png"
                                        width="8%"
                                    />
                                    <!-- </span> -->
                                </div>
                                <div class="jcr-link-block">
                                    <span class="jcr-link-content">
                                        <i class="fa fa-user" aria-hidden="true"></i>负责人:
                                    </span>
                                    <span class="jcr-link-font">{{item.responsible}}</span>
                                </div>
                                <div class="jcr-link-block">
                                    <span class="jcr-link-content">
                                        <i class="fa fa-phone-square" aria-hidden="true"></i>联系方式:
                                    </span>
                                    <span class="jcr-link-font">{{item.contact}}</span>
                                </div>
                                <div class="jcr-link-block">
                                    <span class="jcr-link-content">
                                        <i class="fa fa-car" aria-hidden="true"></i>出货时间:
                                    </span>
                                    <span class="jcr-link-font">{{item.time_start}}</span>
                                </div>
                                <div class="card-page">
                                    <span>{{cardIndex+1}}页/</span>
                                    <span>{{batchInfo.length}}页</span>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <div id="jcrcompany-content" class="jcnav-content">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>相关食品安全事件</span>
                </span>
                <span class="modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>
            <div class="jcr-food-table">
                <el-table
                    :data="foodEvents.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    :cell-style="jcRowClass"
                    :header-cell-style="jcHeadClass"
                    class="jc-food-event"
                    stripe
                    style="width: 95%;min-height: 20em;position:absolute;font-size:14px;"
                >
                    <el-table-column
                        prop="event_name"
                        label="事件名称"
                        width="100"
                        :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column prop="startend" label="起止时间" width="180"></el-table-column>
                    <!-- <el-table-column prop="enddate" label="终止时间" width="100"></el-table-column> -->
                    <el-table-column prop="address" label="爆发地点" width="100"></el-table-column>
                </el-table>
            </div>
            <div class="jcrpage">
                <el-pagination
                    small
                    :page-size="pagesize1"
                    :pager-count="5"
                    :current-page="currentPage1"
                    @current-change="handleCurrentChange1"
                    layout="total, prev, pager, next"
                    :total="foodEvents.length"
                ></el-pagination>
            </div>
        </div>
        <div id="jcrarea-content" class="jcnav-content">
            <p class="modulebox_title__3Rw-h">
                <span>
                    <svg
                        style="cursor:pointer"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4023"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M976 672c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.08-0.208 0.08L512 860.048 66.784 675.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a48 48 0 0 0-36.704 88.656v0.016l463.584 191.824a1.12 1.12 0 0 0 0.208 0.08l0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 672zM29.664 348.336v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.456 47.456 0 0 0 36.672 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48.048 48.048 0 0 0 1024 304a48 48 0 0 0-29.648-44.336v-0.016L530.784 67.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.08-0.016 0.016a47.744 47.744 0 0 0-36.688-0.016l-0.016-0.016-0.208 0.08a1.12 1.12 0 0 1-0.208 0.08L29.648 259.648v0.016A48 48 0 0 0 0 304a48 48 0 0 0 29.664 44.336zM976 464c-6.496 0-12.688 1.328-18.352 3.664v-0.016l-0.208 0.096a1.12 1.12 0 0 1-0.208 0.08L512 652.048 66.784 467.824a1.12 1.12 0 0 0-0.208-0.08l-0.208-0.096-0.016 0.016a48 48 0 0 0-36.704 88.672v0.016l463.584 191.824 0.208 0.08 0.208 0.08 0.016-0.016a47.6 47.6 0 0 0 36.688 0.016l0.016 0.016 0.208-0.08a1.12 1.12 0 0 1 0.208-0.08l463.568-191.824v-0.016A48 48 0 0 0 976 464z"
                            fill="#ffffff"
                            p-id="4024"
                        />
                    </svg>
                    <span>食品风险知识</span>
                </span>
                <span class="modulebox_hidebtn__QHdrj">
                    <svg
                        viewBox="0 0 1045 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5501"
                        width="16"
                        height="16"
                    >
                        <path
                            d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"
                            p-id="5502"
                        />
                    </svg>
                </span>
            </p>
            <div>
                <div
                    id="jcnetwork_id"
                    class="jcnetwork"
                    style="width:350px;height:350px;padding:10px;"
                ></div>
            </div>
        </div>

        <!-- 图例 -->
        <div id="jc-legend">
            <div class="jc-hd">
                <img src="../../static/icon/111.png" width="15%" />
                <span>农业生产环节</span>
            </div>
            <div class="jc-hd">
                <img src="../../static/icon/21.png" width="15%" />
                制造加工环节
            </div>
            <div class="jc-hd">
                <img src="../../static/icon/31.png" width="15%" />
                流通储存环节
            </div>
            <div class="jc-hd">
                <img src="../../static/icon/41.png" width="15%" />
                终端销售环节
            </div>
        </div>
    </div>
</template>
<script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<script src="../../static/js/vis-network.min.js"></script>
<script src="../../static/js/jquery.js"></script>
<script src="../../static/js/bootstrap.js"></script>
<script src="../../static/js/bootstrap.min.js"></script>
<script src="../../static/js/common.js"></script>
<script src="../../static/js/init.js"></script>
<script src="../../static/js/jqBootstrapValidation.js"></script>
<script src="../../static/js/plugins.js"></script>
<script src="../../static/js/tubular.js"></script>
<script src="../../static/js/contact_me.js"></script>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v0.10.0/mapbox-gl-language.js'></script>

<script>
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import Nav from "@/components/Nav.vue";
import echarts from "echarts";
import https from "../http.js";
import vis from "vis";
import layer from "../../static/js/layer.js";
import "echarts-gl";
require("echarts/map/js/china");
// 引入全部省份的地图
const path = require('path')
const files = require.context('echarts/map/js/province', false, /\.js$/) //这句话的意思是引入components下的所有vue文件，@需要在vue.config.js配置alias
const modules = {}
files.keys().forEach(key => {
const name = path.basename(key, '.js')
modules[name] = files(key).default || files(key)
})

export default {
    name: "control_index",
    components: {
        "v-nav": Nav
    },
    data() {
        return {
            product_name: "蒙牛纯牛奶",
            startTimePick: "",
            startTime: "2018年4月10日",
            endTimePick: "",
            isSearchItem: false,
            showfuzzy: false,
            chainArray: [
                [[111.7117,40.8242],[113.3157,40.078],[112.5494,37.8488],[108.9678,34.357]],
                [[111.7117,40.8242],[113.3157,40.078],[112.5494,37.8488],[108.9678,34.357]],
                [[111.7117,40.8242],[113.3157,40.078],[125.4,44.3],[127.13,47.07]],
                [[111.7117,40.8242],[113.3157,40.078],[112.5494,37.8488],[115.4,27.94]],
                [[111.7117,40.8242],[103,30],[101.86,36.46],[89.31,42.95]],
                [[111.7117,40.8242],[113.3157,40.078],[125.4,44.3],[122.882876,45.671336]],
                [[111.7117,40.8242],[113.3157,40.078],[125.4,44.3],[119.803844,49.173488]],
                [[111.7117,40.8242],[113.3157,40.078],[125.4,44.3],[130.972458,45.30696]],
                [[111.7117,40.8242],[113.3157,40.078],[125.4,44.3],[128.242346,43.376824]],
                [[111.7117,40.8242],[113.3157,40.078],[112.5494,37.8488],[121.476228,31.223083]],
                [[111.7117,40.8242],[103,30],[101.86,36.46],[100.467907,38.932963]],
                [[111.7117,40.8242],[103,30],[101.86,36.46],[91.173284,29.666015]],
                [[111.7117,40.8242],[103,30],[101.86,36.46],[75.99812,39.479663]]
            ], //全链条数组
            batchfood: {
                product_name: "蒙牛纯牛奶",
                no_pass_rate: 0.1,
                result: 1,
                batchid: ""
            }, //批次食物
            //  batchInfo: [], //批次信息
            companyInfo: {},
            jcpopup: {},
            chartmap: {},
            jcfuzzy: [],
            jcsearch: [],
            selectSearch: "",
            searchVal: "",
            year: "",
            date: "",
            mapbatchArray: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018001",
                            "company_name": "蒙牛牛奶企业",
                            "address": "内蒙古自治区呼和浩特市赛罕区",
                            "category": "生产企业",
                            "categoryid": "CPC01"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                111.7117,
                                40.8242
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018015",
                            "company_name": "大同牛奶加工企业",
                            "address": "山西省大同市平城区御河西路",
                            "category": "加工企业",
                            "categoryid": "CPC02"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                113.3157,
                                40.078
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018051",
                            "company_name": "成都元加工公司",
                            "address": "四川省成都市河西区",
                            "category": "加工企业",
                            "categoryid": "CPC02"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                103.0,
                                30.0
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018022",
                            "company_name": "太原运输公司",
                            "address": "山西省太原市迎泽区康乐南巷",
                            "category": "运输（流通）企业",
                            "categoryid": "CPC03"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                112.5494,
                                37.8488
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018048",
                            "company_name": "长春运输公司",
                            "address": "吉林省长春市下街区",
                            "category": "运输（流通）企业",
                            "categoryid": "CPC03"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                125.4,
                                44.3
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018023",
                            "company_name": "西安销售公司",
                            "address": "陕西省西安市未央区红旗路",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                108.9678,
                                34.357
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018050",
                            "company_name": "昌南销售公司",
                            "address": "江西省南昌市河东区",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                115.4,
                                27.94
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018098",
                            "company_name": "海杨连锁公司",
                            "address": "上海市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                121.476228,
                                31.223083
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018049",
                            "company_name": "哈尔滨销售公司",
                            "address": "黑龙江哈尔滨市和平区",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                127.13,
                                47.07
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018094",
                            "company_name": "乌兰浩特销售公司",
                            "address": "兴安盟",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                122.882876,
                                45.671336
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018095",
                            "company_name": "呼伦贝尔连锁公司",
                            "address": "呼伦贝尔市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                119.803844,
                                49.173488
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018096",
                            "company_name": "鸡西销售公司",
                            "address": "鸡西市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                130.972458,
                                45.30696
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018097",
                            "company_name": "敦化销售公司",
                            "address": "延边朝鲜族自治州",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                128.242346,
                                43.376824
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018052",
                            "company_name": "西宁运输公司",
                            "address": "青海省西宁市南开区",
                            "category": "运输（流通）企业",
                            "categoryid": "CPC03"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                101.86,
                                36.46
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018053",
                            "company_name": "疆域销售公司",
                            "address": "新疆吐鲁番市河北区",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                89.31,
                                42.95
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018099",
                            "company_name": "张掖销售公司",
                            "address": "张掖市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                100.467907,
                                38.932963
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018100",
                            "company_name": "拉萨销售公司",
                            "address": "拉萨市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                91.173284,
                                29.666015
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "batchid": "B000004",
                            "companyid": "CP018101",
                            "company_name": "喀什销售公司",
                            "address": "喀什市",
                            "category": "终端销售企业",
                            "categoryid": "CPC04"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                75.99812,
                                39.479663
                            ]
                        }
                    }
                ]
            },
            plantArr: [], //农业生产数组
            produceArr: [], //制造加工
            transArr: [], //运输
            saleArr: [],
            pagesize: 5,
            pagesize1: 5,
            currentPage: 1,
            cardIndex: 0,
            currentPage1: 1,
            cardIndex1: 0,
            timefood: "",

            tableDataArea: [
                {
                    discription: "江苏省年度平均不合格率",
                    value: "20%"
                },
                {
                    discription: "大型企业年度平均不合格率",
                    value: "10%"
                },
                {
                    discription: "中型企业年度平均不合格率",
                    value: "20%"
                },
                {
                    discription: "小型企业度平均不合格率",
                    value: "30%"
                }
            ],
            eventTableData: [
                {
                    id: 1,
                    event_name: "三全水饺猪瘟病毒",
                    startdate: "2019-04-01",
                    enddate: "2019-06-01",
                    address: "河南省"
                },
                {
                    id: 2,
                    event_name: "非洲猪瘟",
                    startdate: "2018-11-01",
                    enddate: "2019-05-01",
                    address: "四川省成都市"
                },
                {
                    id: 3,
                    event_name: "元旦时期新发生的三全水饺猪瘟病毒",
                    startdate: "2019-04-01",
                    enddate: "2019-06-01",
                    address: "河南省"
                },
                {
                    id: 4,
                    event_name: "非洲猪瘟",
                    startdate: "2018-11-01",
                    enddate: "2019-05-01",
                    address: "四川省成都市"
                },
                {
                    id: 5,
                    event_name: "三全水饺猪瘟病毒",
                    startdate: "2019-04-01",
                    enddate: "2019-06-01",
                    address: "河南省"
                },
                {
                    id: 6,
                    event_name: "非洲猪瘟",
                    startdate: "2018-11-01",
                    enddate: "2019-05-01",
                    address: "四川省成都市"
                },
                {
                    id: 7,
                    event_name: "三全水饺猪瘟病毒",
                    startdate: "2019-04-01",
                    enddate: "2019-06-01",
                    address: "河南省"
                },
                {
                    id: 8,
                    event_name: "非洲猪瘟",
                    startdate: "2018-11-01",
                    enddate: "2019-05-01",
                    address: "四川省成都市"
                },
                {
                    id: 9,
                    event_name: "三全水饺猪瘟病毒",
                    startdate: "2019-04-01",
                    enddate: "2019-06-01",
                    address: "河南省"
                },
                {
                    id: 10,
                    event_name: "非洲猪瘟",
                    startdate: "2018-11-01",
                    enddate: "2019-05-01",
                    address: "四川省成都市"
                }
            ],
            layerId: "dark-v9",
            batchInfo:[{"time_start":"2018-04-10","address":"内蒙古自治区呼和浩特市赛罕区","companyid":"CP018001","company_name":"蒙牛牛奶企业","categoryid":"CPC01","coordinates":["111.7117 ","40.8242 "],"responsible":"张三","contact":"1246829976"},{"time_start":"2018/4/17","address":"山西省大同市平城区御河西路","companyid":"CP018015","company_name":"大同牛奶加工企业","categoryid":"CPC02","coordinates":["113.3157 ","40.0780 "],"responsible":"王五","contact":"1246829990"},{"time_start":"2018/4/17","address":"四川省成都市河西区","companyid":"CP018051","company_name":"成都元加工公司","categoryid":"CPC02","coordinates":["103","30"],"responsible":"刘琦","contact":"1246829992"},{"time_start":"2018/4/28","address":"山西省太原市迎泽区康乐南巷","companyid":"CP018022","company_name":"太原运输公司","categoryid":"CPC03","coordinates":["112.5494 ","37.8488 "],"responsible":"张三","contact":"1246829997"},{"time_start":"2018/4/28","address":"吉林省长春市下街区","companyid":"CP018048","company_name":"长春运输公司","categoryid":"CPC03","coordinates":["125.4","44.3"],"responsible":"张三","contact":"1246829989"},{"time_start":"2018/5/13","address":"陕西省西安市未央区红旗路","companyid":"CP018023","company_name":"西安销售公司","categoryid":"CPC04","coordinates":["108.9678 ","34.3570 "],"responsible":"李四","contact":"1246829998"},{"time_start":"2018/5/13","address":"江西省南昌市河东区","companyid":"CP018050","company_name":"昌南销售公司","categoryid":"CPC04","coordinates":["115.4","27.94"],"responsible":"李三","contact":"1246829991"},{"time_start":"2018-04-28","address":"上海市","companyid":"CP018098","company_name":"海杨连锁公司","categoryid":"CPC04","coordinates":["121.476228","31.223083"],"responsible":"张三","contact":"1246824251"},{"time_start":"2018/5/13","address":"黑龙江哈尔滨市和平区","companyid":"CP018049","company_name":"哈尔滨销售公司","categoryid":"CPC04","coordinates":["127.13","47.07"],"responsible":"张五","contact":"1246829990"},{"time_start":"2018-04-28","address":"兴安盟","companyid":"CP018094","company_name":"乌兰浩特销售公司","categoryid":"CPC04","coordinates":["122.882876","45.671336"],"responsible":"张三","contact":"1246824247"},{"time_start":"2018-04-28","address":"呼伦贝尔市","companyid":"CP018095","company_name":"呼伦贝尔连锁公司","categoryid":"CPC04","coordinates":["119.803844","49.173488"],"responsible":"张三","contact":"1246824248"},{"time_start":"2018-04-28","address":"鸡西市","companyid":"CP018096","company_name":"鸡西销售公司","categoryid":"CPC04","coordinates":["130.972458","45.30696"],"responsible":"张三","contact":"1246824249"},{"time_start":"2018-04-28","address":"延边朝鲜族自治州","companyid":"CP018097","company_name":"敦化销售公司","categoryid":"CPC04","coordinates":["128.242346","43.376824"],"responsible":"张三","contact":"1246824250"},{"time_start":"2018/4/28","address":"青海省西宁市南开区","companyid":"CP018052","company_name":"西宁运输公司","categoryid":"CPC03","coordinates":["101.86","36.46"],"responsible":"张四","contact":"1246829993"},{"time_start":"2018/5/13","address":"新疆吐鲁番市河北区","companyid":"CP018053","company_name":"疆域销售公司","categoryid":"CPC04","coordinates":["89.31","42.95"],"responsible":"陈三","contact":"1246829994"},{"time_start":"2018-04-28","address":"张掖市","companyid":"CP018099","company_name":"张掖销售公司","categoryid":"CPC04","coordinates":["100.467907","38.932963"],"responsible":"张三","contact":"1246824252"},{"time_start":"2018-04-28","address":"拉萨市","companyid":"CP018100","company_name":"拉萨销售公司","categoryid":"CPC04","coordinates":["91.173284","29.666015"],"responsible":"张三","contact":"1246824253"},{"time_start":"2018-04-28","address":"喀什市","companyid":"CP018101","company_name":"喀什销售公司","categoryid":"CPC04","coordinates":["75.99812","39.479663"],"responsible":"张三","contact":"1246824254"}],
            timeIndex: 1,
            timeLineList: [
                // {
                //     timestamp: '2012年',
                //     year: "2012",
                //     info: 'chengli'
                //   },
                //   {
                //     timestamp: '2012年',
                //     year: '2013',
                //     info: 'chengli'
                //   },
                //   {
                //     timestamp: '2012年',
                //     year: '2014',
                //     info: 'chengli'
                //   },
                {
                    id: 1,
                    event_name: "非洲猪瘟",
                    startdate: "2019",
                    address: "沈阳市",
                    degree: "中等",
                    caption:
                        "发病猪场383家，猪发病数量47头，死亡数量47头，OIE公布死亡和扑杀数量28783头，解除封锁时间2018年9月29日零时"
                },
                {
                    id: 2,
                    event_name: "非洲猪瘟",
                    startdate: "2018",
                    address: "黄冈市",
                    degree: "中等",
                    caption:
                        "发病猪场383家，猪发病数量47头，死亡数量47头，OIE公布死亡和扑杀数量28783头，解除封锁时间2018年9月29日零时"
                }
            ],
            mapaddress: {},
            batchid: "B000004",
            foodEvents: [],
            // 左侧数据
            // 重点食品table数据
            tYear: "",
            tYear1: "",
            tYear2: "",
            // 重点食品table数据
            tableData: [],
            table1Data: [],
            table2Data: [],
            // 重点企业
            topCompanyData: [],
            topCompanyData1: [],
            topCompanyData2: [],
            // 重点区域
            topProvinceList: [
                {
                    province: "",
                    province_id: "",
                    no_pass_rate_pvc: "",
                    num_big: "",
                    num_medium: "",
                    num_small: ""
                }
            ],
            topProvinceList1: [],
            topProvinceList2: [],
            nodeExtendArr: [],
            network:null,
            options:{},
            nodes:[],
            edges:[],
            container: document.getElementById('jcnetwork_id'),
        };
    },
    mounted() {
        this.init();
        // 左侧绘图
        // 左侧获取重点企业数据并绘图
        this.getTopCompanyInfo();
        // 左侧获取重点区域数据并绘图
        this.getAllProvinceInfo();
        this.getFoodEvent("F018002", "2019-08-03");
        this.initVis("F018002"); 
    },
    watch: {
        jcpopup() {
            this.jcpopup.addTo(this.chartmap);
        },
        searchVal() {
            this.jcfocus();
            var target = document.getElementById("jc-search-scrollbar");
            if (!this.searchVal) {
                target.classList.add("closed");
            }
        },
        selectSearch() {
            this.jcfocus();
        }
    },
    methods: {
        //手动切换幻灯片
        setActiveItem(index){
            this.$refs.carousel.setActiveItem(index);
        },
        getStartTime() {
            console.log(
                "startDate:" + this.startTimePick[0] + this.startTimePick[1]
            );
            this.jcTimeSearch(
                this.timefood,
                this.startTimePick[0],
                this.startTimePick[1]
            );
        },
        getEndTime() {
            console.log("endDate:" + this.endTimePick);
        },
        //走马灯页数
        showIndex(e) {
            this.cardIndex = e;
            console.log("走马灯的页数:" + e);
        },
        //分页当前所在页数
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        handleCurrentChange1(val) {
            this.currentPage = val;
        },
        // 表头样式设置
        jcHeadClass() {
            return "font-size:14px;text-align: center;line-height: 12px;font-weight:700;color:#ffc675;background-color: rgba(33,36,37,.62);";
        },
        // 表格样式设
        jcRowClass() {
            return "font-size:14px;text-align: center;line-height: 12px;";
        },

        //锁定搜索框输入
        jcfocus() {
            if (
                document.querySelector(".search-input") ==
                document.activeElement
            ) {
                this.fuzzy_search(this.searchVal.trim());
            }
        },

        //搜索框取消焦点
        jcblur() {
            if (!this.searchVal) {
                /* document
                    .getElementById("jc-search-list")
                    .classList.add("closed"); */
                document
                    .getElementById("jc-search-scrollbar")
                    .classList.add("closed");
            }
        },

        //搜索功能
        fuzzy_search(value) {
            document
                .getElementById("jc-search-scrollbar")
                .classList.remove("closed");
            var that = this;
            this.jcfuzzy = [];
            if (!value) {
                that.jcfuzzy = [];
                return;
            }
            if(this.jcfuzzy) {
                let params = { keyword: this.searchVal.trim() };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/searchFood", params)
                .then(response => {
                    let res = response.data;
                    res.message.shift();
                    this.jcfuzzy = res.message;
                     console.log("this.jcfuzzy:" + JSON.stringify(this.jcfuzzy));
                })
                .catch(err => {
                    console.log(err);
                });
            // this.timefood = this.jcfuzzy.productid;
            }
            let params = { keyword: this.searchVal.trim() };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/searchFood", params)
                .then(response => {
                    let res = response.data;
                    res.message.shift();
                    this.jcfuzzy = res.message;
                     console.log("this.jcfuzzy:" + JSON.stringify(this.jcfuzzy));
                })
                .catch(err => {
                    console.log(err);
                });
            // this.timefood = this.jcfuzzy.productid;
        },
        //选中
        choosejcFuzzy(item) {
            this.searchVal = item.product_name;
            this.selectSearch = item.product_name;
            this.product_name = item.product_name;
            this.batchid = item.batch_id;
            this.startTime = item.year + "年" + item.date;
            this.timefood = item.product_id;
            console.log("choosejcFuzzy:" + JSON.stringify(item));
            this.getFoodEvent(item.food_id, "2019-08-03");
            this.initVis(item.food_id);
            this.isSearchItem = true;
            /* document
                .getElementById("jc-search-list")
                .classList.remove("closed"); */
            //this.jcSearch(item.product_id);
            this.choosejcSearch(item);
        },
        //食品搜索结果列表
        jcTimeSearch(food, start, end) {
            document
                .getElementById("jc-search-scrollbar")
                .classList.add("closed");
            var that = this;
            let params = { productid: food, startdate: start, enddate: end };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getTimeRegion", params)
                .then(response => {
                    let res = response.data;
                    that.jcsearch = res.message;
                    // console.log(
                    //     "that.jctimesearch:" + JSON.stringify(that.jcsearch)
                    // );
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //食品搜索结果列表
        /* jcSearch(value) {
            document
                .getElementById("jc-search-scrollbar")
                .classList.add("closed");
            var that = this;
            let params = { productid: value };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getSearchList", params)
                .then(response => {
                    let res = response.data;
                    that.jcsearch = res.message;
                    // console.log(
                    //     "that.jcsearch:" + JSON.stringify(that.jcsearch)
                    // );
                })
                .catch(err => {
                    console.log(err);
                });
        }, */
        //选中搜索结果
        choosejcSearch(value) {
            this.isSearchItem = false;
            document
                .getElementById("jc-search-scrollbar")
                .classList.add("closed");
            this.year = value.year;
            this.date = value.date;
            this.batchid = value.batch_id;
            this.getChainPoint(this.batchid);
            this.getBatchFood(this.batchid);
            
            var _this = this;
            this.chartmap
                .getSource("compoint")
                .setData({ type: "FeatureCollection", features: [] });

            this.chartmap
                .getSource("plant")
                .setData({ type: "FeatureCollection", features: [] });

            this.chartmap
                .getSource("reproduce")
                .setData({ type: "FeatureCollection", features: [] });

            this.chartmap
                .getSource("transport")
                .setData({ type: "FeatureCollection", features: [] });

            this.chartmap
                .getSource("sale")
                .setData({ type: "FeatureCollection", features: [] });

            let params = { batchid: this.batchid };
            this.mapbatchArray = [];
            console.log("bid:" + this.batchid);
            this.searchVal = "";
            https
                .fetchGet("/foodSample/api/getLinePoint", params)
                .then(response => {
                    this.mapbatchArray = response.data.message[0];
                    this.chartmap
                        .getSource("compoint")
                        .setData(this.mapbatchArray);
                    _this.plantArr = [];
                    _this.produceArr = [];
                    _this.transArr = [];
                    _this.saleArr = [];
                    var poarr = [];
                    poarr = _this.mapbatchArray.features;
                    console.log("poarr:" + JSON.stringify(poarr));
                    poarr.forEach(function(e) {
                        if (e.properties.categoryid == "CPC01") {
                            console.log(
                                "poarr[i]:" + JSON.stringify(e.properties)
                            );
                            _this.plantArr.push(e);
                        } else if (e.properties.categoryid == "CPC02") {
                            _this.produceArr.push(e);
                        } else if (e.properties.categoryid == "CPC03") {
                            _this.transArr.push(e);
                        } else {
                            _this.saleArr.push(e);
                        }
                    });
                    this.chartmap
                        .getSource("plant")
                        .setData({
                            type: "FeatureCollection",
                            features: _this.plantArr
                        });
                    this.chartmap
                        .getSource("reproduce")
                        .setData({
                            type: "FeatureCollection",
                            features: _this.produceArr
                        });
                    this.chartmap
                        .getSource("transport")
                        .setData({
                            type: "FeatureCollection",
                            features: _this.transArr
                        });
                    this.chartmap
                        .getSource("sale")
                        .setData({
                            type: "FeatureCollection",
                            features: _this.saleArr
                        });
                    console.log("plantArr:" + JSON.stringify(_this.plantArr));
                });
        },
        getComAdress(item) {
            var cate = "";
            if (item.categoryid == "CPC01") {
                cate = "农业生产环节";
            } else if (item.categoryid == "CPC02") {
                cate = "制造加工环节";
            } else if (item.categoryid == "CPC03") {
                cate = "流通储存环节";
            } else {
                cate = "终端销售环节";
            }
            this.chartmap.setFilter("highlight", [
                "in",
                "companyid",
                item.companyid
            ]);
            this.jcpopup
                .setLngLat(item.coordinates)
                .setHTML(
                    "<span class='popup-item'><span class='popup-key'>所属环节：" +
                        "</span><span class='popup-value'>" +
                        cate +
                        "</span></span></br><span class='popup-item'><span class='popup-key'>公司名：" +
                        "</span><span class='popup-value'>" +
                        item.company_name +
                        "</span></span></br><span class='popup-item'><span class='popup-key'>公司地址：" +
                        "</span><span class='popup-value'>" +
                        item.address +
                        "</span></span>"
                )
                .addTo(this.chartmap);
        },
        //获取全链条
        getFullChain(batchid) {
            var that = this;
            // console.log("comarrs[]:" + JSON.stringify(comarrs));
            let params = { batchid: batchid };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getInLineInfo", params)
                .then(response => {
                    that.chainArray = [];
                    let res = response.data;
                    that.chainArray = res.message;
                    this.initMap(that.chainArray, batchid);
                    let array = [];
                    let arritem = {};
                    let arrtest = [];
                    let itest = {};
                    let length = res.message.length;
                    console.log(
                        "chainarray[]:" + JSON.stringify(that.chainArray)
                    );
                })
                .catch(err => {
                    console.log(err);
                });
            var newchain = [];
            newchain = that.chainArray;
            console.log("echarts线条准备前:" + JSON.stringify(newchain));
        },
        //初始化地图
        initMap(arr, bid) {
            console.log("mapbid:" + bid);
            // this.getChainPoint(this.batchid);
            window.mapboxgl = mapboxgl;
            mapboxgl.accessToken =
                "pk.eyJ1IjoiY2luZHkwNzkiLCJhIjoiY2p5MW0yM2FmMDNhbzNpcnpoeGVqOXpmYSJ9.zKbdCDdA69t7b3zSWctaRw";
            /* const jcmap = new mapboxgl.Map({
                container: "jcmap", // container id
                style: "mapbox://styles/mapbox/" + this.layerId, // stylesheet location
                center: [110, 37], // starting position [lng, lat]
                zoom: 3.4 // starting zoom
            }); */
            var myechart = echarts.init(document.getElementById("jcmap"));
            var layerList = document.getElementById("mrnu");
            var inputs = layerList.getElementsByTagName("input");
            var _this = this; //this指的是init中的全局变量

            // console.log("map中的mapbatch:" + JSON.stringify(comarrs));
            /* let params = { batchid: bid };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getInLineInfo", params)
                .then(response => {
                    _this.chainArray = [];
                    let res = response.data;
                    _this.chainArray = res.message;
                    myechart.setOption({
                mapbox3D: {
                    center: ["108.923842", "34.339875"],
                    zoom: 4,
                    altitudeScale: 10000000,
                    style: "mapbox://styles/mapbox/dark-v9",
                    postEffect: {
                        enable: true,
                        FXAA: {
                            enable: true
                        }
                    },
                    light: {
                        main: {
                            intensity: 1,
                            shadow: true,
                            shadowQuality: "high"
                        },
                        ambient: {
                            intensity: 0
                        }
                    }
                },
                series: [
                    {
                        type: "lines3D",
                        coordinateSystem: "mapbox3D",
                        effect: {
                            show: true,
                            trailWidth: 3,
                            trailOpacity: 0.6,
                            trailLength: 0.2,
                            constantSpeed: 5
                        },
                        blendMode: "lighter",
                        polyline: true,
                        lineStyle: {
                            width: 2,
                            color: "#ffc107",
                            opacity: 0.1
                        },
                        data: _this.chainArray
                    }
                ]
            });
                }) */

            //echarts中的3d线段
            //setInterval();
            myechart.setOption({
                mapbox3D: {
                    center: ["117.842707","32.696564"],
                    zoom: 3.6,
                    altitudeScale: 10000000,
                    style: "mapbox://styles/mapbox/dark-v9",
                    postEffect: {
                        enable: true,
                        FXAA: {
                            enable: true
                        }
                    },
                    light: {
                        main: {
                            intensity: 1,
                            shadow: true,
                            shadowQuality: "high"
                        },
                        ambient: {
                            intensity: 0
                        }
                    }
                },
                series: [
                    {
                        type: "lines3D",
                        coordinateSystem: "mapbox3D",
                        effect: {
                            show: true,
                            trailWidth: 3,
                            trailOpacity: 0.6,
                            trailLength: 0.2,
                            constantSpeed: 5
                        },
                        blendMode: "lighter",
                        polyline: true,
                        lineStyle: {
                            width: 2,
                            color: "#ffc107",
                            opacity: 0.1
                        },
                        data: arr
                        /*  data: [
                            // 如果 polyline 为 true 还可以设置更多的点
                            [
                                [114.3896, 30.6628], //起点
                                [121.4648, 31.2891],
                                [113.0823, 28.2568],
                                [110.4648, 21.2891] // 终点
                            ],
                            [
                                [118.766733, 32.139132], //起点
                                [121.4648, 31.2891],
                                [120.120897, 30.287005],
                                [119.679362, 29.13063]
                            ],
                            [
                                [118.766733, 32.139132], //起点
                                [121.4648, 31.2891],
                                [120.120897, 30.287005],
                                [121.390311, 28.644865]
                            ] 
                        ]  */
                        //     [
                        //         count: function() {
                        //             return taxiRoutes.length;
                        //         },
                        //         getItem: function(idx) {
                        //             return taxiRoutes[idx]
                        //         }
                        // ]
                    }
                ]
            });
            /* console.log("myecharts") */

            _this.chartmap = myechart
                .getModel()
                .getComponent("mapbox3D")
                .getMapbox();

            _this.chartmap.setMaxZoom(10);
            _this.chartmap.setMinZoom(2);

            _this.chartmap.addControl(
                new MapboxLanguage({
                    defaultLanguage: "zh"
                })
            );

            //  _this.chartmap.addControl(new mapboxgl.NavigationControl());

            //chartmap.scrollZoom.disable();

            //刻度尺
            /*   var scale = new mapboxgl.ScaleControl({
                maxWidth: 120,
                unit: "metric"
            });
            _this.chartmap.addControl(scale); 

            scale.setUnit("metric"); */

            _this.chartmap.on("load", function() {
                //绘制公司地点
                _this.chartmap.addSource("compoint", {
                    type: "geojson",
                    data: { type: "FeatureCollection", features: [] }
                });
                _this.chartmap
                    .getSource("compoint")
                    .setData(_this.mapbatchArray);

                // 绘制mapbox地图上的全链条，和echarts上的线条重合
                /*  _this.chartmap.addSource("jcstr", {
                    type: "geojson",
                   // data: _this.mapArray
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                type: "Feature",
                                properties: {
                                    batchID: "n123",
                                    startcom: "湖北金华食品有限公司",
                                    endcom: "123",
                                    startaddress: "a",
                                    endaddress:
                                        "湖北省武汉市武昌区铁机路452号123测试字段测试字段测试字段",
                                    category: "农业生产",
                                    no_pass_rate: "20%"
                                },
                                geometry: {
                                    type: "LineString",
                                    coordinates: [
                                        [114.3896, 30.6628], //起点
                                        [121.4648, 31.2891],
                                        [113.0823, 28.2568],
                                        [110.4648, 21.2891]
                                    ]
                                }
                            }
                        ]
                    } 
                }); */

                //添加公司地点
                _this.chartmap.addLayer({
                    id: "chpoint",
                    source: "compoint",
                    type: "circle",
                    paint: {
                        "circle-radius": 10,
                        "circle-color": "#fff"
                    }
                });

                _this.chartmap.addLayer({
                    id: "highlight",
                    source: "compoint",
                    type: "circle",
                    paint: {
                        "circle-radius": 11,
                        "circle-color": "#ffc107"
                    },
                    filter: ["in", "companyid", ""]
                });

                //添加全链条
                /* chartmap.addLayer({
                    id: "route",
                    type: "line",
                    source: "jcstr",
                    layout: {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint: {
                        "line-color": "rgba(200, 40, 0, .2)",
                        "line-width": 5
                    }
                }); */
            });

            //

            _this.chartmap.on("load", function() {
                _this.chartmap.addSource("plant", {
                    type: "geojson",
                    data: { type: "FeatureCollection", features: [] }
                });
                _this.chartmap.getSource("plant").setData({
                    type: "FeatureCollection",
                    features: [
                        {
                            "type": "Feature",
                            "properties": {
                                "batchid": "B000004",
                                "companyid": "CP018001",
                                "company_name": "蒙牛牛奶企业",
                                "address": "内蒙古自治区呼和浩特市赛罕区",
                                "category": "生产企业",
                                "categoryid": "CPC01"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    111.7117,
                                    40.8242
                                ]
                            }
                        },
                        {
                            type: "Feature",
                            properties: {
                                batch_id: "NN39202",
                                companyid: "CP8740",
                                company_name: "南京市食品有限公司",
                                address:
                                    "南京市武昌区铁机路452号123测试字段测试字段测试字段",
                                category: "农业生产",
                                categoryid: "CPC01"
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [118.766733, 32.139132]
                            }
                        }
                    ]
                });
                _this.chartmap.addSource("reproduce", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018015",
                                    "company_name": "大同牛奶加工企业",
                                    "address": "山西省大同市平城区御河西路",
                                    "category": "加工企业",
                                    "categoryid": "CPC02"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        113.3157,
                                        40.078
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018051",
                                    "company_name": "成都元加工公司",
                                    "address": "四川省成都市河西区",
                                    "category": "加工企业",
                                    "categoryid": "CPC02"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        103.0,
                                        30.0
                                    ]
                                }
                            },
                        ]
                    }
                });
                _this.chartmap.addSource("transport", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018022",
                                    "company_name": "太原运输公司",
                                    "address": "山西省太原市迎泽区康乐南巷",
                                    "category": "运输（流通）企业",
                                    "categoryid": "CPC03"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        112.5494,
                                        37.8488
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018048",
                                    "company_name": "长春运输公司",
                                    "address": "吉林省长春市下街区",
                                    "category": "运输（流通）企业",
                                    "categoryid": "CPC03"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        125.4,
                                        44.3
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018052",
                                    "company_name": "西宁运输公司",
                                    "address": "青海省西宁市南开区",
                                    "category": "运输（流通）企业",
                                    "categoryid": "CPC03"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        101.86,
                                        36.46
                                    ]
                                }
                            },
                        ]
                    }
                });
                _this.chartmap.addSource("sale", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018023",
                                    "company_name": "西安销售公司",
                                    "address": "陕西省西安市未央区红旗路",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        108.9678,
                                        34.357
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018050",
                                    "company_name": "昌南销售公司",
                                    "address": "江西省南昌市河东区",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        115.4,
                                        27.94
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018098",
                                    "company_name": "海杨连锁公司",
                                    "address": "上海市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        121.476228,
                                        31.223083
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018049",
                                    "company_name": "哈尔滨销售公司",
                                    "address": "黑龙江哈尔滨市和平区",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        127.13,
                                        47.07
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018094",
                                    "company_name": "乌兰浩特销售公司",
                                    "address": "兴安盟",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        122.882876,
                                        45.671336
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018095",
                                    "company_name": "呼伦贝尔连锁公司",
                                    "address": "呼伦贝尔市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        119.803844,
                                        49.173488
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018096",
                                    "company_name": "鸡西销售公司",
                                    "address": "鸡西市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        130.972458,
                                        45.30696
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018097",
                                    "company_name": "敦化销售公司",
                                    "address": "延边朝鲜族自治州",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        128.242346,
                                        43.376824
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018053",
                                    "company_name": "疆域销售公司",
                                    "address": "新疆吐鲁番市河北区",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        89.31,
                                        42.95
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018099",
                                    "company_name": "张掖销售公司",
                                    "address": "张掖市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        100.467907,
                                        38.932963
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018100",
                                    "company_name": "拉萨销售公司",
                                    "address": "拉萨市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        91.173284,
                                        29.666015
                                    ]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "batchid": "B000004",
                                    "companyid": "CP018101",
                                    "company_name": "喀什销售公司",
                                    "address": "喀什市",
                                    "category": "终端销售企业",
                                    "categoryid": "CPC04"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [
                                        75.99812,
                                        39.479663
                                    ]
                                }
                            }
                        ]
                    }
                });
                _this.chartmap.loadImage(
                    "http://47.107.62.116:8082/static/icon/11.png",
                    function(error, image) {
                        if (error) throw error;
                        _this.chartmap.addImage("plant", image);
                        _this.chartmap.addLayer({
                            id: "plants",
                            type: "symbol",
                            source: "plant",
                            layout: {
                                "icon-image": "plant",
                                "icon-size":0.08,
                                "icon-allow-overlap": true,
                                "icon-optional": true,
                                "text-allow-overlap": true,
                              /*  "text-field": ['get','category'], */
                                "text-field": '农业生产',
                                "text-offset": [0, 1],
                                "text-anchor": "top",
                                "text-size": 12
                            },
                            paint: {
                                "text-color": "#ffe63f"
                            }
                        });
                    }
                );
                _this.chartmap.loadImage(
                    "http://47.107.62.116:8082/static/icon/3.png",
                    function(error, image) {
                        if (error) throw error;
                        _this.chartmap.addImage("trans", image);
                        _this.chartmap.addLayer({
                            id: "transports",
                            type: "symbol",
                            source: "transport",
                            layout: {
                                "icon-image": "trans",
                                "icon-size":0.08,
                                "text-field": '流通运输',
                                "icon-allow-overlap": true,
                                "icon-optional": true,
                                "text-allow-overlap": true,
                                "text-offset": [0, 1],
                                "text-anchor": "top",
                                "text-size": 12
                            },
                            paint: {
                                "text-color": "#ffe63f"
                            }
                        });
                    }
                );
                _this.chartmap.loadImage(
                    "http://47.107.62.116:8082/static/icon/22.png",
                    function(error, image) {
                        if (error) throw error;
                        _this.chartmap.addImage("reproduce", image);
                        _this.chartmap.addLayer({
                            id: "reproduces",
                            type: "symbol",
                            source: "reproduce",
                            layout: {
                                "icon-image": "reproduce",
                                "icon-size":0.08,
                                "text-field": '制造加工',
                                "icon-allow-overlap": true,
                                "icon-optional": true,
                                "text-allow-overlap": true,
                                "text-offset": [0, 1],
                                "text-anchor": "top",
                                "text-size": 12
                            },
                            paint: {
                                "text-color": "#ffe63f"
                            }
                        });
                    }
                );
                _this.chartmap.loadImage(
                    "http://47.107.62.116:8082/static/icon/4.png",
                    function(error, image) {
                        if (error) throw error;
                        _this.chartmap.addImage("sale", image);
                        _this.chartmap.addLayer({
                            id: "sales",
                            type: "symbol",
                            source: "sale",
                            layout: {
                                "icon-image": "sale",
                                "icon-size":0.08,
                                "text-field": '终端销售',
                                "icon-allow-overlap": true,
                                "icon-optional": true,
                                "text-allow-overlap": true,
                                "text-offset": [0, 1],
                                "text-anchor": "top",
                                "text-size": 12
                            },
                            paint: {
                                "text-color": "#ffe63f"
                            }
                        });
                    }
                );
            });
            //悬浮窗
            var markerHeight = 10,
                markerRadius = 10,
                linearOffset = 25;
            var popupOffsets = {
                bottom: [0, 0],
                "bottom-left": [0, 0],
                "bottom-right": [0, 0],
                top: [0, markerHeight],
                "top-left": [
                    linearOffset,
                    (markerHeight - markerRadius + linearOffset) * -1
                ],
                "top-right": [
                    -linearOffset,
                    (markerHeight - markerRadius + linearOffset) * -1
                ],
                left: [markerRadius, (markerHeight - markerRadius) * -1],
                right: [-markerRadius, (markerHeight - markerRadius) * -1]
            };
            _this.jcpopup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                offset: popupOffsets,
                anchor: "bottom",
                maxWidth: "260px"
            });

            _this.chartmap.on("mouseenter", "chpoint", function(e) {
                //弹出框
                // Change the cursor style as a UI indicator.
                _this.chartmap.getCanvas().style.cursor = "pointer";
                var coordinates = e.features[0].geometry.coordinates.slice();
                //  var companyid = e.features[0].properties.companyid;
                var company = e.features[0].properties.company_name;
                var address = e.features[0].properties.address;
                var cate = "";
                if (e.features[0].properties.categoryid == "CPC01") {
                    cate = "农业生产环节";
                } else if (e.features[0].properties.categoryid == "CPC02") {
                    cate = "制造加工环节";
                } else if (e.features[0].properties.categoryid == "CPC03") {
                    cate = "流通储存环节";
                } else {
                    cate = "终端销售环节";
                }
                //确保弹出框位置
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] +=
                        e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                _this.jcpopup
                    .setLngLat(coordinates)
                    .setHTML(
                        "<span class='popup-item'><span class='popup-key'>所属环节：" +
                            "</span><span class='popup-value'>" +
                            cate +
                            "</span></span></br><span class='popup-item'><span class='popup-key'>公司名：" +
                            "</span><span class='popup-value'>" +
                            company +
                            "</span></span></br><span class='popup-item'><span class='popup-key'>公司地址：" +
                            "</span><span class='popup-value'>" +
                            address +
                            "</span></span>"
                    )
                    .addTo(_this.chartmap);
            });

            _this.chartmap.on("mouseleave", "chpoint", function() {
                _this.chartmap.getCanvas().style.cursor = "";
                _this.jcpopup.remove();
                //chartmap.setFilter("points-hover", ["==", "name", ""]);
            });
            //右侧弹出框弹出的具体信息
            //右侧弹出框弹出的具体信息
            _this.chartmap.on("click", "chpoint", function(e) {
                //var province_name = e.features[0].properties.name;
                // var province_code = e.features[0].properties.adcode.toString();
                var feature = e.features[0];
                _this.chartmap.setFilter("highlight", [
                    "in",
                    "companyid",
                    feature.properties.companyid
                ]);
                $("#jcrfood").trigger("click");
                var mapFeature = _this.batchInfo;
                var index = mapFeature.map(item => item.companyid).indexOf(feature.properties.companyid)
                _this.setActiveItem(index);
                //document.getElementById("city").innerHTML = province_name;
            });
        },
        //获取全链条的所有公司点（geojson）
        getChainPoint(value) {
            var that = this;
            //that.mapbatchArray = [];
            let params = { batchid: value };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getLinePoint", params)
                .then(response => {
                    let res = response.data.message;
                    let array = [];
                    let arritem = {};
                    // let batchlen = res.message.length;
                    that.mapbatchArray = res[0];
                    that.getFullChain(that.batchid);
                    console.log("mappoint:batch-:" + value);
                    console.log(
                        "mapcomArray:" + JSON.stringify(that.mapbatchArray)
                    );
                });
        },
        //通过公司id知道公司信息
        getCompany(companyid) {
            var that = this;
            let params = { companyid: companyid };
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getInLineCompanyInfo", params)
                .then(response => {
                    let res = response.data.message;
                    let arritem = {};
                    that.companyInfo = res;
                    // console.log("companyinfo[]:" + JSON.stringify(res));
                })
                .catch(err => {
                    console.log(err);
                });

            return that.companyInfo;
        },
        //获取舆情五年安全事件
        getFoodEvent(foodid, startdate) {
            var that = this;
            this.foodEvents = [];
            console.log("foodid:"+foodid+",startdate:"+startdate);
            let params = { foodId: foodid, startdate: startdate };
            //调取模糊搜索接口
            https
                .fetchGet("/publicSent/api/getPublicOpinion", params)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    // let length = res.message.length;
                    array = res.message;
                    var reg = new RegExp("-");
                    array.forEach(function(e) {
                        /* arritem = {
                            event_name: e.event_name,
                            startdate: e.startdate,
                            enddate: e.enddate,
                            address: e.address
                        }; */
                        arritem = {
                            event_name: e.event_name,
                            startdate: e.startdate,
                            enddate: e.enddate,
                            startend: e.startdate+ "到" + e.enddate,
                            address: e.address
                        };
                        that.foodEvents.push(arritem);
                    });
                    // console.log(
                    //     "eventfood[]:" + JSON.stringify(that.foodEvents)
                    // );
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取批次中的食品信息和公司信息
        getBatchFood(value) {
            var that = this;
            that.batchInfo = [];
            let params = { batchid: value };
            console.log("batchyoumeiy");
            //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getTrackInfo", params)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    let batchlen = res.message.length;
                    console.log("batchlen:"+batchlen)
                    array = res.message;
                    /* for(var i=0; i<that.batchInfo .length; i++){
                        var item = that.batchInfo[i]
                        for(var j = i+1; j<that.batchInfo.length; j++){
                                if(item.properties.companyid == that.batchInfo[j].properties.companyid){
                                that.batchInfo.splice(j,1)
                                i--
                                }                          
                        }
                    }; */
                    /* var hash = {}; 
                    array  = array.reduce(function(item, next) { 
                    hash[next.company_start.companyid] ? '' : hash[next.company_start.companyid] = true && item.push(next); 
                    return item 
                    }, [])   */

                    console.log("bacthinfo:" + JSON.stringify(array));
                    that.batchfood = array[0];
                    array.forEach(function(e) {
                        arritem = {
                            time_start: e.time_start,
                            address: e.address_begin,
                            companyid: e.company_start.companyId,
                            company_name: e.company_start.companyName,
                            categoryid: e.company_start.categoryId,
                            coordinates: [
                                e.company_start.longitude,
                                e.company_start.latitude
                            ],
                            responsible: e.company_start.manager,
                            contact: e.company_start.telephone
                        };
                        that.batchInfo.push(arritem);
                        arritem = {
                            time_start: e.time_end,
                            address: e.address_end,
                            companyid: e.company_end.companyId,
                            company_name: e.company_end.companyName,
                            categoryid: e.company_end.categoryId,
                            coordinates: [
                                e.company_end.longitude,
                                e.company_end.latitude
                            ],
                            responsible: e.company_end.manager,
                            contact: e.company_end.telephone
                        };
                        that.batchInfo.push(arritem);
                    });
                    // let enditem = {};
                    //  that.getCompany(array[batchlen - 1].company_start.companyId);
                   /*  that.batchInfo.push({
                        time_start: array[batchlen - 1].time_end,
                        companyid: array[batchlen - 1].company_end.companyId,
                        address: array[batchlen - 1].address_end,
                        company_name:
                            array[batchlen - 1].company_end.companyName,
                        categoryid: array[batchlen - 1].company_end.categoryId,
                        coordinates: [
                            array[batchlen - 1].company_end.longitude,
                            array[batchlen - 1].company_end.latitude
                        ],
                        responsible: array[batchlen - 1].company_end.manager,
                        contact: array[batchlen - 1].company_end.telephone
                    }); */
                    /* let mapArray = [];
                    let mapit = {};
                    that.batchInfo.forEach(function(ab) {
                        mapit = {
                            type: "Features",
                            properties: {
                                batchid: value,
                                companyid: ab.companyid,
                                address: ab.address,
                                company_name: ab.company_name,
                                categoryid: ab.categoryid
                            },
                            geometry: {
                                type: "Point",
                                coordinates: [ab.comlng, ab.comlat]
                            }
                        };
                        mapArray.push(mapit);
                    });
                    that.mapbatchArray = {
                        type: "FeatureCollection",
                        features: mapArray
                    }; */
                    var hash = {};
                    that.batchInfo = that.batchInfo.reduce(function(
                        item,
                        next
                    ) {
                        hash[next.companyid]
                            ? ""
                            : (hash[next.companyid] = true && item.push(next));
                        return item;
                    },
                    []);
                    console.log("bacthfood:" + JSON.stringify(that.batchInfo));
                    console.log("batchinfolen:"+that.batchInfo.length)
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 初始化
        init() {
            var newArrData = [];
            newArrData = [
                // 如果 polyline 为 true 还可以设置更多的点
                [
                    [114.3896, 30.6628], //起点
                    [121.4648, 31.2891],
                    [113.0823, 28.2568],
                    [110.4648, 21.2891] // 终点
                ],
                [
                    [118.766733, 32.139132], //起点
                    [121.4648, 31.2891],
                    [120.120897, 30.287005],
                    [119.679362, 29.13063]
                ],
                [
                    [118.766733, 32.139132], //起点
                    [121.4648, 31.2891],
                    [120.120897, 30.287005],
                    [121.390311, 28.644865]
                ]
            ];

            this.initMap(this.chainArray, this.batchid);

            /* function switchLayer(layer) {
                var layerIdd = layer.target.value;
                console.log("layer.target.value" + layer.target.value);
                _this.layerId = layerIdd;
                jcmap.setStyle("mapbox://styles/mapbox/" + layerIdd);
                jcmap.addControl(
                    new MapboxLanguage({
                        defaultLanguage: "zh"
                    })
                ); 
                _this.init();
                console.log("地图样式切换:" + layerIdd);
            }
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].onclick = switchLayer;
            }*/
            /* jcmap.on("load", function() {
                var layers = jcmap.getStyle().layers;
                // Find the index of the first symbol layer in the jcmap style
                var firstSymbolId;
                for (var i = 0; i < 5; i++) {
                    if (layers[i].type === "symbol") {
                        firstSymbolId = layers[i].id;
                        break;
                    }
                }

                //线段端点
                jcmap.addSource("dot", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [115.9387207, 28.6327468]
                                },
                                properties: {
                                    description: "这是悬浮窗的内容1"
                                }
                            },
                            {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [102.83203125, 30.44867368]
                                },
                                properties: {
                                    description: "这是悬浮窗的内容2"
                                }
                            },
                            {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [119.35546875, 25.91852616]
                                },
                                properties: {
                                    description: "这是悬浮窗的内容3"
                                }
                            },
                            {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [113.29101563, 23.09994421]
                                },
                                properties: {
                                    description: "这是悬浮窗的内容4"
                                }
                            },
                            {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [108.39111328, 22.71539002]
                                },
                                properties: {
                                    description: "这是悬浮窗的内容5"
                                }
                            }
                        ]
                    }
                });
                jcmap.addLayer(
                    {
                        id: "point",
                        source: "dot",
                        type: "circle",
                        paint: {
                            "circle-radius": 3,
                            "circle-color": "#007cbf"
                        }
                    },
                    firstSymbolId
                );

                var popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false
                });
                //<!-- 悬浮窗效果 -->
                jcmap.on("mouseenter", "point", function(e) {
                    jcmap.getCanvas().style.cursor = "pointer";

                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;

                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] +=
                            e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    popup
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(jcmap);
                });

                jcmap.on("mouseleave", "point", function() {
                    jcmap.getCanvas().style.cursor = "";
                    popup.remove();
                });
            }); */

            //  将mapbox作为echarts的底图
            /* var szRoad = {
                success: true,
                errorCode: 0,
                errorMsg: "成功",
                data: [
                    { ROAD_LINE: "104.096113,30.615077;104.098278,30.615873" },
                    {
                        ROAD_LINE:
                            "104.099107,30.613973;104.098809,30.616726;104.098316,30.622058;104.097600,30.623242;104.097625,30.623352;104.097426,30.623377;104.093764,30.620923;104.092242,30.620972;104.086071,30.620724;104.079613,30.620518;104.071359,30.620333;104.070254,30.620315;104.067066,30.623630;104.066969,30.624583;104.066858,30.630659;104.066834,30.631848;104.066754,30.633316;104.066531,30.637764;104.066348,30.643100;104.066269,30.646687;104.066003,30.651595;104.064131,30.652732;104.064131,30.652732"
                    }
                ]
            };

            var taxiRoutes = [];
            var data = szRoad.data;
            var hStep = 300 / (data.length - 1);

            var i = 0;
            for (var x in data) {
                // i++;
                // if(i<5000)
                //     continue;
                var line = data[x];
                // if(busLines.length>500)
                //     break;
                var pointString = line.ROAD_LINE;
                var pointArr = pointString.split(";");
                var lnglats = [];
                for (var j in pointArr) {
                    lnglats.push(pointArr[j].split(","));
                }
                taxiRoutes.push({
                    coords: lnglats,
                    lineStyle: {
                        // color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * x))
                    }
                });
            } */

            //选择公司地点后，在地图上定位公司点
            /*  var comitems = document.getElementsByClassName("jcr-link-content");
            for(var i=0;i<comitems.length;i++){
                comitems[i].addEventListener('mouseover', function() {
                // Highlight corresponding feature on the map
                _this.jcpopup.setLngLat(feature.geometry.coordinates)
                    .setText(feature.properties.name + ' (' + feature.properties.abbrev + ')')
                    .addTo(map);
            });
            } */
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("echartsBox")); //添加<div id="echartsBox"></div>
            var option = {};
            myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

            // 左右侧边栏展开
            var _this = this;
            // 左边侧边栏
            (function() {
                var NavigateBar = function(elementId) {
                    this.eId = elementId || "jc-wrap";
                    this.el = document.getElementById(this.eId);
                    this.el.addEventListener("click", function(evt) {
                        evt.stopPropagation();
                    });
                    this.state = "allClosed"; //hasOpened
                    this.currentOpenedEl = null;

                    //使用jquery就更方便使用Delegation
                    var forEach = Array.prototype.forEach;
                    var self = this;
                    // console.log("未开始之前的self.state:" + self.state);
                    var navigatorList = document.querySelectorAll(
                        "#" + this.eId + " > div"
                    );
                    forEach.call(navigatorList, function(navigator) {
                        navigator.addEventListener("click", function(evt) {
                            var currentEl = document.getElementById(
                                evt.currentTarget.id + "-content"
                            );
                            var currentA = document.getElementById(
                                evt.currentTarget.id
                            );
                            if (self.state === "allClosed") {
                                currentEl.className = "nav-content";
                                //  currentEl.style.top = '0px';
                                currentEl.classList.add("move_right");
                                // console.log(
                                //     "diyici开始之前的evt.currentTarget.id:" +
                                //         evt.currentTarget.id
                                // );
                                self.state = "hasOpened";
                                self.currentOpenedEl = currentEl;
                            } else {
                                self.currentOpenedEl.className = "nav-content";
                                //   self.currentOpenedEl.style.top = '0px';
                                self.currentOpenedEl.classList.add("move_left");
                                currentEl.className = "nav-content";
                                //    currentEl.style.top = '0px';
                                currentEl.classList.add("move_right");
                                self.currentOpenedEl = currentEl;
                            }
                        });
                    });

                    var navConCloseBarList = document.querySelectorAll(
                        ".left_modulebox_hidebtn__QHdrj"
                    );
                    forEach.call(navConCloseBarList, function(navConCloseBar) {
                        navConCloseBar.addEventListener("click", function(evt) {
                            var currentEl =
                                evt.currentTarget.parentNode.parentNode;
                          //  _this.chartmap.setFilter("highlight", null);
                            currentEl.className = "nav-content";
                            //   currentEl.style.top = '0px';
                            currentEl.classList.add("move_left");
                            self.state = "allClosed";
                            var jcf = document.getElementById("jcfood");
                            var jcc = document.getElementById("jccompany");
                            var jca = document.getElementById("jcarea");
                            jcf.classList.remove("sidebar-item-active");
                            jcc.classList.remove("sidebar-item-active");
                            jca.classList.remove("sidebar-item-active");
                            console.log(self, evt);
                        });
                    });
                };

                NavigateBar.prototype.close = function() {
                    this.currentOpenedEl.className = "nav-content";
                    //   this.currentOpenedEl.style.top = '0px';
                    this.currentOpenedEl.classList.add("move_left");
                    // var currentA = document.getElementById(self.eId);
                    //  currentA.classList.remove('sidebar-item-active');
                    // console.log("this.currentOpenedEl:" + this.currentOpenedEl);
                    this.state = "allClosed";
                };

                var navigateBar = new NavigateBar();
            })();

            $(".sidebar-item").each(function(index) {
                $(this).click(function() {
                    $(this)
                        .addClass("sidebar-item-active")
                        .siblings()
                        .removeClass("sidebar-item-active");
                });
            });

            //右边侧边栏
            (function() {
                var NavigateBar = function(elementId) {
                    this.eId = elementId || "jc-right-wrap";
                    this.el = document.getElementById(this.eId);
                    this.el.addEventListener("click", function(evt) {
                        evt.stopPropagation();
                    });
                    this.state = "allClosed"; //hasOpened
                    this.currentOpenedEl = null;

                    //使用jquery就更方便使用Delegation
                    var forEach = Array.prototype.forEach;
                    var self = this;
                    var navigatorList = document.querySelectorAll(
                        "#" + this.eId + " > div"
                    );
                    forEach.call(navigatorList, function(navigator) {
                        navigator.addEventListener("click", function(evt) {
                            var currentEl = document.getElementById(
                                evt.currentTarget.id + "-content"
                            );
                            var currentA = document.getElementById(
                                evt.currentTarget.id
                            );
                            if (self.state === "allClosed") {
                                currentEl.className = "jcnav-content";
                                //  currentEl.style.top = '0px';
                                currentEl.classList.add("jcmove_left");
                                // console.log(
                                //     "diyici开始之前的evt.currentTarget.id:" +
                                //         evt.currentTarget.id
                                // );
                                self.state = "hasOpened";
                                self.currentOpenedEl = currentEl;
                            } else {
                                self.currentOpenedEl.className =
                                    "jcnav-content";
                                //   self.currentOpenedEl.style.top = '0px';
                                self.currentOpenedEl.classList.add(
                                    "jcmove_right"
                                );
                                currentEl.className = "jcnav-content";
                                //    currentEl.style.top = '0px';
                                currentEl.classList.add("jcmove_left");
                                self.currentOpenedEl = currentEl;
                            }
                        });
                    });

                    var navConCloseBarList = document.querySelectorAll(
                        ".modulebox_hidebtn__QHdrj"
                    );
                    forEach.call(navConCloseBarList, function(navConCloseBar) {
                        navConCloseBar.addEventListener("click", function(evt) {
                            var currentEl =
                                evt.currentTarget.parentNode.parentNode;

                            currentEl.className = "jcnav-content";
                            //   currentEl.style.top = '0px';
                            currentEl.classList.add("jcmove_right");
                            self.state = "allClosed";
                            var jcf = document.getElementById("jcrfood");
                            var jcc = document.getElementById("jcrcompany");
                            var jca = document.getElementById("jcrarea");
                            jcf.classList.remove("jc-sidebar-item-active");
                            jcc.classList.remove("jc-sidebar-item-active");
                            jca.classList.remove("jc-sidebar-item-active");
                            console.log(self, evt);
                        });
                    });
                };

                NavigateBar.prototype.close = function() {
                    this.currentOpenedEl.className = "jcnav-content";
                    //   this.currentOpenedEl.style.top = '0px';
                    this.currentOpenedEl.classList.add("jcmove_right");
                    // var currentA = document.getElementById(self.eId);
                    //  currentA.classList.remove('jc-sidebar-item-active');
                    // console.log("this.currentOpenedEl:" + this.currentOpenedEl);
                    this.state = "allClosed";
                };

                var navigateBar = new NavigateBar();
            })();

            $(".jc-sidebar-item").each(function(index) {
                $(this).click(function() {
                    $(this)
                        .addClass("jc-sidebar-item-active")
                        .siblings()
                        .removeClass("jc-sidebar-item-active");
                });
            });
        },

        // 左侧栏methods
        // 获取年份
        getAllyear() {
            var that = this;
            var myDate = new Date();
            that.tYear = myDate.getFullYear() - 1;
            that.tYear1 = myDate.getFullYear() - 2;
            that.tYear2 = myDate.getFullYear() - 3;
        },
        // 小数转换成百分数
        toPercent(point) {
            if (point == 0) {
                return 0;
            }
            var str=Number(point*100).toFixed(2);
            str+="%";
            return str;
        },

        // 获取重点食品信息
        getFoodInfo() {
            var that = this;
            that.tableData = [];
            that.table1Data = [];
            that.table2Data = [];
            let params = { year: this.tYear };
            let params1 = { year: this.tYear1 };
            let params2 = { year: this.tYear2 };
            //调取获取重点食品信息接口
            // 2019年
            https
                .fetchGet("foodSample/api/getTopFood", params)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        arritem = {
                            id: e.foodid,
                            rate: that.toPercent(e.no_pass_rate_food),
                            name: e.food_name,
                            batch: e.allbatch
                        };
                        that.tableData.push(arritem);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
            // 2018年
            https
                .fetchGet("foodSample/api/getTopFood", params1)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        arritem = {
                            id: e.foodid,
                            rate: that.toPercent(e.no_pass_rate_food),
                            name: e.food_name,
                            batch: e.allbatch
                        };
                        that.table1Data.push(arritem);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
            // 2017年
            https
                .fetchGet("foodSample/api/getTopFood", params2)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        arritem = {
                            id: e.foodid,
                            rate: that.toPercent(e.no_pass_rate_food),
                            name: e.food_name,
                            batch: e.allbatch
                        };
                        that.table2Data.push(arritem);
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        },

        // 获取重点企业信息
        getTopCompanyInfo() {
            var that = this;
            // 获取年份信息
            let params = { year: this.tYear };
            let params1 = { year: this.tYear1 };
            let params2 = { year: this.tYear2 };
            // 散点图基本配置
            let sactterMapOpt = {
                        legend: {
                            show: false
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: function(params) {
                                return (
                                    "公司名："+ params.name + "</br>"+
                                    "不合格率 : " + that.toPercent(params.value[2])
                                );
                            },
                            textStyle:{
                                align:'left'
                            }
                        },
                        visualMap: {
                            min: 0,
                            max: 1,
                            precision: 2,
                            // range: ['0%', '100%'],
                            calculable: true,
                            bottom: 0,
                            left: -4,
                            text:['不合格率',''],
                            textGap: 20,
                            inRange: {
                                color: ["#dfff2e", "#f98e43", "#f95c5c","#f52a2a"]
                            },
                            textStyle: {
                                color: "#fff"
                            },
                            formatter: function (value) {
                                if(value===0){
                                    return value+"%";
                                }else if(value===1){
                                    return value*100 +"%";
                                }else{
                                    return that.toPercent(value);
                                }
                            }
                        },
                        geo: {
                            map: "china",
                            roam: true, //开启鼠标缩放和漫游
                            zoom: 1, //地图缩放级别
                            scaleLimit: {
                                //滚轮缩放的级别
                                min: 1,
                                max: 7
                            },
                            selectedMode: false, //选中模式：single | multiple
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            layoutCenter: ["55%", "50%"], //设置后left/right/top/bottom等属性无效
                            layoutSize: "100%",
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: "#101f32",
                                    borderWidth: 1.1,
                                    borderColor: "#43d0d6"
                                },
                                emphasis: {
                                    areaColor: "#069"
                                }
                            }
                        },
                        series: [
                            {
                                name: "不合格企业",
                                type: "scatter",
                                coordinateSystem: "geo",
                                symbolSize: 12,
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    emphasis: {
                                        borderColor: "#fff",
                                        borderWidth: 2
                                    }
                                },
                                data: []
                            }
                        ],
                        hoverAnimation: true
                    };
            // 调取获取重点企业信息接口
            // 2019年
            https
                .fetchGet("foodSample/api/getTopCompany", params)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        // 散点图数据
                        let company_info = [];
                        company_info.push(Number(e.longitude));
                        company_info.push(Number(e.latitude));
                        company_info.push(e.no_pass_rate_company);
                        arritem = {
                            name: e.company_name,
                            value: company_info
                        };
                        that.topCompanyData.push(arritem);
                    });
                    // 重点企业第一部分散点图
                    const scatterMap = echarts.init(
                        document.getElementById("scatterMap")
                    );
                    // 地图配置项
                    let sactterMapOpt0=sactterMapOpt
                    sactterMapOpt0.series[0].data=this.topCompanyData;
                    // 渲染报表
                    scatterMap.setOption(sactterMapOpt0);
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        myChart.resize();
                    });
        
                    // 条形图数据
                    let companyName = that.topCompanyData.map(obj => {
                        return obj.name;
                    });
                    let notPassRate = that.topCompanyData.map(obj => {
                        return obj.value[2];
                    });
                    let barList = [];
                    for(let i = 0;i<companyName.length;i++) {
                        barList.push({
                            "name":companyName[i],
                            "value":notPassRate[i]
                        })
                    };
                    // 绘图
                    var myChart = echarts.init(
                        document.getElementById("subChart_Company")
                    );
                    myChart.setOption({
                        title: {
                            text: "TOP20重点不合格企业",
                            x:'center',
                            top: "0",
                            textStyle: {
                                textSize: "9",
                                color: "#ffffff"
                            }
                        },
                        tooltip: {
                            formatter: function(params) {
                                return (
                                    '<span style="float:left;">公司名：' + params.name + '</span></br>' + 
                                    '<span style="float:left;">不合格率 : ' + that.toPercent(params.value)
                                );
                            }
                        },
                        grid: {
                            height: "96px",
                            top: "30px",
                            right: "4%"
                        },
                        xAxis: {
                            data: companyName,
                            axisLabel: {
                                interval: 0,
                                show: true,
                                fontSize: 10,
                                textStyle: {
                                    color: "#ffffff"
                                },
                                rotate: 55
                            }
                        },
                        yAxis: {
                            name: "%",
                            axisLabel: {
                                show: true,
                                formatter: function(params) {
                                    if(params === 0){
                                        return params
                                    }else{
                                        return params*100+"%"
                                    }
                                },
                                textStyle: {
                                    color: "#ffffff"
                                }
                            }
                        },
                        series: [
                            {
                                name: "不合格率",
                                type: "bar",
                                data: barList,
                                itemStyle: {
                                    normal: {
                                        color: "#F97083"
                                    },
                                    emphasis: {
                                        borderWidth:2,
                                        borderColor:'#4cb1fa',
                                        color: '#B62E40	'
                                    }    
                                }
                            }
                        ]
                    });
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        myChart.resize();
                    });
                    // 联动效果
                    // 柱状图-》地图
                    myChart.on('mouseover', function(params){
                        var option=scatterMap.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        scatterMap.setOption(option,true);
                        scatterMap.dispatchAction({
                            type:'downplay',//取消高亮指定的数据图形
                            seriesIndex: 0
                        })
                        scatterMap.dispatchAction({
                            type: 'highlight',//高亮
                            seriesIndex: 0,
                            dataIndex: params.dataIndex
                        });
                    })
                    myChart.on("mousemove",function(params){
                        let data = that.topCompanyData.filter(function(item){
                            return item.name== params.name; 
                        })
                        scatterMap.dispatchAction({
                            type:'showTip',
                            name:data[0].name,
                            x:data[0].value[0],
                            y:data[0].value[1]
                        })
                    })
                    myChart.on('mouseout', function(params){
                        var option=scatterMap.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        scatterMap.setOption(option,true);
                        scatterMap.dispatchAction({
                            type:'downplay'
                        })
                    })
                    // 地图-》柱状图
                    scatterMap.on("mouseover",function(target){
                        var option=myChart.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        myChart.setOption(option,true);
                        myChart.dispatchAction({
                            type:'downplay',
                            seriesIndex: 0
                        })
                        myChart.dispatchAction({
                            type:'highlight',
                            name:target.name,
                        })
                        
                    })
                    scatterMap.on("mousemove",function(target){
                        myChart.dispatchAction({
                            type:'highlight',
                            name:target.name,
                            x:target.event.offsetX,
                            y:target.event.offsetY
                        })
                    })
                    scatterMap.on("mouseout",function(){
                        var option=myChart.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        myChart.setOption(option,true);
                        myChart.dispatchAction({
                            type:'hideTip'
                        })
                    })
                })
                .catch(err => {
                    console.log(err);
                });
            // 2018年
            https
                .fetchGet("foodSample/api/getTopCompany", params1)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        // 散点图数据
                        let company_info = [];
                        company_info.push(Number(e.longitude));
                        company_info.push(Number(e.latitude));
                        company_info.push(e.no_pass_rate_company);
                        arritem = {
                            name: e.company_name,
                            value: company_info
                        };
                        that.topCompanyData1.push(arritem);
                    });
                    // 重点企业第一部分散点图
                    const scatterMap1 = echarts.init(
                        document.getElementById("scatterMap1")
                    );
                    // 渲染报表
                    let sactterMapOpt1=sactterMapOpt
                    sactterMapOpt1.series[0].data=this.topCompanyData1;
                    scatterMap1.setOption(sactterMapOpt1);
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        scatterMap1.resize();
                    });
                    // 条形图数据
                    let companyName1 = that.topCompanyData1.map(obj => {
                        return obj.name;
                    });
                    let notPassRate1 = that.topCompanyData1.map(obj => {
                        return obj.value[2];
                    });
                    var myChart1 = echarts.init(
                        document.getElementById("subChart_Company1")
                    );
                    myChart1.setOption({
                        title: {
                            text: "TOP20重点不合格企业",
                            x:'center',
                            top: "0",
                            textStyle: {
                                textSize: "9",
                                color: "#ffffff"
                            }
                        },
                        tooltip: {
                            formatter: function(params) {
                                return (
                                    '<span style="float:left;">公司名：' + params.name + '</span></br>' + 
                                    '<span style="float:left;">不合格率 : ' + that.toPercent(params.value)
                                );
                            }
                        },
                        grid: {
                            height: "96px",
                            top: "30px",
                            right: "4%"
                        },
                        xAxis: {
                            data: companyName1,
                            axisLabel: {
                                interval: 0,
                                show: true,
                                fontSize: 10,
                                textStyle: {
                                    color: "#ffffff"
                                },
                                rotate: 55
                            }
                        },
                        yAxis: {
                            name: "%",
                            axisLabel: {
                                show: true,
                                formatter: function(params) {
                                    if(params === 0){
                                        return params
                                    }else{
                                        return params*100+"%"
                                    }
                                },
                                textStyle: {
                                    color: "#ffffff"
                                }
                            }
                        },
                        series: [
                            {
                                name: "不合格率",
                                type: "bar",
                                data: notPassRate1,
                                itemStyle: {
                                    normal: {
                                        color: "#F97083"
                                    },
                                    emphasis: {
                                        borderWidth:2,
                                        borderColor:'#4cb1fa',
                                        color: '#B62E40	'
                                    }   
                                }
                            }
                        ]
                    });
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        myChart1.resize();
                    });
                    // 联动效果
                    // 柱状图-》地图
                    myChart1.on('mouseover', function(params){
                        var option=scatterMap1.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        scatterMap1.setOption(option,true);
                        scatterMap1.dispatchAction({
                            type:'downplay',
                            seriesIndex: 0
                        })
                        scatterMap1.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: params.dataIndex
                        });
                    })
                    myChart1.on("mousemove",function(params){
                        let data = that.topCompanyData1.filter(function(item){
                            return item.name== params.name; 
                        })
                        scatterMap1.dispatchAction({
                            type:'showTip',
                            name:data[0].name,
                            x:data[0].value[0],
                            y:data[0].value[1]
                        })
                    })
                    myChart1.on('mouseout', function(params){
                        var option=scatterMap1.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        scatterMap1.setOption(option,true);
                        scatterMap1.dispatchAction({
                            type:'downplay'
                        })
                    })
                    // 地图-》柱状图
                    scatterMap1.on("mouseover",function(target){
                        var option=myChart1.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        myChart1.setOption(option,true);
                        myChart1.dispatchAction({
                            type:'downplay',
                            seriesIndex: 0
                        })
                        myChart1.dispatchAction({
                            type:'highlight',
                            name:target.name,
                        })
                        
                    })
                    scatterMap1.on("mousemove",function(target){
                        myChart1.dispatchAction({
                            type:'highlight',
                            name:target.name,
                            x:target.event.offsetX,
                            y:target.event.offsetY
                        })
                    })
                    scatterMap1.on("mouseout",function(){
                        var option=myChart1.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        myChart1.setOption(option,true);
                        myChart1.dispatchAction({
                            type:'hideTip'
                        })
                    })
                })
                .catch(err => {
                    console.log(err);
                });
            // 2017年
            https
                .fetchGet("foodSample/api/getTopCompany", params2)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    let arritem = {};
                    array = res.message;
                    array.forEach(function(e) {
                        // 散点图数据
                        let company_info = [];
                        company_info.push(Number(e.longitude));
                        company_info.push(Number(e.latitude));
                        company_info.push(e.no_pass_rate_company);
                        arritem = {
                            name: e.company_name,
                            value: company_info
                        };
                        that.topCompanyData2.push(arritem);
                    });
                    // 重点企业第一部分散点图
                    const scatterMap2 = echarts.init(
                        document.getElementById("scatterMap2")
                    );
                    // 渲染报表
                    let sactterMapOpt2=sactterMapOpt
                    sactterMapOpt2.series[0].data=this.topCompanyData2;
                    scatterMap2.setOption(sactterMapOpt2);
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        scatterMap2.resize();
                    });
                    // 条形图数据
                    let companyName2 = that.topCompanyData2.map(obj => {
                        return obj.name;
                    });
                    let notPassRate2 = that.topCompanyData2.map(obj => {
                        return obj.value[2];
                    });
                    var myChart2 = echarts.init(
                        document.getElementById("subChart_Company2")
                    );
                    myChart2.setOption({
                        title: {
                            text: "TOP20重点不合格企业",
                            x:'center',
                            top: "0",
                            textStyle: {
                                textSize: "9",
                                color: "#ffffff"
                            }
                        },
                        tooltip: {
                            formatter: function(params) {
                                return (
                                    '<span style="float:left;">公司名：' + params.name + '</span></br>' + 
                                    '<span style="float:left;">不合格率 : ' + that.toPercent(params.value)
                                );
                            }
                        },
                        grid: {
                            height: "96px",
                            top: "30px",
                            right: "4%"
                        },
                        xAxis: {
                            data: companyName2,
                            axisLabel: {
                                interval: 0,
                                show: true,
                                fontSize: 10,
                                textStyle: {
                                    color: "#ffffff"
                                },
                                rotate: 55
                            }
                        },
                        yAxis: {
                            name: "%",
                            axisLabel: {
                                show: true,
                                formatter: function(params) {
                                    if(params === 0){
                                        return params
                                    }else{
                                        return params*100+"%"
                                    }
                                },
                                textStyle: {
                                    color: "#ffffff"
                                }
                            }
                        },
                        series: [
                            {
                                name: "不合格率",
                                type: "bar",
                                data: notPassRate2,
                                itemStyle: {
                                    normal: {
                                        color: "#F97083"
                                    },
                                    emphasis: {
                                        borderWidth:2,
                                        borderColor:'#4cb1fa',
                                        color: '#B62E40	'
                                    }    
                                }
                            }
                        ]
                    });
                    // echart图表自适应
                    window.addEventListener("resize", function() {
                        myChart2.resize();
                    });
                    // 联动效果
                    // 柱状图-》地图
                    myChart2.on('mouseover', function(params){
                        var option=scatterMap2.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        scatterMap2.setOption(option,true);
                        scatterMap2.dispatchAction({
                            type:'downplay',
                            seriesIndex: 0
                        })
                        scatterMap2.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: params.dataIndex
                        });
                    })
                    myChart2.on("mousemove",function(params){
                        let data = that.topCompanyData2.filter(function(item){
                            return item.name== params.name; 
                        })
                        scatterMap2.dispatchAction({
                            type:'showTip',
                            name:data[0].name,
                            x:data[0].value[0],
                            y:data[0].value[1]
                        })
                    })
                    myChart2.on('mouseout', function(params){
                        var option=scatterMap2.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        scatterMap2.setOption(option,true);
                        scatterMap2.dispatchAction({
                            type:'downplay'
                        })
                    })
                    // 地图-》柱状图
                    scatterMap2.on("mouseover",function(target){
                        var option=myChart2.getOption();
                        option.tooltip[0].alwaysShowContent=true;
                        option.tooltip[0].triggerOn="none";
                        myChart2.setOption(option,true);
                        myChart2.dispatchAction({
                            type:'downplay',
                            seriesIndex: 0
                        })
                        myChart2.dispatchAction({
                            type:'highlight',
                            name:target.name,
                        })
                        
                    })
                    scatterMap2.on("mousemove",function(target){
                        myChart2.dispatchAction({
                            type:'highlight',
                            name:target.name,
                            x:target.event.offsetX,
                            y:target.event.offsetY
                        })
                    })
                    scatterMap2.on("mouseout",function(){
                        var option=myChart2.getOption();
                        option.tooltip[0].alwaysShowContent=false;
                        option.tooltip[0].triggerOn="mousemove";
                        myChart2.setOption(option,true);
                        myChart2.dispatchAction({
                            type:'hideTip'
                        })
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        },

        // 重点区域部分
        // 获得provinceMapId
        getProvinceMapId(index, flag) {
            if (flag == 0) {
                return "provinceMap" + index;
            } else if (flag == 1) {
                return "provinceMap1" + index;
            } else {
                return "provinceMap2" + index;
            }
        },
        // 左下角框获取top5省份
        getAllProvinceInfo() {
            var that = this;
            // 获取年份信息
            let params = { year: that.tYear };
            let params1 = { year: that.tYear1 };
            let params2 = { year: that.tYear2 };
            // 2019
            https
                .fetchGet("foodSample/api/getTopProvince", params)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    array = res.message;
                    array.forEach((item,index)=>{
                        item.no_pass_rate_pvc = that.toPercent(item.no_pass_rate_pvc)
                    })
                    that.topProvinceList = array;
                    this.getEachProvinceInfo();
                })
                .catch(err => {
                    console.log(err);
                });
            // 2018
            https
                .fetchGet("foodSample/api/getTopProvince", params1)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    array = res.message;
                    array.forEach((item,index)=>{
                        item.no_pass_rate_pvc = that.toPercent(item.no_pass_rate_pvc)
                    })
                    that.topProvinceList1 = array;
                    // console.log("step1");
                    this.getEachProvinceInfo1();
                })
                .catch(err => {
                    console.log(err);
                });
            // 2017
            https
                .fetchGet("foodSample/api/getTopProvince", params2)
                .then(response => {
                    let res = response.data;
                    let array = [];
                    array = res.message;
                    array.forEach((item,index)=>{
                        item.no_pass_rate_pvc = that.toPercent(item.no_pass_rate_pvc)
                    })
                    that.topProvinceList2 = array;
                    // console.log("step1");
                    this.getEachProvinceInfo2();
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // 2019
        async getEachProvinceInfo() {
            var that = this;
            var i = "";
            for (i = 0; i < that.topProvinceList.length; i++) {
                let provinceInfoParams = {
                    year: that.tYear,
                    province_id: that.topProvinceList[i].province_id
                };
                var provinceName = that.topProvinceList[i].province;
                var provinceCompanyInfo = []; // 每个省份里top公司的信息
                // [{name: 'companyName', value: [lng, lat, val]}, {...}]
                await https
                    .fetchGet(
                        "foodSample/api/getProvinceInfo",
                        provinceInfoParams
                    )
                    .then(response => {
                        let res = response.data;
                        let array = [];
                        let arritem = {};
                        array = res.message;
                        array.forEach(function(e) {
                            // 散点图数据
                            let company_info = [];
                            company_info.push(Number(e.longitude));
                            company_info.push(Number(e.latitude));
                            company_info.push(e.no_pass_rate_company);
                            arritem = {
                                name: e.company_name,
                                value: company_info
                            };
                            provinceCompanyInfo.push(arritem);
                        });
                        // console.log(provinceCompanyInfo);
                        // 渲染每个省份的地图
                        // 解决Dom has no width or height
                        $("provinceMap" + i).width(
                            $("provinceMap" + i).width()
                        );
                        $("provinceMap" + i).height(
                            $("provinceMap" + i).height()
                        );
                        const provinceMap = echarts.init(
                            document.getElementById("provinceMap" + i)
                        );
                        // console.log(provinceCompanyInfo);
                        const provinceMapOpt = {
                            title: {
                                //text: '全国企业',
                                x: "center",
                                textStyle: {
                                    color: "#fff"
                                }
                            },
                            legend: {
                                show: false
                            },
                            tooltip: {
                                trigger: "item",
                                textStyle:{
                                    align:'left'
                                },
                                formatter: function(params) {
                                    return (
                                        "公司名："+ params.name + "</br>"+
                                        "不合格率 : " + that.toPercent(params.value[2])
                                    );
                                },
                            },
                            visualMap: {
                                min: 0,
                                max: 1,
                                precision: 2,
                                // range: ['0%', '100%'],
                                calculable: true,
                                bottom: 135,
                                left: 6,
                                text:['不合格率',''],
                                textGap: 20,
                                inRange: {
                                    color: ["#dfff2e", "#f98e43", "#f95c5c","#f52a2a"]
                                },
                                textStyle: {
                                    color: "#fff"
                                },
                                formatter: function (value) {
                                    if(value===0){
                                        return value+"%";
                                    }else if(value===1){
                                        return value*100 +"%";
                                    }else{
                                        return that.toPercent(value);
                                    }
                                }
                            },
                            geo: {
                                map: provinceName.replace(/省|壮族自治区|维吾尔自治区|回族自治区|自治区/, ""),
                                roam: true, //开启鼠标缩放和漫游
                                zoom: 1, //地图缩放级别
                                scaleLimit: {
                                    //滚轮缩放的级别
                                    min: 1,
                                    max: 7
                                },
                                selectedMode: false, //选中模式：single | multiple
                                layoutCenter: ["55%", "39%"], //设置后left/right/top/bottom等属性无效
                                layoutSize: "78%", //保持地图宽高比
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: "#101f32",
                                        borderWidth: 1.1,
                                        borderColor: "#43d0d6"
                                    },
                                    emphasis: {
                                        areaColor: "#069"
                                    }
                                }
                            },
                            series: [
                                {
                                    name: "公司信息",
                                    type: "scatter",
                                    coordinateSystem: "geo",
                                    symbolSize: 12,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            borderColor: "#fff",
                                            borderWidth: 1
                                        }
                                    },
                                    data: provinceCompanyInfo
                                }
                            ]
                        };
                        provinceMap.setOption(provinceMapOpt);
                        window.addEventListener("resize", function() {
                            provinceMap.resize();
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        // 2018
        async getEachProvinceInfo1() {
            var that = this;
            var i = "";
            for (i = 0; i < that.topProvinceList1.length; i++) {
                let provinceInfoParams = {
                    year: that.tYear1,
                    province_id: that.topProvinceList1[i].province_id
                };
                var provinceName = that.topProvinceList1[i].province;
                var provinceCompanyInfo = []; // 每个省份里top公司的信息
                // [{name: 'companyName', value: [lng, lat, val]}, {...}]
                // console.log("step2");
                await https
                    .fetchGet(
                        "foodSample/api/getProvinceInfo",
                        provinceInfoParams
                    )
                    .then(response => {
                        let res = response.data;
                        let array = [];
                        let arritem = {};
                        array = res.message;
                        array.forEach(function(e) {
                            // 散点图数据
                            let company_info = [];
                            company_info.push(Number(e.longitude));
                            company_info.push(Number(e.latitude));
                            company_info.push(e.no_pass_rate_company);
                            arritem = {
                                name: e.company_name,
                                value: company_info
                            };
                            provinceCompanyInfo.push(arritem);
                        });
                        // console.log(provinceCompanyInfo);
                        // 渲染每个省份的地图
                        // 解决Dom has no width or height
                        $("provinceMap1" + i).width(
                            $("provinceMap1" + i).width()
                        );
                        $("provinceMap1" + i).height(
                            $("provinceMap1" + i).height()
                        );
                        const provinceMap = echarts.init(
                            document.getElementById("provinceMap1" + i)
                        );
                        // console.log(provinceCompanyInfo);
                        const provinceMapOpt = {
                            title: {
                                //text: '全国企业',
                                x: "center",
                                textStyle: {
                                    color: "#fff"
                                }
                            },
                            legend: {
                                show: false
                            },
                            tooltip: {
                                trigger: "item",
                                textStyle:{
                                    align:'left'
                                },
                                formatter: function(params) {
                                    return (
                                        "公司名："+ params.name + "</br>"+
                                        "不合格率 : " + that.toPercent(params.value[2])
                                    );
                                },
                            },
                            visualMap: {
                                min: 0,
                                max: 1,
                                precision: 2,
                                // range: ['0%', '100%'],
                                calculable: true,
                                bottom: 135,
                                left: 6,
                                text:['不合格率',''],
                                textGap: 20,
                                inRange: {
                                    color: ["#dfff2e", "#f98e43", "#f95c5c","#f52a2a"]
                                },
                                textStyle: {
                                    color: "#fff"
                                },
                                formatter: function (value) {
                                    if(value===0){
                                        return value+"%";
                                    }else if(value===1){
                                        return value*100 +"%";
                                    }else{
                                        return that.toPercent(value);
                                    }
                                }
                            },
                            geo: {
                                map: provinceName.replace(/省|壮族自治区|维吾尔自治区|回族自治区|自治区/, ""),
                                roam: true, //开启鼠标缩放和漫游
                                zoom: 1, //地图缩放级别
                                scaleLimit: {
                                    //滚轮缩放的级别
                                    min: 1,
                                    max: 7
                                },
                                selectedMode: false, //选中模式：single | multiple
                                layoutCenter: ["55%", "39%"], //设置后left/right/top/bottom等属性无效
                                layoutSize: "78%", //保持地图宽高比
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: "#101f32",
                                        borderWidth: 1.1,
                                        borderColor: "#43d0d6"
                                    },
                                    emphasis: {
                                        areaColor: "#069"
                                    }
                                }
                            },
                            series: [
                                {
                                    name: "公司信息",
                                    type: "scatter",
                                    coordinateSystem: "geo",
                                    symbolSize: 12,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            borderColor: "#fff",
                                            borderWidth: 1
                                        }
                                    },
                                    data: provinceCompanyInfo
                                }
                            ]
                        };
                        provinceMap.setOption(provinceMapOpt);
                        window.addEventListener("resize", function() {
                            provinceMap.resize();
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        // 2017
        async getEachProvinceInfo2() {
            var that = this;
            var i = "";
            for (i = 0; i < that.topProvinceList2.length; i++) {
                let provinceInfoParams = {
                    year: that.tYear2,
                    province_id: that.topProvinceList2[i].province_id
                };
                var provinceName = that.topProvinceList2[i].province;
                var provinceCompanyInfo = []; // 每个省份里top公司的信息
                // [{name: 'companyName', value: [lng, lat, val]}, {...}]
                // console.log("step2");
                await https
                    .fetchGet(
                        "foodSample/api/getProvinceInfo",
                        provinceInfoParams
                    )
                    .then(response => {
                        let res = response.data;
                        let array = [];
                        let arritem = {};
                        array = res.message;
                        array.forEach(function(e) {
                            // 散点图数据
                            let company_info = [];
                            company_info.push(Number(e.longitude));
                            company_info.push(Number(e.latitude));
                            company_info.push(e.no_pass_rate_company);
                            arritem = {
                                name: e.company_name,
                                value: company_info
                            };
                            provinceCompanyInfo.push(arritem);
                        });
                        // console.log(provinceCompanyInfo);
                        // 渲染每个省份的地图
                        // 解决Dom has no width or height
                        $("provinceMap2" + i).width(
                            $("provinceMap2" + i).width()
                        );
                        $("provinceMap2" + i).height(
                            $("provinceMap2" + i).height()
                        );
                        const provinceMap = echarts.init(
                            document.getElementById("provinceMap2" + i)
                        );
                        // console.log(provinceCompanyInfo);
                        const provinceMapOpt = {
                            title: {
                                //text: '全国企业',
                                x: "center",
                                textStyle: {
                                    color: "#fff"
                                }
                            },
                            legend: {
                                show: false
                            },
                            tooltip: {
                                trigger: "item",
                                textStyle:{
                                    align:'left'
                                },
                                formatter: function(params) {
                                    return (
                                        "公司名："+ params.name + "</br>"+
                                        "不合格率 : " + that.toPercent(params.value[2])
                                    );
                                },
                            },
                            visualMap: {
                                min: 0,
                                max: 1,
                                precision: 2,
                                // range: ['0%', '100%'],
                                calculable: true,
                                bottom: 135,
                                left: 6,
                                text:['不合格率',''],
                                textGap: 20,
                                inRange: {
                                    color: ["#dfff2e", "#f98e43", "#f95c5c","#f52a2a"]
                                },
                                textStyle: {
                                    color: "#fff"
                                },
                                formatter: function (value) {
                                    if(value===0){
                                        return value+"%";
                                    }else if(value===1){
                                        return value*100 +"%";
                                    }else{
                                        return that.toPercent(value);
                                    }
                                }
                            },
                            geo: {
                                map: provinceName.replace(/省|壮族自治区|维吾尔自治区|回族自治区|自治区/, ""),
                                roam: true, //开启鼠标缩放和漫游
                                zoom: 1, //地图缩放级别
                                scaleLimit: {
                                    //滚轮缩放的级别
                                    min: 1,
                                    max: 7
                                },
                                selectedMode: false, //选中模式：single | multiple
                                layoutCenter: ["55%", "39%"], //设置后left/right/top/bottom等属性无效
                                layoutSize: "78%", //保持地图宽高比
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: "#101f32",
                                        borderWidth: 1.1,
                                        borderColor: "#43d0d6"
                                    },
                                    emphasis: {
                                        areaColor: "#069"
                                    }
                                }
                            },
                            series: [
                                {
                                    name: "公司信息",
                                    type: "scatter",
                                    coordinateSystem: "geo",
                                    symbolSize: 12,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    itemStyle: {
                                        emphasis: {
                                            borderColor: "#fff",
                                            borderWidth: 1
                                        }
                                    },
                                    data: provinceCompanyInfo
                                }
                            ]
                        };
                        provinceMap.setOption(provinceMapOpt);
                        window.addEventListener("resize", function() {
                            provinceMap.resize();
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        initVis(value) {
        
            let that = this;
            // 创建节点对象
            that.nodes = new vis.DataSet();
            that.edges = new vis.DataSet();
            console.log("qwq");
            let params = { food_id: value };
            https
                .fetchGet("/kownledgeGraph/api/get_others_kg/", params)
                .then(response => {
                    let res = response.data;
                    that.fooddataset = res.message.nodes;
                    that.edgedataset = res.message.edges;
                    that.nodes.add(that.fooddataset);
                    console.log(
                        "fooddataset:" + JSON.stringify(this.fooddataset)
                    );
            //that.edges.add(that.edgedataset);
            //that.nodes=[{"id":1765,"label_ID":"F001003","label":"小麦粉","group":"Food"},{"id":1188,"label_ID":"001","label":"粮食及制品","group":"Cate"},{"id":1302,"label_ID":"T0054","label":"溴酸钾","group":"Additive"},{"id":1311,"label_ID":"3","label":"损坏肾脏","group":"HarmDetail"},{"id":1315,"label_ID":"7","label":"致癌","group":"HarmDetail"},{"id":1429,"label_ID":"21","label":"刺激中枢神经","group":"HarmDetail"},{"id":1605,"label_ID":"7","label":"增筋","group":"EffectDetail"},{"id":1693,"label":"使用了溴酸钾的面粉和面包的一致特征是，面粉更白，制作出来的面包更具有弹性和韧性。因此，吃面条、馒头要辨别颜色。具体讲：好面粉并非越白越好，一般而言，相对黑一点的才更有营养。但这也并不是说面粉越黑越好，而是颜色要有正常色。好面条要有弹性：真正的好面条软而有弹性，不易折断，煮出的汤水不混浊。好馒头是淡黄色的：小麦粉和用其加工的食品就应该是淡黄色的，不要选购颜色太白但无亮色的馒头。","group":"Distin"}];
            that.edges.add(that.edgedataset);

            // 创建一个网络拓扑图  不要使用jquery获取元素
            that.container = document.getElementById("jcnetwork_id");
            var data = { nodes: that.nodes, edges: that.edges };

             //全局设置，每个节点和关系的属性会覆盖全局设置
            that.options = {
                //设置节点形状
                nodes: {
                    color: "#FFE4B5",       //new
                    shape: "image", //采用图片的形式
                    size: 35,       //new
                    font: {
                        size: 18,       //new
                        color: "#ffe8c0",       //new
                        face: "Arial Black",highlight: "#ff7f7f",strokeWidth:5,strokeColor:"#000000"       //new
                    }
                },
                // 设置关系连线
                edges: {
                    color: {
                        color: "#fdebcb",       //new
                        highlight: "#FFFAFA",       //new
                        hover: "#FFFAFA"       //new
                    },
                    font: {
                        size: 17,       //new
                        color: "#e5c486",       //new
                        face: "Arial Black",       //new
                        strokeWidth:0       //new
                    }
                },
                //设置节点的相互作用
                interaction: {
                    //鼠标经过改变样式
                    hover: true
                    //设置禁止缩放
                    //zoomView:false
                },
                groups: {
                    Food: {
                        image: "../../static/image/ico/F.png",
                        size: 45,       //new
                        font: { size: 25 ,color:"#FF6347",strokeWidth:5,strokeColor:"#FFFAFA",highlight:"#FF6347"}       //new
                    },
                    HarmDetail: { image: "../../static/image/ico/D.png",},
                    Additive: { image: "../../static/image/ico/A.png" },
                    EffectDetail: { image: "../../static/image/ico/E.png" },
                    Distin: { image: "../../static/image/ico/M.png",font: { size:0}},
                    Cate: { image: "../../static/image/ico/F.png" },
                    Effect: { image: "../../static/image/ico/E.png" },
                    Harm: { image: "../../static/image/ico/D.png"},
                },
                autoResize: true,
                //力导向图效果
                physics: {
                    enabled: true,
                    barnesHut: {
                        gravitationalConstant: -8000,//更改疏密（约小约稀疏）
                        centralGravity: 0.3,
                        springLength: 120,
                        springConstant: 0.04,
                        damping: 0.09,
                        avoidOverlap: 0
                    }
                }
            };
            that.network = new vis.Network(that.container, data, that.options);
                    
                })
                .catch(err => {
                    console.log(err);
            });
            
        },
    },
    created() {
        // 获取所有年份
        this.getAllyear();
        // 左侧获取重点食品数据
        this.getFoodInfo();
        
    }
};
</script>

