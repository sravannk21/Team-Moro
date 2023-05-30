<template>
  <div class="row">
    <MainHeading>What Our clients says</MainHeading>
  </div>
    <div class="row py-5 text-center">
      <div class="slider-container">
        <transition-group name="testimonial-slide" tag="ul">
            <div class="testimonial-box">
                <li v-for="(testimonial, index) in testimonials" :key="index" v-show="index === currentIndex">
            <div class="testimonial-item">
              <div class="testimonial-content">
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <p class="testimonial-author">{{ testimonial.author }}</p>
              </div>
            </div>
          </li>
          <div class="slider-controls">
        <button class="slider-control-prev prev-icon" @click="goToPreviousSlide" :disabled="currentIndex === 0">
          <i class="bi bi-caret-left-fill px-3"></i>
        </button>
        <button class="slider-control-next next-icon" @click="goToNextSlide" :disabled="currentIndex === testimonials.length - 1">
          <i class="bi bi-caret-right-fill px-3"></i>
        </button>
      </div>
            </div>
            
        </transition-group>
      </div>
    </div>
  </template>
  
  <script>
  import MainHeading from './Typography/MainHeading.vue';
  export default {
    name: "TestimonialsSlider",
    components: {
      MainHeading
    },
    data() {
      return {
        currentIndex: 0,
        testimonials: [
          {
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "John Doe"
          },
          {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            author: "Jane Smith"
          },
          {
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            author: "Adam Johnson"
          }
        ]
      };
    },
    methods: {
      goToPreviousSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      goToNextSlide() {
        if (this.currentIndex < this.testimonials.length - 1) {
          this.currentIndex++;
        }
      }
    }
  };
  </script>
  
<style scoped lang="scss">
.slider-container {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('../assets/testimonial-bg.jpg');
    background-position: bottom;
    background-size: cover;
    height: auto;
    li {
        list-style: none;
    }
}
.testimonial-box {
    margin-top: 4rem;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    margin: 4rem auto;
    transform: skewX(-12deg);
    width: 80%;
}
.testimonial-item, .slider-controls {
  transform: skewX(12deg);
  margin: 3rem 0;
  margin: 3rem 0;
}
.testimonial-item {
  height: 4rem;
}
.next-icon .prev-icon {
  background-color: rgb(3, 3, 3);
  color: #fff;
}
.prev-icon {
  margin-right: 1rem;
}
.testimonial-author {
  font-weight: 700;
  color: #000000;
  margin-top: 1rem;
}
.testimonial-text {
  width: 70%;
  margin: 0 auto;
  font-size: 0.75rem;
}
.slider-controls {
  margin: 1rem 0;
}
</style>
  