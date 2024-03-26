<script setup>

import { ref, onMounted } from 'vue';

// effet de suivi cv

const imageX = ref(0);
const imageY = ref(0);

const updateCursorPosition = (event) => {
  imageX.value = event.clientX - 710; 
  imageY.value = event.clientY - 160;
};

  const dynamicText = ref(0);
  const textOptions = ["meet you", "see you", "greet you"];

  onMounted(() => {
    const interval = setInterval(() => {
      dynamicText.value = (dynamicText.value + 1) % textOptions.length;
    }, 2000);

    return () => clearInterval(interval);
  });
 
</script>

<template>
  <div class="px-4 md:px-24">

    <div class="">
      <h1 class="text-white font-bold font-darker text-6xl lg:text-[160px] md:text-[120px] mb-[300px] mt-[100px]">
        Hello there, nice to
        <span class="dynamic-text flex leading-[70px]"><img src="../assets/icn-svg/star-footer.svg" alt="star" class="mr-4 md:mr-8 mt-6 md:h-[80px] md:w-[80px] h-[40px] w-[40px]">{{ textOptions[dynamicText] }}</span>
      </h1>
    </div>
    


    <div class="flex flex-col lg:flex-row gap-16 items-center mb-[100px]">
      <img src="../assets/img/me-about.jpg" alt="me" class="max-h-[500px] rounded-ee-[50px] rounded-ss-[50px]">
      <div class="flex flex-col gap-6 -mt-5">
        <p class="text-white font-medium font-darker md:text-2xl text-xl">Hi, I'm Thomas Poupon, an 18 year-old webdesigner.
        </p>
        <p class="text-white font-medium font-darker md:text-2xl text-xl">I’m currently in my second year of studying design in Montbéliard. Art has been my passion since childhood, and I've honed that passion into a love for the world of graphic design, which I am determined to turn into a lifelong career.</p>
        <p class="text-white font-medium font-darker md:text-2xl text-xl">I find joy in the creative process, constantly pushing boundaries and experimenting with new techniques to elevate my work. My portfolio is a reflection of the dedication and precision I bring to my design projects. From conceptualization to execution, I immerse myself in the journey of creation.</p>
        <p class="text-white font-medium font-darker md:text-2xl text-xl">This space is a curated collection of my artistic designing, showcasing not only my skills but also the enthusiasm and meticulousness I invest in every project. Join me on this visual exploration, and let's create something extraordinary together. Thank you for visiting my portfolio, and I hope you enjoy my projects as I enjoy creating them.</p>
      </div>
    </div>



    <!-- Effet de suivi CV -->
    <div class="md:block hidden">
      <div class="relative w-full h-[1000px] flex justify-center items-center" @mousemove="updateCursorPosition">
        <img class="absolute inset-0 w-auto h-[600px] object-cover opacity-60 -z-10 mx-auto" :style="{ left: imageX + 'px', top: imageY + 'px' }" src="../assets/img/my-cv.webp" alt="my cv">
        <h2 class="text-white font-bold font-darker text-[160px] text-center z-2">
          <a href="https://drive.google.com/file/d/1ytCPqujYHebYf00qCcgPBnOUa8GLZd1O/view?usp=sharing" class="text-white font-bold font-darker text-6xl lg:text-[160px] text-center z-2" download target="_blank">DOWNLOAD CV</a>

        </h2>
      </div>
    </div>
    <div class="md:hidden block">
      <div class="relative w-full h-[600px] flex justify-center items-center" @mousemove="updateCursorPosition">
        <img class="absolute inset-0 w-auto h-[400px] object-cover opacity-60 -z-10 mx-auto" src="../assets/img/my-cv.webp" alt="my cv">
        <h2 class="text-white font-bold font-darker text-center z-2">
          <a href="https://drive.google.com/file/d/1ytCPqujYHebYf00qCcgPBnOUa8GLZd1O/view?usp=sharing" class="text-white font-bold font-darker text-6xl lg:text-[160px] text-center z-2" download target="_blank">DOWNLOAD CV</a>
        </h2>
      </div>
    </div>

  </div>
</template>


<style>



</style>