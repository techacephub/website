<script setup>
import { ref } from "vue";

const events = ref([
  {
    title: "FPI Tech Conference 2022",
    date: "11/11/2022",
    url: "/events/fpi-tech-conference-2022",
  },
  {
    title: "Software Development and Testing Conference 2022",
    date: "12/11/2022",
    url: "/events/fpi-tech-conference-2022",
  },
  {
    title: "Tech in Nigeria",
    date: "13/11/2022",
    url: "/events/fpi-tech-conference-2022",
  },
  {
    title: "Another Tech Conference in Nigeria",
    date: "14/11/2022",
    url: "/events/fpi-tech-conference-2022",
  },
  {
    title: "Testing Conference 2022",
    date: "15/11/2022",
    url: "/events/fpi-tech-conference-2022",
  },
]);
const activeEvent = ref(0);
const groupedEvents = ref([]); // for desktop view
const sliderInterval = ref(null);

/**
 * @description - This function groups the events into arrays of 2 items each for desktop view
 * @returns {void}
 */
const groupEvents = () => {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < events.value.length) {
    if (j === 2) {
      groupedEvents.value.push(temp);
      temp = [];
      j = 0;
    }
    temp.push(events.value[i]);
    i++;
    j++;
  }
  if (temp.length > 0) {
    groupedEvents.value.push(temp);
  }
};

/**
 * @description - This function changes the active event every 5 seconds
 * @returns {void}
 */
const changeSliderOnInterval = () => {
  let i = activeEvent.value || 0;
  sliderInterval.value = setInterval(() => {
    if (i > groupedEvents.value.length - 1) {
      i = 0;
    }
    activeEvent.value = i;
    i++;
  }, 5000);
};

// initial rendering of the component
groupEvents(); // Group the events
changeSliderOnInterval(); // Change the active event every 5 seconds

/**
 * @description - This function changes the active event when the user clicks on the next button and reset the slider interval
 * @returns {void}
 */
const nextSlide = () => {
  // get total events based on screen size
  const totalEvents =
    window.innerWidth < 768 ? events.value.length : groupedEvents.value.length;

  if (activeEvent.value === totalEvents - 1) {
    activeEvent.value = 0;
  } else {
    activeEvent.value++;
  }

  // clear slider interval and start again to avoid multiple intervals
  clearInterval(sliderInterval.value);
  changeSliderOnInterval();
};

/**
 * @description - This function changes the active event when the user clicks on the previous button and reset the slider interval
 * @returns {void}
 */
const prevSlide = () => {
  if (activeEvent.value === 0) {
    // get total events based on screen size
    const totalEvents =
      window.innerWidth < 768
        ? events.value.length
        : groupedEvents.value.length;

    activeEvent.value = totalEvents - 1;
  } else {
    activeEvent.value--;
  }

  // clear slider interval and start again to avoid multiple intervals
  clearInterval(sliderInterval.value);
  changeSliderOnInterval();
};
</script>

