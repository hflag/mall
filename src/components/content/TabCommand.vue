<template>
    <div class="tab-command">
      <div v-for="(item, index) in titles" class="tab-command-item" :class="{activeColor: index==currentItem}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabCommand",
        data(){
          return{
              currentItem: 0
          }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            itemClick(index){
                this.currentItem = index
            }
        }
    }
</script>

<style scoped>
  .tab-command {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-command-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-command-item span{
    padding: 5px 0px;
  }
  .activeColor{
    color: var(--color-high-text);

  }
  .activeColor span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>
