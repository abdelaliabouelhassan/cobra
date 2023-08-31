<template>
    <button class="btn w-[7.5rem] h-[7.5rem] flex hover:scale-95">
            <svg v-if="!sm" class=" m-auto" xmlns="http://www.w3.org/2000/svg" width="35" height="48" viewBox="0 0 35 48" fill="none">
            <g filter="url(#filter0_bi_1_594)">
                <path d="M29.9154 18.8301C32.3109 20.5782 33.5087 21.4523 33.9346 22.5306C34.3075 23.4747 34.3075 24.5253 33.9346 25.4694C33.5087 26.5477 32.3109 27.4218 29.9154 29.1699L10.1726 43.5768C6.89118 45.9713 5.25047 47.1686 3.88019 47.1275C2.68741 47.0918 1.57289 46.5254 0.840913 45.5829C2.24787e-07 44.5002 2.9503e-07 42.4691 4.35517e-07 38.4069L1.432e-06 9.59311C1.57249e-06 5.5309 1.64273e-06 3.49979 0.840914 2.41709C1.57289 1.47465 2.68742 0.908234 3.88019 0.872491C5.25048 0.831428 6.89119 2.0287 10.1726 4.42325L29.9154 18.8301Z" fill="#4000F8"/>
            </g>
            <defs>
                <filter id="filter0_bi_1_594" x="-36" y="-35.1284" width="106.214" height="118.257" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="18"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_594"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_594" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-12"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_594"/>
                </filter>
            </defs>
            </svg>
            <svg v-else class=" m-auto" xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                <g filter="url(#filter0_bi_1_1116)">
                    <path d="M14.4809 8.67591C15.5589 9.46255 16.0979 9.85586 16.2896 10.3411C16.4574 10.766 16.4574 11.2387 16.2896 11.6636C16.0979 12.1488 15.5589 12.5421 14.4809 13.3288L4.98001 20.2619C3.50337 21.3394 2.76506 21.8782 2.14843 21.8597C1.61168 21.8436 1.11014 21.5887 0.780754 21.1647C0.402344 20.6774 0.402344 19.7634 0.402344 17.9354L0.402344 4.06924C0.402344 2.24125 0.402345 1.32725 0.780755 0.840036C1.11014 0.415937 1.61168 0.161049 2.14843 0.144965C2.76506 0.126486 3.50338 0.66526 4.98002 1.74281L14.4809 8.67591Z" fill="#4000F8"/>
                </g>
                <defs>
                    <filter id="filter0_bi_1_1116" x="-15.7977" y="-16.0555" width="48.4131" height="54.1156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="8.1"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1116"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1116" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-5.4"/>
                    <feGaussianBlur stdDeviation="4.5"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.862 0 0 0 0 0.85 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_1116"/>
                    </filter>
                </defs>
             </svg>
    </button>
</template>


<script setup>
  const props = defineProps({
    sm:{
        type:Boolean,
        default:false
    },
  })
</script>

<style scoped>
 .btn {
border-radius: 7.5rem;
background: rgba(255, 255, 255, 0.50);
box-shadow: 0px -12px 20px 0px rgba(255, 255, 255, 0.25) inset;
backdrop-filter: blur(8px);
 }
</style>