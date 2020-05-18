<template>
  <div id="Location_content">
    <location-group>
      <location-item v-for="(item,index) in lineOne" :path="item.path" :key="index">
        <img :src="item.url" slot="location_img"/>
        <p slot="location_font">{{item.city}}</p>
      </location-item>
    </location-group>

    <location-group>
      <location-item v-for="(item,index) in lineTwo" :path="item.path" :key="index">
        <img :src="item.url" slot="location_img"/>
        <p slot="location_font">{{item.city}}</p>
      </location-item>
    </location-group>
  </div>
</template>

<script>
  import LocationGroup from "./LocationGroup.vue"
  import LocationItem from "./LocationItem.vue"
  export default {
    name:'LocationContent',
    data(){
      return{
        lineOne:[
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"}
        ],
        lineTwo:[
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"},
          {path:"/",url:require("../../assets/img/2.png"),city:"杭州"}
        ]
      }
    },
    components:{
      LocationGroup,
      LocationItem
    }
  }
</script>

<style scoped="scoped">
 #Location_content .locationgroup{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .location_item{
    position: relative;
  }
  .location_item img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  .location_item p{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
  }
</style>
