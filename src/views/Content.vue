<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">

      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab: any, event: any) {
      console.log(tab, event);
    },
  },
});
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__nav {
  .el-tabs__item {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    color: #f6f6f6;
    background-color: #409EFF;
    border: 3px solid #000;
  }
}
</style>

<style lang="scss">

</style>