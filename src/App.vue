<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import './assets/style.css'

  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue'
  // import LoadingPage from './components/LoadingPage.vue'

  const customCursor = ref(null)

  // const isFirstVisit = ref(true)

  onMounted(() => {
    animateCursor()

    // Vérifiez si c'est la première visite en utilisant le localStorage
  // const visitedBefore = localStorage.getItem('visitedBefore')

  // if (visitedBefore) {
  //   isFirstVisit.value = false
  // } else {
  //   // Si c'est la première visite, enregistrez cette information dans le localStorage
  //   localStorage.setItem('visitedBefore', true)
  // }

  })



  // curseur personnalisé 

  const animateCursor = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e) => {
      if (customCursor.value) {
          const posX = e.clientX;
          const posY = e.clientY;

          // Ajoutez le décalage pour ajuster le curseur personnalisé par rapport au pointeur réel
          const offsetX = -16; // ajustez la valeur en fonction de la largeur du curseur personnalisé
          const offsetY = -16; // ajustez la valeur en fonction de la hauteur du curseur personnalisé

          customCursor.value.style.transform = `translate(${posX + offsetX}px, ${posY + offsetY}px)`;
      }
  };



  // ...

</script>

<template>
  <div class="custom-cursor" ref="customCursor"></div>
  <Header />
  <div>
    <header>
      <!-- <LoadingPage v-if="isFirstVisit" /> -->
      <div>
        <nav>
          <RouterLink to="/" class="text-white menu-link font-bold font-darker">Home</RouterLink>
          <RouterLink to="/about" class="text-white menu-link font-bold font-darker">About</RouterLink>
          <RouterLink to="/contact" class="text-white menu-link font-bold font-darker">Contact</RouterLink>
        </nav>

        <RouterView />
      </div>
    </header>


    

  


    

  </div>

  <Footer />
</template>


<style>
.light-section {
  background-color: #f9f9f9;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>