<template>
    <div class=" w-full relative overflow-hidden">
        <Header />
        <slot />
    </div>
</template>



<script setup>
 import Header from "@/components/Header.vue"
</script>