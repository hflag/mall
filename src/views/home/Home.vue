<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <my-swipe :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import MySwipe from 'components/common/swipe/MySwipe'
    import RecommendView from "./childComps/RecommendView";
    import {getHomeMultiData} from "../../network/home";

    export default {
        name: "Home",
        data() {
            return {
                banners: [],
                recommends: [],
            }
        },
        components: {
            RecommendView,
            NavBar,
            MySwipe
        },
        mounted() {
            getHomeMultiData().then(res => {
                this.recommends = res.data.data.recommend.list
                this.banners = res.data.data.banner.list
            })
        }
    }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
