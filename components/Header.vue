<template>
  <div class=" w-full p-4 space-y-4 absolute top-0 left-0 z-10">
    <div class="w-full flex justify-between items-center">
      <router-link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </router-link>

      <div>
        <button
          class="text-white font-medium text-sm tracking-[0.0175rem] px-6 rounded-lg py-1.5 bg-primary font-epilogue hover:bg-blue-400 hover:text-white duration-200"
        >
          Book your Demo
        </button>
      </div>
    </div>

   <Line />
  </div>
</template>


<script setup>
 import Line from "@/components/UI/Line.vue"
</script>