<template>
  <div class="h-full flex flex-col">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import router from "@/router";
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";

let appPresenter = null;

onBeforeMount(async () => {
  appPresenter = container.get(TYPES.AppPresenter);
  let route = await appPresenter.initiateRoute();

  router.push({ path: route });

});
</script>

<style scoped>

</style>
