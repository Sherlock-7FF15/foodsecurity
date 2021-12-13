<template>
    <div id="index" class="index">
        <!-- <div class="preloader">
        <div class="preloader-img">
        	<img src="../../static/image/loading-bars.svg" width="100" alt="Loading icon" />
        </div>
        </div>-->
        <!-- 插件导航 -->

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
                    <form class="form-inline my-2 my-lg-0 index-search">
                        <!-- <label for="search-food">
    					<i class="fa fa-search" aria-hidden="true"></i>
    					<input class="search-input" type="search" placeholder="请输入食品名称" autocomplete="off">
                        </label>-->
                        <!-- <ul class="search-list">
    				</ul>
                        <a class="search-btn"><i class="fa fa-location-arrow" aria-hidden="true"></i></a>-->
                    </form>
                </div>
                <v-nav style="z-index:20;"></v-nav>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>

        <!-- Header -->
        <header id="top justify">
            <div
                class="background"
                style="background:url(../../static/image/ico/food.jpg) no-repeat  center;background-size:cover;
    background-attachment:fixed;"
            ></div>
            <div class="content text-vertical-center">
                <h1>食品安全大数据可视化</h1>
                <!-- <h4>湖北大学计算机学院与信息工程学院</h4> -->
                <br />
                <!-- <a href="#about" class="btn btn-dark btn-lg"> More </a> -->
            </div>
        </header>
        <!-- <div class="background" style="background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.3),rgba(0,0,0,.1)),url(/img/bg/2.jpg);"></div> -->

        <!-- 轮播图片 -->
        <!-- <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
        </el-carousel>
        </div>-->
        <!-- About Section -->
        <section id="about-us">
            <div class="section-inner">
                <div class="container">
                    <div class="row">
                        <div class="container-fluid text-center">
                            <h2>关于我们 | About Us</h2>
                            <hr class="small" />
                            <p
                                class="about-text"
                            >该平台建设总体架构由三部分组成：食品安全舆情可视化、食品安全风险知识图谱可视化、食品安全全链条轨迹可视化。</p>
                            <p class="about-text">
                                （1）食品安全舆情可视化:
                                食品安全舆情指的是网民表现出对发生的食品安全事件所持有的社会态度。本系统从多维角度下分析食品安全事件的舆情热度、网民情感极性和关注话题的变化，展现与食品安全事件相关的风险知识图谱、食品安全全链条轨迹，获得食品安全事件所包含食品的知识图谱和抽检信息。
                            </p>
                            <p class="about-text">
                                （2）食品安全风险知识可视化:
                                根据食品安全网络大数据智能应用需求，结合食品安全风险本体库，构建一套面向食品安全事件分析的食品安全风险知识图谱，基于食品安全风险知识图谱，识别风险主题和事件，进行数据多维分析。本系统可根据用户需求展现指定食品的潜在安全风险，以及如何识别风险，进行提早预防。同时本系统和食品安全舆情可视化、食品安全全链条轨迹子系统进行交互，获得指定食品的食品安全事件和抽检信息。
                            </p>
                            <p class="about-text">
                                （3）食品安全大数据监察分析可视化:
                                本系统从多维度视角下，旨在实现食品安全监督抽检的四个覆盖——覆盖所有企业、覆盖全部区域、覆盖全部品种、覆盖全部批次。食品安全监察分析可视化从宏观角度下展示本年度全国范围内的重点食品（多次抽检不合格的食品）、重点企业（抽检合格率较低的企业）、重点区域（食品抽检合格率低的省份）；从微观角度下展示具体时间段内的一批次食品的食品安全全链条轨迹线。
                            </p>
                        </div>
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </section>
        <section id="research" class="research blue-info">
            <div class="container">
                <div class="row">
                    <div class="container-fluid text-center">
                        <h2>项目 | Items</h2>
                        <hr class="small" />
                        <el-row>
                            <el-col :span="8" class="project">
                                <el-card shadow="hover" class="card-pad">
                                    <div class="research-title">
                                        <h4>食品安全舆情可视化</h4>
                                    </div>
                                    <div class="re-content">
                                        <img
                                            src="../../static/image/ico/public.jpg"
                                            class="p-image"
                                        />
                                        <div class="re-link">
                                            <el-button
                                                type="primary"
                                                round
                                                size="mini"
                                                style="margin:30px auto;"
                                                @click="gotoPublic"
                                            >go to</el-button>
                                            <!-- <route-link to="/public">
                                            <el-button>Go to</el-button>
                                            </route-link>-->
                                        </div>
                                    </div>
                                    <div class="project content description text-justify">
                                        <div class="description">
                                            <p
                                                class="about-text"
                                            >食品安全舆情可视化分析可以从多维角度下分析食品安全事件的舆情热度、网民情感极性和关注话题的变化，展现与食品安全事件相关的风险知识图谱、食品安全全链条轨迹，获得食品安全事件所包含食品的知识图谱和抽检信息。</p>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8" class="project">
                                <el-card shadow="hover" class="card-pad">
                                    <div class="research-title">
                                        <h4>食品安全风险知识可视化</h4>
                                    </div>
                                    <div class="re-content">
                                        <img src="../../static/image/ico/kn.jpg" class="p-image" />
                                        <div class="re-link">
                                            <el-button
                                                type="primary"
                                                round
                                                size="mini"
                                                style="margin:30px auto;"
                                                @click="gotoKn"
                                            >go to</el-button>
                                            <!-- <route-link to="/public">
                                            <el-button>Go to</el-button>
                                            </route-link>-->
                                        </div>
                                    </div>
                                    <div class="project content description text-justify">
                                        <div class="description">
                                            <p
                                                class="about-text"
                                            >食品安全风险知识可视化基于食品安全网络大数据智能应用需求和食品安全风险本体库，构建了一套面向食品安全事件分析的食品安全风险知识图谱。同时可根据用户需求展现指定食品的潜在安全风险，以及如何识别风险，进行提早预防。</p>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8" class="project">
                                <el-card shadow="hover" class="card-pad">
                                    <div class="research-title">
                                        <h4>食品安全监察分析可视化</h4>
                                    </div>
                                    <div class="re-content">
                                        <img
                                            src="../../static/image/ico/sample.jpg"
                                            class="p-image"
                                        />
                                        <div class="re-link">
                                            <el-button
                                                type="primary"
                                                round
                                                size="mini"
                                                style="margin:30px auto;"
                                                @click="gotoSample"
                                            >go to</el-button>
                                            <!-- <route-link to="/public">
                                            <el-button>Go to</el-button>
                                            </route-link>-->
                                        </div>
                                    </div>
                                    <div class="project content description text-justify">
                                        <div class="description">
                                            <p
                                                class="about-text"
                                            >食品安全监察分析可视化从宏观角度下展示本年度全国范围内的重点食品（多次抽检不合格的食品）、重点企业（抽检合格率较低的企业）、重点区域（食品抽检合格率低的省份）；从微观角度下展示具体时间段内的一批次食品的食品安全全链条轨迹线。</p>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                        <!-- /.row research -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </section>
        <section id="member">
            <div class="section-inner">
                <div class="container">
                    <div class="row">
                        <div class="container-fluid">
                            <h2 class="text-center">成员 | Members</h2>
                            <hr align="center" class="small" />
                            <div class="teacher">
                                <h4 class="page-header">
                                    导师
                                    <small>Postdoctoral researcher</small>
                                </h4>
                                <div class="t-item">
                                    <div class="t-image">
                                        <img src="../../static/image/ico/person.jpg" width="100%" />
                                    </div>
                                    <div class="t-content">
                                        <h3>
                                            <b>游兰</b>
                                        </h3>
                                        <div class="meta">
                                            <span>湖北大学计算机与信息工程学院</span>
                                        </div>
                                        <div class="description">
                                            <h4>研究领域 | Research Field</h4>
                                            <p>
                                                自然语言处理、数位学习、机器翻译、自动问答系统、跨语言检索
                                                <br />Natural language processing, Digital Learning, Machine Translation, Question Answering
                                            </p>
                                            <h4>教学 | Teaching</h4>
                                            <p>
                                                ISA5621 自然语言处理习作 Natural Language Processing Lab.
                                                <br />CS6632 机器翻译 Machine Translation
                                                <br />CS5913 学术英文写作 Academic Research Writing
                                            </p>
                                            <h4>邮箱 | Email</h4>
                                            <p>yoyo@hubu.edu.cn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container-fluid">
                                <h4 class="page-header">
                                    硕士生
                                    <small>Master Students</small>
                                </h4>
                                <el-row>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/zh.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">曾晗</h4><span>2018级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为自然语言处理，擅长python语言，主要承担了舆情安全模块和多维监察模块的数据库设计、数据操作以及数据库的维护，同时负责舆情安全模块的数据来源、算法设计和实现。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/xsy.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">肖丝雨</h4><span>2018级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为知识图谱，主要承担了知识图谱模块的数据库设计，数据库的维护，同时负责知识图谱模块的模块设计，数据处理和接口设计实现。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/ty.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">田越</h4><span>2019级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为知识图谱，擅长前端开发，主要承担了项目前端的总体设计、开发和维护，同时负责多维监察模块的主页面开发和数据库设计，以及舆情分析模块的测试工作。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/zya.png"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">张雨昂</h4><span>2020级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为信息可视化，擅长java语言，参与了监察分析模块的前端设计开发、参与了知识图谱模块和监察分析模块的数据库操作，同时负责知识图谱部分的后期测试工作。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/ml.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">马力</h4><span>2020级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>擅长java后端开发，在这次项目中参与了舆情安全模块和多维监察模块的样式设计开发，同时负责知识图谱模块的后期测试工作。爱好看电影，打球以及跑步。
