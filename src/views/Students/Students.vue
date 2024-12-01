<template>
  <Observer class="w-full flex-1">
    <Header />
    <div
      class="students-wrapper bg-gray-200 w-full flex-1 flex justify-center items-center"
    >
        <div
            class="students-content bg-white w-5/6 h-5/6 rounded-2xl p-10 flex flex-col gap-12"
        >
          <div class="students-control-ribbon flex justify-between gap-5">
            <el-input :model-value="presenter.queryString"
                      @input="presenter.setQueryString($event)"
                      placeholder="Search by Index or Name"
            ><template #prefix>
                <el-icon><Search/></el-icon>
              </template>
            </el-input>
            <el-button class="!bg-emerald-600 !border-none text-white p-2 pl-5 pr-5 rounded"
                       type="success" @click="presenter.createStudent()"
            >Register new student
            </el-button>
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
              <tr v-for="student in presenter.filteredStudentList">
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
import {Search} from "@element-plus/icons-vue";

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