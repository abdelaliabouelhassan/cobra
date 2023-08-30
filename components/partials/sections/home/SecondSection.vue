<template>
    <div class=" w-full max-w-[80.5rem] mx-auto py-5 md:py-20 px-4 space-y-28">
        <VideoPlayer 
        placeholder="/images/home/secondsection/placeholder1.webp"
        video="http://media.w3.org/2010/05/sintel/trailer.mp4"
        title="Simplify work and host more events"
        subtitle="Watch this short video on how a Cobra works!"
        :dashbed="false"
        />

        <div class=" w-full text-black font-semibold text-5xl font-epilogue text-center space-y-16">
            <h1 class=" text-2xl md:text-5xl text-black text-center font-semibold font-epilogue">Throughout the entire event process <br> - full support for you!</h1>

            <VideoPlayerGroup>
                <div class=" w-full pt-8 px-4 space-y-14 ">
                    <Line />

                    <div class=" w-full max-w-[1045.86px] mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 items-center md:items-start md:justify-between">
                        <div class=" w-full max-w-[415px] h-[164px] relative">
                            <div class=" absolute -top-28 -right-28">
                                <svg xmlns="http://www.w3.org/2000/svg" width="603" height="452" viewBox="0 0 603 452" fill="none">
                                <g opacity="0.45" filter="url(#filter0_f_226_397)">
                                    <path d="M124.583 178.377C111.006 228.843 179.291 291.087 277.102 317.402C374.914 343.718 465.213 324.141 478.79 273.675C492.368 223.209 424.083 160.965 326.271 134.649C228.46 108.333 138.161 127.911 124.583 178.377Z" fill="#85AFE0"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_226_397" x="0.863281" y="0.950684" width="601.647" height="450.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="61" result="effect1_foregroundBlur_226_397"/>
                                    </filter>
                                </defs>
                                </svg>
                            </div>
                            <img src="/images/home/secondsection/ppl.png" class=" z-10 relative w-full h-full object-cover" alt="ppl">
                        </div>

                        <div class=" w-full max-w-[35rem] flex flex-col items-start space-y-4">
                            <p class=" font-epilogue text-lg font-medium text-black text-start">Book an appointment - often possible already 2 hours after booking. We give you an introduction, afterwards you can test for 10 days free of charge.</p>
                             <button
                            class="text-white font-medium text-sm tracking-[0.0175rem] px-8 rounded-lg py-3 bg-primary font-epilogue hover:bg-opacity-80 hover:text-gray-900 duration-200"
                            >
                            Book your Demo
                            </button>
                        </div>
                    </div>
                </div>
            </VideoPlayerGroup>
        </div>


      
    </div>

      <div class=" w-full sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 max-w-[1527px] mx-auto pb-10">
            <ReviewCard v-for="(item,index,key) in reviews" :key="key" :logo="item.logo" :text="item.text" :image="item.image" :name="item.name" :job="item.job" />
     </div>
</template>


<script setup>
 import VideoPlayer from "@/components/UI/VideoPlayer.vue"
 import VideoPlayerGroup from  "@/components/UI/VideoPlayerGroup.vue"
 import Line from  "@/components/UI/Line.vue"
 import ReviewCard from "@/components/UI/ReviewCard.vue"


 const reviews = ref([
    {
        logo:'/images/home/secondsection/company1.svg',
        text:'Seitdem ich cobra Events fur unsere immer haufiger werdenden Fachhandler-Tagungen mit vorgefertigten Event-Schablonen verwende, habe ich viel mehr Zeit fur die Konzeption und Inhalte statt mich mit der Organisation zu Fu mit Word und Excel zu plagen. Auch haben wir bereits einen sehr gr0 en Kunden-Event mit QR Code Einlasskarten durchgefuhrt.',
        image:'/images/home/secondsection/Judith.svg',
        name:'Judith Black',
        job:'CEO of Tuple'
    },
    {
        logo:'/images/home/secondsection/company2.svg',
        text:'Zeitersparnis 1st ein groQer Vorteil bei der Verwendung von cobra Events, allerdings 1st das Wichtigste fur mich die Fehlervermeidung. Bei unseren Events hatten wir haufig verschiedene Excel Listen mit denen wir die Teilnehmer einluden. Diese Listen entstanden in verschiedenen Abteilungen unseres Unternehmens. Bei der Zusammenfuhrung gab es stets Fehler die dazu fuhrten, dass wichtige Personen nicht eingeladen wurden bezw. auch veraltete Anschriften verwendet wurden. Das 1st nun dank EventPro nun fur immer vorbei.',
        image:'/images/home/secondsection/Joseph.webp',
        name:'Joseph Rodriguez',
        job:'CEO of Tuple'
    },
     {
        logo:'/images/home/secondsection/company3.svg',
        text:'Wir machen pro Jahr uber100 Veranstaltungen und dass uber unterschiedliche Firmen unserer Gruppe. EventPro ermoglicht uns die Nutzung verschiedener Homepages fur das Hochladen der einzelnen Veranstaltungen, dabei steuern wir unsere Events zentral und behalten stets den Uberblick uber die jeweilige Buchungssituation. Auch steuern wir das Stattfinden der Events Mindest Teilnehmerzahlen. Das hinterlegen wir pro Event und dann wird automatisch abgesagt, wenn diese nicht zum Zeitpunkt x erreicht wurde.',
        image:'/images/home/secondsection/Judith1.webp',
        name:'Judith Black',
        job:'CEO of Tuple'
    },
     {
        logo:'/images/home/secondsection/company4.svg',
        text:'Als CRM System verwenden wir die Software-Losung cobra. Event 1st fur mich die ideale Erganzung zu unserem CRM. Die Anbindung 1st fehlerfrei und kinderleicht und unsere EventLosung EventPro 1st durch die Verbindung mit unserer langjahrig aufgebauten cobra Software- Installation direkt extrem leistungsfahig, denn alle potentiellen Einzuladenden haben wir ja bereits im CRM :_). Toll 1st auch die Ruckmeldung von EventPro direkt in unser CRM hinein. Das gibt uns maximale Transparenz und Ubersicht.',
        image:'/images/home/secondsection/Joseph1.webp',
        name:'Joseph Rodriguez',
        job:'CEO of Tuple'
    }
 ])
</script>