<template>
  <section class="portfolio">
    <div>
      <div class="title">
        <MainHeading>Our Recent Works</MainHeading>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/1.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/2.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/10.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/5.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/6.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/13.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/12.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
          <div class="gallery">
            <div class="gallery-item">
              <img
                src="../components/Portfolio/img/portfolio/9.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.gallery-item {
  width: 100%;
  height: 100%;
  margin: 0 auto 1.2rem auto;
  position: relative;
  z-index: 2000;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.7);
  }
}
</style>

<script>
import MainHeading from "./Typography/MainHeading.vue";
export default {
  name: "Portfolio2Moro",
  components: {
    MainHeading,
  },
};
</script>