</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="container-fluid">
                                <h4 class="page-header">
                                    本科生
                                    <small>undergraduate students</small>
                                </h4>
                                <el-row>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/zj.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">曾婧</h4><span>2017级 &nbsp;物联网工程</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>擅长Python和前端语言，主要承担了舆情安全模块的数据爬取和前端页面设计和实现，同时参与了舆情安全模块数据库、数据结构和模块功能的设计。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/wzk.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">魏志宽</h4><span>2019级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为知识图谱，擅长前端开发，主要承担了项目前端的总体设计、框架搭建和代码维护，同时负责食品安全监察部分的主页面开发和数据库设计。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/gzy.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">管铮懿</h4><span>2018级 &nbsp;数据科学与大数据技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为知识图谱，擅长python语言，主要负责知识图谱的可视化以及食品安全知识图谱的模式设计，同时负责Neo4j数据库建立以及服务器搭建。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/zjh.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">张家合</h4><span>2019级 &nbsp;计算机技术</span>
                                                </div>
                                                <div class="description">
                                                    <p>研究方向为知识图谱，擅长前端开发，主要承担了项目前端的总体设计、框架搭建和代码维护，同时负责食品安全监察部分的主页面开发和数据库设计。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/hd.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">胡蝶</h4><span>2018级 &nbsp;数据科学与大数据技术</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>擅长前端开发，主要承担了多维监察模块中重点食品、重点企业以及重点区域的数据可视化实现，以及该模块中部分数据的添加工作，同时负责对舆情安全模块的测试工作。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="6" class="stu-project">
                                        <el-card shadow="always">
                                            <div class="blurring dimmable image content">
                                                <img
                                                    src="../../static/image/ico/zzh.jpg"
                                                    class="p-image"
                                                />
                                            </div>
                                            <div class="content description text-justify">
                                                <div class="content title">
                                                    <h4 class="stu-header">张子豪</h4><span>2017级 &nbsp;软件工程</span>
                                                </div>
                                                <div class="stu-description">
                                                    <p>研究方向为数据挖掘与自然语言处理，擅长python开发。在本课题中负责多维监察模块的数据库设计以及知识图谱模块的数据获取，主要完成了监察模块的前端开发工作。</p>
                                                </div>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-lg-offset-1 text-center">
                        <p class="text-muted">Copyright © hubu. 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
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
import Nav from '@/components/Nav.vue'
export default {
  name: 'Index',
  components: {
      'v-nav': Nav
  },
  methods: {
      gotoPublic() {
          this.$router.push({
                    path: 'public',
                    // name: 'mallList',
               })
      },
      gotoSample() {
          this.$router.push({
                    path: 'control',
                    // name: 'mallList',
               })
      },
      gotoKn() {
          this.$router.push({
                    path: 'knowledge',
                    // name: 'mallList',
               })
      },
  }
}
</script>

