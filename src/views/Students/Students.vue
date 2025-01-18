<template>
  <Observer class="w-full flex-1">
    <Header />
    <div
      class="students-wrapper w-full flex-1 flex justify-center items-center"
    >
      <div
        class="students-content  w-5/6 h-5/6 p-10 flex flex-col justify-between max-sm:w-full max-sm:h-full"
      >
        <div class="students-control-ribbon flex justify-between gap-5">
          <el-input
            :model-value="presenter.queryString"
            @input="presenter.setQueryString($event)"
            placeholder="Search by Index or Name"
            size="large"
            ><template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <el-button
            type="primary" size="large"
            @click="presenter.createStudent()"
            >Register new student
          </el-button>
        </div>
        <div class="students-table">
          <el-skeleton v-if="presenter.loading" :rows="5" animated />
          <table class="table-auto border-collapse w-full" v-else>
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
            <tr v-for="student in presenter.filteredStudentList">
              <td>{{ student.index }}</td>
              <td>{{ student.first_name }} {{ student.last_name }}</td>
              <td>{{ student.date_of_birth }}</td>
              <td>{{ student.municipality }}</td>
              <td>
                <div class="actions-buttons flex justify-around w-full p-1">
                  <edit-icon
                      class="edit-icon"
                      @click="presenter.editStudent(student.id)"
                  />
                  <trash-icon
                      class="trash-icon"
                      @click="presenter.deleteStudent(student.id)"
                  />
                </div>
              </td>
            </tr>
            <tr v-if="presenter.filteredStudentList?.length === 0">
              <td colspan="5"> No Data </td>
            </tr>
            </tbody>
          </table>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </Observer>
</template>

<script setup>
import Header from "@/views/Header/Header.vue";
import { container } from "@/ioc/ioc";
import { TYPES } from "@/ioc/types";
import { onBeforeMount } from "vue";
import EditIcon from "@/assets/icons/edit-icon.vue";
import TrashIcon from "@/assets/icons/trash-icon.vue";
import { Search } from "@element-plus/icons-vue";
import {Observer} from "mobx-vue-lite";

let presenter = null;

onBeforeMount(async () => {
  presenter = container.get(TYPES.StudentPresenter);
  await presenter.init();
});
</script>

<style scoped>
th,
td {
  @apply p-1.5;
  border: 1px solid var(--border-color);
  background: var(--background-color)
}

th {
  background-color: var(--el-color-primary);
}

tr:hover {
  @apply bg-gray-100;
}

.edit-icon,
.trash-icon {
  width: 20px;
  height: 20px;
}

.edit-icon:hover,
.trash-icon:hover {
  @apply cursor-pointer
}

.students-table {
  height: calc(100% - 40px - 3rem);
  overflow-y: scroll;
}
</style>