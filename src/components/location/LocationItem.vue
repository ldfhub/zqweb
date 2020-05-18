<template>
  <div class="location_item" @click="imglink()">
    <slot name="location_img"></slot>
    <slot name="location_font"></slot>
  </div>
</template>

<script>
  export default {
    name:"LocaionItetm",
    props:{
      path:String
    },
    methods:{
      imglink(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  
</style>
