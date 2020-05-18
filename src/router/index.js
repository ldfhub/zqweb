import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Index = () =>import("@/views/index.vue")
const SubSidy = () =>import("../views/subsidy.vue")
const SubsidyDeatil = () =>import("../views/subsidydeatil.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"home",
      component:Index
    },
    {
      path:'/hezuo',
      name:"subsidy",
      component:SubSidy
    },
    {
      path:'/news',
      name:"SubsidyDeatil",
      component:SubsidyDeatil
    }
  ],
  mode:'history'
})
