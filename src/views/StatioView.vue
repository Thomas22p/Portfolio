<script setup>

import BeforeFooter from '../components/BeforeFooter.vue'
import MoreWork from '../components/MoreWork.vue'

</script>

<template>

  <section>


    <!-- hero wrapper -->

    <div class="mb-[100px] md:mb-[300px]">
      <div class="md:block hidden">
        
        <div class="hero-wrapper px-24 lg:px-0">
          <div class="relative h-[380.5px] w-[270px]">
            <div class="absolute inset-0 gradient-img z-1 rounded-2xl"></div>
            <img src="../assets/img/mockup-statio-3.jpg" alt="statio" class="h-[380px] lg:w-[270px] object-cover rounded-2xl">
          </div>
          <div class="h-[500px] w-[350px] flex justify-around">
            <h1 class="text-white font-bold font-darker text-8xl uppercase absolute top-[450px]">Statio</h1>
            <img src="../assets/img/statio-paysage.jpg" alt="paysage" class="h-[500px] w-[350px] object-cover">
          </div>
          <div class="relative h-[221px] w-[150px]">
            <div class="absolute inset-0 gradient-img z-1 rounded-2xl"></div>
            <img src="../assets/img/mockup-statio-1.jpg" alt="statio" class="h-[220px] lg:w-[150px] object-cover rounded-2xl">
          </div>
        </div>
        
      </div>

      <div class="md:hidden block px-4">

        <div class="h-auto flex justify-around px-12 sm:px-24">
          <h1 class="text-white font-bold font-darker text-4xl uppercase absolute top-[450px]">Statio</h1>
          <img src="../assets/img/statio-paysage.jpg" alt="paysage" class="h-[500px] w-full object-cover">
        </div>
        
        <div class="relative h-[380.5px] w-[270px] mt-16">
          <div class="absolute inset-0 gradient-img z-1 rounded-2xl"></div>
          <img src="../assets/img/mockup-statio-3.jpg" alt="statio" class="h-[380px] w-[270px] object-cover rounded-2xl">
        </div>
      
        <div class="relative h-[221px] w-[150px] mt-16 ml-auto">
          <div class="absolute inset-0 gradient-img z-1 rounded-2xl"></div>
          <img src="../assets/img/mockup-statio-1.jpg" alt="statio" class="h-[220px] w-[150px] object-cover rounded-2xl">
        </div>
        
      </div>

      
      <div class="flex items-center gap-2 w-full justify-center flex-wrap md:flex-nowrap mt-[100px]">
        <div class="border-2 border-white rounded-full px-5 h-[46px] mb-2 md:mb-0">
            <p class="text-3xl font-darker text-white font-medium">WEBSITE DESIGN</p>
        </div>
        <div class="border-2 border-white rounded-full px-5 h-[46px] mb-2 md:mb-0">
            <p class="text-3xl font-darker text-white font-medium">UX/UI DESIGN</p>
        </div>
        <div class="mb-2 md:mb-0">
            <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023">
        </div>
      </div>


    </div>


    <div class="relative">
      <div class="absolute inset-0 gradient-img z-1 rounded-t-[50px]"></div>
      <img src="../assets/img/statio-paysage.jpg" alt="paysage" class="w-full rounded-t-[50px]">
    </div>


  </section>

  <section>
    <div>
      <div class="md:block hidden">
        <div class="md:grid md:grid-cols-12 md:justify-stretch md:gap-4 flex px-4 md:px-24 font-darker">
          <p class="text-grey col-start-1 col-span-2 font-medium text-2xl pt-4">Concept</p>
          <div class="text-white col-start-4 col-span-7">
            <h2 class="text-6xl font-medium mb-12">Building a brand for a product</h2>
            <p class="text-2xl font-medium leading-none">In a world where technology shapes our interactions, crafting an appealing mobile application is not just about a mere idea but about an engaging user experience. Statio embodies this ethos by simplifying modern travel with a comprehensive range of features. From instant translation to real-time weather data, integrated messaging, and currency conversion, Statio is committed to meeting the diverse needs of today's travelers. By turning the app into a true community, Statio creates a space where users can connect, plan their trips, and receive personalized recommendations tailored to their individual preferences.
            </p>
          </div>
        </div>
      </div>
      <div class="px-4 font-darker md:hidden block">
      
        <div class="text-white grid grid-cols-12 justify-stretch gap-4">
          <p class="text-grey col-start-1 col-span-2 font-medium text-2xl">Concept</p>
          <h2 class="text-4xl font-medium mb-12 col-start-4 col-span-8">Building a brand for a product</h2>
        </div>
        <p class="text-2xl font-normal leading-none text-white">In a world where technology shapes our interactions, crafting an appealing mobile application is not just about a mere idea but about an engaging user experience. Statio embodies this ethos by simplifying modern travel with a comprehensive range of features. From instant translation to real-time weather data, integrated messaging, and currency conversion, Statio is committed to meeting the diverse needs of today's travelers. By turning the app into a true community, Statio creates a space where users can connect, plan their trips, and receive personalized recommendations tailored to their individual preferences.
        </p>
      </div>
    </div>






    <div class="flex flex-col gap-12 mt-40 mb-64">

      <div class="flex justify-center flex-wrap">
        <img src="../assets/img/statio-louvre.png" alt="statio application" class="mx-4 my-2 max-h-[400px] md:max-w-[calc(50% - 2rem)] md:flex-shrink-0">
        <img src="../assets/img/statio-devise.png" alt="statio application" class="mx-4 my-2 max-h-[400px] md:max-w-[calc(50% - 2rem)] md:flex-shrink-0">
        <img src="../assets/img/statio-planning.png" alt="statio application" class="mx-4 my-2 max-h-[400px] md:max-w-[calc(50% - 2rem)] md:flex-shrink-0">
      </div>



      <img src="../assets/img/statio-ordi.webp" alt="statio on computer" class="px-4 md:px-24"> 

      <div class="w-full px-4 md:px-24">
        <video autoplay loop muted class="w-full">
          <source src="../assets/vid/statio-animation-1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

    </div>





    <div>
      <div class="md:block hidden">
          <div class="md:grid md:grid-cols-12 md:justify-stretch md:gap-4 flex px-4 md:px-24 font-darker">
            <p class="text-grey col-start-1 col-span-2 font-medium text-2xl pt-4">Branding</p>
            <div class="text-white col-start-4 col-span-7">
              <h2 class="text-6xl font-medium mb-12">The Art of Infusing Brand Essence</h2>
              <p class="text-2xl font-medium leading-none">Creating a new product means crafting a universe that embodies the company's essence, distinguishing it and connecting emotionally with customers. Inspired by aviation and travel, I integrated iconic symbols like suitcases and airplanes, evoking adventure and appealing to explorers. By incorporating these elements into the design, our goal is to capture attention and ignite wanderlust, forging a strong emotional connection with our audience.
              </p>
            </div>
          </div>
        </div>
        <div class="px-4 font-darker md:hidden block">
      
          <div class="text-white grid grid-cols-12 justify-stretch gap-4">
            <p class="text-grey col-start-1 col-span-2 font-medium text-2xl">Branding</p>
            <h2 class="text-4xl font-medium mb-12 col-start-4 col-span-8">The Art of Infusing Brand Essence</h2>
          </div>
          <p class="text-2xl font-normal leading-none text-white">Creating a new product means crafting a universe that embodies the company's essence, distinguishing it and connecting emotionally with customers. Inspired by aviation and travel, I integrated iconic symbols like suitcases and airplanes, evoking adventure and appealing to explorers. By incorporating these elements into the design, our goal is to capture attention and ignite wanderlust, forging a strong emotional connection with our audience.
          </p>
        </div>
    </div>


    <div class="flex flex-col gap-12 mt-40 mb-64">

      <div  class="md:block hidden">
        <div class="flex w-full px-24">
            <img src="../assets/img/statio-onglet.webp" alt="" class="w-2/5 object-cover pr-2">
            <img src="../assets/img/statio-icone.webp" alt="" class="w-3/5 object-cover pl-2">
        </div>
      </div>

      <div class="md:hidden block">
        <div class="flex flex-col gap-12 w-full px-4 md:px-24">
          <img src="../assets/img/statio-onglet.webp" alt="" class="md:w-2/5 object-cover md:pr-2">
          <img src="../assets/img/statio-icone.webp" alt="" class="md:w-3/5 object-cover md:pl-2">
        </div>
      </div>

      <div class="w-full px-4 md:px-24">
        <video autoplay loop muted class="w-full max-h-[500px] object-cover">
          <source src="../assets/vid/statio-animation-2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <img src="../assets/img/statio-mockup-mur.webp" alt="statio on computer" class="px-4 md:px-24"> 

    </div>


  </section>

  <MoreWork class="-mt-28 mb-[200px]"/>


  <BeforeFooter />
</template>
