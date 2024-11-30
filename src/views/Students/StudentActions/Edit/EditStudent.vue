<template>
  <Popup>
      <template #content>
        <Observer>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
            <h3 class="text-base font-semibold text-gray-900" id="modal-title">Edit Student</h3>
            <div class="mt-2 w-full">
              <el-form-item class="input-item" label="Index" label-position="top">
                <el-input :model-value="presenter.studentData.index" placeholder="Index" disabled/>
              </el-form-item>
              <el-form-item class="input-item" label="First Name" label-position="top">
                <Observer>
                  <el-input :model-value="presenter.studentData.first_name"
                            @input="presenter.setFirstName($event)"
                            placeholder="First Name" />
                </Observer>
              </el-form-item>
              <el-form-item class="input-item" label="Last Name" label-position="top">
                <Observer>
                  <el-input :model-value="presenter.studentData.last_name"
                            @input="presenter.setLastName($event)"
                            placeholder="Last Name" />
                </Observer>
              </el-form-item>
              <Observer>
                <el-form-item class="input-item" label="Date of Birth" label-position="top">
                  <el-date-picker :model-value="presenter.studentData.date_of_birth"
                                  @change="presenter.setDateOfBirth($event)"
                                  placeholder="Date of Birth" class="!w-full" />
                </el-form-item>
              </Observer>
              <Observer>
               <!--  TODO: this should be a dropdown -->
               <el-form-item class="input-item" label="Municipality" label-position="top">
                  <el-input :model-value="presenter.studentData.municipality_id"
                           @change="presenter.setMunicipality($event)"
                           placeholder="Municipality" />
               </el-form-item>
              </Observer>
            </div>
          </div>
        </Observer>
      </template>
      <template #footer>
        <button type="button" class="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                @click="presenter.confirm()">Save</button>
        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                @click="presenter.cancel()">Cancel</button>
      </template>
    </Popup>
</template>

<script setup>
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import Popup from "@/components/Popup.vue";
import {Observer} from "mobx-vue-lite";

let presenter = null;

onBeforeMount(async () => {
  presenter = container.get(TYPES.EditStudentPresenter);
  await presenter.init();
});
</script>

<style scoped>

</style>