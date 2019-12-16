<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null
            }
        },
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            // 1.创建BScroll对象
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true, //设置触发内部点击事件
                probeType: this.probeType, //设置触发滚动事件
                pullUpLoad: this.pullUpLoad, //设置触发上拉加载
            })

            // 2. 监听滚动位置
            this.scroll.on('scroll', pos=>{
                this.$emit('scroll', pos)
            })

            // 3. 监听上拉事件
            this.scroll.on('pullingUp', ()=>{
                this.$emit('pullingUp')
                // console.log('上拉加载更多');
            })

            // console.log(this.scroll);
        },
        methods:{
            scrollXY(x, y, time=300){
                this.scroll.scrollTo(x,y,time)
            },
            refreshed(){
                this.scroll.refresh()
            }
            // finishedPullUp(){
            //     this.scroll.finishPullUp()
            // }
        }
    }
</script>

<style scoped>

</style>
