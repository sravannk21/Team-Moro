<template>
  <section class="portfolio">
    <div class="row">
      <div class="title">
        <MainHeading>Our Recent Works</MainHeading>
      </div>
      <div class="container-fluid my-5">
        <div class="row">
          <div class="col-md-3 px-0 portfolio-item">
            <img src="../assets/portfolio/1.webp" class="portfolio-img" alt="">
          </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/2.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/3.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/4.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
            <img src="../assets/portfolio/1.webp" class="portfolio-img" alt="">
          </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/2.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/3.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/4.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
            <img src="../assets/portfolio/1.webp" class="portfolio-img" alt="">
          </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/2.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/3.webp" class="portfolio-img" alt="">
        </div>
        <div class="col-md-3 px-0 portfolio-item">
          <img src="../assets/portfolio/4.webp" class="portfolio-img" alt="">
        </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style scoped lang="scss">
.portfolio{
  margin: 4rem 0;
}
.portfolio-img{
  height: 15rem;
  width: 100%;
  filter: blur(.5px) brightness(80%);
  transition: all .4s;

  &:hover,
  &:active {
    filter: none;
    transform: scale(1.2);
  }

}
.portfolio-item {
  z-index: 10;
  &:not(:hover) {
    z-index: 9;
  }
}

.title {
  margin: 4rem 0;
}
</style>

<script>
import MainHeading from './Typography/MainHeading.vue';
export default {
  name: 'PortfolioMoro',
  components: {
    MainHeading
  }
}
</script>