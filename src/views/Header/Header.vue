<template>
  <div class="header-wrapper flex justify-between items-center pt-3 pb-3 ps-10 pe-10 bg-white">
    <div class="logo-wrapper flex items-center gap-7">
      <img src="../../assets/logo/logo1.png" alt="logo" class="w-10 h-10">
      <h2 class="font-semibold text-center">Student Information  <br/>System</h2>
    </div>
    <div class="navbar-wrapper flex gap-7">
      <RouterLink to="home" class="navbar-item">Home</RouterLink>
      <RouterLink to="students" class="navbar-item">Students</RouterLink>
      <RouterLink to="about" class="navbar-item">About</RouterLink>
      <RouterLink to="help" class="navbar-item">Help</RouterLink>
    </div>
    <div class="user-wrapper flex gap-7 items">
      <div class="user-image rounded-full w-12 h-12 bg-gray-200"></div>
      <div class="user-text min-w-16">
        <p>John Doe</p>
        <p class="text-gray-500" @click="logOut()">Log Out</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import router from "@/router";

let headerPresenter = null;

onBeforeMount(async () => {
  headerPresenter = container.get(TYPES.HeaderPresenter);
});

function logOut(){
  headerPresenter.logOut()
  router.push("/login")
}
</script>

<style scoped>
.navbar-item{
  @apply hover:text-emerald-800 cursor-pointer
}
</style>