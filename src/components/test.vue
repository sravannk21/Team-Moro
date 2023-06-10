<template>
  <section class="services">
    <!-- Placeholder element to observe -->
    <div ref="triggerElement"></div>
    <div class="container">
      <MainHeading>Explore our services</MainHeading>
    </div>
    <div class="container service-container">
      <div class="row">
        <transition-group appear @before-enter="beforeEnter2" @enter="enter2">
          <div class="col-md-4 d-flex mb-5"  v-for="(value,index) in service" :key="value" :data-index="index">  
            <div class="sercices-container__service-box">
              <div class="icon-box mb-3">
                <i class="bi bi-pencil-square icon-box__icon"></i>
              </div>
              <div class="icon-caption">
                <secondaryHeading>{{ value.title }}</secondaryHeading>
              </div>
              <div class="icon-desc my-4">
                <Paragraph>
                  {{ value.description }}
                </Paragraph>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ref } from 'vue';
import MainHeading from "./Typography/MainHeading.vue";
import secondaryHeading from "./Typography/secondaryHeading.vue";
import Paragraph from "./Typography/Paragraph.vue";
export default {
  name: "serviceBlock",
  components: {
    MainHeading,
    secondaryHeading,
    Paragraph,
  },
  setup() {
      const service = ref([
        {title: 'DIGITAL MARKETING', description: 'Digital marketing, which incorporates search result advertisements, email ads, etc anything that mixes marketing with consumer feedback....',},
        {title: 'GRAPHIC DESIGN', description: 'We create beautiful, clear and functional graphics for all of your print and digital design needs.'},
        {title: 'BRANDING', description: 'When it comes to your target market, a distinctive brand may set you apart from the competition and keep you well ahead of it.'},
        {title: 'COMMERCIAL VIDEOGRAPHY', description: 'Moving content brings incredible life to your brand. It dramatically increases conversions and bolsters your credibility considerably.'},
        {title: 'COMMERCIAL PHOTOGRAPHY', description: 'It dramatically increases conversions and bolsters your credibility considerably.'},
        {title: 'WEB & APP DEVELOPMENT', description: 'Develops modern Android as well as iOS based Mobile Application using clients needs.'}
      ])
      const beforeEnter2 = (el) => {
        el.style.transform = 'translateY(-60px)'
        el.style.opacity = 0
      }
      const enter2 = (el, done) => {
        gsap.to(el, {
          opacity: 1,
          y:0,
          duration: 1,
          onComplete: done,
          delay: el.dataset.index * 1
        })
      }
      return {service,beforeEnter2,enter2}
    },
  data() {
    return {
      animate: false, // Flag to control animation
      services: [
        {
          id: 1,
          tittle: "digital marketing",
          description:
            "Digital marketing, which incorporates search result advertisements, email ads, etc anything that mixes    marketing with consumer feedback....",
        },
        {
          id: 2,
          tittle: "GRAPHIC DESIGN",
          description: "We create beautiful, clear and functional graphics for all of your print and digital design needs."
        },
        {
          id: 3,
          tittle: "BRANDING",
          description: "When it comes to your target market, a distinctive brand may set you apart from the competition and keep you well ahead of it."
        },
      ],
    };
  },
  mounted() {
    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when the element is 50% visible
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.triggerElement);
  },
  
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
    },
    enter(el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 2,
      });
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the trigger element is in view, start the animation
          this.animate = true;
        } else {
          // When the trigger element is out of view, reset the animation
          this.animate = false;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
/* Include Bootstrap Icons CSS */
@import "~bootstrap-icons/font/bootstrap-icons.css";
.services {
  margin: 4rem 0;
}
.sercices-container {
  margin-top: 4rem;

  &__service-box {
    border: 1px solid rgba(78, 79, 79, 0.4);
    border-radius: 5px;
    padding: 2rem;
  }
}

.icon-box {
  text-align: left;
  &__icon {
    color: red;
    font-size: 4rem;
  }
}
</style>

<template>
  <section class="services">
    <!-- Placeholder element to observe -->
    <div ref="triggerElement"></div>
    <div class="container">
      <MainHeading>Explore our services</MainHeading>
    </div>
    <div class="container sercices-container">
      <div class="row">
        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div
            class="col-md-4 d-flex mb-5 mb-md-0"
            ref="animatedElement"
            v-if="animate">
            <div class="sercices-container__service-box">
              <div class="icon-box mb-3">
                <i class="bi bi-megaphone icon-box__icon"></i>
              </div>
              <div class="icon-caption">
                <secondaryHeading>DIGITAL MARKETING</secondaryHeading>
              </div>
              <div class="icon-desc my-4">
                <Paragraph>
                  Digital marketing, which incorporates search result
                  advertisements, email ads, etc anything that mixes marketing
                  with consumer feedback....
                </Paragraph>
              </div>
            </div>
          </div>
        </transition>

        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div
            class="col-md-4 d-flex mb-5 mb-md-0"
            ref="animatedElement"
            v-if="animate"
          >
            <div class="sercices-container__service-box">
              <div class="icon-box mb-3">
                <i class="bi bi-pencil-square icon-box__icon"></i>
              </div>
              <div class="icon-caption">
                <secondaryHeading>GRAPHIC DESIGN</secondaryHeading>
              </div>
              <div class="icon-desc my-4">
                <Paragraph>
                  We create beautiful, clear and functional graphics for all of
                  your print and digital design needs.
                </Paragraph>
              </div>
            </div>
          </div>
        </transition>

        <transition appear @before-enter="beforeEnter" @enter="enter">
          <div class="col-md-4 d-flex" ref="animatedElement" v-if="animate">
            <div class="sercices-container__service-box">
              <div class="icon-box mb-3">
                <i class="bi bi-boxes icon-box__icon"></i>
              </div>
              <div class="icon-caption">
                <secondaryHeading>BRANDING</secondaryHeading>
              </div>
              <div class="icon-desc my-4">
                <Paragraph>
                  When it comes to your target market, a distinctive brand may
                  set you apart from the competition and keep you well ahead of
                  it.
                </Paragraph>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="container sercices-container">
      <div class="row">
        <div class="col-md-4 d-flex mb-5 mb-md-0">
          <div class="sercices-container__service-box">
            <div class="icon-box mb-3">
              <i class="bi bi-camera-reels icon-box__icon"></i>
            </div>
            <div class="icon-caption">
              <secondaryHeading>COMMERCIAL VIDEOGRAPHY</secondaryHeading>
            </div>
            <div class="icon-desc my-4">
              <Paragraph>
                Moving content brings incredible life to your brand. It
                dramatically increases conversions and bolsters your credibility
                considerably.
              </Paragraph>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex mb-5 mb-md-0">
          <div class="sercices-container__service-box">
            <div class="icon-box mb-3">
              <i class="bi bi-camera icon-box__icon"></i>
            </div>
            <div class="icon-caption">
              <secondaryHeading>COMMERCIAL PHOTOGRAPHY</secondaryHeading>
            </div>
            <div class="icon-desc my-4">
              <Paragraph>
                It dramatically increases conversions and bolsters your
                credibility considerably.
              </Paragraph>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex">
          <div class="sercices-container__service-box">
            <div class="icon-box mb-3">
              <i class="bi bi-code-slash icon-box__icon"></i>
            </div>
            <div class="icon-caption">
              <secondaryHeading>WEB & APP DEVELOPMENT</secondaryHeading>
            </div>
            <div class="icon-desc my-4">
              <Paragraph>
                Develops modern Android as well as iOS based Mobile Application
                using clients needs.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Include Bootstrap Icons CSS */
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "animate.css";
.services {
  margin: 4rem 0;
}
.sercices-container {
  margin-top: 4rem;

  &__service-box {
    border: 1px solid rgba(78, 79, 79, 0.4);
    border-radius: 5px;
    padding: 2rem;
  }
}

.icon-box {
  text-align: left;
  &__icon {
    color: red;
    font-size: 4rem;
  }
}

</style>

<script>
import 'animate.css'
import gsap from "gsap";
import MainHeading from "./Typography/MainHeading.vue";
import secondaryHeading from "./Typography/secondaryHeading.vue";
import Paragraph from "./Typography/Paragraph.vue";
export default {
  name: "serviceBlock",
  components: {
    MainHeading,
    secondaryHeading,
    Paragraph,
  },
  data() {
    return {
      animate: false, // Flag to control animation
    };
  },
  mounted() {
    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when the element is 50% visible
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.triggerElement);
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      el.style.transition = "all"
    },
    
    enter(el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: .5,
        delay: .5
      });
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the trigger element is in view, start the animation
          this.animate = true;
        } else {
          // When the trigger element is out of view, reset the animation
          this.animate = false;
        }
      });
    },
  },
};
</script>
