<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import './assets/style.css'

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  const customCursor = ref(null)


  const isLoading = ref(true);
  const showProgress = ref(true);
  const loadingProgress = ref(0);

  const startLoading = () => {
  setTimeout(() => {
    showProgress.value = false;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  }, 4000);
};


  onMounted(() => {
    animateCursor();

    startLoading();

    setTimeout(() => {
    const firstWord = document.querySelector('.first-word');
    const secondWord = document.querySelector('.second-word');
    if (firstWord && secondWord) {
      firstWord.style.opacity = "1";
      secondWord.style.opacity = "1";
    }
  }, 1000);

  setTimeout(() => {
    const centerText = document.querySelector('.center-text');
    if (centerText) {
      centerText.style.transform = 'translate(-50%, -150%)';
    }
  }, 3500);

  setTimeout(() => {
    const LoadingProcess = document.querySelector('.loading-progress');
    if (LoadingProcess) {
      LoadingProcess.style.transform = 'translate(0%, -150%)';
    }
  }, 3500); 

  setTimeout(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.style.transform = 'translate(0%, -500%)';
    }
  }, 4000);
});


  const updateProgress = () => {
    if (showProgress.value) {
      loadingProgress.value += 1;
      if (loadingProgress.value < 100) {
        setTimeout(updateProgress, 30);
      }
    }
  };

  updateProgress();





  // curseur personnalisé 

  const animateCursor = () => {
    window.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = (e) => {
      if (customCursor.value) {
          const posX = e.clientX;
          const posY = e.clientY;

          const offsetX = -16;
          const offsetY = -16; 

          customCursor.value.style.transform = `translate(${posX + offsetX}px, ${posY + offsetY}px)`;
      }
  };



  // ...



</script>

<template>
  <div class="custom-cursor" ref="customCursor"></div>


  <transition name="fade">
    <div class="loading-screen" v-if="isLoading" style="{ transform: isLoading ? 'translateY(0%)' : 'translateY(-100%)' }">

      <!-- Pourcentage -->
      <div class="loading-progress font-darker text-white font-normal fixed right-12 bottom-12" v-if="showProgress">
        <p class="text-8xl">{{ loadingProgress }}%</p>
      </div>

      <!-- Thomas Poupon -->
      <div class="center-text font-darker text-white flex gap-3 text-5xl fixed top-[50%] left-[50%]" v-if="showProgress">
        <div class="first-word font-bold inline-block opacity-0">
          THOMAS
        </div>
        <div class="second-word font-bold inline-block opacity-0">
          POUPON
        </div>
      </div>
    </div>

    <div v-else>
      <Header />
      <RouterView />
      <Footer />
    </div>


  </transition>
</template>


<style>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(38, 38, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: transform 3s ease; 
  transform: translateY(0%);
}

.loading-progress {
  font-size: 24px;
  transition: transform 1s ease; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.center-text {
  text-align: center;
  transform: translate(-50%, -50%);
  transition: transform 1s ease; 
}

@keyframes wordFadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.first-word {
  animation: wordFadeIn 1s ease forwards;
  transition: transform 1s ease;
}

.second-word {
  animation: wordFadeIn 1s ease 0.5s forwards;
  transition: transform 1s ease;
}

</style>