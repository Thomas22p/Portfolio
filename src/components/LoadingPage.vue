<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'


  const isFirstVisit = ref(true)

    onMounted(() => {
    // Vérifiez si c'est la première visite en utilisant le localStorage
    const visitedBefore = localStorage.getItem('visitedBefore')

    if (visitedBefore) {
        isFirstVisit.value = false
    } else {
        // Si c'est la première visite, enregistrez cette information dans le localStorage
        localStorage.setItem('visitedBefore', true)

        // Définissez un délai de 20 secondes avant de masquer la page de chargement
        setTimeout(() => {
        isFirstVisit.value = false
        }, 20000) // 20 secondes en millisecondes
    }
    })
</script>

<template>
    <div class="loading-page">
      <p>Loading...</p>
    </div>
</template>
  
  
<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 9999;
  }
</style>
  