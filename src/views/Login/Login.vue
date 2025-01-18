<template>
  <Observer>
    <div class="login-background w-full h-full flex justify-center items-center">
      <div class="card h-2/3 w-1/3 p-12">
        <div class="w-full h-full flex flex-col justify-center gap-10">
          <img src="../../assets/logo/logo1.png" alt="logo" class="logo">
          <h1 class="text-xl font-bold">Welcome to Student Management System</h1>
          <div class="login-form flex flex-col gap-3">
            <div class="form-item">
              <el-input
                  :model-value="loginPresenter.vm.email"
                  placeholder="E-mail"
                  size="large"
                  @input="loginPresenter.setEmail($event)"
              />
            </div>
            <div class="form-item">
              <el-input
                  :model-value="loginPresenter.vm.password"
                  placeholder="Password"
                  type="password" size="large"
                  @input="loginPresenter.setPassword($event)" />
            </div>
            <el-button size="large" type="primary" @click="login()">Log in</el-button>
          </div>
        </div>
      </div>
    </div>
  </Observer>
</template>

<script setup>
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import router from "@/router";
import {Observer} from "mobx-vue-lite";

let loginPresenter = null;

onBeforeMount(async () => {
  loginPresenter = container.get(TYPES.LoginPresenter);
});

async function login(){
  await loginPresenter.login()
  if(loginPresenter.isUserLoggedIn()){
    router.push('/students')
  }
}
</script>

<style scoped>
.form-item{
  @apply flex flex-col gap-3
}
.logo{
  height: 100px;
  margin: 0 auto;
}


</style>