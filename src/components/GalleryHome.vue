<template>

  <!-- gallery grille décomposée pc -->
  <div class="md:block hidden">
    <div class="grille px-4 md:px-24 gap-4 grid grid-cols-7 grid-rows-2">
      <div class="flex flex-col gap-4 col-span-2 row-span-1">
        <img src="../assets/img/cover-1.webp" alt="cover 1" class="rounded-md object-cover">
        <img src="../assets/img/cover-2.webp" alt="cover 2" class="rounded-md object-cover">
        <img src="../assets/img/mockup-idesign.webp" alt="" class="rounded-md object-cover col-start-2 h-full">
      </div>
      <div class="flex flex-col gap-4 col-span-2 row-span-1 mt-[100px]">
        <img src="../assets/img/affiche-cameleon.webp" alt="cover 3" class="rounded-md object-cover">
        <img src="../assets/img/affiche-fuji.webp" alt="cover 6" class="rounded-md object-cover col-span-2">
      </div>
      <div class="flex flex-col gap-4 col-span-3">
        <img src="../assets/img/mockup-carte-de-visite.webp" alt="cover 3" class="rounded-md object-cover col-span-3">
        <img src="../assets/img/mockup-600.webp" alt="cover 5" class="rounded-md object-cover h-full">
      </div>
      <div class="flex flex-col gap-4 col-start-1 col-span-3">
        <img src="../assets/img/mockup-benevol-action-1.webp" alt="cover 7" class="rounded-md object-cover">
        <img src="../assets/img/Mockup-pancarte.webp" alt="cover 1" class="rounded-md object-cover h-3/6">
      </div>
      <div class="flex flex-col gap-4 col-span-2">
        <img src="../assets/img/affiche-nomadis.webp" alt="cover 7" class="rounded-md object-cover col-span-2">
        <img src="../assets/img/affiche-zebre.webp" alt="cover 1" class="rounded-md object-cover">
      </div>
      <div class="flex flex-col gap-4 col-span-2">
        <img src="../assets/img/affiche-montebello.webp" alt="cover 7" class="rounded-md object-cover">
        <img src="../assets/img/cover-3.webp" alt="cover 1" class="rounded-md object-cover">
      </div>
    </div>
  </div>


  <!-- gallery slider mobile -->

  <div class="md:hidden block w-full overflow-x-auto mb-[100px]" style="width: 96vw;">
  <div class="flex" style="scroll-snap-type: x mandatory; width: 1100vw;">
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/cover-1.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/cover-2.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/mockup-idesign.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/affiche-cameleon.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/affiche-fuji.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/mockup-carte-de-visite.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/mockup-600.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/mockup-benevol-action-1.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/Mockup-pancarte.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/affiche-nomadis.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/affiche-zebre.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/affiche-montebello.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
    <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
      <img src="../assets/img/cover-3.webp" alt="work 1" class="w-auto h-[300px] object-cover object-center mx-auto">
    </div>
  </div>
</div>

    
</template>
