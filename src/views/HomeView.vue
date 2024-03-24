<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import '../assets/style.css'
  import Work from '../components/Work.vue'
  import Gallery from '../components/Gallery.vue'
  import Projects from '../components/Projects.vue'
  import BeforeFooter from '../components/BeforeFooter.vue'
  import GalleryHome from '../components/GalleryHome.vue'

  window.addEventListener('scroll', function() {
        const scrollingContainer = document.querySelector('.scrolling-container');
        
        scrollingContainer.style.animationDuration = 20 - window.scrollY / 100 + 's';
    });

</script>

<template>


 <!-- Bannière  -->             <!-- md:block hidden -> enlever ceci (juste en dessous) pour voir en dessous de md  --> 
  <div class="relative h-[600px] md:h-[1000px] flex justify-center items-center">
    <img src="../assets/icn-svg/hero-homepage.svg" alt="Thomas Poupon" class="absolute z-0 inset-0 m-auto">
    <div class="absolute z-1">
      <img src="../assets/img/logo_animation0001.gif" alt="animation logo" class="m-auto">
    </div>
  </div>



  <section  class="px-4 md:px-24 mb-56">
    <div class="hidden md:flex items-center gap-4 lg:ml-32">
      <img class="pt-3" src="../assets/icn-svg/arrow.svg" alt="arrow">
      <p class="text-white font-normal font-darker text-6xl">Webdesign Student</p>
    </div>
    <div class="flex justify-end -mt-40 md:mt-0">
      <p class="text-white font-normal text-right font-darker text-3xl mt-16 w-[500px]">Hi, I'm Thomas, A graphic designer based in France working in Web-design, Motion Design, Branding and typography.</p>
    </div>
  </section>



  <div class="px-4 md:px-24 mb-56">

  
    <!-- Section Skills -->

    <!-- Titre -->
    <section>
      <div class="flex items-center justify-between pb-5 border-b-2 border-white mt-[200px]">
        <h2 class="text-white font-bold font-darker text-4xl md:text-8xl md:mt-0 mt-8">SKILLS</h2>
        <a href="https://www.linkedin.com/in/thomas-poupon-pro/details/skills/" target="_blank">
          <div class="rounded-full border-2 border-white p-3">
            <p class="text-white font-medium font-darker text-xs md:text-lg md:my-5 my-4">VIEW ALL</p>
          </div>
        </a>
      </div>

      <!-- cards -->
      <div class="flex flex-col gap-4 lg:grille mt-20">

        <div class="bg-darkblue text-white rounded-lg p-6 lg:col-span-4 flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-8">
          <h1 class="font-darker text-5xl font-normal mb-4">BRANDING</h1>
          <p class="font-darker text-xl">Crafting a distinctive visual identity is paramount in setting your project apart. I am responsible for curating comprehensive brand identities from inception to execution.</p>
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
        

        <div class="bg-light rounded-lg p-6 lg:col-span-4 flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-8">
          <h1 class="font-darker text-5xl font-normal mb-4">UX/UI DESIGN</h1>
          <p class="font-darker text-xl">Harnessing my expertise in UI and UX design, I tailor captivating interfaces for your brand's digital platforms, ensuring seamless user experiences and aesthetic appeal.</p>
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

        <div class="bg-lightblue rounded-lg p-6 lg:col-span-4 flex flex-col gap-5 transition-transform duration-300 ease-in-out hover:-translate-y-8">
            <h1 class="font-darker text-5xl font-normal mb-4">MOTION DESIGN</h1>
            <p class="font-darker text-xl">Bringing concepts to life through dynamic motion design, I transform ideas into engaging visual narratives, enriching your brand's storytelling across various media platforms.</p>
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

  

    <!-- <Work class="mb-[200px]" /> -->

    <img src="../assets/vid/work.gif" alt="work" class="md:mt-[300px] mt-[200px] mb-[200px]">


    <!-- Projets -->

    <Projects class="mb-[200px]" />



    <!-- <Gallery class="mb-[200px]" /> -->

    
    <img src="../assets/vid/gallery.gif" alt="gallery" class="md:mt-[300px] mt-[200px] mb-[200px]">

    <GalleryHome class="mb-[200px]" />


    <BeforeFooter/>


  <div>
  


  </div>
</template>