<style scoped lang="scss">
.team-member-box {
  padding: 2rem;
  height: 15rem;
  margin-bottom: 2rem;
}
.member-image {
  height: auto;
  width: 10rem;
  margin: 0 auto;
}
.member-name {
  text-transform: uppercase;
  font-size: 1rem;
  padding: .5rem 0;
}
.position {
  color: #a6a4a4;
  
}
</style>
<template>
  <div class="container">
    <div class="row">
      <swiper
        :slides-per-view="3"
        :space-between="50"
        :autoplay="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
        <swiper-slide>
      <div class="team-member-box text-center">
        <img src="@/assets/user.jpg" alt="" class="member-image">
        <h4 class="member-name">member name</h4>
        <p class="position">position tittle</p>
      </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
export default {
  name: "our-team",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
