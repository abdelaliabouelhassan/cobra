<template>
  <div class=" w-full p-4 space-y-4 absolute top-0 left-0 z-10 ">
    <div class="w-full flex justify-between items-center 4xl:max-w-[80.5rem] 4xl:mx-auto">
      <router-link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </router-link>

      <div>
        <button
          class="text-white  hidden md:block font-medium text-sm tracking-[0.0175rem] px-8 rounded-lg h-[2.5rem] pt-[3px] text-center bg-primary font-epilogue hover:bg-purple-900   duration-200"
        >
          Book your Demo
        </button>
      </div>
    </div>

    <div class=" w-full">
      <Line />
    </div>

   
  </div>
</template>


<script setup>
 import Line from "@/components/UI/Line.vue"
</script>