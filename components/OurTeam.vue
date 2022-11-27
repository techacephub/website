<template>
    <section class="our_team_section px-5 py-[60px] md:py-[100px]">
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
                <Carousel ref="carousel" :settings="settings" :breakpoints="breakpoints">
                    <slide v-for="team in allTeam" :key="team">
                        <div class="single_team">
                            <div class="flip-container">
                                <div class="flipper">
                                    <div clas="front">
                                    <img :src="`/_nuxt/assets/images/team/${team.teamImage}`" :alt='team.fullname'>

                                    </div>
                                    <div class="back">
                                        <img :src="`/_nuxt/assets/images/team/${team.teamImage}`" :alt='team.fullname'>
                                    </div>

                                </div>
                            </div>
                            <div class="single_team_desc">
                                <div>
                                    <h3 class="single_team_name">{{ team.fullname }} </h3>
                                    <h2 class="single_team_work_place">{{ team.workplace }} </h2>
                                </div>
                                <NuxtLink :to="team.linkedInUrl"><img src="@/assets/images/icons/linkedin.png"
                                        alt="linkedIn">
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
                'fullname': 'Amode Habeeb',
                'workplace': 'Markify',
                'linkedInUrl': 'https://www.linkedin.com/in/habeeb/',
                'teamImage': 'user1.png'
            },
            {
                'fullname': 'Soneye Abimbola',
                'workplace': 'Markify',
                'linkedInUrl': 'https://www.linkedin.com/in/soneye/',
                'teamImage': 'user2.png'
            },
            {
                'fullname': 'Dosunmu Afeez',
                'workplace': 'Kredi Bank',
                'linkedInUrl': 'https://www.linkedin.com/in/afeez/',
                'teamImage': 'user3.png'
            },
            {
                'fullname': 'Omolewa Stephen',
                'workplace': 'HubRoot',
                'linkedInUrl': 'https://www.linkedin.com/in/stephen/',
                'teamImage': 'user1.png'
            },
            {
                'fullname': 'Obadimu Ismail',
                'workplace': 'International',
                'linkedInUrl': 'https://www.linkedin.com/in/ismail/',
                'teamImage': 'ismail.jpg'
            },
            {
                'fullname': 'Omolewa Stephen',
                'workplace': 'Markify',
                'linkedInUrl': 'https://www.linkedin.com/in/stephen/',
                'teamImage': 'user1.png'
            },
            {
                'fullname': 'Obadimu Ismail',
                'workplace': 'Markify',
                'linkedInUrl': 'https://www.linkedin.com/in/habeeb/',
                'teamImage': 'user2.png'
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
    },
})
</script>