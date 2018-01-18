<template>
  <div class="index">
        <!-- 左侧栏内容 -->
        <div class="left">
         <h1>hhahaha</h1>
          <h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1>

          <h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1>
          <h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1><h1>hhahaha</h1>
          <p>hhahaha</p><p>hhahaha</p><p>hhahaha</p><p>hhahaha</p><p>hhahaha</p><p>hhahaha</p>

        </div>
      <div class="main">
          <hb-header></hb-header>

          <transition>
            <router-view class="router-view"></router-view>
          </transition>

      </div>

  </div>
</template>

<script>
  import { Drawer,ViewBox,XHeader } from 'vux'
  import hbHeader from '@/components/hb-header.vue'
  export default {
    data () {
      return {
        drawerVisibility:true
      }
    },
    components : {
      hbHeader,
      Drawer,ViewBox,XHeader
    },
    computed: {
      rightOptions () {
        return {
          showMore: true
        }
      },
      leftOptions () {
        return {
          showBack: this.$router.path !== '/'
        }
      }
    },
    methods: {

    },
    mounted() {
      components: {

      }
    }
  }
</script>

<style lang="less" scoped>

  .index{
    height: 100%;
    display: flex;
    .left{
      overflow-y:auto;
      width: 30%;
      height: 100%;
      background: lightcyan;
      p{
        height: 200px;
        border:1px solid red;
        background: lightpink;
      }
    }
    .main{
      width: 70%;
    }
  }

</style>
