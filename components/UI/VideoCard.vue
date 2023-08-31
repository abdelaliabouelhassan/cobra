<template>
  <div class=" flex flex-col items-center space-y-2 w-full max-w-[11.5rem] cursor-pointer ">
    <span class=" text-black text-base font-semibold font-epilogue">{{title}}</span>
      <div :class="{'bg-secondry':completed,'card-shadow bg-white':!completed}" class="  w-full p-2  rounded-[1.1875rem] h-[6.875rem] flex">
            <div class=" w-full h-full bg-gray-500 m-auto rounded-[0.75rem] overflow-hidden relative">
                <img :src="placeholder" class=" object-cover w-full h-full" alt=""> 
                <div class=" absolute w-full h-full flex top-0 left-0">
                    <button v-if="!completed" class=" m-auto">
                       <PlayButton class=" w-14 h-14" :sm="true" />
                    </button>

                    <div class=" m-auto" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="32" viewBox="0 0 45 32" fill="none">
                            <g filter="url(#filter0_bi_1_1127)">
                                <path d="M5 13.5L17.3686 25.8686C17.7646 26.2646 17.9627 26.4627 18.191 26.5368C18.3918 26.6021 18.6082 26.6021 18.809 26.5368C19.0373 26.4627 19.2354 26.2646 19.6314 25.8686L40.5 5" stroke="white" stroke-opacity="0.5" stroke-width="9" stroke-linecap="round"/>
                            </g>
                            <defs>
                                <filter id="filter0_bi_1_1127" x="-20.9567" y="-20.9567" width="87.4134" height="73.4991" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.7284"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1127"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1127" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-7.15224"/>
                                <feGaussianBlur stdDeviation="5.9602"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1127"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>


<script setup>
  const props = defineProps(['placeholder','completed','title'])
  import PlayButton from "@/components/UI/PlayButton.vue"
</script>


<style scoped>
 .card-shadow {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
 }
</style>