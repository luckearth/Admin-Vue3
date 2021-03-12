
<template>
  <div class="login">
    <div class="login-area">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="账号密码登录">
          <a-form
            ref="formRef"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            :model="LoginForm"
            :rules="rulesRef"
          >
            <a-form-item label="账号：" name="userName">
              <a-input
                v-model:value="LoginForm.userName"
                placeholder="请填写账号"
              />
            </a-form-item>
            <a-form-item label="密码：" name="password">
              <a-input
                type="password"
                v-model:value="LoginForm.password"
                placeholder="请填写密码"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click.prevent="onSubmit"
                >Create</a-button
              >
              <a-button style="margin-left: 10px" @click="resetForm"
                >Reset</a-button
              >
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef, toRaw } from "vue";
import {
  ValidateErrorEntity,
  RuleObject,
} from "ant-design-vue/es/form/interface";
interface LoginForm {
  userName: string;
  password: string;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const LoginForm: UnwrapRef<LoginForm> = reactive({
      userName: "",
      password: "",
    });
    const activeKey = ref("1");
    const validatePass = async (rule: RuleObject, value: string) => {
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      console.log(reg.test(value));
      if (!reg.test(value)) {
        return Promise.reject(
          "密码至少包含大写字母，小写字母，数字，且不少于8位"
        );
      } else {
        return Promise.resolve();
      }
    };
    const rulesRef = {
      userName: [
        {
          required: true,
          message: "请填写账号",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          trigger: "blur",
          validator: validatePass,
        },
      ],
    };

    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log(toRaw(LoginForm));
        })
        .catch((err: ValidateErrorEntity<LoginForm>) => {
          console.log("error", err);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      LoginForm,
      onSubmit,
      rulesRef,
      resetForm,
      activeKey,
    };
  },
});
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login.jpg");
  background-size: 100% 100%;
  position: relative;
  .login-area {
    position: absolute;
    background-color: #fff;
    width: 640px;
    height: 300px;
    right: 130px;
    bottom: 20%;
  }
}
</style>
