<template>
  <div class="dashboard-editor-container">
    <baidu-map ref="map" :longitude="114.569966" :latitude="38.046607"></baidu-map>
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div>
          <el-col :span="2" class="text-center">
            <el-button class="pan-btn blue-btn" @click="toCenter">地图中心</el-button>
          </el-col>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import BaiduMap from '@/components/Baidu'
let map
export default {
  name: 'dashboard-admin',
  components: { BaiduMap },
  data() {
    return {
      currentHeight: '0px'
    }
  },
  methods: {
    toCenter() {
      map.toCenter()
      const point = map.getBounds().getSouthWest()
      map.addOverlay(point)
    }
  },
  mounted() {
    map = this.$refs.map
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
