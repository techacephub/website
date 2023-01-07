<template>
    <div class="container mx-auto mb-[50px] md:mb-[100px] mt-[50px] md:mt-[100px] px-5" id="who-we-are">
        <hr class="w-[20%] md:w-[6%] border border-[#4FB400] border-2 mb-[20px]">
        <div class="flex mb-[30px] flex-col md:flex-row">
            <div class="w-full md:w-[40%]">
                <h1 class="text-[32px] md:text-[40px] font-bold">Who we are</h1>
                <p class="text-[#4FB400] uppercase font-medium">we are building world class techies</p>
            </div>
            <div class="w-full md:w-[60%] mt-[20px] md:mt-[0]">
                <p class="font-medium leading-8">We are a team of passionate professionals dedicated to helping others succeed in the world of technology. Whether you're just starting out or looking to advance your skills, we offer training, mentorship, and support to help you reach your goals. Our goal is to make sure that everyone has the opportunity to thrive in this exciting and constantly evolving field, no matter their level of experience. We believe that with the right guidance and resources, anyone can succeed in the world of IT.</p>
            </div>
        </div>
        
        <div class="flex gap-5 flex-col md:flex-row">
            <div class="about-us-one h-[215px] md:h-[450px] w-full md:w-[55%] flex flex-col justify-end p-[30px]">
                <h1 class="text-white font-semibold text-[20px]">Vacation Application Development </h1>
                <p class="text-white font-semibold text-[14px]">Collaborative project in which members of Programmas' Hub members work remotely to complete assigned tasks and develop a final project</p>
            </div>
            <div class="w-full md:w-[45%]">
                <div class="about-us-two h-[215px] w-full mb-[20px] flex flex-col justify-end p-[30px]">
                    <h1 class="text-white font-semibold text-[20px]">Training Center</h1>
                    <p class="text-white font-semibold text-[14px]">Training Student on Software Development</p>
                </div>
                <div class="about-us-three h-[215px] w-full flex flex-col justify-end p-[30px]">
                    <h1 class="text-white font-semibold text-[20px]">Programmers Hub Conference</h1>
                    <p class="text-white font-semibold text-[14px]">Educating students to think outside the classroom and identify problems in their environment that they could solve.</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-10 mt-[30px] justify-center lg:grid-cols-3">
            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">What We Do</h1>
                <p class="text-center lg:text-left leading-8">At Programma's hub, we specialize in helping individuals develop a range of technical skills that are in high demand. From programming and graphics design to project management and content creation, we offer training and mentorship to help you succeed in these exciting fields. Our team is dedicated to providing the support and guidance you need to achieve your goals and reach your full potential.</p>
            </div>

            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">Our Vision</h1>
                <p class="text-center lg:text-left leading-8">Our vision is to be the leading provider of training, mentorship, and support for individuals looking to succeed in the world of technology. We envision a future where everyone has the opportunity to learn and grow in this exciting field, and where our efforts have helped create a more technologically skilled and diverse workforce.</p>
            </div>

            <div class="flex flex-col items-center lg:items-start">
                <h1 class="font-bold text-[20px] mb-[10px]">Our Mission</h1>
                <p class="text-center lg:text-left leading-8">Our mission is to provide training, mentorship, and support to help individuals succeed in the world of technology, regardless of their level of experience. We are committed to empowering people to reach their full potential and thrive in this fast-paced and constantly evolving field.</p>
            </div>
        </div>
    </div>
</template>

<style>
.about-us-one {
    background-image: url("~/assets/images/about-1.png");
    background-color: rgba(13, 4, 4, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
}
.about-us-two {
    background-image: url("~/assets/images/slider-3.jpg");
    background-color: rgba(13, 4, 4, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
}
.about-us-three {
    background-image: url("~/assets/images/slider-5.jpg");
    background-color: rgba(13, 4, 4, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
}
</style>