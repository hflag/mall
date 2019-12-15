<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <my-swipe :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-command class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
    <goods-list :goods="goods[currentType].list"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
    </ul>
  </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    import MySwipe from 'components/common/swipe/MySwipe'
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";
    import TabCommand from "components/content/TabCommand";
    import GoodsList from "../../components/content/goods/GoodsList";
    // import GoodsListItem from "../../components/content/goods/GoodsListItem";

    import {getHomeMultiData, getHomeGoods} from "network/home";

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
                currentType:'pop'
            }
        },
        components: {
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
                let page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res=>{
                    this.goods[type].list.push(...res.data.data.list)
                    // this.goods[type].list = this.goods[type].list.concat(res.data.data.list)

                    this.goods[type].page += 1
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
            }

        },
        mounted() {

        }
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
</style>
