<template>
  <div>
    <p style="background-color: #eee;height: 40px; line-height: 40px; text-align: center;font-weight: bold">better-scroll演示</p>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>产品1</li>
        <li>产品2</li>
        <li>产品3</li>
        <li>产品4</li>
        <li>产品5</li>
        <li>产品6</li>
        <li>产品7</li>
        <li>产品8</li>
        <li>产品9</li>
        <li>产品10</li>
        <li>产品11</li>
        <li>产品12</li>
        <li>产品13</li>
        <li>产品14</li>
        <li>产品15</li>
        <li>产品16</li>
        <li>产品17</li>
        <li>产品18</li>
        <li>产品19</li>
        <li>产品20</li>
        <li>产品21</li>
        <li>产品22</li>
        <li>产品23</li>
        <li>产品24</li>
        <li>产品25</li>
        <li>产品26</li>
        <li>产品27</li>
        <li>产品28</li>
        <li>产品29</li>
        <li>产品30</li>
        <li>产品31</li>
        <li>产品32</li>
        <li>产品33</li>
        <li>产品34</li>
        <li>产品35</li>
        <li>产品36</li>
        <li>产品37</li>
        <li>产品38</li>
        <li>产品39</li>
        <li>产品40</li>
        <li>产品41</li>
        <li>产品42</li>
        <li>产品43</li>
        <li>产品44</li>
        <li>产品45</li>
        <li>产品46</li>
        <li>产品47</li>
        <li>产品48</li>
        <li>产品49</li>
        <li>产品50</li>
      </ul>
    </div>
  </div>

</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Category",
        data(){
          return {
              scroll:null
          }
        },
        mounted() {
            this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.wrapper,{

                })
            })
        }
    }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    overflow:hidden;
  }
</style>
