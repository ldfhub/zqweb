<template>
  <div id="content">
    <div class="content_center">
      <div class="content_l">
        <p>产品服务</p>
        <div class="list-group">
          <list-group>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/国外展会.png" /></i>
              <div slot="item-text">国外展会</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/国内展会.png" /></i>
              <div slot="item-text">国内展会</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/360商城.png" /></i>
              <div slot="item-text">360商城</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/数字展览.png" /></i>
              <div slot="item-text">数字展览</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/爱采购.png" /></i>
              <div slot="item-text">爱采购</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/360人资.png" /></i>
              <div slot="item-text">360人资</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/全球搜.png" /></i>
              <div slot="item-text">全球搜</div>
            </list-item>
            <list-item path="/category">
              <i slot="item-icon"><img src="../../assets/img/品牌战略.png" /></i>
              <div slot="item-text">品牌战略</div>
            </list-item>
          </list-group>
        </div>
      </div>
      <div class="content_r">
        <banner-swiper></banner-swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import ListGroup from "./ListGroup.vue"
  import ListItem from "./ListItem.vue"
  import BannerSwiper from "./BannerSwiper.vue"
  export default {
    name:'content',
    components:{
      ListGroup,
      ListItem,
      BannerSwiper
    }
  }
</script>

<style scoped="scoped">
  #content{
    width: 100%;
    height: 722px;
    background-color: #12D8FA;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #content .content_center{
    width: 1200px;
    height: 640px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
  }
  #content .content_center .content_l{
    width: 270px;
    height: 640px;
    background-color: #ffffff;
  }
  #content .content_center .content_l p{
    padding: 19px 186px 15px 20px;
    border-bottom: 1px solid #EBEBEB;
    font-size: 14px;
    font-family:"Microsoft YaHei";
  }
  #content .content_center .content_l .list-group{
    width: 270px;
    height: 586px;
  }
  .list-group .list-item div{
    color: #333333;
  }
  #content .content_center .content_r{
    width: 930px;
    height: 640px;
  }
 .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .swiper-pagination-bullet-active {
    background: rgb(235,111,111);
    width: 25px !important;
  }

</style>
