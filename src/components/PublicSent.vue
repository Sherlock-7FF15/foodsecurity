<style>
@import "../../static/css/bootstrap.css";
@import "../../static/css/bootstrap.min.css";
@import "../../static/css/animate.css";
@import "../../static/css/style.css";
@import "../../static/css/yqfx.css";
@import "../../static/css/pe-icons.css";
@import "../../static/css/font-awesome-4.1.0/css/font-awesome.min.css";
@import "../../static/css/yq-iconfont/iconfont.css";
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css");
.el-carousel__item:nth-child(2n) {
    color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
    color: #fff;
    background-color: transparent;
    /* background-color: rgba(47,50,51,.78); */
}
</style>
<style scoped>
#public {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  zoom: 1;
}
.mypopup {
  max-width: 200px;
  max-height: 300px;
  border-radius: 20px;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
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
#menu {
  position: absolute;
  top: 80px;
  left: 30px;
  border-radius: 40px;
  background: #fff;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
}
.mapboxgl-ctrl-top-right {
  top: auto;
  bottom: 90px !important;
}
.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass {
  display: none !important;
}


.yq-index-item a.active {
  color: #fff;
  background: #f7a715;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.25);
}
/* .iconfont {
    width: 1.5em;
    fill: currentColor;
    font-size: 25px;
    padding: 0.12em !important;
    line-height: 1.2;
    display: inline-block
} */
.icon{
  font-size: 20px;
}


</style>

<template>
  <div id="public">
    <!-- 地图 -->
    <div id="map"></div>
    <div id="menu">
      <input id="dark-v9" type="radio" name="rtoggle" value="dark" checked="checked" />
      <label for="dark">dark</label>
      <input id="streets-v9" type="radio" name="rtoggle" value="streets" />
      <label for="streets">streets</label>
      <input id="light-v9" type="radio" name="rtoggle" value="light" />
      <label for="light">light</label>
      <input id="outdoors-v9" type="radio" name="rtoggle" value="outdoors" />
      <label for="outdoors">outdoors</label>
      <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" />
      <label for="satellite">satellite</label>
    </div>

    <!-- 插件导航 -->

    <!-- Navigation -->
    <!-- <nav class="navbar navbar-default navbar-shrink bounceInDown"> -->
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
            <!-- 搜索模块 -->
            <label for="search-food">
              <i class="fa fa-search" aria-hidden="true"></i>
             <input
                    class="search-input"
                    type="search"
                    placeholder="请输入食品名称"
                    v-model="searchVal"
                    v-on:focus="yqfocus()"
                    v-on:blur="yqblur()"
                    autocomplete="off"
                />
            </label>
            <ul id="search-list" class="search-list closed">
                <li
                    v-for="(item,index) in yqfuzzy"
                    :key="index"
                    @click="chooseYqFuzzy(item)"
                >
                    <a>
                        <h3>
                            <b>{{ item.event_name }}</b>
                        </h3>
                        <span>
                            时间：{{ item.startdate }}——{{ item.enddate }}
                            <br />地区：{{item.space}}
                        </span>
                    </a>
                </li>
            </ul>
            

            <!-- 模糊搜索列表 -->
            <div id="yq-search-scrollbar" class="yq-search-scrollbar closed">
                <div class="yq-search-fuzzy">
                    <ul class="yq-fuzzy-list" v-show="!yqfuzzy.length">
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

    <!-- 地图标题 -->
    <div class="mapTitle">
      <span v-if="!event_name">食品安全事件舆情演化分析</span>
      <span v-else>{{ event_name }}舆情演化分析</span>
    </div>

    <!-- 数字面板 -->
    <div class="number_board">
      <!-- 总数面板块 -->
      <div class="number_boardblock">
        <p class="number_boardtitle-total"><span>舆论总数</span></p>
        <p class="number_boarddata">{{total_number}}</p>
      </div>
      <!-- 正面情感数面板块 -->
      <div class="number_boardblock">
        <p class="number_boardtitle-pos"><span>正面总数</span></p>
        <p class="number_boarddata">{{pos_number}}</p>
      </div>
      <!-- 负面情感数面板块 -->
      <div class="number_boardblock">
        <p class="number_boardtitle-neg"><span>负面总数</span></p>
        <p class="number_boarddata">{{neg_number}}</p>
      </div>
    </div>

    <!-- 舆情分析指标和默认标签-->
    <div class="yq-index">
      <div class="yq-index-item" id="layer">
        <a id="total" href="#" class="active">
          <i class="iconfont icon-fire" aria-hidden="true"></i>舆论热度</a>
        <a id="pos" href="#">
          <i class="iconfont icon-kaixintianchong" aria-hidden="true"></i>
          正面情感
        </a>
        <a id="neg" href="#">
          <i class="iconfont icon-bukaixin-copy" aria-hidden="true"></i>
          负面情感
        </a>
      </div>
    </div>

    <!-- 时间轴 -->
    <div id="yq-timeline" class="yq-timeline" style="display:none">
      <v-timer
          :options="options"
          :dateTimes="dateTimes"
          :enddateTimes ="enddateTimes"
          :startTime="startTime"
          :endTime="endTime"
          @getDateFun="getDateFun"
          @getTimeUnit="getTimeUnit"
          :interval="interval"
      ></v-timer>
  </div>

    <!-- 右边弹出框信息：舆情分析可视化模块 -->
    <div id="yq-sidebar">
      <div id="yq-wrap">
        <div id="yqfood" class="yq-sidebar-item">
          <div>舆情分析数据</div>
        </div>
        <div id="yqcompany" class="yq-sidebar-item">
          <div>食品风险知识</div>
        </div>
        <div id="yqarea" class="yq-sidebar-item">
          <div>食品安全监察</div>
        </div>
      </div>
    </div>

    <!-- 舆情数据模块 -->
    <div id="yqfood-content" class="yqnav-content">
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
          <span>舆情分析数据</span>
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
      <div class="yq-zl">
        <h1
          id="city"
          style="font-weight:bold;font-family: Helvetica Neue,Arial,Helvetica,sans-serif"
        >中国</h1>
        <div id="description" style="padding: 1px 1px 10px 1px;color:#fff">
          <i class="iconfont icon-zuobiao" aria-hidden="true"></i><span id="space"></span><br/>
          <i class="iconfont icon-rili" aria-hidden="true"></i><span id="time"></span>
        </div>
        <el-carousel height="350px">
          <!-- 走势图 -->
          <el-carousel-item>
              <div id="trendChart" style="width: 400px;height:340px;">
              </div>
          </el-carousel-item>
          <!-- 饼图 -->
          <el-carousel-item>
              <div id="pieChart" style="width: 400px;height:340px;"></div>
          </el-carousel-item>
          <!-- 表格 -->
          <el-carousel-item>
              <div class="food-table" style="width: 380px;height:300px;background-color: transparent;">
                <div style="text-align:center;font-size:18px; color:#fff;fontWeight: bold;fontFamily: Microsoft YaHei;margin:0px 0px 10px 0px">热门话题排行榜</div>
                <el-table
                    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
                    :cell-style="TopicRowClass"
                    :header-cell-style="yqHeadClass"
                    popper-class="yqfx"
                    stripe
                    style="width: 100%;position:absolute;background-color: transparent;"
                  
                >
                  <el-table-column prop="sortnum" label="排名" width="80"></el-table-column>
                  <el-table-column prop="title" label="话题" width="200" :show-overflow-tooltip="true"></el-table-column>
                  <el-table-column prop="hot" label="热度" width="95"></el-table-column>
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
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 知识图谱关联模块 -->
    <div id="yqcompany-content" class="yqnav-content">
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
      <div id="network_id"  class="network" style="width:400px;height:350px;"></div>
    </div>
    <!-- 全链条关联模块 -->
    <div id="yqarea-content" class="yqnav-content">
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
          <span>食品安全监察</span>
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
      <div class="food-title" style="text-align:center;font-size:23px; color:#fff;fontWeight: bold;fontFamily: Microsoft YaHei;margin:20px 0px 0px 0px">近三年猪肉食品不合格批次信息</div>
      <div class="food-table" style="height:310px">
                <el-table
                    :data="SampleData.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
                    :cell-style="yqRowClass"
                    :header-cell-style="yqHeadClass"
                    stripe
                    style="height:300px; top:20px;background-color: transparent;"
                >
                    <el-table-column prop="year" label="年份" width="60"></el-table-column>
                    <el-table-column prop="area" label="省份" width="120"></el-table-column>
                    <el-table-column prop="unqualified_number" label="不合格批次数量" width="100"></el-table-column>
                    <el-table-column prop="unqualified_rate" label="不合格率" width="90"></el-table-column>
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
                    :total="SampleData.length"
                ></el-pagination>
      </div>
    </div>

    <!-- 图例 -->
    <div id="legend">
      <span class="hd" style="background:rgb(255,255,255); color:rgb(0,0,0)">数量</span>
      <span class="hd" style="background:rgb(178,24,43); color:rgb(255,255,255)">10000</span>
      <span class="hd" style="background:rgb(240,64,64); color:rgb(255,255,255)">1000</span>
      <span class="hd" style="background:rgb(255,112,78); color:rgb(255,255,255)">600</span>
      <span class="hd" style="background:rgb(250,150,17); color:rgb(255,255,255)">400</span>
      <span class="hd" style="background:rgb(245, 188, 41); color:rgb(255,255,255)">300</span>
      <span class="hd" style="background:rgb(224,218,40); color:rgb(255,255,255)">200</span>
      <span class="hd" style="background:rgb(142,173,48); color:rgb(255,255,255)">100</span>
      <span class="hd" style="background:rgba(33,102,172,0); color:rgb(255,255,255)">0</span>
    </div>
  </div>
