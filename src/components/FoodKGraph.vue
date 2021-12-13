<template>
    <div id="knowledge">
        <!-- 滚动词条 -->
        <div id="cloudapp" v-show="cloudshow">
            <svg id="cloudtext" :width="width" :height="height" @mousemove="listener($event)">
                <a v-for="(tag,index) in tags" :key="index" style="cursor:pointer">
                    <text
                        class="itext"
                        :x="tag.x"
                        :y="tag.y"
                        :font-size="20 * (600/(600-tag.z))"
                        :fill-opacity="((400+tag.z)/600)"
                        @click="changeInit(tag)"
                        :fill="colors[index]"
                    >{{tag.text}}</text>
                </a>
            </svg>
        </div>
        <!-- 插件导航 -->
        <div id="network_id" class="network" v-show="knshow"></div>
        <div id="zs-legend"  v-show="knshow">
            <div class="zs-hd">
                <img src="../../static/image/ico/A.png" width="25%" />
                <span>添加剂</span>
            </div>
            <div class="zs-hd">
                <img src="../../static/image/ico/D.png" width="25%" />
                人体危害
            </div>
            <div class="zs-hd">
                <img src="../../static/image/ico/E.png" width="25%" />
                添加作用
            </div>
            <div class="zs-hd">
                <img src="../../static/image/ico/F.png" width="25%" />
                食品
            </div>
            <div class="zs-hd">
                <img src="../../static/image/ico/M.png" width="25%" />
                鉴别方法
            </div>
        </div>
        <!-- Navigation -->
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
                        <!-- <ul class="search-list"></ul> -->
                        <!-- 模糊搜索列表 -->
                        <div id="yq-search-scrollbar" class="yq-search-scrollbar closed">
                            <div class="yq-search-fuzzy">
                                <ul class="yq-fuzzy-list" v-show="yqfuzzy.length">
                                    <li
                                        v-for="(item,index) in yqfuzzy"
                                        :key="index"
                                        @click="chooseYqFuzzy(item)"
                                    >
                                        <span>
                                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            {{ item.food_name }}
                                        </span>
                                    </li>
                                </ul>
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
                <div class="gundong" @click="changeStatus">
                    <i class="fa fa-cloud" aria-hidden="true"></i>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>

        <!-- 可收缩列表 
        <div id="mySidebar" class="sidebar" onmouseover="toggleSidebar()" onmouseout="toggleSidebar()"></div>-->

        <!-- 左侧弹出框监察重页面：重点食物/重点区域/重点公司 -->
        <div id="zs-sidebar">
            <div id="zs-wrap">
                <div id="zsfood" class="zs-sidebar-item">
                    <div>食品风险知识</div>
                </div>
                <div id="zscompany" class="zs-sidebar-item">
                    <div>相关食品安全</div>
                </div>
                <div id="zsarea" class="zs-sidebar-item">
                    <div>食品安全监察</div>
                </div>
            </div>
        </div>

        <div id="zsfood-content" class="zsnav-content">
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

            <div class="zs-zl">
                <div class="zsr-basic">
                    <img src="../../static/icon/food_link.png" class="zsr-content-icon" />
                    <div class="zsr-content-title">{{zhishidata.食品名称}}</div>
                    <div class="zsr-content-subtitle">食品ID：{{zhishidata.食品ID}}</div>
                    <div class="zsr-content-subtitle">食品别名：{{zhishidata.食品别名}}</div>
                    <div class="zsr-content-subtitle">食品类别：{{zhishidata.食品类别}}</div>
                </div>
                <div class="zsr-info">
                    <el-carousel
                        arrow="always"
                        ref="Light"
                        :initial-index="cardIndex"
                        @change="showIndex"
                        :interval="16000"
                        height="320px"
                        class="zsr-card"
                        indicator-position="none"
                    >
                        <el-carousel-item v-for="(one,index) in zhishidata.添加剂" :key="index">
                            <div class="zsr-link-info">
                                <div class="zsr-link-block">
                                    <span class="zsr-link-content">
                                        <i class="fa fa-shield" aria-hidden="true"></i>添加剂名称:
                                    </span>
                                    <span class="zsr-link-font">{{one.添加剂名称}}</span>
                                </div>
                                <div class="zsr-link-block">
                                    <span class="zsr-link-content">
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>添加剂编号:
                                    </span>
                                    <span class="zsr-link-font">{{one.添加剂编号}}</span>
                                </div>
                                <div class="zsr-link-block">
                                    <span class="zsr-link-content">
                                        <i class="fa fa-ambulance" aria-hidden="true"></i>产生危害:
                                    </span>

                                    <span class="zsr-link-font">
                                        <span
                                            v-for="(two,index) in one.产生危害"
                                            :key="index"
                                        >{{two.危害详情+'；'}}</span>
                                    </span>
                                </div>
                                <div class="zsr-link-block">
                                    <span class="zsr-link-content">
                                        <i class="fa fa-bars" aria-hidden="true"></i>添加作用:
                                    </span>
                                    <span class="zsr-link-font">
                                        <span
                                            v-for="(two,index) in one.添加作用"
                                            :key="index"
                                            float:left
                                        >{{two.作用详情+'；'}}</span>
                                    </span>
                                </div>
                                <div class="zsr-link-block">
                                    <span class="zsr-link-content">
                                        <i class="fa fa-book" aria-hidden="true"></i>鉴别方法:
                                    </span>
                                    <span class="zsr-link-font">{{one.鉴别方法}}</span>
                                </div>
                                
                            </div>
                            
                        </el-carousel-item>
                    </el-carousel>
                    <div class="card-page">
                        <span>{{cardIndex+1}}页/</span>
                        <span>{{zhishiHarmdata.length}}页</span>            
                    </div>                        
                </div>
            </div>
        </div>
        <div id="zscompany-content" class="zsnav-content">
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
                    <span>食品安全事件</span>
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
            <div id="ChartChina" :style="{width: '170px', height: '300px'}"></div>
            <!--时间线-->
            <!--时间线-->
            <div class="timeLine" style="overflow: hidden;">
                <div class="right_content">
                    <div class="right_block1">
                        <span class="right_span">
                            <span class="zsr-link-content">
                                <i class="fa fa-book" aria-hidden="true"></i>事件名称:
                            </span>
                            <span v-if="timeLineList.length">{{timeLineList[timeIndex].event_name}}</span>
                        </span>
                    </div>
                    <div class="right_block1">
                        <span class="right_span">
                            <span class="zsr-link-content">
                                <i class="fa fa-calendar" aria-hidden="true"></i>发生时间:
                            </span>
                            <span v-if="timeLineList.length">{{timeLineList[timeIndex].startdate}}</span>
                        </span>
                    </div>
                    <div class="right_block1">
                        <span class="right_span">
                            <span class="zsr-link-content">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>发生地点:
                            </span>
                            <span v-if="timeLineList.length">{{timeLineList[timeIndex].address}}</span>
                        </span>
                    </div>
                    <br />
                    <div class="right_block3">
                        <span class="right_span">
                            <span class="zsr-link-content">
                                <i class="fa fa-info-circle" aria-hidden="true"></i>事件详情:
                            </span>
                            <span v-if="timeLineList.length">{{timeLineList[timeIndex].caption}}</span>
                        </span>
                    </div>
                </div>
                <div class="ul_box">
                    <ul class="my_timeline" ref="mytimeline" style="margin-left: -350px;">
                        <li
                            class="my_timeline_item"
                            v-for="(item,index) in timeLineList"
                            :key="index"
                        >
                            <!--圈圈节点-->
                            <div
                                class="my_timeline_node"
                                :style=" {backgroundColor: '#e4e7ed', width: 16 + 'px', height: 16 + 'px'}"
                                @click="changeActive(index)"
                                :class="{active: index == timeIndex}"
                            ></div>
                            <!--线-->
                            <div class="my_timeline_item_line"></div>
                            <!--标注-->
                            <div
                                class="my_timeline_item_content"
                                :style="{color: '#999', fontSize: 15 + 'px'}"
                            >{{item.startdate}}</div>
                        </li>
                    </ul>
                </div>
                <div class="my_timeline_next" @click="moveRight">
                    <div class="my_timeline_item_content">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="my_timeline_prev" @click="moveLeft">
                    <div class="my_timeline_item_content">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id="zsarea-content" class="zsnav-content">
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
                    <span>抽检信息可视化展示</span>
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
            <!-- <div class="zsnav-con-close">
                <i class="glyphicon glyphicon-chevron-right"></i>
            </div>-->
            <div class="zs-zl">
                <!-- <div class="zs-img"><img src="../../static/image/timg.jpg"></div> -->
                <div id="yourChartChina" :style="{width: '170px', height: '300px'}"></div>
            </div>
        </div>

        <div id="zscd" class="left-size">
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
                    <span>知识词典</span>
                </span>
            </p>
            <el-tree
                :data="datak"
                :props="defaultProps"
                :current-node-key="currentID"
                @node-click="handleNodeClick"
                :render-content="renderContent"
                :highlight-current="true"
                accordion
                :default-expanded-keys="expandKey"
                ref="treeBox"
                node-key="label"
            ></el-tree>
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
<script>
import Nav from "@/components/Nav.vue";
import axios from "axios";
import qs from "qs";
import https from "../http.js";
import vis from "vis";
import layer from "../../static/js/layer.js";
export default {
    name: "Knowledge",
    components: {
        "v-nav": Nav
    },
    data() {
        return {
            currentID: "",
            currentName: "",
            Additive: [],
            expandKey: [],
            casheKey: "",
            defualtid: "F001003",
            cloudshow: true,
            currentAdditiveName: "",
            currentSchIndex: "",
            knshow: false,
            colors: [],
            width: 700, //svg宽度
            height: 700, //svg高度
            tagsNum: 20, //标签数量
            RADIUS: 200, //球的半径
            speedX: Math.PI / 360, //球一帧绕x轴旋转的角度
            speedY: Math.PI / 360, //球-帧绕y轴旋转的角度
            tags: [],
            clouds: [],
            cityName: "",
            scatterVal: [
                {
                    name: "武汉市",
                    value: 9,
                    selected: true
                }
            ],
            datak: [
                { province: "北京", value: 0.0885 },
                { province: "四川省", value: 0.4885 }
            ],
            defaultProps: {
                children: "children",
                label: "label"
            },
            addRoleForm: [],
            checkedIds: [],
            search: "",
            searchData: "",
            cardIndex: 0,
            fullscreenLoading: false,
            searchVal: "",
            yqfuzzy: [],
            yqsearch: [],
            selectSearch: "",
            baseurl: "",
            layerId: "dark-v9",
            pagesize: 5,
            currentPage: 1,
            timeunit: "月",
            data1: [ {province: "暂无数据",value: 0,}],
            products: [
                //假数据
                { name: "数据1", date: "2018-01-04", depart: "泸化工1" },
                { name: "数据2", date: "2018-01-25", depart: "泸化工2" },
                { name: "数据3", date: "2018-02-10", depart: "泸化工3" },
                { name: "数据4", date: "2018-03-04", depart: "泸化工4" },
                { name: "数据5", date: "2018-05-24", depart: "泸化工5" },
                { name: "数据6", date: "2018-10-29", depart: "泸化工6" }
            ],
            timeIndex: 0,
            timeLineList: [],
            zhishiHarmdata: [],
            zhishidata: {
                食品ID: "暂无数据",
                食品名称: "暂无数据",
                食品别名: "暂无数据",
                食品类别: "暂无数据",
                添加剂: [
                    {
                        添加剂编号: "暂无数据",
                        添加剂名称: "暂无数据",
                        产生危害: [
                            {
                                危害编号: "7",
                                危害等级: "3",
                                危害详情: "暂无数据"
                            }
                        ],
                        添加作用: [
                            { 作用编号: "暂无数据", 作用详情: "暂无数据" }
                        ],
                        鉴别方法: "暂无数据"
                    }
                ]
            },
            treeData: [],
            nodeExtendArr: [],
            network: null,
            options: {},
            container: document.getElementById('network_id'),
            fooddataset:[],
            edgedataset:[],
            nodes:[],
            edges:[],
            color: ""
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
        }
    },
    computed: {
        CX() {
            //球心x坐标
            return this.width / 2;
        },
        CY() {
            //球心y坐标
            return this.height / 2;
        }
    },
    mounted() {
        setInterval(() => {
            this.rotateX(this.speedX);
            this.rotateY(this.speedY);
        }, 17);
        this.init();
        this.getFoodNode();
        /* this.getFoodDataset("F017001");
        this.getEdgeDataset("F017001"); */
        //this.initVis(this.defualtid);
    },
    created() {
        this.getClouds();
        this.tcolors();
    },
    methods: {
        //滚动词条随机变色
        tcolors(){
            for(var i = 0;i<30;i++){
                var r = Math.floor(Math.random() * 256);
                var g = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random() * 256);
                this.colors[i] = "rgb(" + r + ',' + g + ',' + b + ")";
            }
        },
        //滚动词条和知识图谱切换
        changeStatus(){
            if(this.cloudshow == true) {
                this.cloudshow = false;
                this.knshow = true;
            } else {
                this.cloudshow = true;
                this.knshow = false;
            }
        },
        rotateX(angleX) {
            var cos = Math.cos(angleX);
            var sin = Math.sin(angleX);
            for (let tag of this.tags) {
                var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
                var z1 = tag.z * cos + (tag.y - this.CY) * sin;
                tag.y = y1;
                tag.z = z1;
            }
        },
        listener(event) {
            //响应鼠标移动
            var x = event.clientX - this.CX;
            var y = event.clientY - this.CY;
            this.speedX =
                x * 0.0001 > 0
                    ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
                    : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
            this.speedY =
                y * 0.0001 > 0
                    ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
                    : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
        },
        rotateY(angleY) {
            var cos = Math.cos(angleY);
            var sin = Math.sin(angleY);
            for (let tag of this.tags) {
                var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                var z1 = tag.z * cos + (tag.x - this.CX) * sin;
                tag.x = x1;
                tag.z = z1;
            }
        },
        getName(full){
            //             {
            //     "id": 5,
            //     "cate_ID": "005",
            //     "label": "食用油",
            //     "className": "el-icon-s-shop",
            //     "children": [
            //         {
            //             "id": 39,
            //             "food_ID": "F005001",
            //             "label": "食用油",
            //             "className": "el-icon-s-home"
            //         }
            //     ]
            // },
            var that = this;
            var flag = 0;
            var chil=[];
            var final = "";
            for (let i = 0;i < that.datak.length; i++){
                chil = that.datak[i].children;
                if (chil == null){
                    continue;
                }
                for (let j = 0; j < chil.length; j++){
                    // console.log("expand:" + chil[j].label);
                    if (full.text == chil[j].label){
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1){
                    final = that.datak[i].label;
                    that.expandKey = [];
                    that.expandKey[0] = final;
                    console.log("expand:" + that.expandKey);
                    break;
                }
                
            }
            
            
        },
        //点击滚动词条后知识图谱，知识词典，右侧关联栏全部更新
        changeInit(tag){
            console.log("tag:"+JSON.stringify(tag));
            this.$nextTick(() => {
                // treeBox 元素的ref   value 绑定的node-key
                this.currentID = tag.text;
                this.$refs.treeBox.setCurrentKey(this.currentID);
                this.getName(tag);
                // this.$refs.treeBox.store.nodesMap[flg].expanded = false;
                this.$refs.treeBox.store.nodesMap[this.expandKey].expanded = true;
                this.casheKey = this.expandKey;
                console.log("expandKey" + this.expandKey)
            });
            
            this.getFoodAddRisk(tag.textid);
            this.cloudshow = false;
            this.initVis(tag.textid);
            this.knshow = true;
           // $("#zsfood").trigger("click");
            /* this.getFoodDataset(item.food_id);
            this.getEdgeDataset(item.food_id); */
            
            this.getFoodRank(tag.textid);
            this.getFoodEvent(tag.textid);
        },
        //获取滚动词条
        getClouds() {
            var that = this;
            https
                .fetchGet("/kownledgeGraph/api/get_common_food/")
                .then(response => {
                    let res = response.data.message.nodelist;
                    that.clouds = res;
                    that.tagsNum = res.length;
                    console.log("clouds:" + JSON.stringify(that.clouds)+",tagsum:"+that.tagsNum);
                    //初始化标签位置
                    let tags = [];
                    for (let i = 0; i < that.tagsNum; i++) {
                        let tag = {};
                        let k = -1 + (2 * (i + 1) - 1) / that.tagsNum;
                        let a = Math.acos(k);
                        let b = a * Math.sqrt(that.tagsNum * Math.PI); //计算标签相对于球心的角度
                        tag.text = that.clouds[i].食品名称;
                        tag.textid = that.clouds[i].食品ID;
                        tag.x =
                            that.CX + that.RADIUS * Math.sin(a) * Math.cos(b); //根据标签角度求出标签的x,y,z坐标
                        tag.y =
                            that.CY + that.RADIUS * Math.sin(a) * Math.sin(b);
                        tag.z = that.RADIUS * Math.cos(a);
                      // tag.href = "https://imgss.github.io"; //给标签添加链接
                        tags.push(tag);
                    }
                    that.tags = tags; //让vue替我们完成视图更新
                    
                })
                .catch(err => {
                    console.log(err);
                });
        },
        renderContent(h, { node, data, store }) {
            return (
                <span>
                    <i class={data.className}></i>
                    <span>{node.label}</span>
                </span>
            );
        },
        getFoodNode() {
            var that = this;
            https
                .fetchGet("/kownledgeGraph/api/get_cate_food/")
                .then(response => {
                    let res = response.data;
                    that.datak = res.message.nodelist;
                    console.log("datak:" + JSON.stringify(this.datak));
                })
                .catch(err => {
                    console.log(err);
                });
        },
        convertKey(arr, key) {
            let newArr = [];
            arr.forEach((item, index) => {
                let newObj = {};
                for (var i = 0; i < key.length; i++) {
                    newObj[key[i]] = item[Object.keys(item)[i]];
                }
                newArr.push(newObj);
            });
            return newArr;
        },
        getFoodName() {
            this.$http.get("../../static/data/foodcircle.json").then(
                response => {
                    console.log(
                        "response:" +
                            JSON.stringify(response.data.data.nodelist)
                    );
                },
                response => {
                    alert("服务器请求失败");
                }
            );
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
            if (!this.searchVal) {
                // document.getElementById("search-list").classList.add("closed");
                document
                    .getElementById("yq-search-scrollbar")
                    .classList.add("closed");
            }
        },
        //模糊搜索功能
        fuzzy_search(value) {
            document
                .getElementById("yq-search-scrollbar")
                .classList.remove("closed");
            var that = this;
            if (!value) {
                that.yqfuzzy = [];
                return;
            }
            let params = { keyword: this.searchVal.trim() };
            //调取模糊搜索接口
            https
                .fetchGet("/kownledgeGraph/api/getsearch/", params)
                .then(response => {
                    let res = response.data;
                    this.yqfuzzy = res.message.nodelist;
                    console.log("yqfuzzy:" + JSON.stringify(res));
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getNameSec(full){
            //             {
            //     "id": 5,
            //     "cate_ID": "005",
            //     "label": "食用油",
            //     "className": "el-icon-s-shop",
            //     "children": [
            //         {
            //             "id": 39,
            //             "food_ID": "F005001",
            //             "label": "食用油",
            //             "className": "el-icon-s-home"
            //         }
            //     ]
            // },
            var that = this;
            var flag = 0;
            var chil=[];
            var final = "";
            for (let i = 0;i < that.datak.length; i++){
                chil = that.datak[i].children;
                if (chil == null){
                    continue;
                }
                for (let j = 0; j < chil.length; j++){
                    // console.log("expand:" + chil[j].label);
                    if (full == chil[j].label){
                        flag = 1;
                        break;
                    }
                }
                if (flag == 1){
                    final = that.datak[i].label;
                    that.expandKey = final;
                    console.log("expand:" + that.expandKey);
                    break;
                }
                
            }
            
            
        },
        //选中模糊匹配值
        chooseYqFuzzy(item) {
            this.searchVal = item.food_name;
            this.selectSearch = item.food_name;
            this.getFoodAddRisk(item.food_id);
            this.getFoodRank(item.food_id); // document.getElementById("search-list").classList.remove("closed");
            //             this.getFoodRisk(item.food_id);
            this.$nextTick(() => {
                // treeBox 元素的ref   value 绑定的node-key
                this.currentID = item.food_name;
                this.$refs.treeBox.setCurrentKey(this.currentID);
                this.getNameSec(item.food_name);
                // this.$refs.treeBox.store.nodesMap[flg].expanded = false;
                this.$refs.treeBox.store.nodesMap[this.expandKey].expanded = true;
                this.casheKey = this.expandKey;
            });
            $("#zsfood").trigger("click");
           /*  this.getFoodDataset(item.food_id);
            this.getEdgeDataset(item.food_id); */
            document
                    .getElementById("yq-search-scrollbar")
                    .classList.add("closed");
            this.initVis(item.food_id);
            this.getFoodEvent(item.food_id);
            
            
        },
               //更改食品风险数据格式
        scatterchange() {
            if (this.timeLineList.length == 0) {
                this.scatterVal = [];
            } else {
                for (let i = 0; i < this.timeLineList.length; i++) {
                    this.scatterVal.push({
                        name: this.timeLineList[i].address,
                        value: 9
                    });
                    console.log("ceshi" + this.scatterVal[i].name);
                }
            }
        },

        //第二次格式转换
        convertScatterData(data) {
            let res = [];
            const scatterGeo = {
                海门市: [121.15, 31.89],
                鄂尔多斯市: [109.781327, 39.608266],
                招远市: [120.38, 37.35],
                舟山市: [122.207216, 29.985295],
                齐齐哈尔市: [123.97, 47.33],
                盐城市: [120.13, 33.38],
                赤峰市: [118.87, 42.28],
                青岛市: [120.33, 36.07],
                乳山市: [121.52, 36.89],
                金昌市: [102.188043, 38.520089],
                泉州市: [118.58, 24.93],
                莱西市: [120.53, 36.86],
                日照市: [119.46, 35.42],
                胶南市: [119.97, 35.88],
                南通市: [121.05, 32.08],
                拉萨市: [91.11, 29.97],
                云浮市: [112.02, 22.93],
                梅州市: [116.1, 24.55],
                文登市: [122.05, 37.2],
                上海市: [121.48, 31.22],
                攀枝花市: [101.718637, 26.582347],
                威海市: [122.1, 37.5],
                承德市: [117.93, 40.97],
                厦门市: [118.1, 24.46],
                汕尾市: [115.375279, 22.786211],
                潮州市: [116.63, 23.68],
                丹东市: [124.37, 40.13],
                太仓市: [121.1, 31.45],
                曲靖市: [103.79, 25.51],
                烟台市: [121.39, 37.52],
                福州市: [119.3, 26.08],
                瓦房店市: [121.979603, 39.627114],
                即墨市: [120.45, 36.38],
                抚顺市: [123.97, 41.97],
                玉溪市: [102.52, 24.35],
                张家口市: [114.87, 40.82],
                阳泉市: [113.57, 37.85],
                莱州市: [119.942327, 37.177017],
                湖州市: [120.1, 30.86],
                汕头市: [116.69, 23.39],
                昆山市: [120.95, 31.39],
                宁波市: [121.56, 29.86],
                湛江市: [110.359377, 21.270708],
                揭阳市: [116.35, 23.55],
                荣成市: [122.41, 37.16],
                连云港市: [119.16, 34.59],
                葫芦岛市: [120.836932, 40.711052],
                常熟市: [120.74, 31.64],
                东莞市: [113.75, 23.04],
                河源市: [114.68, 23.73],
                淮安市: [119.15, 33.5],
                泰州市: [119.9, 32.49],
                南宁市: [108.33, 22.84],
                营口市: [122.18, 40.65],
                惠州市: [114.4, 23.09],
                江阴市: [120.26, 31.91],
                蓬莱市: [120.75, 37.8],
                韶关市: [113.62, 24.84],
                嘉峪关市: [98.289152, 39.77313],
                广州市: [113.23, 23.16],
                延安市: [109.47, 36.6],
                太原市: [112.53, 37.87],
                清远市: [113.01, 23.7],
                中山市: [113.38, 22.52],
                昆明市: [102.73, 25.04],
                寿光市: [118.73, 36.86],
                盘锦市: [122.070714, 41.119997],
                长治市: [113.08, 36.18],
                深圳市: [114.07, 22.62],
                珠海市: [113.52, 22.3],
                宿迁市: [118.3, 33.96],
                咸阳市: [108.72, 34.36],
                铜川市: [109.11, 35.09],
                平度市: [119.97, 36.77],
                佛山市: [113.11, 23.05],
                海口市: [110.35, 20.02],
                江门市: [113.06, 22.61],
                章丘市: [117.53, 36.72],
                肇庆市: [112.44, 23.05],
                大连市: [121.62, 38.92],
                临汾市: [111.5, 36.08],
                吴江市: [120.63, 31.16],
                石嘴山市: [106.39, 39.04],
                沈阳市: [123.38, 41.8],
                苏州市: [120.62, 31.32],
                茂名市: [110.88, 21.68],
                嘉兴市: [120.76, 30.77],
                长春市: [125.35, 43.88],
                胶州市: [120.03336, 36.264622],
                银川市: [106.27, 38.47],
                张家港市: [120.555821, 31.875428],
                三门峡市: [111.19, 34.76],
                锦州市: [121.15, 41.13],
                南昌市: [115.89, 28.68],
                柳州市: [109.4, 24.33],
                三亚市: [109.511909, 18.252847],
                自贡市: [104.778442, 29.33903],
                吉林市: [126.57, 43.87],
                阳江市: [111.95, 21.85],
                泸州市: [105.39, 28.91],
                西宁市: [101.74, 36.56],
                宜宾市: [104.56, 29.77],
                呼和浩特市: [111.65, 40.82],
                成都市: [104.06, 30.67],
                大同市: [113.3, 40.12],
                镇江市: [119.44, 32.2],
                桂林市: [110.28, 25.29],
                张家界市: [110.479191, 29.117096],
                宜兴市: [119.82, 31.36],
                北海市: [109.12, 21.49],
                西安市: [108.95, 34.27],
                金坛市: [119.56, 31.74],
                东营市: [118.49, 37.46],
                牡丹江市: [129.58, 44.6],
                遵义市: [106.9, 27.7],
                绍兴市: [120.58, 30.01],
                扬州市: [119.42, 32.39],
                常州市: [119.95, 31.79],
                潍坊市: [119.1, 36.62],
                重庆市: [106.54, 29.59],
                台州市: [121.420757, 28.656386],
                南京市: [118.78, 32.04],
                滨州市: [118.03, 37.36],
                贵阳市: [106.71, 26.57],
                无锡市: [120.29, 31.59],
                本溪市: [123.73, 41.3],
                克拉玛依市: [84.77, 45.59],
                渭南市: [109.5, 34.52],
                马鞍山市: [118.48, 31.56],
                宝鸡市: [107.15, 34.38],
                焦作市: [113.21, 35.24],
                句容市: [119.16, 31.95],
                北京市: [116.46, 39.92],
                徐州市: [117.2, 34.26],
                衡水市: [115.72, 37.72],
                包头市: [110, 40.58],
                绵阳市: [104.73, 31.48],
                乌鲁木齐市: [87.68, 43.77],
                枣庄市: [117.57, 34.86],
                杭州市: [120.19, 30.26],
                淄博市: [118.05, 36.78],
                鞍山市: [122.85, 41.12],
                溧阳市: [119.48, 31.43],
                库尔勒市: [86.06, 41.68],
                安阳市: [114.35, 36.1],
                开封市: [114.35, 34.79],
                济南市: [117, 36.65],
                德阳市: [104.37, 31.13],
                温州市: [120.65, 28.01],
                九江市: [115.97, 29.71],
                邯郸市: [114.47, 36.6],
                临安市: [119.72, 30.23],
                兰州市: [103.73, 36.03],
                沧州市: [116.83, 38.33],
                临沂市: [118.35, 35.05],
                南充市: [106.110698, 30.837793],
                天津市: [117.2, 39.13],
                富阳市: [119.95, 30.07],
                泰安市: [117.13, 36.18],
                诸暨市: [120.23, 29.71],
                郑州市: [113.65, 34.76],
                哈尔滨市: [126.63, 45.75],
                聊城市: [115.97, 36.45],
                芜湖市: [118.38, 31.33],
                唐山市: [118.02, 39.63],
                平顶山市: [113.29, 33.75],
                邢台市: [114.48, 37.05],
                德州市: [116.29, 37.45],
                济宁市: [116.59, 35.38],
                荆州市: [112.239741, 30.335165],
                宜昌市: [111.3, 30.7],
                义乌市: [120.06, 29.32],
                丽水市: [119.92, 28.45],
                洛阳市: [112.44, 34.7],
                秦皇岛市: [119.57, 39.95],
                株洲市: [113.16, 27.83],
                石家庄市: [114.48, 38.03],
                莱芜市: [117.67, 36.19],
                常德市: [111.69, 29.05],
                保定市: [115.48, 38.85],
                湘潭市: [112.91, 27.87],
                金华市: [119.64, 29.12],
                岳阳市: [113.09, 29.37],
                长沙市: [113, 28.21],
                衢州市: [118.88, 28.97],
                廊坊市: [116.7, 39.53],
                菏泽市: [115.480656, 35.23375],
                合肥市: [117.27, 31.86],
                武汉市: [114.31, 30.52],
                黄冈市: [110.1, 30.82],
                大庆市: [125.03, 46.58]
            };
            for (let i = 0; i < data.length; i++) {
                let geoCoord = scatterGeo[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            console.log("ceshiing:" + res);
            return res;
        },
        //食品爆发事件模块接口
        getFoodEvent(value) {
            var that = this;
            var n_year = new Date();
            let params = { foodId: value, year: n_year.getFullYear() }; //调取模糊搜索接口
            https
                .fetchGet("/publicSent/api/getKnowledgeGraph", params)
                .then(response => {
                    let res = response.data.message;
                    that.timeLineList = res;
                    if (this.timeLineList.length == 0){
                        this.scatterVal.forEach(element => {
                            for (var key in element){
                                if (element[key] != null){
                                delete element[key];
                                }
                            }
                        })
                        this.timeLineList.push({
                            event_name: "暂无",
                            startdate: "暂无",
                            address: "暂无",
                            degree: "暂无",
                            caption:
                                "暂无"
                            },);
                    }
                    console.log(
                        "timeLineList:" + JSON.stringify(that.timeLineList)
                    );
                    this.scatterchange();
                                // const scatterVal = this.scatterchange();
            //数据转换，转换后的格式：[{name: 'cityName', value: [lng, lat, val]}, {...}]
            var ChartContainer = document.getElementById("ChartChina");
            var mapct = function() {
                ChartContainer.style.width = 440 + "px"; //页面一半的大小
            };
            mapct();
            var ChartChina = this.$echarts.init(ChartContainer);

            function randomData() {
                return Math.round(Math.random() * 500);
            }
                        // 绘制图表
            var optionMapa = {
                title: {
                    text: this.timeLineList[0].event_name+ "近三年" + "爆发详情",
                    left: "center",
                    textStyle: {
                        color: "#fff"
                    }
                },
                tooltip: {
                    trigger: "item",
                    show: false
                },
                visualMap: {
                    min: 0,
                    max: 300,
                    type: "piecewise",
                    show: false,
                    inverse: true,
                    // splitNumber: 5,
                    itemWidth: "12",
                    itemHeight: "12",
                    itemSymbol: "circle",
                    left: "5%",
                    textStyle: {
                        color: "white"
                    },
                    target: {
                        inRange: {
                            color: [],
                            symbolSize: [15, 15]
                        }
                    },
                    symbol: "circle"
                },
                geo: {
                    // 这个是重点配置区
                    map: "china", // 表示中国地图
                    roam: true,
                    silent: true,
                    z: "0",
                    scaleLimit: {
                        min: 1.8,
                        max: 1.8
                    },
                    roam: true, //开启鼠标缩放和漫游
                    zoom: 2, //地图缩放级别
                    scaleLimit: {
                        //滚轮缩放的级别
                        min: 1,
                        max: 7
                    },
                    label: {
                        normal: {
                            show: false, // 是否显示对应地名
                            textStyle: {
                                color: "#c3e5dc"
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#323c48",
                            borderWidth: 1.1,
                            borderColor: "#43d0d6"
                        },
                        emphasis: {
                            areaColor: "#069"
                        }
                    },
                    right: "100",
                    left: "auto",
                    bottom: "0"
                },
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: []
                    }
                },
                series: [
                    {
                        //控制选中
                        selectedMode: "multiple",
                        name: "",
                        type: "scatter",
                        coordinateSystem: "geo",
                        data: this.convertScatterData(this.scatterVal),
                        symbolSize: function(val) {
                            return val[1] / 10;
                        },
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "yellow"
                            }
                        }
                    }
                ]
            };
                                var lista = this.timeLineList.length;
            var listb = this.timeLineList;
            var cname;
            ChartChina.on("click", function(params) {
                if (params.componentType === "series") {
                    var provinceName = params.name;
                    $("#map_box").css("display", "block");
                    $("#box_title").html(provinceName);
                }
                cname = params.name;
                // console.log(lista);
                // console.log("the city name is " + this.cityName );
                for (let i = 0; i < listb.length; i++) {
                    if (listb[i].address == cname) {
                        //this.timeIndex = i;
                        console.log(this.timeIndex + cname);
                        break;
                    }
                }
            });

            ChartChina.setOption(optionMapa);
            window.onresize = function() {
                mapct();
                ChartChina.resize();
            };
                })
                .catch(err => {
                    console.log(err);
                });

            var that=this;


        },

        //食品安全监察模块接口
        getFoodRank(value) {
            var that = this;
            let params = { foodid: value, year: 2019 }; //调取模糊搜索接口
            https
                .fetchGet("/foodSample/api/getKnowledgeGraph", params)
                .then(response => {
                    let res = response.data;
                    let res1 = this.convertKey(res.message, [
                        "province",
                        "value"
                    ]);
                    that.data1 = res1;
                    for (let j = 0; j < that.data1.length; j++){
                        let fu = parseFloat(that.data1[j].value*100).toFixed(2);
                        that.data1[j].value = fu;
                        // console.log("the value "+)
                    }
                    if (that.data1.length < 5){
                        while (that.data1.length < 5){
                            that.data1.push({
                                province: "暂无数据",
                                value: 0
                            })
                        }
                    }
                    console.log("data1:" + JSON.stringify(this.data1));
            var myChartContainer = document.getElementById("yourChartChina");
            var MyChartContainer = function() {
                myChartContainer.style.width = "480px";
                myChartContainer.style.height = "500%";
            };
            MyChartContainer();
            var yourChartChina = this.$echarts.init(myChartContainer);

            function randomData() {
                return Math.round(Math.random() * 500);
            }

            var geoCoordMap = {
                北京: [116.46, 39.92],
                上海市: [121.48, 31.22],
                天津: [117.2, 39.13],
                重庆: ["106.54", "29.59"],
                河北: ["114.48", "38.03"],
                山西省: ["112.53", "37.87"],
                辽宁省: [123.38, 41.8],
                吉林: ["125.35", "43.88"],

                黑龙江省: [126.63, 45.75],

                浙江: ["120.19", "30.26"],

                福建: ["119.3", "26.08"],

                山东: ["106.54", "29.59"],

                河南: ["113.65", "34.76"],

                湖北: ["114.31", "30.52"],

                湖南: ["113", "28.21"],

                广东: ["113.23", "23.16"],

                海南: ["110.35", "20.02"],

                四川省: [104.06, 30.67],

                贵州: ["106.71", "26.57"],

                云南: ["102.73", "25.04"],

                江西: ["115.89", "28.68"],

                陕西: ["108.95", "34.27"],

                青海: ["101.74", "36.56"],

                甘肃: ["103.73", "36.03"],

                广西: ["106.54", "29.59"],

                新疆: ["87.68", "43.77"],

                内蒙古自治区: [111.65, 40.82],

                西藏: ["91.11", "29.97"],

                宁夏: ["106.27", "38.47"],

                台湾: ["121.5", "25.14"],

                香港: ["114.1", "22.2"],

                澳门: ["113.33", "22.13"],

                安徽: ["117.27", "31.86"],

                江苏: ["118.78", "32.04"]
            };

            // var RankData1 = [{province: "北京", value: "0.0332"}];
            var convertData = function(data1) {
                var res = [];
                for (var i = 0; i < data1.length; i++) {
                    var geoCoord = geoCoordMap[data1[i].province];
                    if (geoCoord) {
                        res.push({
                            name: data1[i].province,
                            value: geoCoord.concat(data1[i].value)
                        });
                    }
                }
                return res;
            };

            var convertedData = [
                convertData(this.data1),
                convertData(
                    this.data1
                        .sort(function(a, b) {
                            return b.value - a.value;
                        })
                        .slice(0, 6)
                )
            ];
            this.data1.sort(function(a, b) {
                return a.value - b.value;
            });

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            //   var maxBar = 30;
            var sum = 0;
            var count = this.data1.length;
            for (var i = 0; i < this.data1.length; i++) {
                categoryData.push(this.data1[i].province);
                barData.push(this.data1[i].value);
                sum += this.data1[i].value;
            }

            // 绘制图表
            var optionMap = {
                animation: true,
                animationDuration: 1000,
                animationEasing: "cubicInOut",
                animationDurationUpdate: 1000,
                animationEasingUpdate: "cubicInOut",
                roam: true, //开启鼠标缩放和漫游
                zoom: 2, //地图缩放级别
                scaleLimit: {
                    //滚轮缩放的级别
                    min: 1,
                    max: 7
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [""]
                },
                title: [
                    {
                        text: "相关食品全国主要城市抽检不合格率",
                        left: "center",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    {
                        id: "statistic",
                        // text: count
                        //     ? "抽检不合格率平均值: " +
                        //       parseInt(((sum / count)).toFixed(2)) +
                        //       "%"
                        //     : "",
                        left: 20,
                        top: 40,
                        width: 100,
                        textStyle: {
                            color: "#fff",
                            fontSize: 16
                        }
                    }
                ],
                geo: {
                    map: "china",
                    left: "50",
                    right: "50",
                    bottom: "35%",
                    top: "10%",
                    zoom: 0.3,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: "#323c48",
                            borderColor: "#43d0d6"
                        },
                        emphasis: {
                            areaColor: "#2a333d"
                        }
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter(params){
                        return params.name+":"+params.value+"%"
                    }
                },
                grid: {
                    left: 35,
                    top: "68%",
                    bottom: 40,
                    width: "90%",
                    height: "25%"
                },
                xAxis: {
                    type: "category",
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: "#ddd"
                        }
                    },
                    data: categoryData
                },
                yAxis: {
                    type: "value",
                    scale: true,
                    position: "top",
                    boundaryGap: false,
                    splitLine: {
                        show: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#ddd"
                        }
                    },
                    axisTick: {
                        show: true,
                        textStyle: {
                            color: "#ddd"
                        }
                    }
                },
                series: [
                    {
                        // name: 'pm2.5',
                        type: "scatter",
                        coordinateSystem: "geo",
                        data: convertedData[0],
                        symbolSize: function(val) {
                            return Math.max(val[2] / 10, 8);
                        },
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#ddb926",
                                position: "right",
                                show: true
                            }
                        }
                    },
                    {
                        //  name: 'Top 5',
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        data: convertedData[0],
                        symbolSize: function(val) {
                            return Math.max(val[2] / 10, 8);
                        },
                        showEffectOn: "emphasis",
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#f4e925",
                                shadowBlur: 10,
                                shadowColor: "#333"
                            }
                        },
                        zlevel: 1
                    },
                    {
                        id: "bar",
                        zlevel: 2,
                        type: "bar",
                        symbol: "none",
                        itemStyle: {
                            normal: {
                                color: "#ddb926"
                            }
                        },

                        data: this.data1
                    }
                ]
            };

            yourChartChina.setOption(optionMap);
            window.onresize = function() {
                MyChartContainer();
                yourChartChina.resize();
            };
                })
                .catch(err => {
                    console.log(err);
                });
            
        }, //根据食品id展示食品添加剂
        getFoodAddRisk(value) {
            var that = this;
            let params = { food_id: value }; //调取模糊搜索接口
            https
                .fetchGet("/kownledgeGraph/api/get_food_harm/", params)
                .then(response => {
                    let res = response.data;
                    that.zhishidata = res.message[0];
                    that.zhishiHarmdata = that.zhishidata.添加剂;
                    console.log(
                        "危害:" + JSON.stringify(this.zhishiHarmdata)
                    );
                    console.log(
                        "zhishidata:" + JSON.stringify(this.zhishidata)
                    );
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //事件搜索
        yqSearch(value) {
            document
                .getElementById("yq-search-scrollbar")
                .classList.add("closed");
            var that = this;
            let params = { eventId: value };
            //调取模糊搜索接口
            https
                .fetchGet("/kownledgeGraph/api/getsearch/", params)
                .then(response => {
                    let res = response.data;
                    that.yqsearch = res.message.nodelist;
                    console.log("yqsearch:" + JSON.stringify(res));
                })
                .catch(err => {
                    console.log(err);
                });
        },
        // check-change
        // 节点选中状态发生变化时的回调
        handleNodeClick(data) {
            console.log("fooddatas:"+JSON.stringify(data));
            this.cloudshow = false;
            this.initVis(data.food_ID);
            this.knshow = true;
            this.getFoodAddRisk(data.food_ID);
            this.getFoodRank(data.food_ID);
            /* this.getFoodDataset(data.food_ID);
            this.getEdgeDataset(data.food_ID); */
            

            console.log(data.food_ID);
            this.getFoodEvent(data.food_ID);
        },

        RetThedata() {
            let data = this.handleNodeClick();
            return data;
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
        changeActive(index) {
            this.timeIndex = index;
        },
         moveLeft() {
            let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
            let listNum = 0;
            if (this.timeLineList.length > 5) {
                if (marginLeft <= 10 && marginLeft >= -650) {
                    this.$refs.mytimeline.style.marginLeft =
                        marginLeft - 100 + "px";
                }
                if (this.timeIndex < this.timeLineList.length) {
                    this.timeIndex = this.timeIndex + 1;
                }
            } else {
                if (this.timeIndex < this.timeLineList.length) {
                    this.timeIndex = this.timeIndex + 1;
                }
            }
            console.log(this.timeIndex);
        },

        moveRight() {
            let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
            if (this.timeLineList.length > 5) {
                if (marginLeft < -200) {
                    this.$refs.mytimeline.style.marginLeft =
                        marginLeft + 100 + "px";
                }
                if (this.timeIndex > 0) {
                    this.timeIndex = this.timeIndex - 1;
                }
            } else {
                this.timeIndex = this.timeIndex - 1;
            }
            console.log(this.timeIndex + "the name " + this.cityName);
        },

        //获取知识图谱子图节点
        getFoodDataset(value) {
            var that = this;
            let params = { food_id: value };
            https
                .fetchGet("/kownledgeGraph/api/get_food_dataset/", params)
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
            let params = { food_id: value };
            https
                .fetchGet("/kownledgeGraph/api/get_food_dataset/", params)
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
        init() {
            this.getFoodName();
            (function() {
                var NavigateBar = function(elementId) {
                    this.eId = elementId || "zs-wrap";
                    this.el = document.getElementById(this.eId);
                    this.el.addEventListener("click", function(evt) {
                        evt.stopPropagation();
                    });
                    this.state = "allClosed"; //hasOpened
                    this.currentOpenedEl = null;

                    //使用jquery就更方便使用Delegation
                    var forEach = Array.prototype.forEach;
                    var self = this;
                    console.log("未开始之前的self.state:" + self.state);
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
                                currentEl.className = "zsnav-content";
                                //  currentEl.style.top = '0px';
                                currentEl.classList.add("zsmove_left");
                                console.log(
                                    "diyici开始之前的evt.currentTarget.id:" +
                                        evt.currentTarget.id
                                );
                                self.state = "hasOpened";
                                self.currentOpenedEl = currentEl;
                            } else {
                                self.currentOpenedEl.className =
                                    "zsnav-content";
                                //   self.currentOpenedEl.style.top = '0px';
                                self.currentOpenedEl.classList.add(
                                    "zsmove_right"
                                );
                                currentEl.className = "zsnav-content";
                                //    currentEl.style.top = '0px';
                                currentEl.classList.add("zsmove_left");
                                self.currentOpenedEl = currentEl;
                            }
                        });
                    });

                    var navConCloseBarList = document.querySelectorAll(
                        ".modulebox_hidebtn__QHdrj"
                    );
                    console.log("有效果吗");
                    forEach.call(navConCloseBarList, function(navConCloseBar) {
                        navConCloseBar.addEventListener("click", function(evt) {
                            var currentEl =
                                evt.currentTarget.parentNode.parentNode;

                            currentEl.className = "zsnav-content";
                            //   currentEl.style.top = '0px';
                            currentEl.classList.add("zsmove_right");
                            self.state = "allClosed";
                            var zsf = document.getElementById("zsfood");
                            var zsc = document.getElementById("zscompany");
                            var zsa = document.getElementById("zsarea");
                            zsf.classList.remove("zs-sidebar-item-active");
                            zsc.classList.remove("zs-sidebar-item-active");
                            zsa.classList.remove("zs-sidebar-item-active");
                            console.log(self, evt);
                            console.log("nihao");
                        });
                    });
                };

                NavigateBar.prototype.close = function() {
                    this.currentOpenedEl.className = "zsnav-content";
                    //   this.currentOpenedEl.style.top = '0px';
                    this.currentOpenedEl.classList.add("zsmove_right");
                    // var currentA = document.getElementById(self.eId);
                    //  currentA.classList.remove('zs-sidebar-item-active');
                    console.log("this.currentOpenedEl:" + this.currentOpenedEl);
                    this.state = "allClosed";
                };

                var navigateBar = new NavigateBar();
            })();

            $(".zs-sidebar-item").each(function(index) {
                $(this).click(function() {
                    $(this)
                        .addClass("zs-sidebar-item-active")
                        .siblings()
                        .removeClass("zs-sidebar-item-active");
                });
            });
        },
        //获取知识图谱添加剂信息
        getAdditive(food){
            var that = this;
            for (let i = 0;i < food.length;i++){
                if (food[i].group == "Additive"){
                    that.Additive.push(food[i]);
                }
            }
            console.log("添加剂："+that.Additive);
        },
        //获取当前点击添加剂名称以及在数组中的Index
        getAdditiveName(ItemId){
            var that = this;
            for (let i = 0; i < that.Additive.length;i++){
                if (ItemId == that.Additive[i].id){
                    that.currentAdditiveName = that.Additive[i].label;
                    console.log("现在的添加剂名称为: " + that.currentAdditiveName);
                    break;
                }
            }
            for (let j = 0;j < that.zhishiHarmdata.length;j++){
                if (that.zhishiHarmdata[j].添加剂名称 == that.currentAdditiveName){
                    that.currentSchIndex = j;
                    console.log("现在选中添加剂的Index是："+ that.currentSchIndex);
                    break;
                }
            }
        },
        //手动变换Index
        setActiveItem(index){
            this.$refs.Light.setActiveItem(index);
        },
        //初始化vis
        initVis(value) {
        
            let that = this;
            // 创建节点对象
            that.nodes = new vis.DataSet();
            that.edges = new vis.DataSet();
            let params = { food_id: value };
            https
                .fetchGet("/kownledgeGraph/api/get_food_dataset/", params)
                .then(response => {
                    let res = response.data;
                    that.fooddataset = res.message.nodes;
                    that.edgedataset = res.message.edges;
                    that.nodes=new vis.DataSet(that.fooddataset);
                    that.edges=new vis.DataSet(that.edgedataset);
                    //that.edges.add(that.edgedataset);
                    //that.nodes=[{"id":1765,"label_ID":"F001003","label":"小麦粉","group":"Food"},{"id":1188,"label_ID":"001","label":"粮食及制品","group":"Cate"},{"id":1302,"label_ID":"T0054","label":"溴酸钾","group":"Additive"},{"id":1311,"label_ID":"3","label":"损坏肾脏","group":"HarmDetail"},{"id":1315,"label_ID":"7","label":"致癌","group":"HarmDetail"},{"id":1429,"label_ID":"21","label":"刺激中枢神经","group":"HarmDetail"},{"id":1605,"label_ID":"7","label":"增筋","group":"EffectDetail"},{"id":1693,"label":"使用了溴酸钾的面粉和面包的一致特征是，面粉更白，制作出来的面包更具有弹性和韧性。因此，吃面条、馒头要辨别颜色。具体讲：好面粉并非越白越好，一般而言，相对黑一点的才更有营养。但这也并不是说面粉越黑越好，而是颜色要有正常色。好面条要有弹性：真正的好面条软而有弹性，不易折断，煮出的汤水不混浊。好馒头是淡黄色的：小麦粉和用其加工的食品就应该是淡黄色的，不要选购颜色太白但无亮色的馒头。","group":"Distin"}];

                    // 创建一个网络拓扑图  不要使用jquery获取元素
                    that.container = document.getElementById("network_id");
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
                                face: "Arial Black",strokeWidth:5,strokeColor:"#000000"       //new
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
                                image: "../../static/image/ico/F.png",title: 'qwq',
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
                        manipulation: {
                            enabled: true, //该属性表示可以编辑，出现编辑操作按钮
                            addNode: true,
                            addEdge: true,
                            // editNode: undefined,
                            editEdge: true,
                            deleteNode: true,
                            deleteEdge: true,
                        },
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
                    that.getAdditive(that.fooddataset);
                    console.log(
                        "fooddataset:" + JSON.stringify(this.fooddataset)
                    );
                    that.network.on("click", (params) => {
                        console.log('点击节点id ' + JSON.stringify(params.nodes));
                        that.getAdditiveName(params.nodes);
                        that.setActiveItem(that.currentSchIndex);
                    });
                    that.network.on("doubleClick", (params) => {
                        console.log('双击节点id ' + JSON.stringify(params.nodes));
                    });
                    that.network.on("dragging", (params) => {
                        console.log('拖动节点id ' + JSON.stringify(params.nodes));
                    });
                })
                .catch(err => {
                    console.log(err);
            });
            
            //that.network.on("dragStart", function (params){
                //console.log("我点击了吗");
                //console.log('点击节点 ' + this.getNodeAt(params.pointer.DOM));
                //});

            //that.network.on("click", (e) => {console.log("!!!")});

            //that.network.on("click", function (params) {
                //console.log("我点击率吗？");
                //params.event = "[original event]";
                //console.log('click event, getNodeAt returns: ' + getNodeAt(params.nodes));
        //});
        },
        
        //扩展节点 param nodes和relation集合
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
    
};
</script>

