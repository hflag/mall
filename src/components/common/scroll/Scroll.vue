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

            this.$nextTick(() => {
                this._initScroll()
            })

        },
        methods:{
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }
                // 1.创建BScroll对象
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,  //设置触发滚动事件
                    click: true,  //设置触发内部点击事件
                    pullUpLoad: this.pullUpLoad //设置触发上拉加载
                })
                // 2. 监听滚动位置
                if (this.probeType == 2 || this.probeType == 3) {
                    this.scroll.on('scroll', pos => {
                        this.$emit('scroll', pos)
                    })
                }
                // 3. 监听上拉加载
                if (this.pullUpLoad) {
                    this.scroll.on('pullingUp', () => {
                        this.$emit('pullingUP')
                    })
                }
            },
            scrollXY(x, y, time=300){
                this.scroll.scrollTo(x,y,time)
            },
            refreshed(){
                this.scroll.refresh()

            },
            finishedPullUp(){
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>
