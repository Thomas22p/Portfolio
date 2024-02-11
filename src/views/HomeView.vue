<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import '../assets/style.css'
  import Work from '../components/Work.vue'
  import Gallery from '../components/Gallery.vue'

  window.addEventListener('scroll', function() {
        const scrollingContainer = document.querySelector('.scrolling-container');
        
        scrollingContainer.style.animationDuration = 20 - window.scrollY / 100 + 's';
    });

</script>

<template>
  <div class="px-4 md:px-24 mb-56">


    <!-- Bannière -->
    <section>
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
    </section>



    <!-- Section Skills -->

    <!-- Titre -->
    <section>
      <div class="flex items-center justify-between pb-5 border-b-2 border-white mt-[200px]">
        <h2 class="text-white font-bold font-darker text-8xl">SKILLS</h2>
        <div class="rounded-full border-2 border-white p-3">
          <p class="text-white font-medium font-darker text-lg my-5">VIEW ALL</p>
        </div>
      </div>

      <!-- cards -->
      <div class="lg:grille mt-20">
        <div class="bg-darkblue text-white rounded-lg p-6 lg:col-span-4 flex flex-col gap-5">
          <h1 class="font-darker text-6xl font-normal mb-4">DESIGN</h1>
          <p class="font-darker text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.</p>
          <div class="flex items-center gap-2">
            <div class="border border-white rounded-full pb-2 pt-1 px-2">
              <p class="text-xl font-darker">Figma</p>
            </div>
            <div class="border border-white rounded-full pb-1 pt-0.5 px-3">
              <p class="text-xl font-darker">XD</p>
            </div>
            <div class="ml-auto">
              <img src="../assets/icn-svg/01.svg" alt="01" class="w-20 h-20">
            </div>
          </div>
        </div>

        <div class="bg-light rounded-lg p-6 lg:col-span-4 flex flex-col gap-5">
          <h1 class="font-darker text-6xl font-normal mb-4">MARKETING</h1>
          <p class="font-darker text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div class="flex items-center gap-2">
            <div class="border border-black rounded-full pb-2 pt-1 px-2">
              <p class="text-xl font-darker">Figma</p>
            </div>
            <div class="border border-black rounded-full pb-1 pt-0.5 px-3">
              <p class="text-xl font-darker">XD</p>
            </div>
            <div class="ml-auto">
              <img src="../assets/icn-svg/02.svg" alt="02" class="w-20 h-20">
            </div>
          </div>
        </div>

        <div class="bg-lightblue rounded-lg p-6 lg:col-span-4 flex flex-col gap-5">
            <h1 class="font-darker text-6xl font-normal mb-4">DEVELOPMENT</h1>
            <p class="font-darker text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="flex items-center gap-2">
              <div class="border border-black rounded-full pb-2 pt-1 px-2">
                <p class="text-xl font-darker">Figma</p>
              </div>
              <div class="border border-black rounded-full pb-1 pt-0.5 px-3">
                <p class="text-xl font-darker">XD</p>
              </div>
              <div class="ml-auto">
                <img src="../assets/icn-svg/03.svg" alt="03" class="w-20 h-20">
              </div>
            </div>
        </div>

      </div>

    </section>

    </div>




    <Work class="mb-[200px]" />



    <!-- Projets -->

    <section class="projet px-4 md:px-24">
      <div class="h-36 border-y-2 border-white mb-[200px] flex">
        <p class="text-white font-normal text-center font-darker text-3xl m-auto" >Projet ici</p>
      </div>
    </section>



    <Gallery class="mb-[200px]" />


  <div>
  

    <!-- <div class="scrolling-container overflow-hidden relative mb-[500px]">
      <div class="image-container absolute top-0 left-0 flex space-x-4">
          <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
          <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
          <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
          <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
          <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
      </div>
    </div> -->


  </div>
</template>

<!-- <style>

span img {
  max-width: 100%; /* Empêche les images de déborder de la div */
}
</style> -->

