<template>
  <div id="footer">
    <div class="footer_center w">
      <div class="footer_group">
        <div class="footer_item" v-for="(titleList,index) in textList" :key="index">
          <p>{{titleList.name}}</p>
          <span v-for="itemInfo in titleList.children">{{itemInfo.name}}</span>
        </div>
      </div>
      <div class="contact">
        <div class="contact_l">
          <p>联系我们</p>
          <span>电话：010-69235235</span>
          <span>邮箱：010-69235235</span>
          <div class="address">
            <p class="address_t">地址</p>
            <span class="address_info">北京大兴区滨河路27号</span>
          </div>
        </div>
        <div class="contact_r">
          <img src="../../assets/img/二维码.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'footer',
    data() {
      return {
        textList: [
          {
            name: "中企世博",
            children: [
              {
                id: 1,
                name: "关于我们",
                link: "/"
              },
              {
                id: 1,
                name: "企业动态",
                link: "/"
              },
              {
                id: 1,
                name: "合作伙伴",
                link: "/"
              }
            ]
          },
          {
            name: "中企产业",
            children: [
              {
                id: 1,
                name: "境外展会",
                link: "/"
              },
              {
                id: 1,
                name: "国内展会",
                link: "/"
              },
              {
                id: 1,
                name: "数字展览",
                link: "/"
              },
              {
                id: 1,
                name: "360商城",
                link: "/"
              },
              {
                id: 1,
                name: "全球搜",
                link: "/"
              },
              {
                id: 1,
                name: "360人资",
                link: "/"
              },
              {
                id: 1,
                name: "跨境通",
                link: "/"
              },
              {
                id: 1,
                name: "爱采购",
                link: "/"
              }
            ]
          },
          {
            name: "集团风采",
            children: [
              {
                id: 1,
                name: "政府支持",
                link: "/"
              },
              {
                id: 1,
                name: "世博大学",
                link: "/"
              },
              {
                id: 1,
                name: "中企月刊",
                link: "/"
              }
            ]
          },
          {
            name: "加入我们",
            children: [
              {
                id: 1,
                name: "校园加盟",
                link: "/"
              },
              {
                id: 1,
                name: "社会招聘",
                link: "/"
              },
              {
                id: 1,
                name: "企业文化",
                link: "/"
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  #footer{
    width:100%;
    height:577px;
    background:rgba(34,41,52,1);
    padding-top: 91px;
  }
  #footer .footer_center{
    height: auto;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
  }
  #footer .footer_center .footer_group{
    width: 619px;
    /* background-color: green; */
    justify-content: space-between;
    display: flex;
  }
  #footer .footer_center .footer_group .footer_item{
    display: flex;
    flex-direction: column;
  }
  #footer .footer_center .footer_group .footer_item p{
    margin-bottom: 25px;
    color: #FFFFFF;
  }
  #footer .footer_center .footer_group .footer_item span{
    margin-bottom: 25px;
    font-size: 14px;
    color: #FFFFFF;
  }
  #footer .footer_center .contact{
    /* background-color: pink; */
    width: 453px;
    display: flex;
    justify-content: space-between;
  }
  #footer .footer_center .contact .contact_l p{
    margin-bottom: 25px;
    color: #FFFFFF;
    font-weight: bold;
  }
  #footer .footer_center .contact .contact_l span{
    display: block;
    font-size: 14px;
    color: #FFFFFF;
  }
  .address_t{
    margin-top: 25px;
    font-weight: bold;
  }
  .address_info{
    margin-top: -20px;
  }
  .contact_r{
    margin-top: 38px;
  }
  .contact_r img{
    width: 223px;
    height: 140px;
  }
</style>
