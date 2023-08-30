<template>
    <div class=" w-full max-w-[80.5rem] mx-auto py-5 md:py-20 px-4 space-y-28">
        <VideoPlayer 
        placeholder="/images/home/secondsection/placeholder1.png"
        video="http://media.w3.org/2010/05/sintel/trailer.mp4"
        title="Simplify work and host more events"
        subtitle="Watch this short video on how a Cobra works!"
        :dashbed="false"
        />

        <div class=" w-full text-black font-semibold text-5xl font-epilogue text-center space-y-16">
            <h1>Throughout the entire event process <br> - full support for you!</h1>

            <VideoPlayerGroup />
        </div>
    </div>
</template>


<script setup>
 import VideoPlayer from "@/components/UI/VideoPlayer.vue"
 import VideoPlayerGroup from  "@/components/UI/VideoPlayerGroup.vue"
</script>