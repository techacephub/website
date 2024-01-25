<script setup>
import { ref } from "vue";
import sliderImage1 from "~/assets/images/slider-2.webp";
import sliderImage3 from "~/assets/images/slider-3.webp";
import sliderImage4 from "~/assets/images/slider-4.webp";

const slideItems = ref([
  {
    image: sliderImage1,
    caption: "Infinite Possibilities, One Community: Your Gateway to Tech Brilliance",
  },
  {
    image: sliderImage3,
    caption: "Connecting Innovators: Where Tech Minds Converge for Excellence",
  },
  {
    image: sliderImage4,
    caption: "Tech Hub Unleashed: Elevate Your Skills, Connect with Peers",
  },
]);

const activeSlider = ref(0);

/**
 * @description - This function changes the active event every 5 seconds
 * @returns {void}
 */
const changeSliderOnInterval = () => {
  let i = 0;
  setInterval(() => {
    if (i > slideItems.value.length - 1) {
      i = 0;
    }
    activeSlider.value = i;
    i++;
  }, 5000);
};

changeSliderOnInterval();
</script>

<template>
  <section class="relative mt-[50px]">
    <div class="relative overflow-hidden w-full lg:h-[90vh] 4xl:h-[80vh]">
      <div
        v-for="(item, i) in slideItems"
        :id="`slide-${i}`"
        :key="i"
        :class="`${activeSlider === i ? 'opacity-100' : 'opacity-0'}`"
        class="relative block inset-0 slider-image -mr-[100%] w-full transform transition-all duration-700 ease-in-out ease-in h-56 md:h-[50vh] lg:h-[100vh] 4xl:h-[80vh] pt-10 md:pt-16 lg:pt-32 xl:pt-52 4xl:pt-72 px-8 md:px-16 lg:px-24 xl:pt-32 4xl:px-56 float-left backface-hidden relative"
      >
        <img
          :data-src="item.image"
          src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          :alt="item.caption"
          class="w-full h-56 md:h-[50vh] lg:h-[100vh] 4xl:h-[80vh] absolute top-0 left-0 lazyload"
          style="z-index: -1"
        />
        <div class="h-1 w-24 bg-white"></div>
        <div class="linear-background"></div>
        <h1
          class="text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#fff] font-bold w-32 md:w-48 lg:w-72 xl:w-1/2 4xl:w-1/3 mt-2 md:mt-8 lg:mt-16 4xl:mt-32"
        >
          {{ item.caption }}
        </h1>
      </div>
    </div>
    <UpcomingEvents />
  </section>
</template>

<style scoped>
.linear-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(79, 180, 0, 0.3);
  /* background: linear-gradient(
    270.31deg,
    rgba(255, 255, 255, 0) 35.65%,
    #ffffff 94.18%
  ); */
}
</style>
