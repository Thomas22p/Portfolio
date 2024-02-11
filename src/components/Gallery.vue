<script setup>
    
</script>


<template>
    <div class="scroll2-container">
        <div class="scroll2">
            <div class="scroll2-slider">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/gallery.svg" alt="gallery">
                <img src="../assets/icn-svg/star.svg" alt="star">
            </div>
        </div>
    </div>
</template>


<style>


.scroll2-container {
    width: 100%;
    overflow: hidden;
}

.scroll2 {
    display: flex;
    animation: slide2 5s linear infinite;
}

.scroll2-slider {
    display: flex;
    gap: 20px;
}

@keyframes slide2 {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-74%);
    }
}



</style>