<template>
  <div class="container mx-auto py-[20px] px-5">
    <div class="flex justify-between items-center">
      <div class="w-[20%]">
        <img src="../assets/images/logo.png" alt="programmers hub logo" />
      </div>
      <div class="w-[60%] hidden justify-center xl:flex">
        <ul class="flex">
          <li class="px-[10px] mx-[10px]">
            <NuxtLink
              to=""
              class="capitalize font-semibold hover:cursor-pointer"
              >Home</NuxtLink
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <NuxtLink
              to=""
              class="capitalize font-semibold hover:cursor-pointer"
              >Who we are</NuxtLink
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <NuxtLink
              to=""
              class="capitalize font-semibold hover:cursor-pointer"
              >Our activities</NuxtLink
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <NuxtLink
              to=""
              class="capitalize font-semibold hover:cursor-pointer"
              >team</NuxtLink
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <NuxtLink
              to=""
              class="capitalize font-semibold hover:cursor-pointer"
              >contacts</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="w-[20%] flex justify-end">
        <ul class="justify-end hidden xl:flex">
          <li class="px-[10px] mx-[10px]">
            <NuxtLink to="" class="capitalize font-semibold">Login</NuxtLink>
          </li>
          <li class="px-[10px] ml-[10px]">
            <NuxtLink
              to=""
              class="capitalize bg-[#4FB400] font-semibold text-white py-[10px] px-[20px] rounded-md text-[14px]"
              >join us</NuxtLink
            >
          </li>
        </ul>
        <span
          class="mx-2 block xl:hidden"
          v-if="menu != true"
          @click="openMenu()"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 12H3.5M21.5 19H3.5H21.5ZM21.5 5H3.5H21.5Z"
              stroke="#000"
              stroke-miterlimit="10"
            />
          </svg>
        </span>
      </div>
    </div>

    <nav
      class="container mx-auto flex flex-col py-[20px] px-5 bg-white fixed top-0 left-0 z-10 h-screen"
      v-if="menu == true"
    >
      <div class="flex justify-between items-center">
        <span class="cursor-pointer">
          <router-link to="/">
            <img
              src="../assets/images/logo.png"
              alt="programmers logo"
            />
          </router-link>
        </span>

        <span class="mx-2" v-if="menu == true" @click="menu = !menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.5"
            height="13.5"
            viewBox="0 0 13.5 13.5"
          >
            <g
              id="Group_10345"
              data-name="Group 10345"
              transform="translate(-5.25 -5.25)"
            >
              <path
                id="Path_4036"
                data-name="Path 4036"
                d="M5.47,5.47a.75.75,0,0,1,1.061,0l12,12a.75.75,0,0,1-1.061,1.061l-12-12A.75.75,0,0,1,5.47,5.47Z"
                fill="#a1a1aa"
                fill-rule="evenodd"
              />
              <path
                id="Path_4037"
                data-name="Path 4037"
                d="M18.53,5.47a.75.75,0,0,1,0,1.061l-12,12A.75.75,0,0,1,5.47,17.47l12-12A.75.75,0,0,1,18.53,5.47Z"
                fill="#a1a1aa"
                fill-rule="evenodd"
              />
            </g>
          </svg>
        </span>
      </div>

      <!-- mobile nav -->
      <ul class="flex flex-col items-center bg-white py-4 w-full" v-if="menu">
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >Home</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >Who we are</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >Our activities</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >team</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >contacts</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl"
            >Login</NuxtLink
          >
        </li>
        <li class="py-[10px]">
          <NuxtLink to="" class="capitalize font-semibold hover:cursor-pointer text-xl bg-[#4FB400] text-white py-[10px] px-[20px] rounded-md"
            >Join Us</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);

const openMenu = () => {
  menu.value = !menu.value;
};
</script>
