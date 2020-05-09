<template>
  <div id="swiper_list">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide :key="banner.url" v-for="banner in banners">
        <img :src="banner.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name:'BannerSwiper',
    components:{
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        banners:[
          {url:require("../../assets/img/banner.png")},
          {url:require("../../assets/img/banner.png")},
          {url:require("../../assets/img/banner.png")}
        ],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 'auto',
          centeredSlides:true,
          spaceBetween: 10,
          loop:true,
          speed:600,
          autoplay:true
          
        }
      }
    }
  }
</script>

<style scoped="scoped">
  #swiper_list{
    width: 930px;
    height: 640px;
  }
  .swiper-container .swiper-wrapper .swiper-slide{
    width: 930px;
    height: 640px;
  }
  .swiper-pagination{
    text-align: left;
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
