<template>
    <header class="bg-transparent mb-4 w-full z-10 ">
        <div class="mx-auto px-4 md:px-24">
            <div class="flex items-center justify-between h-[100px] border-b-2 border-white">
                <RouterLink to="/" class="text-white font-medium font-darker text-xl">THOM<span class="font-medium font-darker text-base">Δ</span>S POUPON</RouterLink>
                <button class="text-white focus:outline-none md:hidden mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav class="hidden md:block">
                    <ul class="flex items-center space-x-4 pr-4 font-medium">
                        <li><RouterLink to="/" class="text-white menu-link font-darker text-xl">Home</RouterLink></li>
                        <li><img src="../assets/icn-svg/star.svg" alt="star" class="w-[30px]"></li>
                        <li><RouterLink to="/about" class="text-white menu-link font-darker text-xl">About</RouterLink></li>
                        <li><img src="../assets/icn-svg/star.svg" alt="star" class="w-[30px]"></li>
                        <li><RouterLink to="/contact" class="text-white menu-link font-darker text-xl">Contact</RouterLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden hidden">
            <nav class="bg-gray-800 px-2 pt-2 pb-4">
                <ul class="flex flex-col space-y-2">
                    <li>
                            <RouterLink class="text-white" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="text-white" to="about">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="text-white" to="portfolio">Projects</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="text-white" to="contact">Contact</RouterLink>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
</template>