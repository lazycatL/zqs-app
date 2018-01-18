<!--公用组件：系统最上部header
   /**
   * hb-header
   * @module common/hb-header
   * @desc 系统最上部header
   * @author lihong
   * @date 2017年10月20日11:14:25
   * @param {string} [name]    - 标题名称[默认为this.store中保存的组织名称]
   * @param {string} [subName] - 二级标题名称
   * @param {Object} [minName]  - 三级标题名称
   * @param {Boolean} [isMain]  - 是否是主界面，不显示回退按钮
   * @param {Boolean} [isSearch]     - 是否是搜索，其他都不显示
   *
   * @example
   *  <hbHeader :title="name"></hbHeader>
   */
-->
<template>
    <div class="header">
        <div class="is-left" v-if="(!isMain)">
            <slot name="left">
            <div class="header-img">
                <img src="../../static/img/header/back.svg"/>
            </div>
            </slot>
      </div>
      <div class="header-title">
            <h1 v-text="$route.name"></h1>
      </div>
      <div class="header-button is-right">
        <slot name="right">
            <div class="moreMenu"></div>
        </slot>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'hbHeader',
    components: {
    },
    props: {
      isMain: Boolean,
      isSearch: Boolean,
      title: String
    },
    data () {
      return {
        dialogVisible: false,
        minName: ''
      }
    },
    methods: {
      
    },
    mounted () {

    },
    computed: {
    },
    watch: {
    }
  }
</script>

<style lang="less" scoped>
.header {
      -webkit-box-align: center;
      -webkit-transform: translateZ(0);
      transform: translate3d(0, 0, 0);
      -ms-flex-align: center;
      align-items: center;
      background: #343945;
      box-sizing: border-box;
      display: flex;

      font-size: 20*@base;
      line-height: 20*@base;
      color: #FFFFFF;
      height: 60*@base;
      margin: 0 auto;
      width: 100%;
      white-space: nowrap;
    }

    .header .button {
      background-color: transparent;
      border: 0;
      box-shadow: none;
      color: inherit;
      display: inline-block;
      padding: 0;
      font-size: inherit
    }

    .header .button::after {
      content: none;
    }

    .header.is-fixed {
      top: 0;
      right: 0;
      left: 0;
      position: fixed;
      z-index: 99;
    }

    .header-button {
      -webkit-box-flex: .3;
      -ms-flex: .3;
      flex: .3;
    }
      .header-title {

      font-size: 18*@base;
      color: #FFFFFF;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 400;
      flex: 3;
      display: flex;
      align-items: center;
      h1 {
        margin-left: 20*@base;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .header-dubClick{
        margin-left: 30%;
        width:120*@base;
        height: 60*@base;
      }
    }
   .is-right {
      display: flex;
      width: 80*@base;
      height: 50*@base;
      align-items: center;
    }
     .is-left {
      height: 100%;
      width: 33*@base;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .moreMenu{
        flex: 1;
        height: 80%;
        width: 100%;
        height: 100%;
        background:url("../../static/img/header/more.svg") no-repeat 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
