<template>
  <div id="subsidy">
    <Header></Header>
    <Crumb :current="crumbcurrent" :message="crumbmessage"></Crumb>
    <div class="banner">
      <img src="../assets/img/政府补贴banner.png" />
    </div>
    <div id="content">
      <div class="w">
        <div class="content_top">
          <p>企业补助</p>
          <span>SUBSIDY</span>
        </div>
        <div class="img_list">
          <location-content></location-content>
        </div>
        <div class="list_item clearfix" v-show="isshow">
          <ul>
            <li class="li_item" v-for="(item,index) in this.ListItem">{{item}}</li>
          </ul>
        </div>
        <div class="btn" @click="btnPull()">
          {{CityName}}
          <img src="../assets/img/下拉键灰.png" />
        </div>
      </div>
    </div>
    <div class="process">
      <div class="process_font">
        <p>补贴流程</p>
        <span>PROCESS</span>
      </div>
      <img src="../assets/img/补贴方案.png" />
      <div class="process_font">
        <p>政府补贴资讯</p>
        <span>INFORMANTION</span>
      </div>
    </div>
    <info-list class="w"></info-list>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header/header.vue'
  import Crumb from '../components/crumb/Crumb.vue'
  import LocationContent from '../components/location/LocationContent.vue'
  import InfoList from '../components/InfoList.vue'
  import Footer from '../components/footer/footer.vue'
  export default {
    name:'SubSidy',
    components:{
      Header,
      Crumb,
      LocationContent,
      InfoList,
      Footer
    },
    data(){
      return{
        crumbcurrent:"当前位置：首页>",
        crumbmessage:"政府支持",
        isshow:false,
        CityName:"查看更多城市",
        ListItem:[
          "北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京",
          "北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京",
          "北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京","北京",
          "北京"
        ]
      }
    },
    methods:{
      btnPull(){
        if(this.isshow==false){
          this.isshow=true;
          this.CityName="收起"
        }else{
          this.isshow=false;
          this.CityName="查看更多城市"
        }
      }
    }
  }
</script>

<style scoped="scoped">
  #content{
    background-color: #F4F5FB;
    padding-top: 32px;
  }
  #content .content_top{
    width: 134px;
    height: 53px;
    margin: 20px auto;
    text-align: center;
  }
  #content .content_top p{
    width:136px;
    height:43px;
    font-size:34px;
    font-weight:400;
    color:rgba(51,51,51,1);
    color: #333333;
  }
  #content .content_top span{
    width:59px;
    height:14px;
    font-size:14px;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  .clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
   }
  .clearfix{
    *zoom: 1;
  }
  .list_item ul .li_item{
    width: 64px;
    height: 20px;
    line-height: 20px;
    color: #333333;
    list-style: none;
    float: left;
    margin: 20px 50px 0px 0px;
  }
  .btn{
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }
  .progress{
    width: 100%;
    height: auto;
  }
  .progress img{
    width: 1914px;
    height: 289px;
  }
  .process_font{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 230px;
    height: 70px;
    text-align: center;
    margin: 40px auto;
  }
  .process_font p{
    font-size: 34px;
    color: #000000;
    font-weight: 400;
  }
  .process_font span{
    color:rgba(51,51,51,1);
    font-weight: 400;
    font-size: 14px;
  }
</style>
