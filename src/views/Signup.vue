<template>
  <div style="width: 500px; margin: 0 auto">
    <a-form
      ref="formRef"
      name="custom-validation"
      :model="formState"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-item has-feedback label="email" name="email">
        <a-input v-model:value="formState.email" autocomplete="off" />
      </a-form-item>
      <a-form-item has-feedback label="phone" name="phone">
        <a-input
          v-model:value="formState.phone"
          autocomplete="off"
          maxlength="11"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">确定</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const formRef = ref()
const formState = reactive({
  email: '',
  phone: '',
})
let phone = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('不能为空')
  } else {
    let validNumber = /^(186|135)[0-9]{8}$/
    if (validNumber.test(value)) {
      return Promise.resolve()
    } else {
      return Promise.reject('请输入正确的手机号')
    }
  }
}
const rules = {
  email: [
    {
      required: true,
      type: 'email',
      trigger: 'blur',
      message: '请输入正确的邮箱',
    },
  ],
  phone: [
    {
      required: true,
      validator: phone,
      trigger: 'blur',
    },
  ],
}
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
}

const resetForm = () => {
  formRef.value.resetFields()
}
</script>
