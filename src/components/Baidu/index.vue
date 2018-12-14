<template>
  <div id="desktop-map"></div>
</template>

<script>
import BMap from 'BMap'

let map
export default {
  name: 'BaiduMap',
  props: {
    'longitude': Number,
    'latitude': Number,
    dragAndZoom: Function
  },
  methods: {
    map() {
      map = new BMap.Map('desktop-map')// 创建Map实例
      map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15)// 初始化地图,设置中心点坐标和地图级别
      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      const traffic = new BMap.TrafficLayer() // 创建交通流量图层实例
      map.addTileLayer(traffic)
      map.addEventListener('dragend', function() {

      })
      map.addEventListener('zoomend', function() {

      })
    },
    toCenter() {
      map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15)// 初始化地图,设置中心点坐标和地图级别
    },
    getBounds() {
      return map.getBounds()
    },
    getMap() {
      return map
    },
    addOverlay(point) {
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation(2) // 跳动的动画
    }
  },
  mounted() {
    this.map()
  }
}
</script>

<style scoped>
  #desktop-map{
     height:calc(100vh - 134px)
  }
</style>
