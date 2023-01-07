<template>
  <div class="container mx-auto py-[20px] px-5" id="home">
    <div class="header-section fixed top-0 left-2/4">
    <div class="flex justify-between items-center  w-[90%] md:w-[85%] h-[90px] mx-auto header-menu">
      <div class="w-[20%]">
        <img src="../assets/images/logo.png" alt="programmers hub logo" />
      </div>
      <div class="w-[60%] hidden justify-center xl:flex desktop-link">
        <ul class="flex">
          <li class="px-[10px] mx-[10px]">
            <a
              href="#home"
              class="capitalize font-semibold hover:cursor-pointer"
              >Home</a
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <a
              href="#who-we-are"
              class="capitalize font-semibold hover:cursor-pointer"
              >Who we are</a
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <a
              href="#our-events"
              class="capitalize font-semibold hover:cursor-pointer"
              >Our activities</a
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <a
              href="#our-team"
              class="capitalize font-semibold hover:cursor-pointer"
              >team</a
            >
          </li>
          <li class="px-[10px] mx-[10px]">
            <a
              href="#contact"
              class="capitalize font-semibold hover:cursor-pointer"
              >contacts</a
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
            <a  
              href="#contact"
              class="capitalize bg-[#4FB400] font-semibold text-white py-[10px] px-[20px] rounded-md text-[14px]"
              >join us</a
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
  </div>

    <nav
      class="container mx-auto flex flex-col py-[20px] px-5 bg-white fixed top-0 left-0 z-10 h-screen"
      v-if="menu == true"
    >
      <div class="flex justify-between items-center">
        <span class="cursor-pointer">
          <router-link to="/">
            <img src="../assets/images/logo.png" alt="programmers logo" />
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
          <a
            href="#home"
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >Home</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href="#who-we-are"
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >Who we are</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href="#our-events"
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >Our activities</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href="#our-team"
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >team</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href="#contact"
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >contacts</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href=""
            class="capitalize font-semibold hover:cursor-pointer text-xl" @click="menu = !menu"
            >Login</a
          >
        </li>
        <li class="py-[10px]">
          <a
            href="#contact"
            class="capitalize font-semibold hover:cursor-pointer text-xl bg-[#4FB400] text-white py-[10px] px-[20px] rounded-md" @click="menu = !menu"
            >Join Us</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from "aos";
export default {
    data() {
      return {
        menu: false
      }
    },
    head() {
      return {
        title: 'Welcome to Programmers Hub',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
    methods: {
        openMenu() {
            this.menu = !this.menu;
        }
    },
    mounted() {
      AOS.init();
    }
  }
</script>

<style scoped>
.header-section {
  transform: translateX(-50%);
  z-index: 10;
  background: #fff;
  width: 100%;
}
.desktop-link ul li a {
  position: relative;
}
.desktop-link ul li a::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 3px;
    background: #4FB400;
    /* border: 2px solid #4FB400; */
    transition: width 300ms;
  }

  .desktop-link ul li a:hover::after {
    width: 100%;
  }
</style>
