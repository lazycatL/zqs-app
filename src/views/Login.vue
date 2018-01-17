<template>
  <div class="box_login">
    <div class="img_box">
      <img src="../assets/img/logo.svg"/>
    </div>
    <div class="pic" v-show="device == 0 ">
      <img src="../assets/img/zqs.png" alt="">
    </div>
    <el-form v-show="device == 0 " :model="ruleForm2" status-icon ref="ruleForm2" class="login">
      <el-form-item prop="text">
        <el-input type="input" placeholder="输入您的帐号" v-model="ruleForm2.text" auto-complete="off"></el-input>
        <i v-show="device == 0 && showError_0 && text_err">请输入用户名</i>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" @focus="changeType" placeholder="输入您的密码" auto-complete="off"
                  v-model="ruleForm2.checkPass"
                  @keyup.enter.native="submitForm('ruleForm')"></el-input>
        <i v-show="device == 0 && showError_0">{{message_0}}</i>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>

    <div class="i_error" v-show="device == 1 && showError">

      <p><i class="el-icon-error"></i></p>
      <p>
        {{message}}
      </p>

    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        pass: 'text',
        device: 0,
        message: '',
        message_0: '',
        showError: false,
        showError_0: false,
        text_err: false,
        ruleForm2: {
          text: '',
          checkPass: '',
        },
      }
    },
    methods: {
      submitForm (formName) {

        const self = this
        if (self.ruleForm2.text == '') {
          self.showError_0 = true
          self.text_err = true
//          self.message_0 = '用户名不能为空'
          return
        } else if (self.ruleForm2.checkPass == '') {
          self.text_err = false
          self.showError_0 = true
          self.message_0 = '密码不能为空'
          return
        }
        self.showError_0 = false // 隐藏error框
//            请求登陆接口
        api.getLogin({
          'username': self.ruleForm2.text,
          'password': self.ruleForm2.checkPass
        })
          .then(res => {
            console.log(res)
            if (res.data.code === 1) {

              if (res.data.data.orgCode == '' || res.data.data.orgCode == null) {
                self.message_0 = '该用户没有权限'
                self.showError_0 = true // 显示error框
                return
              }
              self.showError_0 = false // 隐藏error框
              self.$store.commit(types.TOKEN, res.data.data.token) // 存储token
              self.$store.commit(this.types.ORGCODE, res.data.data.orgCode) // 存储orgcode
              self.$store.commit(this.types.ORGNAME, res.data.data.orgName) // 存储orgname
              self.$store.commit(this.types.EMPLOYEECODE, res.data.data.employeeCode) // 存储employeecode
              self.$store.commit(this.types.EMPLOYEENAME, res.data.data.employeeName) // 存储employeeName
              self.$store.commit(types.TOKEN, res.data.data.token) // 存储token
              self.$store.commit(types.GROUPSCOPE, res.data.data.groupScope) // 存储token

              var path = '/'
              if (res.data.data.orgCode === '1') {
                // path = '/zqsIndex'
                path = '/Overview'
                if(res.data.data.employeeCode == '10000001'){ //如果是董事长的账户默认显示大字体
                  self.$store.commit(this.types.ISBIGFONT, 1)  // 是否大字体显示
                  path = '/zqsIndex'
                }
              } else if (res.data.data.orgCode === '314') {
                path = '/Culture'
              } else {
                path = '/Main'
              }

              const redirect = decodeURIComponent(path)

              self.$router.push({
                path: redirect
              })

            } else {
              self.message_0 = res.data.message
              self.showError_0 = true // 显示error框
            }
          })
          .catch(res => {

          })
      },
      submitDevice () {
//        用设备码登陆
        const self = this
        api.getLogin({
          'devicecode': self.$store.state.device
        })
          .then(res => {

            if (res.data.code === 1) {
              if (res.data.data.orgCode == '' || res.data.data.orgCode == null) {
                self.message_0 = '该用户没有权限'
                self.showError_0 = true // 显示error框
                return
              }
              self.showError = false // 隐藏error框
              self.$store.commit(types.TOKEN, res.data.data.token) // 存储token
              self.$store.commit(this.types.ORGCODE, res.data.data.orgCode) // 存储orgcode
              self.$store.commit(this.types.ORGNAME, res.data.data.orgName) // 存储orgname
              self.$store.commit(this.types.EMPLOYEECODE, res.data.data.employeeCode) // 存储orgname
              self.$store.commit(this.types.EMPLOYEENAME, res.data.data.employeeName) // 存储employeeName
              localStorage.setItem('groupScope',res.data.data.groupScope) //是否有权切换大字和标准字体
             
             var path = '/'
              if (res.data.data.orgCode === '1') {
                path = '/Overview'
              } else if (res.data.data.orgCode === '314') {
                path = '/Culture'
              } else {
                path = '/Main'
              }
              if(res.data.data.employeeCode == '10000001'){ //如果是董事长的账户默认显示大字体
                self.$store.commit(this.types.ISBIGFONT, 1)  // 是否大字体显示
                path = '/zqsIndex'
              }

              const redirect = decodeURIComponent(path)

              self.$router.push({
                path: redirect
              })
            } else {
              self.message = res.data.message
              self.showError = true // 显示error框
            }
          })
          .catch(res => {

          })

      },
      changeType () {
        this.pass = 'password'
      }
    },
    computed: {
      getPass () {
        return this.ruleForm2.checkPass
      },
      getText() {
        return this.ruleForm2.text
      }
    },
    mounted () {
      store.commit(types.ISLOADING, false)
      store.commit(types.ISBIGFONT,0)
//      判断是pc还是移动端
//      this.device = 0 // pc端
//       this.device = 1; // 移动端
      const self = this

      if (sessionStorage.getItem('device') && sessionStorage.getItem('device') !== 'pc') {
        self.device = 1 // 移动端
        self.submitDevice()
      } else {
        self.device = 0 // pc端
      }

    },
    watch: {
      getPass () {
        const self = this
        if (this.ruleForm2.checkPass !== '') {
          self.pass = 'password'

          self.showError_0 = false
        }
      },
      getText() {
        const self = this
        if (this.ruleForm2.text !== '') {
          self.text_err = false
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  .box_login {
   

  }

</style>
