<template>
  <div id="index">
    <Header></Header>
    <banner-content></banner-content>
    <info-content></info-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header/header.vue"
import BannerContent from "../components/bannercontent/BannerContent.vue"
import InfoContent from "../components/infocontent/InfoContent.vue"
import Footer from "../components/footer/footer.vue"
export default {
  name: '',
  components:{
    Header,
    BannerContent,
    InfoContent,
    Footer
  }
}
</script>

<style>
</style>
