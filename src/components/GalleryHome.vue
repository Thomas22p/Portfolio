<script setup>
import { ref } from 'vue';

const images = ref([
  { src: 'src/assets/img/cover-1.jpg', alt: 'cover 1' },
  { src: 'src/assets/img/cover-2.jpg', alt: 'cover 2' },
  { src: 'src/assets/img/mockup-idesign.jpg', alt: '' },
  { src: 'src/assets/img/affiche-cameleon.jpg', alt: 'cover 3' },
  { src: 'src/assets/img/affiche-fuji.jpg', alt: 'cover 6' },
  { src: 'src/assets/img/mockup-carte-de-visite.jpg', alt: 'cover 3' },
  { src: 'src/assets/img/mockup-600.jpg', alt: 'cover 5' },
  { src: 'src/assets/img/mockup-benevol-action-1.jpg', alt: 'cover 7' },
  { src: 'src/assets/img/Mockup-pancarte.jpg', alt: 'cover 1' },
  { src: 'src/assets/img/affiche-nomadis.jpg', alt: 'cover 7' },
  { src: 'src/assets/img/affiche-zebre.jpg', alt: 'cover 1' },
  { src: 'src/assets/img/affiche-montebello.jpg', alt: 'cover 7' },
  { src: 'src/assets/img/cover-3.jpg', alt: 'cover 1' },

]);

const currentIndex = ref(0);

function nextSlide() {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
  }
}

function previousSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
</script>



<template>
  <div class="md:block hidden">
    <div class="grille px-4 md:px-24 gap-4 grid grid-cols-7 grid-rows-2">
      <div class="flex flex-col gap-4 col-span-2 row-span-1">
        <img src="../assets/img/cover-1.jpg" alt="cover 1" class="rounded-md object-cover">
        <img src="../assets/img/cover-2.jpg" alt="cover 2" class="rounded-md object-cover">
        <img src="../assets/img/mockup-idesign.jpg" alt="" class="rounded-md object-cover col-start-2 h-full">
      </div>
      <div class="flex flex-col gap-4 col-span-2 row-span-1 mt-[100px]">
        <img src="../assets/img/affiche-cameleon.jpg" alt="cover 3" class="rounded-md object-cover">
        <img src="../assets/img/affiche-fuji.jpg" alt="cover 6" class="rounded-md object-cover col-span-2">
      </div>
      <div class="flex flex-col gap-4 col-span-3">
        <img src="../assets/img/mockup-carte-de-visite.jpg" alt="cover 3" class="rounded-md object-cover col-span-3">
        <img src="../assets/img/mockup-600.jpg" alt="cover 5" class="rounded-md object-cover h-full">
      </div>
      <div class="flex flex-col gap-4 col-start-1 col-span-3">
        <img src="../assets/img/mockup-benevol-action-1.jpg" alt="cover 7" class="rounded-md object-cover">
        <img src="../assets/img/Mockup-pancarte.jpg" alt="cover 1" class="rounded-md object-cover h-3/6">
      </div>
      <div class="flex flex-col gap-4 col-span-2">
        <img src="../assets/img/affiche-nomadis.jpg" alt="cover 7" class="rounded-md object-cover col-span-2">
        <img src="../assets/img/affiche-zebre.jpg" alt="cover 1" class="rounded-md object-cover">
      </div>
      <div class="flex flex-col gap-4 col-span-2">
        <img src="../assets/img/affiche-montebello.jpg" alt="cover 7" class="rounded-md object-cover">
        <img src="../assets/img/cover-3.jpg" alt="cover 1" class="rounded-md object-cover">
      </div>
    </div>
  </div>

  <div class="md:hidden block">
    <div class="app__body ml-4 px-4 mb-[200px]">
      <div class="relative w-full">
        <div
          class="flex transition-transform duration-300 ease-in-out -ml-4"
          :style="{ transform: `translateX(${-currentIndex * (imageWidth + marginRight)}px)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="[currentIndex === index ? 'w-full' : 'hidden', 'md:w-auto h-[500px] md:h-[500px] mr-[4px] md:mr-[8px]']" class="flex"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-auto h-[500px] object-cover rounded-md mx-auto"
            />
          </div>
        </div>
        <div class="absolute inset-y-0 top-[530px] flex justify-center items-center w-full">
          <button
            class="w-10 h-10 transform rotate-180 relative -left-5"
            @click="previousSlide"
          >
            <img src="../assets/icn-svg/arrow.svg" alt="arrow">
          </button>
          <button
            class="w-10 h-10 relative left-5"
            @click="nextSlide"
          >
            <img src="../assets/icn-svg/arrow.svg" alt="arrow">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>