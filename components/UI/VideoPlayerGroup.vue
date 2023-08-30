<template>
    <div class=" w-full" v-if="selectedItem">
        <div class=" w-full border border-dashed pb-8 border-bgray rounded-[3.5rem]">
            <VideoPlayer :dashbed="true"
                          :title="selectedItem.title"
                          :placeholder="selectedItem.placeholder"
                          :video="selectedItem.video"
                          ref="VideoPlayerRef"
                          />

            <div class=" w-full py-4   max-w-[1208px] mx-auto overflow-x-auto">
                <div class="  w-[1208px] px-2 flex items-center justify-between">
                       <div v-for="(item,index,key) in PlayList" :key="key" class=" flex items-center space-x-2 space-y-8">
                         <VideoCard @click="select(item)"  :title="item.title" :placeholder="item.placeholder" :completed="item.completed" />
                        <svg v-if="index < PlayList.length - 1" xmlns="http://www.w3.org/2000/svg" width="57" height="15" viewBox="0 0 57 15" fill="none">
                            <path d="M56.7071 8.20711C57.0976 7.81658 57.0976 7.18342 56.7071 6.79289L50.3431 0.428932C49.9526 0.0384078 49.3195 0.0384078 48.9289 0.428932C48.5384 0.819457 48.5384 1.45262 48.9289 1.84315L54.5858 7.5L48.9289 13.1569C48.5384 13.5474 48.5384 14.1805 48.9289 14.5711C49.3195 14.9616 49.9526 14.9616 50.3431 14.5711L56.7071 8.20711ZM5 8.5H56V6.5H5V8.5Z" :fill="item.completed ? '#00D5C4' : '#CECECE'"/>
                            <circle cx="4.5" cy="7.5" r="4.5" :fill="item.completed ? '#00D5C4' : '#CECECE'"/>
                        </svg>
                       </div>
                </div>
            </div>

            <div class=" w-full">
                <slot />
            </div>
        </div>
    </div>
</template>


<script setup>
 import VideoPlayer from "@/components/UI/VideoPlayer.vue"
 import VideoCard from "@/components/UI/VideoCard.vue"
 
 const VideoPlayerRef = ref(null)
 const PlayList = ref([
    {
        title:'Plan',
        placeholder:'/images/home/secondsection/placeholder2.webp',
        completed:false,
        video:'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
        title:'Publish',
        placeholder:'/images/home/secondsection/placeholder1.webp',
        completed:false,
        video:'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
        title:'Sell',
        placeholder:'/images/home/secondsection/placeholder3.webp',
        completed:false,
        video:'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
        title:'Perform',
        placeholder:'/images/home/secondsection/placeholder4.webp',
        completed:false,
        video:'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
        title:'Follow up',
        placeholder:'/images/home/secondsection/placeholder5.webp',
        completed:false,
        video:'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
 ])

 const selectedItem = ref(null)


 const select = (item) => {
    VideoPlayerRef.value.stop();
    item.completed = true;
    selectedItem.value = item
 }

 onMounted(() => {
    selectedItem.value = PlayList.value[0]
 })

</script>



<style scoped>
::-webkit-scrollbar {
  height: 0;
}



</style>