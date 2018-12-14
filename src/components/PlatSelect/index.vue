<template>
  <el-dropdown trigger="click" class='international' @command="handleSetPlat">
    <div>
      <svg-icon class-name='international-icon' icon-class="list" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="police" :disabled="plat==='police'">电子警察</el-dropdown-item>
      <el-dropdown-item command="hdvm" :disabled="plat==='hdvm'">高清平台</el-dropdown-item>
      <el-dropdown-item command="guide" :disabled="plat==='guide'">交通诱导</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      plat: 'police'
    }
  },
  methods: {
    handleSetPlat(plat) {
      console.log(store)
      this.plat = plat
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>


