<template>
    <Header />
    <div
      class="students-wrapper bg-gray-200 w-full flex-1 flex justify-center items-center"
    >
      <Observer>
        <div
            class="students-content bg-white w-5/6 h-5/6 rounded-2xl p-10 flex flex-col gap-12"
        >
          <div class="students-control-ribbon flex justify-between">
            <input
                type="text"
                placeholder="Search"
                class="outline outline-1 outline-emerald-900 border-black rounded p-1"
            />
            <button class="bg-emerald-600 text-white p-2 pl-5 pr-5 rounded" @click="presenter.createStudent()">
              Register new student
            </button>
          </div>
          <table class="table-auto border-collapse w-full">
            <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>DoB</th>
              <th>Municipality</th>
              <th>Actions</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="student in presenter.studentsList">
              <td>{{ student.index }}</td>
              <td>{{ student.first_name }} {{student.last_name}}</td>
              <td>{{ student.date_of_birth }}</td>
              <td></td>
              <td>
                <div class="actions-buttons flex justify-around w-full p-1">
                  <edit-icon class="edit-icon" @click="presenter.editStudent(student.id)"/>
                  <trash-icon class="trash-icon" @click="presenter.deleteStudent(student.id)"/>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          <router-view></router-view>
        </div>
      </Observer>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import EditIcon from "@/assets/icons/edit-icon.vue";
import TrashIcon from "@/assets/icons/trash-icon.vue";
import {Observer} from "mobx-vue-lite";

let presenter = null;

onBeforeMount(async () => {
  presenter = container.get(TYPES.StudentPresenter);
  await presenter.init();
});
</script>

<style scoped>
th, td {
  @apply border border-emerald-900 p-2;
}

th {
  @apply bg-emerald-600 text-white;
}

tr:hover {
  @apply bg-gray-100 cursor-pointer;
}

.edit-icon, .trash-icon{
  width: 20px;
  height: 20px;
}

.edit-icon:hover path, .trash-icon:hover path{
  @apply fill-emerald-700
}
</style>