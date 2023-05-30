<template>
  <div class="row my-5">
    <MainHeading>Our Services</MainHeading>
  </div>
  <div class="container py-3">
    <div class="row bg-light p-5">
      <div class="col-md-4">
        <div class="service-container">
          <div class="service-container__caption">
            <secondaryHeading @click="toggleElement"  class="service-container__tittle"
              >Web development</secondaryHeading
            >
            <secondaryHeading @click="marketing" class="service-container__tittle"
              >Digital marketing</secondaryHeading
            >
            <secondaryHeading @click="toggleElement" class="service-container__tittle"
              >Graphic design</secondaryHeading
            >
            <secondaryHeading @click="branding" class="service-container__tittle"
              >Branding</secondaryHeading
            >
            <secondaryHeading @click="videography" class="service-container__tittle"
              >Commercial videography</secondaryHeading
            >
            <secondaryHeading @click="photography" class="service-container__tittle"
              >commercial photography</secondaryHeading
            >
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="service-content">
          <div :class="{ hidden: isElementHidden }">
            <!-- Content to be hidden/shown -->
            <Paragraph
              >Develops modern Android as well as iOS based Mobile Application using clients needs,handles all type of website designing, Web Hosting, Domain, Security and troubleshooting solutions.
            </Paragraph>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Enterprise Magento Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">PWA for Magento</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Magento Performance Optimization</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">ReactJS Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Adobe Commerce Cloud Implementation</Paragraph>
                </li>
            </ul>
          </div>

          <div :class="{ marketing: isDigitalMarketingHidden }">
            <!-- Content to be hidden/shown -->
            <Paragraph
              >fgfgf
            </Paragraph>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Enterprise Magento Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">PWA for Magento</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Magento Performance Optimization</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">ReactJS Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Adobe Commerce Cloud Implementation</Paragraph>
                </li>
            </ul>
          </div>

          <div :class="{branding: isBrandingHidden }">
            <!-- Content to be hidden/shown -->
            <Paragraph
              >Branding
            </Paragraph>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Enterprise Magento Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">PWA for Magento</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Magento Performance Optimization</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">ReactJS Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Adobe Commerce Cloud Implementation</Paragraph>
                </li>
            </ul>
          </div>

          <div :class="{videography: isvideographyHidden }">
            <!-- Content to be hidden/shown -->
            <Paragraph
              >Videography
            </Paragraph>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Enterprise Magento Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">PWA for Magento</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Magento Performance Optimization</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">ReactJS Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Adobe Commerce Cloud Implementation</Paragraph>
                </li>
            </ul>
          </div>

          <div :class="{photography: isphotographyHidden }">
            <!-- Content to be hidden/shown -->
            <Paragraph
              >photography
            </Paragraph>
            <ul class="features">
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Enterprise Magento Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">PWA for Magento</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Magento Performance Optimization</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">ReactJS Development</Paragraph>
                </li>
                <li class="features__item">
                    <span>
                        <i class="bi bi-arrow-right-short features__item__icon"></i>
                    </span>
                    <Paragraph class="features__text">Adobe Commerce Cloud Implementation</Paragraph>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.service-container {
  &__caption {
    margin: 1.5rem 0;
  }
  &__tittle {
    margin: 2rem 0;
    font-size: 1.1rem;
    &:hover {
        color: red;
        cursor: pointer;
    }
  }
}
.hidden {
  display: none;
}
.marketing {
    display: none;
}
.marketing {
    display: none;
}
.branding {
    display: none;
}
.videography {
    display: none;
}
.photography {
    display: none;
}
.service-content {
  padding: 1.5rem 0;
  transition: all .4s ease;
}
.features {
    padding: 0;
    &__text {
        display: inline-block;
        vertical-align: middle;
        margin-left: 1rem;
    }
    &__item {
        list-style: none;
        display: table;

        &__icon {
            font-size: 2rem;
            font-weight: 700;
            color: red;
        }
    }
}
</style>

<script>
import MainHeading from "../Typography/MainHeading.vue";
import secondaryHeading from "../Typography/secondaryHeading.vue";
import Paragraph from "../Typography/Paragraph.vue";
export default {
  name: "ServiceMoro",
  components: {
    MainHeading,
    secondaryHeading,
    Paragraph,
  },
  data() {
    return {
      isElementHidden: false,
      isDigitalMarketingHidden: true,
      isBrandingHidden: true,
      isvideographyHidden: true,
      isphotographyHidden: true
    };
  },
  methods: {
    toggleElement() {
      this.isElementHidden = !this.isElementHidden;
      this.isDigitalMarketingHidden = true
      this.isBrandingHidden = true
      this.isvideographyHidden = true
      this.isphotographyHidden= true
    },
    marketing() {
        this.isDigitalMarketingHidden = !this.isDigitalMarketingHidden;
        this.isElementHidden = true
        this.isBrandingHidden = true
        this.isvideographyHidden = true
        this.isphotographyHidden= true
    },
    branding(){
        this.isBrandingHidden = !this.isBrandingHidden;
        this.isElementHidden = true
        this.isDigitalMarketingHidden = true
        this.isvideographyHidden = true
        this.isphotographyHidden= true
    },
    videography() {
        this.isvideographyHidden = !this.isvideographyHidden;
        this.isElementHidden = true
        this.isDigitalMarketingHidden = true
        this.isBrandingHidden = true
        this.isphotographyHidden= true

    },
    photography() {
        this.isphotographyHidden = !this.isphotographyHidden;
        this.isElementHidden = true
        this.isDigitalMarketingHidden = true
        this.isBrandingHidden = true
        this.isvideographyHidden = true
    },
    
  },
};
</script>
