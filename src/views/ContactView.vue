<script setup>
  import { ref } from 'vue';

  const formData = ref({
    name: '',
    email: '',
    message: ''
  });

  const submitForm = () => {
    const emailData = {
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message
    };

    // Simulation de l'envoi de l'email à thomaspoupon.pro@gmail.com
    console.log('Envoi de l\'email :', emailData);
    
    // Réinitialisation du formulaire après soumission réussie
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
  };
</script>


<template>
  <div class="md:grille px-4 md:px-24 my-[100px]">
    <div class="flex flex-col col-span-6 mb-[100px]">
      <h1 class="text-white font-light font-darker text-6xl uppercase">Fill out the form to contact us about your next project.</h1>
      <ul class="mt-[120px] flex flex-col gap-3">
        <li>
          <a href="https://www.instagram.com/visual.thomas/" class="flex gap-4">
          <p class="text-white font-darker text-4xl font-light">Instagram</p>
          <img src="../assets/icn-svg/arrow-footer.svg" alt="arrow" class="h-6 mt-4">
          </a>
        </li>

        <li>
          <a href="https://linktr.ee/thomaspoupon" class="flex gap-4">
          <p class="text-white font-darker text-4xl font-light">Linktr.ee</p>
          <img src="../assets/icn-svg/arrow-footer.svg" alt="arrow" class="h-6 mt-4">
          </a>
        </li>

        <li>
          <a href="tel:+33649779176" class="flex gap-4">
          <p class="text-white font-darker text-4xl font-light">Call me</p>
          <img src="../assets/icn-svg/arrow-footer.svg" alt="arrow" class="h-6 mt-4">
          </a>
        </li>

        <li>
          <a href="mailto:thomaspoupon.pro@egmail.com"  class="flex gap-4">
          <p class="text-white font-darker text-4xl font-light">Send me a mail</p>
          <img src="../assets/icn-svg/arrow-footer.svg" alt="arrow" class="h-6 mt-4">
          </a>
        </li>
      </ul>

    </div>
    <form @submit.prevent="submitForm" class="flex flex-col gap-4 col-start-8 col-span-5">
      <div class="flex flex-col gap-2">
          <label class="text-white font-bold font-darker text-2xl" for="name">NAME</label>
          <input type="text" id="name" v-model="formData.name" required class="text-grey font-normal text-xl font-darker rounded-3xl border border-white bg-transparent px-5 py-2 pb-3" placeholder="Full name">
      </div>

      <div class="flex flex-col gap-2">
          <label class="text-white font-bold font-darker text-2xl" for="email">EMAIL</label>
          <input type="email" id="email" v-model="formData.email" required class="text-grey font-normal text-xl font-darker rounded-3xl border border-white bg-transparent px-5 py-2 pb-3" placeholder="You@example.com">
      </div>

      <div class="flex flex-col gap-2">
          <label class="text-white font-bold font-darker text-2xl" for="message">MESSAGE</label>
          <textarea id="message" v-model="formData.message" required class="text-grey font-normal text-xl font-darker rounded-3xl border border-white bg-transparent px-5 py-2 pb-24" placeholder="Enter here..."></textarea>
      </div>

      <button class="flex gap-4 mt-4 justify-center text-white font-semibold font-darker text-2xl bg-white bg-opacity-30 rounded-3xl py-2 px-4" type="submit">SUBMIT<span><img src="../assets/icn-svg/arrow.svg" alt="arrow" class="h-5 mt-2"></span></button>
    </form>

  </div>
</template>