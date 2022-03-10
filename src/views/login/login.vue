<template>
  <div class="login">
    <h1 style="color:#ccc">welcome guys</h1>
    <div class="loginForm">
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="form.phoneNumber"></el-input>
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
          <el-button type="primary" @click="submitForm(formRef)">登陆</el-button>
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
  phoneNumber: null,
  nickName: '',
  name: '',
  age: 18
})
// 表单校验
const rules = reactive({
  phoneNumber: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur',
    }, {
      min: 3,
      max: 5,
      message: '你输入的手机号不符合规则',
      trigger: 'blur',

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
  background: url("@/assets/images/bg.png");
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: 100% 100%;
  .loginForm {
    width: 500px;
    height: 200px;
    padding: 60px 20px;
    background-color: rgba(172, 172, 172, 0.315);
    float: right;
    margin: 80px 50px;
    border-radius: 10px;
  }
  :deep(.el-form-item__label) {
    color: rgb(255, 255, 255);
    font-weight: 600;
    width: 100px;
  }
  .el-button {
    width: 80%;
    float: right;
  }
  :deep(.el-form-item__content) {
    justify-content: flex-end;
  }
}
</style>