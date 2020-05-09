<template>
  <div id="app">
    <Header></Header>
    <banner-content></banner-content>
    <info-content></info-content>
    <Footer></Footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "./components/header/header.vue"
import BannerContent from "./components/bannercontent/BannerContent.vue"
import InfoContent from "./components/infocontent/InfoContent.vue"
import Footer from "./components/footer/footer.vue"
export default {
  name: 'App',
  components:{
    Header,
    BannerContent,
    InfoContent,
    Footer
  }
}
</script>

<style>
  /* 引入样式 */
  @import url("./assets/css/base.css");
</style>
