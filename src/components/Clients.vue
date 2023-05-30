<template>
  <div class="slider">
  <div class="slide-track">
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
    <div class="slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
img {
  width: 100px;
  height: 100px;
  animation: scroll 17s linear infinite;
}

.slide-track {
  width: 100%;
  display: flex;
  gap: 3em;
  overflow: hidden;
}

@keyframes scroll {
  0% {transform: translateX(40rem);}
  100% {transform: translateX(-1000%)}
}
</style>

<script>
export default {
  name: "ClientMoro",
}
</script>
