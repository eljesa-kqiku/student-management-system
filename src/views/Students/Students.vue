<template>
  <Header />
  <div class="students-wrapper bg-gray-200 w-full flex-1 flex justify-center items-center">
    <div class="students-content bg-white w-5/6 h-5/6 rounded-2xl p-10 flex flex-col gap-12">
      <div class="students-control-ribbon flex justify-between">
        <input type="text" placeholder="Search" class="outline outline-1 outline-emerald-900 border-black rounded p-1">
        <button class="bg-emerald-600 text-white p-2 pl-5 pr-5 rounded">Register new student</button>
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
          <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
        <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
        <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
        <tr>
            <td>1458</td>
            <td>John Doe</td>
            <td>1989-10-05</td>
            <td>Prishtine</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
</script>

<style scoped>
th, td{
  @apply border border-emerald-900 p-3
}
th{
  @apply bg-emerald-600 text-white
}
</style>