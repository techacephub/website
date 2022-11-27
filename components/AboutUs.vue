<template>
    <div class="container mx-auto mb-[50px] md:mb-[100px] mt-[50px] md:mt-[100px] px-5">
        <hr class="w-[20%] md:w-[6%] border border-[#4FB400] border-2 mb-[20px]">
        <div class="flex mb-[30px] flex-col md:flex-row">
            <div class="w-full md:w-[40%]">
                <h1 class="text-[32px] md:text-[40px] font-bold">Who we are</h1>
                <p class="text-[#4FB400] uppercase font-medium">we are building world class techies</p>
            </div>
            <div class="w-full md:w-[60%] mt-[20px] md:mt-[0]">
                <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, inventore ipsa fugiat placeat labore porro deleniti neque illum. Numquam nobis quia natus eos eius, consectetur similique commodi sapiente magnam. Unde!</p>
            </div>
        </div>
        
        <div class="flex gap-5 flex-col md:flex-row">
            <div class="about-us-one h-[215px] md:h-[450px] w-full md:w-[55%] flex flex-col justify-end p-[30px]">
                <h1 class="text-white font-semibold text-[20px]">Training Center</h1>
                <p class="text-white font-semibold text-[14px]">Training Student on Software Development</p>
            </div>
            <div class="w-full md:w-[45%]">
                <div class="about-us-one h-[215px] w-full mb-[20px] flex flex-col justify-end p-[30px]">
                    <h1 class="text-white font-semibold text-[20px]">Training Center</h1>
                    <p class="text-white font-semibold text-[14px]">Training Student on Software Development</p>
                </div>
                <div class="about-us-one h-[215px] w-full flex flex-col justify-end p-[30px]">
                    <h1 class="text-white font-semibold text-[20px]">Training Center</h1>
                    <p class="text-white font-semibold text-[14px]">Training Student on Software Development</p>
                </div>
            </div>
        </div>

        <div class="flex gap-10 mt-[30px] flex-col justify-center lg:flex-row">
            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">What we do</h1>
                <p class="text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus sint delectus. Deleniti repudiandae numquam eaque neque facilis minus delectus ad nulla pariatur, laudantium necessitatibus assumenda, illo magni doloremque officiis.</p>
            </div>

            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">Our vision</h1>
                <p class="text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus sint delectus. Deleniti repudiandae numquam eaque neque facilis minus delectus ad nulla pariatur, laudantium necessitatibus assumenda, illo magni doloremque officiis.</p>
            </div>

            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">our mission</h1>
                <p class="text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus sint delectus. Deleniti repudiandae numquam eaque neque facilis minus delectus ad nulla pariatur, laudantium necessitatibus assumenda, illo magni doloremque officiis.</p>
            </div>
        </div>
    </div>
</template>

<style>
.about-us-one {
    background-image: url("~/assets/images/about-1.png");
    background-color: rgba(13, 4, 4, 0.4);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
}
</style>