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
          <img
            src="~/assets/images/icons/left-arrow.png"
            alt="left-arrow"
            @click="prev"
          />
          <img
            src="~/assets/images/icons/right-arrow.png"
            alt="right-arrow"
            class=""
            @click="next"
          />
        </div>
      </div>
      <div class="our_team_content_are">
        <Carousel
          ref="carousel"
          :settings="settings"
          :breakpoints="breakpoints"
          :autoplay="3000"
          :wrap-around="true"
        >
          <slide v-for="team in allTeam" :key="team">
            <div class="single_team">
              <div class="flip-container">
                <img
                  :data-src="team.teamImage"
                  :alt="team.fullname"
                  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  class="lazyload"
                />
              </div>
              <div class="single_team_desc">
                <div>
                  <h3 class="single_team_name">{{ team.fullname }}</h3>
                  <h2 class="single_team_work_place">{{ team.workplace }}</h2>
                </div>
                <NuxtLink :to="team.linkedInUrl"
                  ><img
                    src="@/assets/images/icons/linkedin.png"
                    alt="linkedIn"
                    width="48px"
                    height="48px"
                  />
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
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  // name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 3,
      snapAlign: "start",
    },
    allTeam: [
      {
        fullname: "Soneye Oluwasina",
        workplace: "Geneo Softwares",
        linkedInUrl: "https://www.linkedin.com/in/soneye-abimbola-sina/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854578/programmers-hub-team/team/bimbo_kytqkp.webp",
      },
      {
        fullname: "Olayinka Idowu",
        workplace: "Kredi Bank",
        linkedInUrl: "https://www.linkedin.com/in/olayinka-idowu-7a92b3166/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/Olayinka_jghsfm.webp",
      },
      {
        fullname: "Dosunmu Afeez",
        workplace: "Vzy Inc",
        linkedInUrl: "https://www.linkedin.com/in/afeez-dosunmu/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705855175/programmers-hub-team/team/afeez_s6t1hf.webp",
      },
      {
        fullname: "Omolewa Stephen",
        workplace: "Hexagon Seafoods Limited",
        linkedInUrl: "https://www.linkedin.com/in/omolewa-stephen-ayobami/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/lewa_zociyh.webp",
      },
      {
        fullname: "Obadimu Ismail",
        workplace: "Concept-Nova",
        linkedInUrl: "https://www.linkedin.com/in/ismailobadimu/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/Ismail_bu3akf.webp",
      },
      {
        fullname: "Soneye Abimbola",
        workplace: "Freelancer",
        linkedInUrl: "https://www.linkedin.com/in/soneyeabimbola/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854578/programmers-hub-team/team/bimbo_kytqkp.webp",
      },
      {
        fullname: "Mustapha Tijani",
        workplace: "FBIS Tech",
        linkedInUrl: "https://www.linkedin.com/in/tijanidevit/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/tj_zduz7i.webp",
      },
      {
        fullname: "Adeyemi Racheal",
        workplace: "Kredi Bank",
        linkedInUrl: "https://www.linkedin.com/in/cyberbizkit/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/cyber_sqnzu7.webp",
      },
      {
        fullname: "Awodugba Temidayo",
        workplace: "Prunny Technologies",
        linkedInUrl:
          "https://www.linkedin.com/in/awodugba-temidayo-alvin-918495151/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854579/programmers-hub-team/team/alvin_d8etsg.webp",
      },
      {
        fullname: "Amode Habeeb",
        workplace: "Markify",
        linkedInUrl: "https://www.linkedin.com/in/habeeb-amode-3a410318a/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854577/programmers-hub-team/team/habeeb_xdlyuh.webp",
      },
      {
        fullname: "Abimbola Olawale",
        workplace: "Creative Advanced Tech.",
        linkedInUrl: "https://www.linkedin.com/in/bimbolawale/",
        teamImage:
          "https://res.cloudinary.com/haayzeed/image/upload/v1705854580/programmers-hub-team/team/wale_dwhp0o.webp",
      },
    ],
    breakpoints: {
      // 700px and up
      360: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      600: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "left",
      },
    },
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
    // getImgUrl(team) {
    //     var images = require('@/assets/', false, /\.png$/)
    //     return images('@/assets/images/team' + team.teamImage + ".png")
    // }
  },
});
</script>
