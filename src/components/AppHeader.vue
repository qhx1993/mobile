<template>
  <div class="header">
    <el-button @click="drawer = true" class="btn" icon="el-icon-menu" circle></el-button>
    <el-drawer
      :visible.sync="drawer"
      direction="ltr"
      :show-close="false"
      size="60%">
      <div class="menu-icon">
        <span class="iconfont icon-xingzhuang "></span>
      </div>
      <ul>
        <li><a>风格迁移</a></li>
        <li><a>图像超分辨率</a></li>
        <li><a>站点统计</a></li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .header {
    position: absolute;
    top: 0;
    z-index: 999;
  }
  .header .btn {
    background: none;
    border: none;
    color: #909399;
    font-size: 30px;
    padding: 0 !important;
    height: 48px;
    width: 48px;
    margin-top: 12px;
    margin-left: 12px;
  }
  .header .btn:hover {
    background: none;
    border: none;
    color: #606266;
  }
  .el-drawer {
    background: #000 !important;
  }
  .el-drawer i {
    font-size: 30px;
  }
  .el-drawer ul {
    color: #fff;
    list-style: none;
    padding: 0 30px;
  }
  .el-drawer ul li {
    height: 44px;
    line-height: 44px;
  }
  .el-drawer ul li:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #282828;
  }
  .el-drawer .menu-icon {
    text-align: center;
    margin: 40px 0 30px 0;
  }
  .menu-icon span{
    color: #fff;
    font-size: 44px;
  }
</style>
