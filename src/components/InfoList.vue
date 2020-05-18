<template>
  <div class="infolist">
    <ul>
      <li @mouseover="mouseOver(index)" 
          @mouseleave="mouseLeave()" v-for="(List,index) in InfoList" :key="index" 
          :class="currentidx==index?'active':''" >
        <p>{{List.info}}</p>
        <span>{{List.time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"infoList",
    data(){
      return{
        currentidx:null,
        InfoList:[
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"},
          {info:" 商务部关于2017年外经贸发展专项资金有关工作的通知",time:"2020-2-23"}
        ]
      }
    },
    methods:{
      mouseOver(index){
        this.currentidx = index
      },
      mouseLeave(){
        this.currentidx = null
      }
    }
  }
</script>

<style scoped="scoped">
  .infolist ul li{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .active{
    color: #2C8FFE;
  }
</style>
