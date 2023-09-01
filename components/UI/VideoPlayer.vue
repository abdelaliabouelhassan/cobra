<template>
    <div :class="{'bg-tertiary':!dashbed}" class=" w-full  p-5 rounded-t-[2.5rem] rounded-br-[2.5rem]  rounded-bl-[7rem] overflow-hidden">
        <div v-if="!play" class="  w-full h-[25rem] md:h-auto   xl:h-[42.4375rem] rounded-t-[2.5rem] rounded-br-[2.5rem]  rounded-bl-[7rem] relative overflow-hidden  ">
            <img :src="placeholder" class=" w-full h-full object-cover" alt="placeholder">
            <div  class=" absolute w-full h-full  top-0 left-0 p-8">
                <h2 class=" max-w-[20rem] md:max-w-[29.75rem] text-white text-[2rem] lg:text-[4rem] font-epilogue font-medium lg:leading-[5rem] text-start">{{title}}</h2>
                <div class=" flex sm:flex-row flex-col sm:items-center  space-y-2 sm:space-y-0 sm:space-x-5 absolute bottom-10 ">
                            <PlayButton @click="play = true;" class="w-[7.5rem] h-[7.5rem]"  />
                            <p class=" text-xs md:text-base lg:text-lg text-white font-epilogue font-medium max-w-[12.8125rem]">
                               {{subtitle}}
                            </p>
                    </div>
            </div>
        </div>

       <div class=" w-full h-full pl-5 pb-5" v-else>
         <video   id='video' class=" w-full h-[25rem] md:h-auto  xl:h-[42.4375rem] rounded-t-[2.5rem] rounded-br-[2.5rem]  rounded-bl-[3rem] " autoplay muted controls="controls" preload='none'  >
                <source id='mp4' :src="video" type='video/mp4' />
                <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
       </div>
    </div>
</template>


<script setup>
 import PlayButton from "@/components/UI/PlayButton.vue"
 const props = defineProps(['placeholder','video','title','subtitle','dashbed'])
 const play = ref(false);


 const stop  = () => {
    play.value = false;
 } 

 defineExpose({
    stop,
 })

 
</script>



