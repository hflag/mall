<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUP="loadMore"
            >
      <my-swipe :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-command class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <goods-list :goods="goods[currentType].list" @imageLoaded="imageLoadCompleted"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>

  </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import MySwipe from 'components/common/swipe/MySwipe'
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";
    import TabCommand from "components/content/TabCommand";
    import GoodsList from "components/content/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/content/backTop/BackTop";

    import {getHomeMultiData, getHomeGoods} from "network/home";
    import {debounce} from "../../common/utils";


    export default {
        name: "Home",
        data() {
            return {
                banners: [],
                recommends: [],
                titles:[],
                goods:{
                    'pop':{page:0, list:[]},
                    'new':{page:0, list:[]},
                    'sell':{page:0, list:[]},
                },
                currentType:'pop',
                isShow:false
            }
        },
        components: {
            BackTop,
            Scroll,
            GoodsList,
            FeatureView,
            RecommendView,
            NavBar,
            MySwipe,
            TabCommand
        },
        created() {
            // 1.获取首页banners和recommends
            this.homeMultiData()

            // 2. 获取首页商品数据
            this.homeGoods('pop')
            this.homeGoods('new')
            this.homeGoods('sell')

            // 3. 监听item中图片加载完成

            // this.$bus.$on('itemImageLoad', ()=>{
            //     console.log('hello');
            //     this.$refs.scroll.refreshed()
            // })

        },
        mounted() {
            // 3. 监听item中图片加载完成
            const refresh = debounce(this.$refs.scroll.refreshed, 500)

            this.$bus.$on('itemImageLoad', () => {
                refresh()
            })
        },
        methods:{
            /*
            网络请求
             */
            homeMultiData() {
                getHomeMultiData().then(res => {
                    this.recommends = res.data.data.recommend.list
                    this.banners = res.data.data.banner.list
                })
            },
            homeGoods(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res=>{
                    this.goods[type].list.push(...res.data.data.list)
                    // this.goods[type].list = this.goods[type].list.concat(res.data.data.list)

                    this.goods[type].page += 1

                    this.$refs.scroll.finishedPullUp()
                })
            },
            /*
            事件监听
             */
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'

                }
            },
            backClick(){
                this.$refs.scroll.scrollXY(0, -44, 500)
            },
            contentScroll(pos){
                if(pos.y<-1000){
                    this.isShow=true
                }else{
                    this.isShow=false
                }
            },
            loadMore(){
                this.homeGoods(this.currentType)
                // console.log('loadMore');
            },
            imageLoadCompleted(){
                console.log('imageLoaded');
            },
            // 防抖函数
            // debounce(func, delay){
            //   let timer = null
            //   return function (...args) {
            //       if(timer) clearTimeout(timer)
            //       timer = setTimeout(()=>{
            //         func.apply(this, args)
            //       },delay)
            //   }
            // }

        },

    }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    position: fixed;
    top:0;
    left: 0;
    right:0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
    z-index: 9;
  }
  /*.content{*/
  /*  height:calc(100vh - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0;
    right:0;
    overflow: hidden;
  }
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
</style>
