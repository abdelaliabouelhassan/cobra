<template>
  <div class=" flex flex-col items-center space-y-2 w-full max-w-[11.5rem] cursor-pointer ">
    <span class=" text-black text-base font-semibold font-epilogue">{{title}}</span>
      <div :class="{'bg-[#00D5C4]':completed,'card-shadow':!completed}" class=" bg-white w-full p-2  rounded-[1.1875rem] h-[6.875rem] flex">
            <div class=" w-full h-full bg-gray-500 m-auto rounded-[0.75rem] overflow-hidden relative">
                <img :src="placeholder" class=" object-cover w-full h-full" alt=""> 
                <div class=" absolute w-full h-full flex top-0 left-0">
                    <button v-if="!completed" class=" m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <g filter="url(#filter0_bi_1_1114)">
                                <circle cx="28" cy="28" r="28" fill="white" fill-opacity="0.5"/>
                            </g>
                            <g filter="url(#filter1_bi_1_1114)">
                                <path d="M36.4809 25.6759C37.5589 26.4625 38.0979 26.8559 38.2896 27.3411C38.4574 27.766 38.4574 28.2387 38.2896 28.6636C38.0979 29.1488 37.5589 29.5421 36.4809 30.3288L26.98 37.2619C25.5034 38.3394 24.7651 38.8782 24.1484 38.8597C23.6117 38.8436 23.1101 38.5887 22.7808 38.1647C22.4023 37.6774 22.4023 36.7634 22.4023 34.9354L22.4023 21.0692C22.4023 19.2412 22.4023 18.3273 22.7808 17.84C23.1101 17.4159 23.6117 17.161 24.1484 17.145C24.7651 17.1265 25.5034 17.6653 26.98 18.7428L36.4809 25.6759Z" fill="#4000F8"/>
                            </g>
                            <defs>
                                <filter id="filter0_bi_1_1114" x="-16.2" y="-16.2" width="88.4" height="88.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.1"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1114"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1114" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-5.4"/>
                                <feGaussianBlur stdDeviation="4.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1114"/>
                                </filter>
                                <filter id="filter1_bi_1_1114" x="6.20234" y="0.94453" width="48.4131" height="54.1156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.1"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1114"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1114" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-5.4"/>
                                <feGaussianBlur stdDeviation="4.5"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1114"/>
                                </filter>
                            </defs>
                            </svg>
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
</script>


<style scoped>
 .card-shadow {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);
 }
</style>