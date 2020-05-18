<template>
  <div id="header">
    <div class="w">
      <div class="header_top">
        <p>欢迎您！进入中企世博官网</p>
        <p>服务热线<span>6666-8888</span></p>
      </div>
      <div class="header_bottom">
        <div class="header_logo">
          <img src="../../assets/img/logo.png" />
        </div>
        <nav>
          <ul class="navbar">
            <li>
              <router-link to="/">首&nbsp;&nbsp;&nbsp;&nbsp;页</router-link>
            </li>
            <li v-for="item in tabitems">
              <router-link :to="{path:item.path}">{{item.name}}
                <i><img :src="url1"/></i>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        nowIndex: 0,
        dropdownActive: false,
        tabitems:[
          // {name:"首页",path:"/home"},
          {
            name:"客户服务",
            path:"/customer",
            children:[
              "创意视频",
              "品牌战略",
              "网站建设",
              "展会服务"
            ]
          },
          {name:"新闻中心",path:"/news"},
          {name:"战略合作",path:"/hezuo"},
          {name:"集团风采",path:"/meil"}
        ],
        url1:require("../../assets/img/下拉键灰.png")
      }
    }
  }
</script>

<style>
  #header {
    width: 100%;
    height: 109px;
    /* background-color: red; */
  }

  #header .header_top {
    padding-top: 3px;
    display: flex;
    justify-content: space-between;
  }

  #header .header_top p {
    font-size: 6px;
    color: #666666;
  }

  #header .header_top p span {
    font-size: 7px;
    color: #204066;
    font-weight: bold;
  }
  #header .header_bottom {
    width: 1200px;
    height: 49px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  #header .header_bottom .navbar {
    width: 573px;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown{
    position: absolute;
  }
</style>
