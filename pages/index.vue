<template>
    <div class=" w-full">
        <Hero />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SiventhSection />
        <EighthSection />
    </div>
</template>



<script setup>
 import Hero from "@/components/partials/sections/home/Hero.vue"
 import FirstSection from "@/components/partials/sections/home/FirstSection.vue"
 import SecondSection from  "@/components/partials/sections/home/SecondSection.vue"
 import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue"
 import FourthSection from "@/components/partials/sections/home/FourthSection.vue"
 import FifthSection from "@/components/partials/sections/home/FifthSection.vue"
 import SixthSection from "@/components/partials/sections/home/SixthSection.vue"
 import SiventhSection from "@/components/partials/sections/home/SiventhSection.vue"
 import EighthSection from "@/components/partials/sections/home/EighthSection.vue"


useSeoMeta({
    title: "COBRA - title placeholder",
    description: "add description here...",
})
</script>