<style scoped>
@import "../../static/css/bootstrap.css";
@import "../../static/css/bootstrap.min.css";
@import "../../static/css/animate.css";
@import "../../static/css/style.css";
@import "../../static/css/zstp.css";
@import "../../static/css/jcfx.css";
@import "../../static/css/pe-icons.css";
@import "../../static/css/font-awesome-4.1.0/css/font-awesome.min.css";
#knowledge {
    width: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #343332;
}
body {
    background: #343332;
}
#network_id {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    padding-left: 60px;
}
#cloudapp {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding-left: 60px;
}
.network {
    background-color: #343332;
    width: 800px;
    height: 800px;
    /*  border: 1px solid lightgray; */
}
.gundong {
    position: absolute;
    left: 38.9em;
    top: 1em;
    width: 2.8em;
    height: 2.8em;
    border-radius: 2.8em;
    background-color: #3697d1;
    color: #fff;
    padding: 0.5em;
    cursor: pointer;
}
.tip {
    position: absolute;
    right: 60px;
    top: 18px;
    z-index: 99;
    margin: 0;
    font-size: 13px;
    color: #958a8a;
}
@-webkit-keyframes zsmove_right {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@keyframes zsmove_right {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        -webkit-transform: translateX(540px);
        transform: translateX(540px);
    }
}

