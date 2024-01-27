<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './assets/style.css'

const customCursor = ref(null)

onMounted(() => {
  animateCursor()
})

const animateCursor = () => {
  window.addEventListener("mousemove", handleMouseMove)
}

const handleMouseMove = (e) => {
  if (customCursor.value) {
    const posX = e.clientX;
    const posY = e.clientY;

    const offsetX = -10;
    const offsetY = -10;

    customCursor.value.style.transform = `translate(${posX + offsetX}px, ${posY + offsetY}px)`;

    // Utilise requestAnimationFrame pour une animation plus fluide
    requestAnimationFrame(animateCursor)
  }
}
</script>

<template>
  <header>

    <div>

      <div class="circle" ref="customCursor"></div>

      <nav>
        <RouterLink to="/" class="text-slate-100">Home</RouterLink>
        <RouterLink to="/about" class="text-slate-100">About</RouterLink>
        <RouterLink to="/contact" class="text-slate-100">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
