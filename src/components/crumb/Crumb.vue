<template>
  <div id="crumb">
    <div class="crumb-nav w">
      <crumb-content>
        <p slot='current'>{{current}}</p>
        <span slot='position'>{{message}}</span>
      </crumb-content>
    </div>
  </div>
</template>

<script>
  import CrumbContent from './CrumbContent.vue'
  export default {
    name:'Crumb',
    props:['current','message'],
    data(){
      return{
        // current:"当前位置：首页>",
        // message:"政府支持"
      }
    },
    components:{
      CrumbContent
    }
  }
</script>

<style scoped="scoped">
  #crumb{
    width: 100%;
    background-color: #F4F5FB;
  }
  #crumb .crumb-nav{
    height: 31px;
    line-height: 31px;
    font-size: 7px;
    font-weight: 400;
    height: 31px;
    color: #333333;
  }
  #crumb .crumb-nav p{
    display: inline-block;
  }
  #crumb .crumb-nav span{
    color: #2C8FFE;
  }
</style>
