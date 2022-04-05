<template>
  <div class="login">
    <!-- 动画盒子 -->
    <div class="box">
      <div class="boxLeft">
        <div class="boxOne"></div>
      </div>
      <div class="boxRight"></div>
      <div class="pointer"></div>
      <div class="pointer2"></div>
    </div>
    <!-- <h1 style="color:#ccc">welcome guys</h1> -->
    <div class="loginForm">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="form.phoneNumber" placeholder="此项有自定义校验"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">WELCOME GUYS</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>  

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ElForm } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
// 表单
const form = reactive({
  phoneNumber: '',
  nickName: '',
  name: '',
  age: 18
})

// 自定义校验规则 校验手机号码

// function validatePhone(rule: any, value: any, callback: any) {
//   console.log(value);

// }
const validatePhone = (rule: any, value: any, callback: any) => {
  console.log(value);

  if (value === '') {
    callback(new Error('手机号不可为空'))
  } else if (value.charAt(0) !== '1') {
    callback(new Error('手机号首位必须为1'))
  } else {
    callback()
  }
}
// 表单校验
const rules = reactive({
  phoneNumber: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    // { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' },  通过正则校验
    {
      validator: validatePhone,
      trigger: 'blur'
    }
  ],
  nickName: [
    {
      required: true,
      message: '请输入昵称',
      trigger: 'blur',
    }
  ],

})


// 登陆按钮
const router = useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      router.push('/home')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  // background: url("@/assets/images/bg.png");
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: 100% 100%;
  .loginForm {
    width: 500px;
    height: 470px;
    padding: 60px 20px;
    background-color: rgba(2, 2, 2, 0.082);
    float: right;
    margin: 80px 50px;
    border-radius: 10px;
  }
  :deep(.el-form-item__label) {
    color: rgb(0, 0, 0);
    font-weight: 600;
    width: 100px;
  }
  .el-button {
    width: 100%;
    float: right;
  }
  :deep(.el-form-item__content) {
    justify-content: flex-end;
  }
}

//盒子特效
.box {
  position: relative;
  float: left;
  left: 50px;
  top: 100px;
  width: 500px;
  height: 500px;
  //background-color: pink;
  .boxLeft {
    width: 100px;
    height: 300px;
    background-color: #409eff;
  }
  .boxRight {
    position: absolute;
    right: 100px;
    top: 150px;
    width: 100px;
    height: 300px;
    background-color: black;
  }
  .pointer {
    width: 100%;
    height: 5px;
    background-color: black;
  }
  .pointer2 {
    width: 100%;
    height: 50px;
    background-color: #409eff;
  }
}
</style>