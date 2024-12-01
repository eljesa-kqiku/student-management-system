<template>
  <Observer>
    <div class="login-background w-full h-full flex justify-center items-center bg-gray-200">
      <div class="login-container h-2/3 w-2/3 rounded-2xl overflow-hidden flex justify-between bg-white text-black">
        <div class="login-left flex-1 flex flex-col justify-center gap-3 items-center">
          <h1 class="text-2xl font-bold">Welcome</h1>
          <p>please enter your details</p>
          <div class="form-item">
            <label for="email">Email</label>
            <el-input :model-value="loginPresenter.vm.email" @input="loginPresenter.setEmail($event)"/>
          </div>
          <div class="form-item">
            <label for="password">Password</label>
            <el-input type="password" :model-value="loginPresenter.vm.password" @input="loginPresenter.setPassword($event)" />
          </div>
          <button class="bg-emerald-600 text-white p-3 pl-5 pr-5 rounded" @click="login()">Sign in</button>
        </div>
        <div class="login-right flex-1 flex justify-center items-center bg-emerald-600">
          <img src="../../assets/logo/logo1.png" alt="logo" class="w-1/3 h-1/3">
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
</style>