</template>

<!-- <script type="text/javascript">
function closeContent() {
    document.getElementById("com-content").style.display = "none";
} 
</script> -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../../static/js/bootstrap.js"></script>
<script src="../../static/js/bootstrap.min.js"></script>
<script src="../../static/js/common.js"></script>
<script src="../../static/js/init.js"></script>
<script src="../../static/js/jqBootstrapValidation.js"></script>
<script src="../../static/js/plugins.js"></script>
<script src="../../static/js/tubular.js"></script>
<script src="../../static/js/contact_me.js"></script>
<script src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<script src="../../static/js/vis-network.min.js"></script>
<!-- 地图 -->
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v0.10.1/mapbox-gl-language.js'></script>
	
<script>
import mapboxgl from "mapbox-gl";
import echarts from "echarts";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import Nav from "../components/Nav.vue";
import Timer from "../components/TimeLine.vue";
import { dateFormat } from "../../static/js/formatdate.js";
import axios from "axios";
import qs from "qs";
import https from "../http.js";
import global from "../global.js";
import yq from "../../static/js/yq-js.js";
import vis from "vis";
import layer from "../../static/js/layer.js";

export default {
  name: "Public",
  components: {
    "v-nav": Nav,
    "v-timer": Timer
  },
  data() {
    return {
      map:Object,
      trendChart:Object,
      pieChart:Object,
      event_name:"",
      food_id:"",
      total_number:"",
      pos_number:"",
      neg_number:"",
      fullscreenLoading: false,
      searchVal: "",
      yqfuzzy: [],
      yqsearch: [],
      selectSearch: "",
      baseurl: "",
      layerId: "dark-v9",
      pagesize: 5,
      currentPage: 1,
      timeunit: "",
      tableData: [],
      SampleData:[],
      date: "",
      options: {
          speed: 1.0, // 速度
          speedMax: 2.0 // 速度最大值
      },
      interval: 200, //日期间的间隔
      dateTimes: [],
      enddateTimes:[],
      startTime: "",
      endTime: "",
      nodeExtendArr: [],
      network:null,
      knoptions:{},
      nodes:[],
      edges:[],
      fooddataset:[],
      edgedataset:[],
      container: null,
    };
  },
  watch: {
      searchVal() {
          this.yqfocus();
          var target = document.getElementById("yq-search-scrollbar");
          if (!this.searchVal) {
              target.classList.add("closed");
          } 
      },
      selectSearch() {
          this.yqfocus();
      },
  },
  created(){
    var self =this;
    let params = {datasetId:global.datasetId,areaId:global.areaId,startdate:global.startdate,timeflag:2};
    https.fetchGet("/publicSent/api/getTopic",params).then(response=>{
      self.tableData = response.data.message;
    });
    params = {foodid:"F017001"};
    let SampleData = [];
    https.fetchGet("foodSample/api/getPublicOpinion",params).then(response=>{
      response.data.message[0].collections.forEach(function(row){
        let year = row.year;
        row.lists.forEach(function(a){
          a.year = year;
          SampleData.push(a);
        });
      })
      self.SampleData = SampleData;
    })
    var storage = window.sessionStorage;
    let month_params = {datasetId:global.datasetId,timeflag:1};
    https.fetchGet("/publicSent/api/getDefault",month_params).then(response=>{
      storage.setItem('month_data',JSON.stringify(response.data.message[0]));
    });
    let week_params = {datasetId:global.datasetId,timeflag:0};
    https.fetchGet("/publicSent/api/getDefault",week_params).then(response=>{
      storage.setItem('week_data',JSON.stringify(response.data.message[0]));
    });
  },
  
  mounted() {
    mapboxgl.accessToken ="pk.eyJ1IjoiY2luZHkwNzkiLCJhIjoiY2p5MW0yM2FmMDNhbzNpcnpoeGVqOXpmYSJ9.zKbdCDdA69t7b3zSWctaRw";
    this.map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/" + this.layerId, // stylesheet location
    center: [110, 37], // starting position [lng, lat]
    zoom: 3.4 // starting zoom
    });
    this.map.addControl(
        new MapboxLanguage({
          defaultLanguage: "zh"
        })
      );
    // this.initTime(global.startdate,global.enddate);
  },
  methods: {
     //分页当前所在页数
        handleCurrentChange(val){
            this.currentPage = val;
                    
        },
        // 表头样式设置
        yqHeadClass() {
            return "font-size:16px;text-align: center;line-height: 10px;font-weight:700;color:rgb(207, 180, 37);background-color: transparent;";
        },
        TopicRowClass({ row, column, rowIndex, columnIndex }){
          if(columnIndex===1){
            return "font-size:16px;text-align: center;line-height: 10px;font-weight:bold;";
          }else{
            return "font-size:16px;text-align: center;line-height: 10px;";
          }
        },
        // 表格样式设
        yqRowClass() {
            return "font-size:14px;text-align: center;line-height: 10px;";
        },
        //锁定搜索框输入
        yqfocus() {
            if (
                document.querySelector(".search-input") ==
                document.activeElement
            ) {
                this.fuzzy_search(this.searchVal.trim());
            }
        },
        //搜索框取消焦点
        yqblur() {
            if(!this.searchVal){
                document.getElementById("search-list").classList.add("closed");
                document.getElementById("yq-search-scrollbar").classList.add("closed");
            }
            //document.getElementById("search-list").classList.add("closed");
            //document.getElementById("yq-search-scrollbar").classList.add("closed");
            document.getElementById("form-inline").classList.remove("search-strength");
        },
        //模糊搜索功能
        fuzzy_search(value) {
            document.getElementById("search-list").classList.remove("closed");
            var that = this;
            if (!value) {
                that.yqfuzzy = [];
                return;
            }
            let params = { keyword: this.searchVal.trim() };
            //调取模糊搜索接口
            https
                .fetchGet("/publicSent/api/getSearch", params)
                .then(response => {
                    response.data.message.forEach(function(row){
                       let params = { areaId: row.space };
                        https.fetchGet("/publicSent/api/toArea",params).then(res =>{
                        row.space=res.data.message[0].areas;
                        that.yqfuzzy = response.data.message;
                      })
                    });
                    
                   
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //选中模糊匹配值
        chooseYqFuzzy(item) {
            this.event_name = item.event_name;
            this.selectSearch = item.event_name;
            this.food_id = item.food_id;
            global.startdate = item.startdate;
            // global.enddate = item.enddate;
            document.getElementById("search-list").classList.add("closed");
            this.init();
            this.numberinit();
            document.getElementById("yq-timeline").style.display = "";
            this.initTime(global.startdate,global.enddate);
            this.initTimeDate(global.startdate,global.enddate);
            this.initVis(item.food_id);
            this.searchVal = "";
            // this.yqSearch(item.event_id);
        },

    //数字面板初始化
    numberinit(){
      let that = this;
      console.log(global.enddate);
      console.log(global.startdate);
      let params = {datasetId:global.datasetId,timeflag:global.timeflag,startdate:global.startdate,enddate:global.enddate};
      https.fetchGet("/publicSent/api/getSentiment",params).then(response=>{
        let data = response.data.message[0];
        that.total_number = data.mblog_total;
        that.pos_number = data.pos_num;
        that.neg_number = data.neg_num;
    });
    },
        
    // 初始化
    init() {
      mapboxgl.accessToken ="pk.eyJ1IjoiY2luZHkwNzkiLCJhIjoiY2p5MW0yM2FmMDNhbzNpcnpoeGVqOXpmYSJ9.zKbdCDdA69t7b3zSWctaRw";
      this.map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/" + this.layerId, // stylesheet location
      center: [110, 37], // starting position [lng, lat]
      zoom: 3.4 // starting zoom
      });
    
      //右边标签切换
      (function() {
        var NavigateBar = function(elementId) {
          this.eId = elementId || "yq-wrap";
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
              var currentA = document.getElementById(evt.currentTarget.id);
              if (self.state === "allClosed") {
                currentEl.className = "yqnav-content";
                //  currentEl.style.top = '0px';
                currentEl.classList.add("yqmove_left");
                self.state = "hasOpened";
                self.currentOpenedEl = currentEl;
              } else {
                self.currentOpenedEl.className = "yqnav-content";
                //   self.currentOpenedEl.style.top = '0px';
                self.currentOpenedEl.classList.add("yqmove_right");
                currentEl.className = "yqnav-content";
                //    currentEl.style.top = '0px';
                currentEl.classList.add("yqmove_left");
                self.currentOpenedEl = currentEl;
              };
            });
          });
          var navConCloseBarList = document.querySelectorAll(
            ".modulebox_hidebtn__QHdrj"
          );
          forEach.call(navConCloseBarList, function(navConCloseBar) {
            navConCloseBar.addEventListener("click", function(evt) {
              var currentEl = evt.currentTarget.parentNode.parentNode;
              currentEl.className = "yqnav-content";
              //   currentEl.style.top = '0px';
              currentEl.classList.add("yqmove_right");
              self.state = "allClosed";
              var yqf = document.getElementById("yqfood");
              var yqc = document.getElementById("yqcompany");
              var yqa = document.getElementById("yqarea");
              yqf.classList.remove("yq-sidebar-item-active");
              yqc.classList.remove("yq-sidebar-item-active");
              yqa.classList.remove("yq-sidebar-item-active");
              marker.remove();
            });
          });
        };

        NavigateBar.prototype.close = function() {
          this.currentOpenedEl.className = "yqnav-content";
          //   this.currentOpenedEl.style.top = '0px';
          this.currentOpenedEl.classList.add("yqmove_right");
          // var currentA = document.getElementById(self.eId);
          //  currentA.classList.remove('yq-sidebar-item-active');
          this.state = "allClosed";
        };

        var navigateBar = new NavigateBar();
      })();

      $(".yq-sidebar-item").each(function(index) {
        $(this).click(function() {
          $(this)
            .addClass("yq-sidebar-item-active")
            .siblings()
            .removeClass("yq-sidebar-item-active");
        });
      });
     
      function filterBy(startdate) {
          var filters = ['==', 'startdate', global.startdate];
          _this.map.setFilter('Tsentiment-heat', filters);
          _this.map.setFilter('Psentiment-heat', filters);
          _this.map.setFilter('Nsentiment-heat', filters);
      };

      function filterByend(enddate) {
        var filters = ['==', 'enddate', enddate];
        _this.map.setFilter('Tsentiment-heat', filters);
        _this.map.setFilter('Psentiment-heat', filters);
        _this.map.setFilter('Nsentiment-heat', filters);
        _this.map.setFilter('Tclusters-layer', filters);
      };

        var layerList = document.getElementById("menu");
        var inputs = layerList.getElementsByTagName("input");
        var _this = this; //this指的是init中的全局变量
        function switchLayer(layer) {
          var layerIdd = layer.target.id;
          _this.layerId = layerIdd;
          _this.init();
          // new mapboxgl.Marker().setLngLat([110, 37]).addTo(map);
        }
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].onclick = switchLayer;
        }

      
        

        this.map.on("load", function() {
          // Add a geojson point source.
          // Heatmap layers also work with a vector tile source.
          _this.map.addSource('cluster',{
              type: 'geojson',
              data: {"type": "FeatureCollection","features": []},
              cluster: true, // 打开聚合
              clusterRadius: 50, // 设置聚合的半径
              // clusterProperties: { 'Num': ["+", ["get", "mblog_total"]] } // 设置聚合过程中需要处理的数据
          });
          _this.map.addSource('sentiment',{
              type: 'geojson',
              data: {"type": "FeatureCollection","features": []},
          });
          let params = {datasetId:global.datasetId,timeflag:global.timeflag};
          https.fetchGet("/publicSent/api/getDefault",params).then(response=>{
            let data = response.data.message[0];
            _this.map.getSource('cluster').setData(data);
            _this.map.getSource('sentiment').setData(data);
            global.data = data.features;
          });
         
          //添加热力图图层
          //舆论总数图层
          _this.map.addLayer({
              "id": "Tsentiment-heat",
              "type": "heatmap",
              "source": 'sentiment',
              'layout':{
                'visibility':'visible'
              },
              "maxzoom": 7.5,
              "paint": {
                  'heatmap-weight': [
                      'interpolate',
                      ['linear'],
                      ['get', 'mblog_total'],
                      0, 0,
                      1000, 1
                  ],

                  // Increase the heatmap color weight weight by zoom level
                  // heatmap-intensity is a multiplier on top of heatmap-weight
                  //通过缩放级别增加热图颜色重量权重
                  //热图强度是热图权重的乘法器
                  'heatmap-intensity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      0, 3,
                      9, 5
                  ],
                  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                  // Begin color ramp at 0-stop with a 0-transparancy color
                  // to create a blur-like effect.
                  //用于热图的颜色渐变。域是0（低）到1（高）。
                  //以0透明颜色在0挡处开始颜色渐变
                  //创建模糊效果。
                  "heatmap-color": [
                      "interpolate", ["linear"],
                      ["heatmap-density"],
                      0, "rgba(33,102,172,0)",
                      0.1, "rgb(142,173,48)",
                      0.2, "rgb(224,218,40)",
                      0.3,"rgb(245, 188, 41)",
                      0.4, "rgb(255,170,127)",
                      0.6, "rgb(255,112,78)",
                      0.8, "rgb(240,64,64)",
                      1, "rgb(178,24,43)"
                  ],
                  // Adjust the heatmap radius by zoom level
                  //通过缩放级别调整热图半径，热力图的显示半径
                  "heatmap-radius": [
                      "interpolate", ["linear"],
                      ["zoom"],
                      0, 2,
                      1, 4,
                      2, 8,
                      3, 16,
                      4, 32,
                      5, 64,
                      6, 128,
                      7, 256,
                      8, 512,
                      9, 1024,
                      10, 2048,
                      11, 4096,
                      17, 131072
                  ],
                  // Transition from heatmap to circle layer by zoom level
                  //变焦距转换为热图到圆图层
                  'heatmap-opacity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      5, 0.95,
                      7.5, 0.1
                  ],
              }
          });
          //正面数量
          _this.map.addLayer({
              "id": "Psentiment-heat",
              "type": "heatmap",
              "source": 'sentiment',
              'layout':{
                'visibility':'none'
              },
              "maxzoom": 7.5,
              "paint": {
                  'heatmap-weight': [
                      'interpolate',
                      ['linear'],
                      ['get', 'pos_num'],
                      0, 0,
                      1000, 1
                  ],
                  'heatmap-intensity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      0, 3,
                      9, 5
                  ],
                  "heatmap-color": [
                      "interpolate", ["linear"],
                      ["heatmap-density"],
                    0, "rgba(33,102,172,0)",
                      0.1, "rgb(142,173,48)",
                      0.2, "rgb(224,218,40)",
                      0.3,"rgb(245, 188, 41)",
                      0.4, "rgb(255,170,127)",
                      0.6, "rgb(255,112,78)",
                      0.8, "rgb(240,64,64)",
                      1, "rgb(178,24,43)"
                  ],
                  "heatmap-radius": [
                      "interpolate", ["linear"],
                      ["zoom"],
                      0, 2,
                      1, 4,
                      2, 8,
                      3, 16,
                      4, 32,
                      5, 64,
                      6, 128,
                      7, 256,
                      8, 512,
                      9, 1024,
                      10, 2048,
                      11, 4096,
                      17, 131072
                  ],
                  'heatmap-opacity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      5, 0.95,
                      7.5, 0.1
                  ],
              }
          });
          //负面热力图
          _this.map.addLayer({
              "id": "Nsentiment-heat",
              "type": "heatmap",
              "source": 'sentiment',
              'layout':{
                'visibility':'none'
              },
              "maxzoom": 7.5,
              "paint": {
                  'heatmap-weight': [
                      'interpolate',
                      ['linear'],
                      ['get', 'neg_num'],
                      0, 0,
                      1000, 1
                  ],

                  // Increase the heatmap color weight weight by zoom level
                  // heatmap-intensity is a multiplier on top of heatmap-weight
                  //通过缩放级别增加热图颜色重量权重
                  //热图强度是热图权重的乘法器
                  'heatmap-intensity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      0, 3,
                      9, 5
                  ],
                  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                  // Begin color ramp at 0-stop with a 0-transparancy color
                  // to create a blur-like effect.
                  //用于热图的颜色渐变。域是0（低）到1（高）。
                  //以0透明颜色在0挡处开始颜色渐变
                  //创建模糊效果。
                  "heatmap-color": [
                      "interpolate", ["linear"],
                      ["heatmap-density"],
                      0, "rgba(33,102,172,0)",
                      0.1, "rgb(142,173,48)",
                      0.2, "rgb(224,218,40)",
                      0.3,"rgb(245, 188, 41)",
                      0.4, "rgb(255,170,127)",
                      0.6, "rgb(255,112,78)",
                      0.8, "rgb(240,64,64)",
                      1, "rgb(178,24,43)"
                  ],
                  // Adjust the heatmap radius by zoom level
                  //通过缩放级别调整热图半径，热力图的显示半径
                  "heatmap-radius": [
                      "interpolate", ["linear"],
                      ["zoom"],
                      0, 2,
                      1, 4,
                      2, 8,
                      3, 16,
                      4, 32,
                      5, 64,
                      6, 128,
                      7, 256,
                      8, 512,
                      9, 1024,
                      10, 2048,
                      11, 4096,
                      17, 131072
                  ],
                  // Transition from heatmap to circle layer by zoom level
                  //变焦距转换为热图到圆图层
                  'heatmap-opacity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      5, 0.95,
                      7.5, 0.1
                  ],
              }
          });
        
          //添加聚和图层
          //舆论总数
          _this.map.addLayer(
              {
                  id: 'Tclusters-layer',
                  type: 'circle',
                  source: 'cluster',
                  minzoom: 6,
                  layout:{
                    visibility:"visible"
                  },
                  paint: {
                      'circle-radius': [
                          'step',
                          ['get', 'mblog_total'],
                          20, 100,
                          30, 200,
                          40, 300,
                          50, 400,
                          60,500,
                          70
                      ],
                      'circle-color': [
                          'step',
                          ['get', 'mblog_total'],
                          "#51bbd6",200,
                          "#f1f075", 300,
                          "#FFAA7F",500,
                          "#f28cb1"
                      ],
                      'circle-opacity':['interpolate',
                      ['linear'],
                      ['zoom'],
                      6, 0.1,
                      9, 0.7
                      ]
                  }
              },
          );
          _this.map.addLayer({
              id: 'Tclusters-count',
              type: 'symbol',
              source: 'cluster',
              minzoom: 6.5,
              layout:{
                visibility:'visible'
              },
              filter: ['>=', ['get', 'mblog_total'], 1],
              layout: {
                  'text-field': '{mblog_total}',
                  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                  'text-size': 20,
                  'text-allow-overlap': true,
                  // 'text-optional':0.5
              }
            }, 
          );
          //正面情感
          _this.map.addLayer(
              {
                  id: 'Pclusters-layer',
                  type: 'circle',
                  source: 'cluster',
                  minzoom: 6,
                  layout:{
                    visibility:"none"
                  },
                  paint: {
                      'circle-radius': [
                          'step',
                          ['get', 'pos_num'],
                          20, 100,
                          30, 200,
                          40, 300,
                          50, 400,
                          60,500,
                          70
                      ],
                      'circle-color': [
                          'step',
                          ['get', 'pos_num'],
                          "#51bbd6",200,
                          "#f1f075", 300,
                          "#FFAA7F",500,
                          "#f28cb1"
                      ],
                      'circle-opacity':['interpolate',
                      ['linear'],
                      ['zoom'],
                      6, 0.1,
                      9, 0.7
                      ]
                  }
              },
          );
          _this.map.addLayer({
              id: 'Pclusters-count',
              type: 'symbol',
              source: 'cluster',
              minzoom: 6.5,
              filter: ['>=', ['get', 'pos_num'], 1],
              layout: {
                  'text-field': '{pos_num}',
                  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                  'text-size': 20,
                  'text-allow-overlap': true,
                  visibility:'none'
              }
            }, 
          );
          //负面情感
          _this.map.addLayer(
              {
                  id: 'Nclusters-layer',
                  type: 'circle',
                  source: 'cluster',
                  minzoom: 6,
                  layout:{
                    visibility:"none"
                  },
                  paint: {
                      'circle-radius': [
                          'step',
                          ['get', 'neg_num'],
                          20, 100,
                          30, 200,
                          40, 300,
                          50, 400,
                          60,500,
                          70
                      ],
                      'circle-color': [
                          'step',
                          ['get', 'neg_num'],
                          "#51bbd6",200,
                          "#f1f075", 300,
                          "#FFAA7F",500,
                          "#f28cb1"
                      ],
                      'circle-opacity':['interpolate',
                      ['linear'],
                      ['zoom'],
                      6, 0.1,
                      9, 0.7
                      ]
                  }
              },
          );
          _this.map.addLayer({
              id: 'Nclusters-count',
              type: 'symbol',
              source: 'cluster',
              minzoom: 6.5,
              filter: ['>=', ['get', 'neg_num'], 1],
              layout: {
                  'text-field': '{neg_num}',
                  'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                  'text-size': 20,
                  'text-allow-overlap': true,
                  visibility:'none'
              }
            }, 
          );

        

          _this.map.addSource("cities", {
            //引入中国城市geojson数据源
            type: "geojson",
            data: "../../static/data/geojson/420000.json"
          });

          _this.map.addLayer({
            id: "points",
            type: "symbol",
            source: "cities",
            layout: {
              "text-field": "{name}",
              // "text-font": ["Open Sans Semibold", "Arial Unicode MS"],
              "text-offset": [0, 0.6],
              "text-anchor": "top",
              "text-size": 13
            },
            paint: {
              "text-color": "#fff"
            },
          });
          console.log(global.enddate);
          filterByend(global.enddate);
        });

        //不同图层切换
        
        var link = document.getElementById('layer');
        var a = link.getElementsByTagName('a');
        var links = [["Tsentiment-heat","Tclusters-layer","Tclusters-count"],["Psentiment-heat","Pclusters-layer","Pclusters-count"],["Nsentiment-heat","Nclusters-layer","Nclusters-count"]];
        var current_id = 0;
        for (var i=0;i<a.length;i++){
          a[i].aaa=i; //0为总数，1为正面，2为负面
          a[i].onclick=function(e){
            e.preventDefault();
            e.stopPropagation();
            a[current_id].className="";     
            var visibility = _this.map.getLayoutProperty(links[this.aaa][0], 'visibility');
            if (visibility !== 'visible') {
              this.className = 'active';
              for(let j=0;j<3;j++){
                  _this.map.setLayoutProperty(links[this.aaa][j], 'visibility', 'visible')
                };
              for(let j=0;j<3;j++){
                  _this.map.setLayoutProperty(links[current_id][j], 'visibility', 'none');
                };
              current_id = this.aaa;
            } 
          }
        };

        //悬浮窗
        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });
        //定位标记
        var marker = new mapboxgl.Marker();
      

        this.map.on("mouseenter", "points", function(e) {
          let params = {datasetId:global.datasetId}
          _this.map.getCanvas().style.cursor = "pointer";
          var province_code = e.features[0].properties.adcode.toString();
          var province_name = e.features[0].properties.name;
          var coordinates = e.features[0].geometry.coordinates.slice();
          //确保弹出框位置
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          let data = global.data;
          let f = data.filter(function(each){
            return (each.properties.enddate == global.enddate)&&(each.properties.adcode == province_code);
          });
          //弹出框
          // Change the cursor style as a UI indicator.
          var mblog_num =f[0].properties.mblog_total;
          var pos_num =f[0].properties.pos_num;
          var neg_num = f[0].properties.neg_num;

          popup
            .setLngLat(coordinates)
            .setHTML(
              "<strong>" + province_name + "</strong><br>舆论总数：" + mblog_num
              +"<br>正面情感微博数："+pos_num+"<br>负面情感微博数："+neg_num 
            )
            .addTo(_this.map);
          });   
        this.map.on("mouseleave", "points", function() {
          _this.map.getCanvas().style.cursor = "";
          popup.remove();
          // map.setFilter("points-hover", ["==", "name", ""]);
        });
        //右侧弹出框弹出的具体信息
        //右侧弹出框弹出的具体信息
        this.map.on("click", "points", function(e) {
          var province_name = e.features[0].properties.name;
          var province_code = e.features[0].properties.adcode.toString();
          global.areaId = province_code;
          var coordinates = e.features[0].geometry.coordinates.slice();
          $("#yqfood").trigger("click");
          $('#city').text(province_name);
          $('#space').text("经度:"+ Math.round(coordinates[0]*100)/100 + '  /  纬度:'+Math.round(coordinates[1]*100)/100);
          $('#time').text("时间："+global.startdate+"——"+global.enddate)
          set_echart('publicSent/api/getTrend',_this);
          marker.setLngLat(coordinates).addTo(_this.map);
        });

        // echert走势图
        this.trendChart = echarts.init(
          document.getElementById("trendChart"),
          "light"
        );
        var trendoption = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "line" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title: {
            text: "微博舆论走势图",
            left: "center",
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Microsoft YaHei"
            }
          },
          legend: {
            data: ["舆论总数", "正面微博数", "负面微博数"],
            top:25,
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Microsoft YaHei",
              padding:[10,0, 0, 0]
            }
          },
          xAxis: {
            type: "category",
            data: [],
            textStyle: {
              color: "#fff",
              fontWeight: "bold"
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
                width: "2"
              }
            }
          },
          yAxis: [
            {
              type: "value",
              textStyle: {
                color: "#fff",
                fontWeight: "bold"
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                  width: "2"
                }
              }
            }
          ],
          series: [
            {
              name: "舆论总数",
              type: "line",
              data: []
            },
            {
              name: "正面微博数",
              type: "line",
              data: []
            },
            {
              name: "负面微博数",
              type: "line",
              data: []
            }
          ],
          color:['#FFDB5C','#FF704E','#37A2DA']
        };
        this.trendChart.setOption(trendoption);
        // echert饼图
        // echert饼图
        this.pieChart = echarts.init(document.getElementById("pieChart"), "light");
        var pieoption = {
          title: {
            text: "情感分析图",
            left: "center",
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Microsoft YaHei"
            }
          },
          legend: {
            orient: "vertical",
            top:50,
            left: "left",
            textStyle: {
              color: "#fff",
              fontFamily: "Microsoft YaHei"
            },
            data: ["正面情感微博数", "负面情感微博数"]
          },
          series: [
            {
              name: "情感分析",
              type: "pie",
              radius: "55%",
              center: ["50%", "60%"],
              label: {
                  normal: {
                      formatter: '{c}'+ '\r\n'+'({d}%)',
                      position: 'inside',
                      fontSize: 20
                  }
              },
              data: []
            }
          ],
          color:['#FF704E','#37A2DA']
        };
        this.pieChart.setOption(pieoption);
        //异步加载数据
        function set_echart(url){
          let x_date=[];
          let mblog_data=[];
          let pos_data=[];
          let neg_data=[];
          let params = {datasetId:global.datasetId,areaId:global.areaId,startdate:global.startdate,enddate:global.enddate,timeflag:global.timeflag};
          console.log(params);
          https.fetchGet(url,params).then(response=>{
            let trend_data = response.data.message;
            let mp = 0;
            let mn = 0;
          trend_data.forEach(function(row){
             if(global.timeflag == 4)
            {
              x_date.push(row["enddate"].substring(5,10));
            }else{
              x_date.push(row["startdate"].substring(5,10));
            };
            mblog_data.push(row["mblog_total"]);
            pos_data.push(row["pos_num"]);
            neg_data.push(row["neg_num"]);
            mp += row["pos_num"];
            mn += row["neg_num"];
          })
          global.mpos_num = mp;
          global.mneg_num = mn;
    
          _this.trendChart.setOption({
                xAxis:{
                  data:x_date
                },
                series:[{
                  name:"舆论总数",
                  data:mblog_data
                },
                {
                  name:"正面微博数",
                  data:pos_data
                },
                {
                  name:"负面微博数",
                  data:neg_data
                }
                ]
              }) ;
          
          _this.pieChart.setOption({
            series:[{
              name:"情感分析",
              data:[{
                value:global.mpos_num==0?null:global.mpos_num,
                name:"正面情感微博数"
              },
              {
                value:global.mneg_num==0?null:global.mneg_num,
                name:"负面情感微博数"
              }]
            }]
          })
        });
        //话题热度Top10
        params = {datasetId:global.datasetId,areaId:global.areaId,startdate:global.startdate,timeflag:global.timeflag};
        https.fetchGet("/publicSent/api/getTopic",params).then(response=>{
        _this.tableData = response.data.message;
      })
        };


        //   const language = new MapboxLanguage({ defaultLanguage: "zh" });
        // map.addControl(language);
        this.map.addControl(
          new MapboxLanguage({
            defaultLanguage: "zh"
          })
        );

        this.map.addControl(new mapboxgl.NavigationControl());
    },
    set_echart(url){
          let x_date=[];
          let mblog_data=[];
          let pos_data=[];
          let neg_data=[];
          console.log(global.timeflag);
          let params = {datasetId:global.datasetId,areaId:global.areaId,startdate:global.startdate,enddate:global.enddate,timeflag:global.timeflag};
          https.fetchGet(url,params).then(response=>{
            let trend_data = response.data.message;
            console.log(trend_data);
            let mp = 0;
            let mn = 0;
          trend_data.forEach(function(row){
            if(global.timeflag == 4)
            {
              x_date.push(row["enddate"].substring(5,10));
            }else{
              x_date.push(row["startdate"].substring(5,10));
            };
            mblog_data.push(row["mblog_total"]);
            pos_data.push(row["pos_num"]);
            neg_data.push(row["neg_num"]);
            mp += row["pos_num"];
            mn += row["neg_num"];
          });
          global.mpos_num = mp;
          global.mneg_num = mn;
          
          
    
          this.trendChart.setOption({
                xAxis:{
                  data:x_date
                },
                series:[{
                  name:"舆论总数",
                  data:mblog_data
                },
                {
                  name:"正面微博数",
                  data:pos_data
                },
                {
                  name:"负面微博数",
                  data:neg_data
                }
                ]
              }) ;
          
          this.pieChart.setOption({
            series:[{
              name:"情感分析",
              data:[{
                value:global.mpos_num==0?null:global.mpos_num,
                name:"正面情感微博数"
              },
              {
                value:global.mneg_num==0?null:global.mneg_num,
                name:"负面情感微博数"
              }]
            }]
          })
        });
        //话题热度Top10
        params = {datasetId:global.datasetId,areaId:global.areaId,startdate:global.startdate,timeflag:global.timeflag};
        https.fetchGet("/publicSent/api/getTopic",params).then(response=>{
        this.tableData = response.data.message;
      })
        },
    filterBy(enddate) {
          var filters = ['==', 'enddate', enddate];
          this.map.setFilter('Tsentiment-heat', filters);
          this.map.setFilter('Psentiment-heat', filters);
          this.map.setFilter('Nsentiment-heat', filters);
          this.map.setFilter('Tclusters-layer', filters);
      },
    getDateFun(time) {
          this.date = time;
          this.numberinit();
          this.filterBy(global.enddate);
          $('#time').text("时间："+global.startdate+"——"+global.enddate)
          this.set_echart('publicSent/api/getTrend',this);
      },
    getTimeUnit(timeUnit) {
          var that = this;
          this.timeunit = timeUnit;
          if(that.startTime && that.endTime) {
              this.initTimeDate(that.startTime,that.endTime);
          } else {
              this.initTimeDate(global.startdate,global.enddate);
          }
          
          console.log("传到舆情页面le:" + timeUnit);
      },
      //初始化时间轴
      initTime(start,end){
        let start_list = [];
        let end_list = [];
        var that = this;
        let params = {
              datasetId:global.datasetId,
              timeflag:1
            };
        https.fetchGet("/publicSent/api/getTime",params).then(response=>{
          response.data.message.forEach(function(row){
            start_list.push(row["startdate"]);
            end_list.push(row["enddate"]);
          });
          that.dateTimes = start_list;
          that.enddateTimes = end_list;
        });
        that.startTime = start;
        that.endTime = end;
      },
      //初始化周月时间轴
      initTimeDate(start,end) {
          let start_list = [];
          let end_list = [];
          var that = this;
          if (that.timeunit == "周") {
              let params = {
                datasetId:global.datasetId,
                timeflag:0
              };
              https.fetchGet("/publicSent/api/getTime",params).then(response=>{
                response.data.message.forEach(function(row){
                  start_list.push(row["startdate"]);
                  end_list.push(row["enddate"]);
                });
                global.enddate=end_list[0];
              });
            that.numberinit();
            that.map.getSource('sentiment').setData({"type": "FeatureCollection","features": []});
            // params = {datasetId:global.datasetId,timeflag:global.timeflag};
            // https.fetchGet("/publicSent/api/getDefault",params).then(response=>{
               var storage = window.sessionStorage;
              let data = JSON.parse(storage.getItem("week_data"));
              that.map.getSource('cluster').setData(data);
              that.map.getSource('sentiment').setData(data);
            // });
            global.data = data;
            this.filterBy(global.enddate);
          } else if (that.timeunit == "月")  {
            let params = {
              datasetId:global.datasetId,
              timeflag:1
            };
            https.fetchGet("/publicSent/api/getTime",params).then(response=>{
              response.data.message.forEach(function(row){
                start_list.push(row["startdate"]);
                end_list.push(row["enddate"]);
              });
              global.enddate=end_list[0];
            });
            that.numberinit();
            that.map.getSource('sentiment').setData({"type": "FeatureCollection","features": []});
            // params = {datasetId:global.datasetId,timeflag:global.timeflag};
            // https.fetchGet("/publicSent/api/getDefault",params).then(response=>{
              var storage = window.sessionStorage;
              let data = JSON.parse(storage.getItem("month_data"));
              // var sentiment = new Object(data);
              that.map.getSource('cluster').setData(data);
              that.map.getSource('sentiment').setData(data);
            // });
              global.data = data;

            this.filterBy(global.enddate);
          }else if(that.timeunit =="默认"){
            let params = {
              datasetId:global.datasetId,
              timeflag:1
            };
            https.fetchGet("/publicSent/api/getTime",params).then(response=>{
              response.data.message.forEach(function(row){
                start_list.push(row["startdate"]);
                end_list.push(row["enddate"]);
              });
              global.enddate=end_list[0];
            });
            that.numberinit();
            that.map.getSource('sentiment').setData({"type": "FeatureCollection","features": []});
            params = {datasetId:global.datasetId,timeflag:global.timeflag};
            https.fetchGet("/publicSent/api/getDefault",params).then(response=>{
              let data = response.data.message[0];
              that.map.getSource('cluster').setData(data);
              that.map.getSource('sentiment').setData(data);
              console.log(global.enddate);
              this.filterBy(global.enddate);
            });
           
          };
          that.dateTimes = start_list;
          that.enddateTimes = end_list;
          that.startTime = start;
          that.endTime = end;
      },
       //获取知识图谱子图节点
    getFoodDataset(value) {
        var that = this;
        let params = { food_id: this.food_id };
        https
            .fetchGet("/kownledgeGraph/api/get_others_kg/", params)
            .then(response => {
                let res = response.data;
                that.fooddataset = res.message.nodes;
                console.log(
                    "fooddataset:" + JSON.stringify(this.fooddataset)
                );
            })
            .catch(err => {
                console.log(err);
            });
    },
    //获取知识图谱子图关系
    getEdgeDataset(value) {
        var that = this;
        let params = { food_id:this.food_id };
        https
            .fetchGet("/kownledgeGraph/api/get_others_kg/", params)
            .then(response => {
                let res = response.data;
                that.edgedataset = res.message.edges;
                console.log(
                    "edgedataset:" + JSON.stringify(this.edgedataset)
                );
            })
            .catch(err => {
                console.log(err);
            });
    },
     //初始化vis
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
            //that.edges.add(that.edgedataset);
            //that.nodes=[{"id":1765,"label_ID":"F001003","label":"小麦粉","group":"Food"},{"id":1188,"label_ID":"001","label":"粮食及制品","group":"Cate"},{"id":1302,"label_ID":"T0054","label":"溴酸钾","group":"Additive"},{"id":1311,"label_ID":"3","label":"损坏肾脏","group":"HarmDetail"},{"id":1315,"label_ID":"7","label":"致癌","group":"HarmDetail"},{"id":1429,"label_ID":"21","label":"刺激中枢神经","group":"HarmDetail"},{"id":1605,"label_ID":"7","label":"增筋","group":"EffectDetail"},{"id":1693,"label":"使用了溴酸钾的面粉和面包的一致特征是，面粉更白，制作出来的面包更具有弹性和韧性。因此，吃面条、馒头要辨别颜色。具体讲：好面粉并非越白越好，一般而言，相对黑一点的才更有营养。但这也并不是说面粉越黑越好，而是颜色要有正常色。好面条要有弹性：真正的好面条软而有弹性，不易折断，煮出的汤水不混浊。好馒头是淡黄色的：小麦粉和用其加工的食品就应该是淡黄色的，不要选购颜色太白但无亮色的馒头。","group":"Distin"}];
            that.edges.add(that.edgedataset);

            // 创建一个网络拓扑图  不要使用jquery获取元素
            that.container = document.getElementById("network_id");
            var data = { nodes: that.nodes, edges: that.edges };

             //全局设置，每个节点和关系的属性会覆盖全局设置
            that.knoptions = {
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
            that.network = new vis.Network(that.container, data, that.knoptions);
                    console.log(
                        "fooddataset:" + JSON.stringify(this.fooddataset)
                    );
                })
                .catch(err => {
                    console.log(err);
            });
            
        },
    createNetwork(param) {
        let that=this;
          //添加节点
          for(var i=0;i<param.nodes.length;i++){
            var node = param.nodes[i];
            //除了固定的参数外，可以自己增加额外的参数
              that.nodes.add({
                  id: nodes.id,
                  label: nodes.label,
                  image:  nodes.image
              });
          }
          //添加关系
          for(var i=0;i<param.edges.length;i++){
            var edge = param.edges[i];
              that.edges.add({
                  id: edges.id,
                  arrows:'to',
                  from: edges.from,
                  to: edges.to,
                  label:edges.label,
                  font:{align:"middle"},
                  length:150,
              });
          }
        console.log("我双击了吗3");
  },
  
  },
 
  
  computed: {}
};
</script>


