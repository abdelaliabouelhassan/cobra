<template>
    <div class=" w-full py-28 bg-white">
        <div class=" w-full max-w-[1208px] mx-auto">
            <div class=" w-full text-center flex flex-col items-center">
                <span class=" text-black font-epilogue text-3xl md:text-5xl leading-[138%] font-semibold text-center">Our plans - suitable for your needs</span>
                <span class=" text-black font-epilogue font-medium text-center text-base md:text-lg ">Sign up for annual plan now and get I month free per year!</span>
            </div>

            <PlanGroup />
        </div>
    </div>
</template>


<script setup>
 import PlanGroup from "@/components/UI/PlanGroup.vue"
</script>