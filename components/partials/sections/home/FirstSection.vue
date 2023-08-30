<template>
    <div class=" w-full bg-white pt-8 pb-36 px-4 space-y-28">
       <div class=" w-full space-y-4">
         <div class=" w-full flex lg:flex-row flex-col space-y-2 lg:space-y-0 items-center space-x-2 max-w-[1208px] mx-auto">
            <h1 class=" text-black font-epilogue text-[1rem] lg:text-[1.375rem] font-semibold">
                Clients trusting our solution:
            </h1>
            <div class=" w-full max-w-[51.8125rem] flex justify-between items-center">
                <img src="/images/home/firstsection/clients.svg" alt="clients">
            </div>
        </div>
        <Line />
       </div>


       <div class=" w-full flex flex-col items-center space-y-5 md:space-y-36 max-w-[1206px] mx-auto">
            <h1 class=" text-black text-2xl md:text-5xl font-epilogue font-semibold">Are you still planning your events manually?</h1>

           <div class=" w-full flex flex-col space-y-8 relative ">
             <img src="/images/home/firstsection/links.png" class=" link hidden  absolute -top-[5.2rem] left-10" alt="links">
               <div class=" w-full flex justify-start z-10 relative">
                 <div class="  grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <EventCard title="Are you planning your events using Excel, paper and pen, or Word files?" />
                    <EventCard title="Do you manually publish events on your website and then have to remember to take them offline?" />
                    <EventCard title="Do you send emails to participants manually?" />
                </div>
               </div>
               <div class=" w-full flex justify-end  z-10 relative">
                 <div class="  grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                    <EventCard title="Do you occasionally lose track of payments and outstanding balances?" />
                    <EventCard title="Are you overwhelmed by the increasing number of events, webinars, seminars?" />
                    <EventCard title="Do you have to manually update your cobra CRM to keep track of attendance?" />
                </div>
               </div>
               <div class=" w-full h-full absolute flex">
                <img src="/images/home/firstsection/Vector.svg" class=" m-auto " alt="Vector">
               </div>
           </div>
       </div>
    </div>
</template>



<script setup>
 import Line from "@/components/UI/Line.vue"
 import EventCard from  "@/components/UI/EventCard.vue"
</script>


<style scoped>


@media (min-width: 1188px) {
    .link {
        display: block;
    }
}
</style>