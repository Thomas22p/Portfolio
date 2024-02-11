<script setup>
    
</script>


<template>
    <div class="scroll-container">
        <div class="scroll">
            <div class="scroll-slider">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
                <img src="../assets/icn-svg/work.svg" alt="work">
                <img src="../assets/icn-svg/star.svg" alt="star">
            </div>
        </div>
    </div>
</template>


<style>


.scroll-container {
    width: 100%;
    overflow: hidden;
}

.scroll {
    display: flex;
    animation: slide 5s linear infinite;
}

.scroll-slider {
    display: flex;
    gap: 20px;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-54.8%);
    }
}




    /* *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .scroll {
        margin: 0;
        display: flex;
        margin-bottom: 200px;
        overflow: hidden;
        white-space: nowrap;
    }


    .scroll-slider {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        animation: slide 5s linear infinite;
    }


    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
        
    } */




    /* .scroll {
        display: flex;
        position: relative;
        width: 800px;
        height: 600px;
        margin: auto;
        background-color: #D34444;
        overflow: hidden;
        z-index: 1;
    }

    .m-scroll__title {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        transition: all 6s ease;

    }

    .m-scroll_div {
      display: flex;
      animation: scrollText 6s infinite linear;
    }




/*div:hover {
  animation-play-state: paused;
}*/
/* @keyframes scrollText {
  from   { transform: translateX(0%); }
  to { transform: translateX(-100%); }
} */

</style>