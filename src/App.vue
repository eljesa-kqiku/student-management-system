<template>
  <div class="h-full flex flex-col">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import router from "@/router";
onBeforeMount(async () => {
  router.push({ path: "/home" });
});
</script>

<style scoped>

</style>
