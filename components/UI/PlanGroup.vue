<template>
    <div class=" w-full flex flex-col items-center space-y-16 px-4">
            <div class=" w-full bg-white rounded-[0.9375rem] card-shadow p-2 max-w-[23.1875rem] grid grid-cols-2">
                <button @click="select(0)" :class="{'bg-black text-white':selected === 0,'bg-white text-black':selected !=0}" class=" duration-200 text-center w-full text-base font-epilogue  font-semibold h-12 rounded-lg  ">
                    Monthly
                </button>
                 <button @click="select(1)" :class="{'bg-black text-white':selected === 1,'bg-white text-black':selected !=1}"  class=" duration-200 text-center w-full text-base font-epilogue  font-semibold h-12 rounded-lg  ">
                    Annually
                </button>
            </div>

            <div class=" w-full flex lg:flex-row flex-col  lg:justify-between items-center lg:space-x-4  space-y-4 lg:space-y-0 ">
                <PlanCard  v-for="(plan,index,key) in plans" :key="key" :index="index" :item="plan" :monthly="selected === 0" />
            </div>
    </div>
</template>


<script setup>
 import PlanCard from "@/components/UI/PlanCard.vue"
 const selected = ref(0);
 const plans = ref([
    {
        title:'Event Enterprise',
        description:'For those who value individual support and the maximum level of security and assistance.',
        monthly_price:'699',
        yearly_price:'9000',
        popular:false,
        features:[
            '∞ Event Website',
            'Up to 400 Participants per month',
            'Accepting Online Payments',
            '∞ Users',
            'Address Validation and Geocoding',
            'Personal contact person',
            'Discount Coupons',
            'Customizable Emails & free Email to Participants.',
            'Single-sign-on',
            'Own domain (coming soon)',
            'Group ticket bookings'
            ],
        height:'44.6875'
    },
    {
        title:'Event Premium',
        description:'You regularly organize events and would like to be optimally supported? Automate almost all steps.',
        monthly_price:'159',
        yearly_price:'5000',
        popular:true,
        features:[
            '3 Event Website',
            'Up to 400 Participants per month',
            'Accepting Online Payments',
            '∞ Users',
            'Address Validation and Geocoding',
            'Email and Phone Support',
            'Discount Coupons',
            'Customizable Emails & free Email to Participants.'
            ],
        height:'49.1875'
    },
      {
        title:'Event Basic',
        description:'Start your professional event organization with cobra Event Basic.',
        monthly_price:'59',
        yearly_price:'500',
        popular:false,
        features:[
            '1 Event Website',
            'Up to 40 Participants per month',
            'Accepting Online Payments',
            '3 users basic',
            'Support via Email',
            ],
        height:'44.6875'
    }
 ])
 const select = (item) => {
    selected.value = item
 }
</script>



<style scoped>
.card-shadow {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.08);

}
</style>