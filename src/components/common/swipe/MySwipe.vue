<template>
    <mt-swipe :auto="4000">
      <!--<mt-swipe-item class="slide1">1</mt-swipe-item>-->
      <!--<mt-swipe-item class="slide2">2</mt-swipe-item>-->
      <mt-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  export default {
    name: "MySwipe",
    props: {
      banners: Array
    }
  }
</script>

<style scoped>
  .mint-swipe {
    margin-top: 44px;
    height: 150px;
  }

  .mint-swipe-item img {
    height: 150px;
    width: 100%;
  }
</style>
