<template>
    <div class=" w-full max-w-[17rem] bg-white p-4 shadow-card rounded-3xl space-y-4">
        <img src="/images/Icons/configurator.svg" alt="configurator">
        <p class=" text-black text-xl font-medium font-epilogue tracking-[0.0225rem] leading-[160%]">
           {{title}}
        </p>
    </div>
</template>


<script setup>
 const props = defineProps(['title'])
</script>

<style scoped>
.shadow-card {
    box-shadow: 0px 24px 48px 0px rgba(0, 0, 0, 0.04);
}
</style>