<style scope>
@import "../../static/css/bootstrap.css";
@import "../../static/css/bootstrap.min.css";
@import "../../static/css/animate.css";
@import "../../static/css/style.css";
@import "../../static/css/pe-icons.css";
@import "../../static/css/font-awesome-4.1.0/css/font-awesome.min.css";
#index {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f6f6f6;
}
.map-overlay {
    font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
    position: absolute;
    width: 25%;
    top: 0;
    left: 0;
    padding: 10px;
}

.map-overlay .map-overlay-inner {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
}

.map-overlay h2 {
    line-height: 24px;
    display: block;
    margin: 0 0 10px;
}

.map-overlay .legend .bar {
    height: 10px;
    width: 100%;
    background: linear-gradient(to right, #fca107, #7f3121);
}

.map-overlay input {
    background-color: transparent;
    display: inline-block;
    width: 100%;
    position: relative;
    margin: 0;
    cursor: ew-resize;
}
.block,
.el-carousel--horizontal {
    margin-top: 50px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.mapboxgl-ctrl-top-right {
    bottom: 0 !important;
}
#knowledge .mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass {
    display: none !important;
}
.project {
    padding: 20px;
}
.stu-project {
    padding: 10px;
}
hr {
    text-align: center;
}
hr.small {
    max-width: 100px;
    text-align: center;
    margin: 10px auto;
}
.t-item {
    margin: 10px 0;
    text-align: left;
    width: 80%;
}
.t-image {
    padding: 20px;
    border-radius: 10px;
    width: 46%;
    float: left;
}
.t-content {
    width: 46%;
    display: inline-block;
}
.card-pad {
    padding: 0px;
}
.card-pad .el-card_body {
    padding: 0px;
}
.re-content {
    width: 100%;
    display: block;
    padding: 0 10px;
    height: 110px;
}
.re-content:hover .re-link {
    opacity: 1;
}
.p-image:hover {
    cursor: pointer;
}
.re-link {
    position: relative;
    bottom: 110px;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.35);
    text-align: center;
    box-sizing: border-box;
    transition: 0.3s;
    opacity: 0;
}
.p-image {
    width: 100%;
}
.research-title {
    padding: 10px auto;
}
.about-text {
    text-indent: 25px;
}
.page-header {
    font-weight: 700;
    text-align: left;
}
.stu-header {
    font-weight: 700;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
    padding: auto 20px;
}
.stu-description {
    min-height: 150px;
}
.text-vertical-center {
    padding: 20% 0;
}
</style>
