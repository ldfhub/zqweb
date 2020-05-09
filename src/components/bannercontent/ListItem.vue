<template>
  <div class="list-item" @click="Change()">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name:'ListItem',
    methods:{
    	Change(){
    		this.$router.replace(this.path)
    	}
    }
  }
</script>

<style>
  .list-item{
    display: flex;
    align-items: center;
    width: 270px;
    height: 73px;
  }
  .list-item img{
    margin: 0px 20px;

  }
</style>