@-webkit-keyframes zsmove_left {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}

@keyframes zsmove_left {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        -webkit-transform: translateX(-540px);
        transform: translateX(-540px);
    }
}
.zsmove_right {
    -webkit-animation-name: zsmove_right;
    animation-name: zsmove_right;
    -webkit-animation-duration: 1.4s;
    animation-duration: 1.4s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transition-timing-function: linear;
}

/** 模糊查询的样式*/
.yq-search-scrollbar {
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top: 55px;
    width: 17.3em;
    z-index: 999;
}
#yq-search-scrollbar.closed {
    display: none;
}

.yq-search-fuzzy {
    height: 100%;
    width: 100%;
    max-height: 280px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.yq-search-fuzzy ul {
    margin: 0;
    padding: 0;
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    margin-block-start: 1em;
    -webkit-margin-after: 1em;
    margin-block-end: 1em;
    -webkit-margin-start: 0px;
    margin-inline-start: 0px;
    -webkit-margin-end: 0px;
    margin-inline-end: 0px;
}
.yq-search-fuzzy li {
    padding: 0 20px;
    margin: 0;
    line-height: 34px;
    cursor: pointer;
    color: #606266;
    font-size: 14px;
    list-style: none;
    white-space: nowrap;
    cursor: pointer;
    text-align: left;
}
.yq-search-fuzzy li i {
    padding-right: 5px;
}
.yq-search-fuzzy li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.zsmove_left {
    -webkit-animation-name: zsmove_left;
    animation-name: zsmove_left;
    -webkit-animation-duration: 1.4s;
    animation-duration: 1.4s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transition-timing-function: linear;
}
/* 走马灯的左右切换  */
.el-carousel--horizontal {
    margin-top: 0 !important;
}
.el-carousel__arrow {
    background-color: rgba(250, 250, 249, 0.5) !important;
}
.el-carousel__item h3 {
    color: #ccc;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
    color: #fff;
    background-color: transparent;
    /* background-color: rgba(47,50,51,.78); */
}

.el-carousel__item {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
    height: auto;
}

/* .el-tree-node:focus > .el-tree-node__content {
  background-color: rgb(180, 14, 14) !important;
  color: #252525 !important;
} */
/* 
.el-tree-node__content:hover {
  background-color: #707275;


}
.el-tree-node__content {
  background-color: #707275;

} */
#zs-legend {
    position: absolute;
    width: 150px;
    margin: 0px;
    padding: 5px;
    bottom: 30px;
    right: 50px;
}
.zs-hd {
    margin-bottom: 2px;
    font-size: 14px;
    color: #fffabf;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    display: block;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    /* float: left; */
    clear: both;
    text-decoration: none;
    text-align: left;
}
.zs-hd img {
    padding-right: 3px;
}
</style>