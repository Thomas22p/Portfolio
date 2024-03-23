<template>
    <div class="px-4 md:px-24">

        <h1 class="text-white font-bold font-darker text-6xl md:text-8xl flex gap-6 mb-16">
        MORE
            <span><img src="../assets/icn-svg/work.svg" alt="work" class="mt-5 md:mt-[30px] h-8 md:h-[55px]"></span>
        </h1>

        <div class="md:block hidden">
            <div class="flex w-full justify-between gap-4">
                <RouterLink to="/mylogo">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/my-logo.png" alt="Second project - My logo">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-2xl lg:text-4xl absolute top-4 left-5">MY LOGO</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 left-5 flex-wrap">
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                <p class="text-lg font-darker text-white font-medium -mt-1">WEBSITE DESIGN</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                    <p class="text-lg font-darker text-white font-medium  -mt-1">UX/UI DESIGN</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/campus">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-campus.jpg" alt="Second project - My logo">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-2xl lg:text-4xl absolute top-4 left-5">CAMPUS</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 left-5 flex-wrap">
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                <p class="text-lg font-darker text-white font-medium -mt-1">WEBSITE DESIGN</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                    <p class="text-lg font-darker text-white font-medium  -mt-1">UX/UI DESIGN</p>
                                </div>
                                <div>
                                    <img src="../assets/icn-svg/2023-button.svg" alt="producted in 2023" class="h-[26px]">
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                <RouterLink to="/primitivism">
                    <div class="relative">
                        <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-primitivism-1.jpg" alt="Second project - My logo">
                        <div class="">
                            <h1 class="text-white font-bold font-darker text-2xl lg:text-4xl absolute top-4 left-5">PRIMITIVISM</h1>
                            <div class="flex items-center gap-2 absolute bottom-5 left-5 flex-wrap">
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                <p class="text-lg font-darker text-white font-medium -mt-1">WEBSITE DESIGN</p>
                                </div>
                                <div class="border-2 border-white rounded-full px-2.5 h-[26px]">
                                    <p class="text-lg font-darker text-white font-medium  -mt-1">UX/UI DESIGN</p>
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


        <div class="md:hidden block w-full overflow-x-auto px-4" style="width: 100vw;">
            <div class="flex" style="scroll-snap-type: x mandatory; width: 290vw;">
                
                <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
                    <RouterLink to="/mylogo">
                        <div class="relative">
                            <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/my-logo.png" alt="Second project - My logo">
                            <div class="">
                                <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">MY LOGO</h1>
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
                <div class="inline-block" style="scroll-snap-align: start; width: 92vw; margin-right: 20px;">
                    <RouterLink to="/campus">
                        <div class="relative">
                            <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-campus.jpg" alt="Third project - Campus">
                            <div class="">
                                <h1 class="text-white font-bold font-darker text-4xl absolute top-4 left-5">CAMPUS</h1>
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
                <div class="inline-block" style="scroll-snap-align: start; width: 92vw;">
                    <RouterLink to="/primitivism">
                        <div class="relative">
                            <img class="object-cover object-center w-[400px] h-[600px] rounded-2xl" src="../assets/img/mockup-primitivism-1.jpg" alt="Fourth project - Primitivism">
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
    
    </div>

</template>


