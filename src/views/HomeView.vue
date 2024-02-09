<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import '../assets/style.css'

</script>

<template>
  <div class="px-4 md:px-24">
    <h1 class="text-white font-bold font-darker text-9xl text-center">THOM<span class="font-bold font-darker text-8xl">Δ</span>S POUPON</h1>

    <div class="test-animation">
      <img src="../assets/img/logo_animation0001.gif" alt="animation logo">
    </div>

    <div class="flex items-center gap-4 ml-40">
      <img class="pt-3" src="../assets/icn-svg/arrow.svg" alt="arrow">
      <p class="text-white font-normal font-darker text-6xl">Webdesign Student</p>
    </div>

    <div class="flex justify-end">
      <p class="text-white font-normal text-right font-darker text-3xl mt-16 w-[500px]">Hi, I'm Thomas, A graphic designer based in France working in Web-design, Motion Design, Branding and typography.</p>
    </div>


    <div>
      <div class="flex items-center justify-between pb-5 border-b-2 border-white mt-[200px]">
        <h2 class="text-white font-bold font-darker text-8xl">SKILLS</h2>
        <div class="rounded-full border border-white p-3">
          <p class="text-white font-medium font-darker text-lg my-5">VIEW ALL</p>
        </div>
      </div>

      <!-- cards -->
      <div></div>
    </div>

    <img src="../assets/icn-svg/01.svg" alt="01">
    <img src="../assets/icn-svg/02.svg" alt="02">
    <img src="../assets/icn-svg/03.svg" alt="03">



    <div class="scrolling-container">
      <div class="image-container">
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
      </div>
    </div>

  </div>
</template>

<style>
.scrolling-container {
  width: 100%;
  height: 100vh;
  overflow-x: auto; /* Activation du défilement horizontal */
  display: flex;
  align-items: center; /* Centre verticalement les éléments */
}

.image-container {
  display: flex;
  gap: 50px;
}

span img {
  max-width: 100%; /* Empêche les images de déborder de la div */
}
</style>