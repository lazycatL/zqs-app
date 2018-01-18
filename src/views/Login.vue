<template>
  <div class="login">
    <div class="logo">
      <img src="../../static/img/logo.svg"/>
    </div>
    <div class="zqs">
      <img src="../../static/img/zqs.png" width="237"/>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      submitForm (formName) {


      }
    },
    computed: {
    },
    mounted () {

    },
    watch: {
    }
  }
</script>


<style lang="less" scoped>
  .login {
    text-align:center;
    .logo{
      margin: 45*@base auto 10*@base;
    }
    .zqs{
      margin: 20*@base auto 10*@base;
    }
  }

</style>
