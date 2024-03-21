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
  <div class="relative">
    <img src="../assets/icn-svg/hero-homepage.svg" alt="Thomas Poupon" class="absolute top-[370px] z-0">
    <div class="absolute -top-[50px] z-1 w-full flex justify-center">
      <img src="../assets/img/logo_animation0001.gif" alt="animation logo">
    </div>
  </div>

  <section  class="px-4 md:px-24 mb-56 mt-[750px]">
    <div class="flex items-center gap-4 md:ml-32">
      <img class="pt-3" src="../assets/icn-svg/arrow.svg" alt="arrow">
      <p class="text-white font-normal font-darker text-6xl">Webdesign Student</p>
    </div>
    <div class="flex justify-end">
      <p class="text-white font-normal text-right font-darker text-3xl mt-16 w-[500px]">Hi, I'm Thomas, A graphic designer based in France working in Web-design, Motion Design, Branding and typography.</p>
    </div>
  </section>



  <div class="px-4 md:px-24 mb-56">

  
    <!-- Section Skills -->

    <!-- Titre -->
    <section>
      <div class="flex items-center justify-between pb-5 border-b-2 border-white mt-[200px]">
        <h2 class="text-white font-bold font-darker text-8xl">SKILLS</h2>
        <a href="https://www.linkedin.com/in/thomas-poupon-pro/details/skills/">
          <div class="rounded-full border-2 border-white p-3">
            <p class="text-white font-medium font-darker text-lg my-5">VIEW ALL</p>
          </div>
        </a>
      </div>

      <!-- cards -->
      <div class="lg:grille mt-20">

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

    <!-- test balise marquee = mouvement -->
    <!-- <marquee direction="left" class="text-white">jdbfdjhvbfhvhdbvhbfhbvyudbuvhjbsduhvbkshdbvuyqb</marquee> -->



    <!-- Projets -->

    <Projects class="mb-[200px]" />



    <!-- <Gallery class="mb-[200px]" /> -->

    
    <img src="../assets/vid/gallery.gif" alt="gallery" class="md:mt-[300px] mt-[200px] mb-[200px]">

    <GalleryHome class="mb-[200px]" />


    <BeforeFooter/>

    <!-- <section class="px-4 md:px-24 mb-24">
      <div class="flex flex-col gap-3 items-center justify-center mb-72">
        <svg width="100" height="100" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation: rotate 4s linear infinite;">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M66.6562 40.7501L65.5586 1L64.461 40.7501C64.3745 43.8844 63.7093 46.8729 62.5684 49.6126C58.7834 48.6422 55.3113 46.2443 53.0667 42.4293L46.1611 30.6916L52.6004 42.6914C57.0531 50.9889 53.1388 60.7003 45.3494 64.2474C43.7251 64.6305 42.0392 64.8547 40.3087 64.9024L0.558594 66L40.3087 67.0976C42.0895 67.1468 43.823 67.3828 45.4909 67.7866C53.0736 71.5755 56.6707 81.2845 52.0659 89.4136L45.3538 101.263L52.5263 89.6864C54.9541 85.768 58.6777 83.4163 62.6639 82.6199C63.7464 85.2959 64.3769 88.204 64.461 91.2499L65.5586 131L66.6562 91.2499C66.7409 88.1769 67.3821 85.2439 68.4825 82.5484C72.7287 83.2878 76.7109 85.7736 79.1926 89.9915L86.0982 101.729L79.6588 89.7293C74.6339 80.3652 80.2651 69.2002 90.0961 67.1273C90.3327 67.1141 90.5702 67.1041 90.8085 67.0976L105.722 66.6857L106.874 66.6764L106.493 66.6645L130.559 66L90.8085 64.9024C89.2418 64.8593 87.7115 64.6714 86.2303 64.3518C79.0179 60.3808 75.6988 50.9415 80.1931 43.0069L86.9055 31.1576L79.7329 42.7341C77.123 46.9468 73.0154 49.3485 68.694 49.9539C67.4644 47.1218 66.7464 44.015 66.6562 40.7501Z" fill="white" stroke="white" stroke-width="4.44444"/>
        </svg>
        <p class="text-white font-medium text-center font-darker text-3xl">LET'S CONNECT !</p>
      </div>
      <div class="flex gap-8 justify-end">
        <p class="text-white font-normal font-darker text-8xl">CONTACT ME</p>
        <img class="pt-4" src="../assets/icn-svg/arrow-footer.svg" alt="contact me">
      </div>
    </section> -->


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
<!-- <style>
  
  @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
</style> -->