<template>
  <section
    class="relative md:absolute bottom-0 md:right-0 lg:right-16 xl:right-32 4xl:right-56 w-full mx-auto md:w-2/4 xl:w-1/3 bg-secondary p-8 md:p-4 lg:p-8 md:h-48 lg:h-56"
  >
    <div class="relative overflow-hidden">
      <div class="mb-5">
        <h2 class="text-white lg:text-lg font-bold">Upcoming Events</h2>
        <div class="h-[0.15rem] w-12 bg-primary"></div>
      </div>

      <div class="relative h-24 md:hidden">
        <div
          v-for="(event, i) in events"
          :id="`slide-${i}`"
          :key="i"
          :class="`${
            activeEvent === i ? 'translate-x-0' : '-translate-x-full'
          }`"
          class="absolute inset-0 transition-all ease-in-out duration-700 transform backface-hidden"
        >
          <div class="text-white">
            <div class="h-24 flex flex-col gap-2 justify-between">
              <div>
                <p class="font-semibold">
                  {{ event.date }}
                </p>
                <p class="font-medium">
                  {{ event.title }}
                </p>
              </div>
              <nuxt-link
                :to="event.url"
                class="text-xs font-thin underline hover:text-primary"
                >View Details</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative h-24 hidden md:block">
        <div
          v-for="(events, i) in groupedEvents"
          :id="`slide-${i}`"
          :key="i"
          :class="`${
            activeEvent === i ? 'translate-x-0' : '-translate-x-full'
          }`"
          class="absolute inset-0 transition-all ease-in-out duration-700 transform backface-hidden"
        >
          <div class="grid grid-cols-2 gap-4 lg:gap-10 text-white">
            <div
              v-for="event in events"
              :key="event.title"
              class="h-24 flex flex-col gap-2 justify-between"
            >
              <div>
                <p class="md:text-sm lg:text-base font-semibold">
                  {{ event.date }}
                </p>
                <p class="md:text-sm lg:text-base font-medium">
                  {{ event.title }}
                </p>
              </div>
              <nuxt-link
                :to="event.url"
                class="text-xs font-thin underline hover:text-primary"
                >View Details</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- slider control icons  -->
      <div class="w-full flex justify-end gap-2">
        <!-- left slider control icon  -->
        <svg
          @click="prevSlide"
          class="cursor-pointer hover:-translate-x-1 transform transition-all ease-in-out duration-700"
          width="47"
          height="35"
        >
          <rect width="47" height="35" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_24_177"
                transform="translate(0.0744681) scale(0.00886525 0.0104167)"
              />
            </pattern>
            <image
              id="image0_24_177"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVR4nO3avU7DQBCF0V1eGjrS8sSUQ4EimWTt2IV3kOecNimu5lOUH6U1AAAAAAAAAAAAAACAhYi4ZW8oKyJuERHZO0q6H1+ABMvjCzDZ4/EFmGh0fAEmWTu+ABNsHV+Ak706vgAn2nN8AU6y9/gCnODI8QU4rm89GL+/7XxO2lJC7/3Pzd/Wnuj4cwwDOP48TwEcf67RK+B7+orCngL03r9aax8JW0oavgeIMM/qpyAR/omIePdFLNmRCNlbL2tvhOydl7YnQvbGy3sVIXtfCVsRsreVsRYhe1cpowjZm8p5jJC9p6RlhOwtZd0jZO8oLfw9HQAAAAAAAAAAAAAAKOgHgjF1akUl5JwAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
        <!-- right slider control icon  -->

        <svg
          @click="nextSlide"
          class="cursor-pointer hover:translate-x-1 transform transition-all ease-in-out duration-700"
          width="44"
          height="35"
        >
          <rect
            width="44"
            height="35"
            transform="matrix(-1 0 0 1 44 0)"
            fill="url(#pattern1)"
          />
          <defs>
            <pattern
              id="pattern1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_24_178"
                transform="translate(0.0454545) scale(0.0094697 0.0104167)"
              />
            </pattern>
            <image
              id="image0_24_178"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVR4nO3avU7DQBCF0V1eGjrS8sSUQ4EimWTt2IV3kOecNimu5lOUH6U1AAAAAAAAAAAAAACAhYi4ZW8oKyJuERHZO0q6H1+ABMvjCzDZ4/EFmGh0fAEmWTu+ABNsHV+Ak706vgAn2nN8AU6y9/gCnODI8QU4rm89GL+/7XxO2lJC7/3Pzd/Wnuj4cwwDOP48TwEcf67RK+B7+orCngL03r9aax8JW0oavgeIMM/qpyAR/omIePdFLNmRCNlbL2tvhOydl7YnQvbGy3sVIXtfCVsRsreVsRYhe1cpowjZm8p5jJC9p6RlhOwtZd0jZO8oLfw9HQAAAAAAAAAAAAAAKOgHgjF1akUl5JwAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
    </div>
  </section>
</template>
