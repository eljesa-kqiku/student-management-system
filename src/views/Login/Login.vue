<template>
  <div class="login-background w-full h-full flex justify-center items-center bg-gray-200">
    <div class="login-container h-2/3 w-2/3 rounded-2xl overflow-hidden flex justify-between bg-white text-black">
      <div class="login-left flex-1 flex flex-col justify-center gap-3 items-center">
        <h1 class="text-2xl font-bold">Welcome</h1>
        <p>please enter your details</p>
        <div class="form-item">
          <label for="email">Email</label>
          <input type="text" name="email" class="outline outline-1 outline-emerald-900 border-black rounded p-2">
        </div>
        <div class="form-item">
          <label for="password">Password</label>
          <input type="text" name="password" class="outline outline-1 outline-emerald-900 border-black rounded p-2">
        </div>
        <button class="bg-emerald-600 text-white p-3 pl-5 pr-5 rounded">Sign in</button>
      </div>
      <div class="login-right flex-1 flex justify-center items-center bg-emerald-600">
        <img src="../../assets/logo/logo1.png" alt="logo" class="w-1/3 h-1/3">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.form-item{
  @apply flex flex-col gap-3
}
</style>