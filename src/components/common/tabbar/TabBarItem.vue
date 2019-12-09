<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"/></div>
    <div v-else><slot name="item-active-icon"/></div>
    <div :style="isActive?{color:activeColor}:{}"><slot name="item-text"/></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
        // isActive: false,
      }
    },
    props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
        }
    },
    computed:{
      isActive(){
        return this.$route.path == this.path
      }
    },
    methods:{
      itemClick(){
        if(this.$route.path != this.path){
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
  }

  /*.active {*/
    /*color: red;*/
  /*}*/
</style>
