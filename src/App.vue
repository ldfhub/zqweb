<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  }
</script>

<style>
  /* 引入样式 */
  @import url("./assets/css/base.css");
  #app{
    width: 100%;
    height: 100%;
  }
</style>
