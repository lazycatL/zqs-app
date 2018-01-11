<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
  import util from '../utils/number.js'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        age: ''
      }
    },
    methods: {
      addUser() {
        // var name = this.userName;
        // var age = this.age;
        // this.ajax.post(this.api.addUser, {
        //   username: name,
        //   age: age
        // },{}).then((response) => {
        //   console.log(response);
        // })
        console.log(util.isInteger('1'))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
