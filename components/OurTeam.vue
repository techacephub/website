<template>
    <section class="our_team_section px-5 py-[60px] md:py-[100px]" id="our-team">
        <div class="our_event_container container mx-auto">
            <div class="our_event_heading_area">
                <div class="our_event_heading_left mb-[20px]">
                    <div class="top_line"></div>
                    <h1 class="our_event text-[32px] md:text-[40px]">Our Team</h1>
                    <h4 class="our_event_subtitle">OUR FORMIDABLE TEAM</h4>
                </div>
                <div class="our_event_heading_right hidden md:flex">
                    <img src="~/assets/images/icons/left-arrow.png" alt="left-arrow" @click="prev" />
                    <img src="~/assets/images/icons/right-arrow.png" alt="right-arrow" class="" @click="next" />
                </div>
            </div>
            <div class="our_team_content_are">
                <Carousel ref="carousel" :settings="settings" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true">
                    <slide v-for="team in allTeam" :key="team">
                        <div class="single_team">
                            <div class="flip-container">
                                <nuxt-img :src="team.teamImage" :alt='team.fullname' loading="lazy" />
                            </div>
                            <div class="single_team_desc">
                                <div>
                                    <h3 class="single_team_name">{{ team.fullname }} </h3>
                                    <h2 class="single_team_work_place">{{ team.workplace }} </h2>
                                </div>
                                <NuxtLink :to="team.linkedInUrl"><img src="@/assets/images/icons/linkedin.png"
                                        alt="linkedIn" width="48px" height="48px">
                                </NuxtLink>
                            </div>
                        </div>
                    </slide>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    // name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    data: () => ({
        settings: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
        allTeam: [
            {
                'fullname': 'Soneye Oluwasina',
                'workplace': 'Geneo Softwares',
                'linkedInUrl': 'https://www.linkedin.com/in/soneye-abimbola-sina/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585925/programmers-hub-team/team/shina.png'
            },
            {
                'fullname': 'Olayinka Idowu',
                'workplace': 'Kredi Bank',
                'linkedInUrl': 'https://www.linkedin.com/in/olayinka-idowu-7a92b3166/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585924/programmers-hub-team/team/olayinka.jpg'
            },
            {
                'fullname': 'Dosunmu Afeez',
                'workplace': 'Vzy Inc',
                'linkedInUrl': 'https://www.linkedin.com/in/afeez-dosunmu/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585925/programmers-hub-team/team/dosunmu.png'
            },
            {
                'fullname': 'Omolewa Stephen',
                'workplace': 'Hexagon Seafoods Limited',
                'linkedInUrl': 'https://www.linkedin.com/in/omolewa-stephen-ayobami/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585925/programmers-hub-team/team/omolewa.png'
            },
            {
                'fullname': 'Obadimu Ismail',
                'workplace': 'Concept-Nova',
                'linkedInUrl': 'https://www.linkedin.com/in/ismailobadimu/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585924/programmers-hub-team/team/ismail.jpg'
            },
            {
                'fullname': 'Soneye Abimbola',
                'workplace': 'Freelancer',
                'linkedInUrl': 'https://www.linkedin.com/in/soneyeabimbola/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585925/programmers-hub-team/team/lawal.png'
            },
            {
                'fullname': 'Mustapha Tijani',
                'workplace': 'FBIS Tech',
                'linkedInUrl': 'https://www.linkedin.com/in/tijanidevit/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585924/programmers-hub-team/team/tijani.jpg'
            },
            {
                'fullname': 'Adeyemi Racheal',
                'workplace': 'Kredi Bank',
                'linkedInUrl': 'https://www.linkedin.com/in/cyberbizkit/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585924/programmers-hub-team/team/racheal.jpg'
            },
            {
                'fullname': 'Awodugba Temidayo',
                'workplace': 'Prunny Technologies',
                'linkedInUrl': 'https://www.linkedin.com/in/awodugba-temidayo-alvin-918495151/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585924/programmers-hub-team/team/alvin.jpg'
            },
            {
                'fullname': 'Amode Habeeb',
                'workplace': 'Markify',
                'linkedInUrl': 'https://www.linkedin.com/in/habeeb-amode-3a410318a/',
                'teamImage': 'https://res.cloudinary.com/haayzeed/image/upload/v1669585925/programmers-hub-team/team/habeeb.png'
            },
            
        ],
        breakpoints: {
            // 700px and up
            360: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            600: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
    methods: {
        next() {
            this.$refs.carousel.next();
           
        },
        prev() {
            this.$refs.carousel.prev()
        },
        // getImgUrl(team) {
        //     var images = require('@/assets/', false, /\.png$/)
        //     return images('@/assets/images/team' + team.teamImage + ".png")
        // }
    },
})
</script>