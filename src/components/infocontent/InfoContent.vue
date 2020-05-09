<template>
  <div id="info_content">
    <div class="w">
      <div class="info_content_line1">
        <info-group>
          <info-item v-for="line in dataList" :key="line.title">
            <div slot="item-img">
              <img :src="line.img" />
            </div>
            <div slot="item-text">
              <span>{{line.title}}</span>
              <p>{{line.contain}}</p>
            </div>
            <div slot="item-button">
               <div class="button">{{line.base}}</div>
            </div>
          </info-item>
        </info-group>
      </div>

      <div class="info_content_line1 line2">
        <info-group>
          <info-item v-for="info in titleList" :key="info.title">
            <div slot="item-img">
              <img :src="info.img" />
            </div>
            <div slot="item-text">
              <span>{{info.title}}</span>
              <p>{{info.contain}}</p>
            </div>
            <div slot="item-button">
               <div class="button">{{info.base}}</div>
            </div>
          </info-item>
        </info-group>
      </div>
    </div>
    <div id="content_bottom">
      <img src="../../assets/img/xiaobanner.png" />
      <div class="bottom_join">欢迎加盟</div>
    </div>
  </div>
</template>

<script>
  import InfoGroup from "./InfoGroup.vue"
  import InfoItem from "./InfoItem.vue"
  export default {
    name:'InfoContent',
    data(){
      return {
        dataList: [
          {
            img: require("../../assets/img/pic.jpg"),
            title: "国外展会",
            contain: "搭建中小企业走向世界的桥梁",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "国内展会",
            contain: "构建会展综合服务链",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "数字展览",
            contain: "云参展、云观展一站式服务",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "360商城",
            contain: "进出口展品交易商城",
            base: "lEARN MORE"
          }
        ],
        titleList: [
          {
            img: require("../../assets/img/pic.jpg"),
            title: "全球搜",
            contain: "企业网站定制化建设",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "360人资",
            contain: "传承世博大学智慧和文化",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "品牌战略",
            contain: "品牌综合体系构建者",
            base: "lEARN MORE"
          },
          {
            img: require("../../assets/img/pic.jpg"),
            title: "爱采购",
            contain: "生意从此做起",
            base: "lEARN MORE"
          }
        ]
      }
    },
    components:{
      InfoGroup,
      InfoItem
    }
  }
</script>

<style scoped="scoped">
  #info_content{
    margin-top: 76px;
  }
  #info_content .info_content_line1 #info_group{
    display: flex;
    justify-content: space-between;
  }
  #info_content .info_content_line1 #info_group #info_item{
    /* background-color: red; */
    width: 285px;
    height: 498px;
    text-align: center;
  }
  #info_content .line2{
    margin-top: 50px;
  }
  #info_item span{
    margin-top: 10px;
    width:80px;
    font-size: 20px;
    color: #333333;
  }
  #info_item p{
    margin-top: 10px;
    color: #666666;
  }
  #info_item .button{
    line-height: 56px;
    display: inline-block;
    margin-top: 25px;
    color: #2C8FFE;
    width:150px;
    height:56px;
    border:1px solid rgba(44,143,254,1);
  }
  #content_bottom{
    text-align: center;
    width:100%;
    height:250px;
    position: relative;
  }
  #content_bottom img{
    width: 100%;
    height:250px;
  }
  #content_bottom .bottom_join{
    position: absolute;
    top: 172px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 44px;
    background-color: #FFFFFF;
    color: #2C8FFE;
    line-height: 44px;
    text-align: center;
  }
</style>
