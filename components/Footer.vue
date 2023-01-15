<template>
  <div class="bg-[#18309F] px-10">
    <div
      class="container mx-auto pt-[50px] py-[20px] flex flex-col md:flex-row"
    >
      <div class="w-full md:w-[25%]">
        <h4 class="text-white mb-[20px] font-semibold text-[20px]">
          Quick Links
        </h4>
        <ul class="text-white text-[14px]">
          <li class="mb-[15px]">
            <a href="" name="who-we-are">Who we are</a>
          </li>
          <li class="mb-[15px]">
            <a href="" name="events">Events</a>
          </li>
          <li class="mb-[15px]">
            <a href="" name="teams">Team</a>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-[25%]">
        <h4 class="text-white mb-[20px] font-semibold text-[20px]">
          Follow Us
        </h4>
        <ul class="text-white text-[14px]">
          <li class="mb-[15px]">
            <a href="" name="facebook">Facebook</a>
          </li>
          <li class="mb-[15px]">
            <a href="" name="instagram">Instagram</a>
          </li>
          <li class="mb-[15px]">
            <a href="" name="twitter">Twitter</a>
          </li>
          <li class="mb-[15px]">
            <a href="" name="linkedin">Linkedin</a>
          </li>
        </ul>
      </div>

      <div class="w-full md:w-[50%] mt-[20px] md:mt-[0]">
        <label class="text-white text-[14px]" for=""
          >Join our newsletters to stay up to date</label
        >
        <div class="flex gap-4">
          <input
            type="text"
            class="w-full h-10 text-gray-800 text-[14px] border-0 px-4 focus:ring-0"
            placeholder="Enter email address"
          />
          <button class="bg-[#4FB400] font-semibold text-white h-10 px-[20px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-[30px]">
      <hr class="border-t border-white w-full" />
      <p class="text-white text-[12px] text-center mt-[30px]">
        &copy; {{ new Date().getFullYear() }}, Programmers' Hub | All rights
        reserved
      </p>
    </div>
  </div>
</template>
