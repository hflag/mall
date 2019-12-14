<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <my-swipe :banners="banners"/>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import MySwipe from 'components/common/swipe/MySwipe'

  import {getHomeMultiData} from "../../network/home";

  export default {
    name: "Home",
    data(){
      return {
        banners:[]
      }
    },
    components:{
      NavBar,
      MySwipe
    },
    mounted() {
      getHomeMultiData().then(res=>{
        this.banners = res.data.data.banner.list
      })
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
