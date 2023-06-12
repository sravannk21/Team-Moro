<style scoped lang="scss">
.testimonial-box {
  padding: 1rem;
  color: #fff;
}
.user-img {
  width: 4rem;
}
.testimonial-bg {
  background-image: linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url('@/assets/img/testimonials.jpg');
  background-size: cover;
  background-position: center;
  padding: 3rem 0;
}
.testimonial-name {
  color: #504d4d;
  font-style: italic
}
</style>
<template>
  <div class="container-fluid testimonial my-5">
    <div class="row testimonial-bg">
      <div class="col-md-12 text-center my-auto">
        <div class="testimonial-box">
          <swiper
          :slides-per-view="1"
          :space-between="50"
          :autoplay="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
          <swiper-slide v-for="index in testimonial" :key="index">
            <img :src="index.imgUrl" class="user-img">
            <p class="pt-3 w-50 mx-auto">{{ index.testimonial }}</p>
            <p class="testimonial-name">{{ index.client_name }}</p>
          </swiper-slide>
        </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "test-moro",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonial = [
      {
        imgUrl: require("../assets/img/user.png"),
        testimonial:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        client_name: "user name"
      },
      {
        imgUrl: require("../assets/img/user.png"),
        testimonial:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          client_name: "user name"
      },
      {
        imgUrl: require("../assets/img/user.png"),
        testimonial:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          client_name: "user name"
      },
    ];

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      testimonial,
    };
  },
};
</script>
