<script setup>
import { ref } from 'vue'

const menuIsOpen = ref(false)

const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value
    if (menuIsOpen.value) {
        document.body.style.overflow = 'hidden'; // Désactiver le défilement
    } else {
        document.body.style.overflow = ''; // Réactiver le défilement
    }
}

const closeMenu = () => {
    menuIsOpen.value = false;
    document.body.style.overflow = ''; // Réactiver le défilement lorsque le menu est fermé
}
</script>

<template>
    <header class="bg-transparent mb-4 w-full z-10 ">
        <div class="mx-auto px-4 md:px-24">
            <div class="flex items-center justify-between h-[100px] border-b-2 border-white">
                <RouterLink to="/" class="text-white font-medium font-darker text-xl">THOM<span class="font-medium font-darker text-base">Δ</span>S POUPON</RouterLink>
                <button @click="toggleMenu" class="text-white focus:outline-none md:hidden mr-2">
                    <p v-if="!menuIsOpen" class="text-white font-medium font-darker text-xl">menu</p>
                    <p v-else class="text-white font-medium font-darker text-xl">close</p>
                </button>
                <nav class="hidden md:block">
                    <ul class="flex items-center space-x-4 pr-4 font-medium">
                        <li><RouterLink @click="closeMenu" to="/" class="text-white menu-link font-darker text-xl">Home</RouterLink></li>
                        <li><img src="../assets/icn-svg/star.svg" alt="star" class="w-[30px]"></li>
                        <li><RouterLink @click="closeMenu" to="/gallery" class="text-white menu-link font-darker text-xl">Gallery</RouterLink></li>
                        <li><img src="../assets/icn-svg/star.svg" alt="star" class="w-[30px]"></li>
                        <li><RouterLink @click="closeMenu" to="/about" class="text-white menu-link font-darker text-xl">About</RouterLink></li>
                        <li><img src="../assets/icn-svg/star.svg" alt="star" class="w-[30px]"></li>
                        <li><RouterLink @click="closeMenu" to="/contact" class="text-white menu-link font-darker text-xl">Contact</RouterLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden h-[100vh] w-full fixed top-0 left-0 bg-[#0C0F11] z-50" v-show="menuIsOpen">
            <div class="flex items-center justify-between h-[100px] px-4">
                <RouterLink to="/" class="text-white font-medium font-darker text-xl">THOM<span class="font-medium font-darker text-base">Δ</span>S POUPON</RouterLink>
                <button @click="closeMenu" class="text-white font-medium font-darker text-xl focus:outline-none pr-2">close</button>
            </div>
            <nav class="bg-dark px-12">
                <ul class="flex flex-col text-center">
                    <li class="h-28 border-b-2 border-white flex justify-center items-center gap-6">
                        <p class="text-grey font-darker">01</p>
                        <RouterLink @click="closeMenu" class="text-white menu-link font-darker text-xl" to="/">HOME</RouterLink>
                    </li>
                    <li class="h-28 border-b-2 border-white flex justify-center items-center gap-6">
                        <p class="text-grey font-darker">01</p>
                        <RouterLink @click="closeMenu" class="text-white menu-link font-darker text-xl" to="/gallery">GALLERY</RouterLink>
                    </li>
                    <li class="h-28 border-b-2 border-white flex justify-center items-center gap-6">
                        <p class="text-grey font-darker">01</p>
                        <RouterLink @click="closeMenu" class="text-white menu-link font-darker text-xl" to="/about">ABOUT</RouterLink>
                    </li>
                    <li class="h-28 border-b-2 border-white flex justify-center items-center gap-6">
                        <p class="text-grey font-darker">01</p>
                        <RouterLink @click="closeMenu" class="text-white menu-link font-darker text-xl" to="/contact">CONTACT</RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="flex flex-col gap-1 mt-28 px-12">
                <p class="text-white menu-link font-darker text-xl font-medium">contact@thomaspoupon.fr</p>
                <p class="text-white menu-link font-darker text-xl font-medium">+33 (6) 49 77 91 76</p>
                <ul class="flex gap-4 mt-4">
                    <li><img src="../assets/icn-svg/Behance.svg" alt="Behance"></li>
                    <li><img src="../assets/icn-svg/dribbble.svg" alt=""></li>
                    <li><img src="../assets/icn-svg/instagram.svg" alt=""></li>
                    <li><img src="../assets/icn-svg/linkedin.svg" alt=""></li>
                </ul>
            </div>
        </div>
    </header>
</template>
