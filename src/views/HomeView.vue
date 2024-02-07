<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import '../assets/style.css'

</script>

<template>
  <div>
    <h1 class="text-slate-100">Home</h1>


    <div class="test-animation">
      <img src="../assets/img/logo_animation0001.gif" alt="animation logo">
    </div>



    <div class="scrolling-container">
      <div class="image-container">
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
        <span><img src="../assets/icn-svg/work.svg" alt="work"></span>
        <span><img src="../assets/icn-svg/star.svg" alt="star"></span>
      </div>
    </div>

  </div>
</template>

<style>
.scrolling-container {
  width: 100%;
  height: 100vh;
  overflow-x: auto; /* Activation du défilement horizontal */
  display: flex;
  align-items: center; /* Centre verticalement les éléments */
}

.image-container {
  display: flex;
  gap: 50px;
}

span img {
  max-width: 100%; /* Empêche les images de déborder de la div */
}
</style>