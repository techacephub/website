<script setup>
import { ref } from "vue";
import sliderImage1 from "~/assets/images/slider-1.png";

const slideItems = ref([
  {
    image: sliderImage1,
    caption: "Building a Community of Techies",
  },
  {
    image: sliderImage1,
    caption: "Building a Community of Techies",
  },
]);

const activeSlider = ref(0);

const changeSlider = () => {
  let i = 0;
  setInterval(() => {
    if (i > slideItems.value.length - 1) {
      i = 0;
    }
    activeSlider.value = i;
    i++;
  }, 1000);
};

// changeSlider();
</script>

<template>
  <section>
    <div class="relative slide">
      <div class="carousel-inner relative overflow-hidden w-full h-[90vh]">
        <div
          v-for="(item, i) in slideItems"
          :id="`slide-${i}`"
          :key="i"
          :class="`${activeSlider === i ? 'opacity-100' : 'opacity-0'}`"
          class="relative block inset-0 relative -mr-[100%] w-full transform transition-all duration-700 ease-in-out ease-in h-56 lg:h-[90vh] bg-no-repeat lg:bg-center bg-cover lg:bg-cover pt-10 lg:pt-52 px-8 lg:px-32 float-left backface-hidden"
          :style="`background-image: url(${item.image});`"
        >
          <div class="h-1 w-24 bg-primary"></div>
          <h1
            class="text-xl lg:text-5xl text-dark font-bold leading-tight w-32 lg:w-64 mt-2 lg:mt-16"
          >
            {{ item.caption }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
