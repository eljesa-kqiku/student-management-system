<template>
  <Popup>
    <template #content>
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-base font-semibold text-gray-900" id="modal-title">Edit Student</h3>
        <div class="mt-2">


        </div>
      </div>
    </template>
    <template #footer>
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              @click="presenter.confirm()">Save</button>
      <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="presenter.cancel()">Cancel</button>
    </template>
  </Popup>

</template>

<script setup lang="ts">
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import Popup from "@/components/Popup.vue";

let presenter = null;

onBeforeMount(async () => {
  presenter = container.get(TYPES.EditStudentPresenter);
  await presenter.init();
});
</script>

<style scoped>

</style>