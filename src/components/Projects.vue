<script setup>
import { ref } from 'vue';


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


    <!-- Partie projet pc -->

    <div class="md:block hidden mb-200px">
        <RouterLink to="/statio">
            <div class="relative">
                <img class="object-cover object-center w-[100vw] h-[100vh] opacity-75" src="../assets/img/mockup-statio-1.webp" alt="First project - Statio">
                <div class="absolute bottom-0 left-0 right-0 pb-10 px-4 lg:px-24 flex justify-between items-center">
                    <h1 class="text-white font-bold font-darker text-6xl lg:text-8xl">STATIO</h1>
                    <div class="flex flex-wrap items-center gap-2 justify-end">
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                        <p class="text-xl lg:text-3xl font-darker text-white font-medium">WEBSITE DESIGN</p>
                        </div>
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                            <p class="text-xl lg:text-3xl font-darker text-white font-medium">UX/UI DESIGN</p>
                        </div>
                        <div>
                            <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[36px] lg:h-auto">
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>


        <RouterLink to="/mylogo">
            <div class="relative">
                <img class="object-cover object-center w-[100vw] h-[100vh] opacity-75" src="../assets/img/my-logo.png" alt="Second project - My logo">
                <div class="absolute bottom-0 left-0 right-0 pb-10 px-4 lg:px-24 flex justify-between items-center">
                    <h1 class="text-white font-bold font-darker text-6xl lg:text-8xl">MY LOGO</h1>
                    <div class="flex flex-wrap items-center gap-2 justify-end">
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                        <p class="text-xl lg:text-3xl font-darker text-white font-medium">BRANDING</p>
                        </div>
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                            <p class="text-xl lg:text-3xl font-darker text-white font-medium">ANIMATION</p>
                        </div>
                        <div>
                            <img src="../assets/icn-svg/2024-button.svg" alt="producted in 2023" class="h-[36px] lg:h-auto">
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>


        <RouterLink to="/campus">
            <div class="relative">
                <img class="object-cover object-center w-[100vw] h-[100vh] opacity-75" src="../assets/img/mockup-campus.webp" alt="Third project - Campus Signalisation">
                <div class="absolute bottom-0 left-0 right-0 pb-10 px-4 lg:px-24 flex justify-between items-center">
                    <h1 class="text-white font-bold font-darker text-6xl lg:text-8xl">CAMPUS</h1>
                    <div class="flex flex-wrap items-center gap-2 justify-end">
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                            <p class="text-xl lg:text-3xl font-darker text-white font-medium">SIGNAGE PROTOTYPING</p>
                        </div>
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                            <p class="text-xl lg:text-3xl font-darker text-white font-medium">3D MAPPING</p>
                        </div>
                        <div>
                            <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[36px] lg:h-auto">
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>


        <RouterLink to="/primitivism">
            <div class="relative">
                <img class="object-cover object-center w-[100vw] h-[100vh] opacity-75" src="../assets/img/mockup-primitivism-1.webp" alt="Fourth project - Primitivism">
                <div class="absolute bottom-0 left-0 right-0 pb-10 px-4 lg:px-24 flex justify-between items-center">
                    <h1 class="text-white font-bold font-darker text-6xl lg:text-8xl">PRIMITIVISM</h1>
                    <div class="flex flex-wrap items-center gap-2 justify-end">
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                        <p class="text-xl lg:text-3xl font-darker text-white font-medium">WEBSITE DESIGN</p>
                        </div>
                        <div class="border-2 border-white rounded-full px-3 lg:px-5 h-[36px] lg:h-[46px]">
                            <p class="text-xl lg:text-3xl font-darker text-white font-medium">UX/UI DESIGN</p>
                        </div>
                        <div>
                            <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[36px] lg:h-auto">
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>

    </div>


    <!-- Partie projet slider mobile -->
    
    <div class="md:hidden block w-full overflow-x-auto px-4" style="width: 100vw;">
        <div class="flex" style="scroll-snap-type: x mandatory; width: 380vw;">
            <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
                <RouterLink to="/statio">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/statio-paysage.webp" alt="First project - Statio">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">STATIO</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 px-2.5">
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                <p class="text-md font-darker text-white font-medium -mt-1">WEBSITE DESIGN</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                    <p class="text-md font-darker text-white font-medium  -mt-1">UX/UI DESIGN</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2024" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
                <RouterLink to="/mylogo">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/my-logo.png" alt="Second project - My logo">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">MY LOGO</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 px-2.5">
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                <p class="text-md font-darker text-white font-medium -mt-1">BRANDING</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                    <p class="text-md font-darker text-white font-medium  -mt-1">ANIMATION</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2024-button.svg" alt="producted in 2023" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
                <RouterLink to="/campus">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-campus.webp" alt="Third project - Campus">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">CAMPUS</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 px-2.5">
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                <p class="text-md font-darker text-white font-medium -mt-1">SIGNAGE PROTOTYPING</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                    <p class="text-md font-darker text-white font-medium  -mt-1">3D MAPPING</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="inline-block" style="scroll-snap-align: start; width: 92vw;">
                <RouterLink to="/primitivism">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-primitivism-1.webp" alt="Fourth project - Primitivism">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">PRIMITIVISM</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 px-2.5">
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                <p class="text-md font-darker text-white font-medium -mt-1">WEBSITE DESIGN</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2 pt-0.5 h-[26px]">
                                    <p class="text-md font-darker text-white font-medium  -mt-1">UX/UI DESIGN</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>



</template>