<style>
.box_1,
.box_6 {
    background-image: url("../assets/images/project.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.box_2,
.box_4 {
    background-image: url("../assets/images/project2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.box_3,
.box_5 {
    background-image: url("../assets/images/project.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
<template>
    <div
        class="mx-auto px-10 py-10 font-raleway"
        style="background-color: #18309f"
    >
        <hr class="border-2 w-20 mb-4" style="border-color: #4fb400" />
        <h1 class="text-white font-bold text-2xl">What we have done</h1>
        <p class="text-white text-md">Highlight of what we have done</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-3">
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box_1 h-64"
            ></div>
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 h-64 box_2"
            ></div>
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 h-64 box_3"
            ></div>
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 h-64 box_4"
            ></div>
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 h-64 box_5"
            ></div>
            <div
                class="bg-white p-5 flex justify-center transition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 h-64 box_6"
            ></div>
        </div>
    </div>
    <GetInTouch />
</template>
