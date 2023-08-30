<template>
    <div class=" relative w-full border border-dashed  max-w-[23.4375rem] border-[#CECECE] rounded-[2rem] pt-5 pb-28 px-8">
        <div class=" w-full space-y-8">
            <img :src="logo" alt="" class=" object-cover">
        <p class=" text-black font-inter text-base font-normal">
            {{text}}
        </p>
        </div>

        <div class=" flex items-center space-x-2 absolute bottom-5 left-7">
            <div class=" w-12 h-12 rounded-xl bg-gray-400 overflow-hidden">
                <img :src="image" class=" w-full h-full object-cover" alt="">
            </div>
            <div class=" flex flex-col items-start -space-y-px">
                <span class=" text-black font-epilogue font-medium text-lg">{{name}}</span>
                <span class=" text-[#8F8F8F] font-inter text-sm font-normal" >{{job}}</span>
            </div>
        </div>
    </div>
</template>


<script setup>
 const props = defineProps(['logo','text','name','job','image'])
</script>