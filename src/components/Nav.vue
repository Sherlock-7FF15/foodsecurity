<template>
  <div id="nav">
      <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal">
        <!-- 开启菜单中的router=true之后，点击菜单会把index作为路由跳转路径 -->
        <el-menu-item index="/">
          首页
        </el-menu-item>
        <el-menu-item index="/public">
          舆情安全
        </el-menu-item>
        <el-menu-item index="/knowledge">
         知识图谱
        </el-menu-item>
        <el-menu-item index="/control">
          多维监察
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeIndex: '/'
    }
  },
  methods: {
  },
  mounted() {
    let path = this.$route.path;
  },
}
</script>

<style scope>
#nav {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 10px; */
}
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 60px;
}
#nav .el-menu {
  background: transparent;
  border: none;
}
#nav .el-menu.el-menu--horizontal {
 /* float: right;
  margin-right: 1.5em; */
  position: absolute;
  top: 1em;
  right: 1.5em;
}
#nav .el-menu--horizontal>.el-menu-item {
  height: 40px;
  line-height: 40px;
  background: #fff;
  color: #12507f;
  margin-left: 8px;
  padding: 0 15px;
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 1.5px 3px rgba(0,0,0,.25);
}
#nav>.el-menu--horizontal>.el-menu-item.is-active{
  /* border-right: 2px solid #409EFF;
  border-bottom: 4px solid #409EFF; */
  border-bottom: none;
  background: #3697d1;
  color: #fff;
  font-weight: bold;
}
</style>
