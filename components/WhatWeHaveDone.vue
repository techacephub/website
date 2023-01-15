<script setup>
import { ref } from "vue";
import sliderImage5 from "~/assets/images/slider-5.webp";
import sliderImage3 from "~/assets/images/slider-3.webp";
import sliderImage2 from "~/assets/images/slider-2.webp";

const images = ref([
  sliderImage2,
  sliderImage3,
  sliderImage5,
  sliderImage5,
  sliderImage2,
  sliderImage3,
]);
</script>
<template>
  <div class="mx-auto px-5 py-[60px] md:py-[100px] bg-[#18309f]">
    <div class="container mx-auto">
      <hr class="border-2 w-20 mb-4 border-[#4fb400]" />
      <h1 class="text-white font-bold text-[32px] md:text-[40px]">
        What we have done
      </h1>
      <p class="text-white text-md">Highlight of what we have done</p>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-6"
      >
        <div
          v-for="(image, i) in images"
          :key="i"
          class="bg-white flex justify-center transition ease-in-out hover:scale-20 duration-300 box_1 h-64"
        >
          <img
            :data-src="image"
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            class="w-full h-full lazyload"
            alt="what we have done"
            loading="lazy"
            format="webp"
          />
        </div>
      </div>
    </div>
  </div>
  <GetInTouch />
</template>
