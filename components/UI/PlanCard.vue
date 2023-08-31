<template>
    <div class=" w-full max-w-[23.5rem] px-4 bg-white rounded-3xl space-y-5" :style="{'height':item.height + 'rem;'}"
         :class="{'border border-dashed border-bgray mb-2  mt-10 py-8':!item.popular,'card-shadow ':item.popular}"
    >
        <div class=" flex flex-col items-center w-full space-y-2">
            <div v-if="item.popular">
                <img src="/images/home/eighthsection/popular.png" alt="">
            </div>
            <h1 class=" text-black font-epilogue text-3xl font-semibold">{{item.title}}</h1>
            <p class=" text-grayscale text-center text-base font-inter font-normal max-w-[18.5rem] border-b border-dashed border-bgray " :class="{'pb-6':index == 0,'pb-5':index == 1 , 'pb-16':index == 2}">
               {{item.description}} 
            </p>
        </div>

        <div class=" w-full flex flex-col items-center space-y-2 max-w-[18.5rem] mx-auto ">
            <span class=" text-black font-inter text-[2rem] font-medium">{{monthly ? item.monthly_price : item.yearly_price}}€ <span class=" text-tgray font-inter font-normal text-[0.875rem]">/ {{monthly ? 'Monthly' : 'Yearly'}}</span></span>
             <button   class=" w-full text-white font-semibold text-[0.8rem] lg:text-[1rem] lg:tracking-[0.02rem] px-4 lg:px-8 rounded-lg py-2 lg:py-3 bg-primary font-epilogue hover:bg-blue-400 hover:text-white duration-200">
                Subscribe
            </button>

             <div class=" w-full flex flex-col items-start space-y-1 pt-6">
               <div class=" flex items-center space-x-2" v-for="(feature,index,key) in item.features" :key="key">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                            <path d="M13.5895 6.92248H7.42751C6.55399 6.92248 5.36738 6.36475 4.79118 5.68125L0 0H6.92761C7.80112 0 8.98773 0.557736 9.56394 1.24123L13.8499 6.32373C14.1262 6.65181 14.0104 6.92248 13.5895 6.92248Z" fill="#00D5C4"/>
                        </svg>
                    </div>
                    <span class=" text-base font-inter text-grayscale">{{feature}}</span>
                </div>
            </div>
        </div>


       
    </div>
</template>


<script setup>
     const props = defineProps({
        item:{
            type:Object,
        },
        monthly:{
            type:Boolean,
            default:true,
        },
        index:{
            type:Number
        }
     })
</script>


<style scoped>
 .card-shadow {
    box-shadow: 0px 24px 48px 0px rgba(0, 0, 0, 0.09);
 }
</style>