<template>
    <section class="services">
        <div class="container">
            <MainHeading>Explore our services</MainHeading>
        </div>
        <div class="container sercices-container">
            <div class="row">
                <div class="col-md-4 d-flex">
                    <div class="sercices-container__service-box">
                        <div class="icon-box mb-3">
                        <i class="bi bi-megaphone icon-box__icon"></i>
                    </div>
                    <div class="icon-caption">
                        <secondaryHeading>DIGITAL MARKETING</secondaryHeading>
                    </div>
                    <div class="icon-desc my-4">
                        <Paragraph>
                            Digital marketing, which incorporates search result advertisements, email ads, etc anything that mixes marketing with consumer feedback....
                        </Paragraph>
                    </div>
                    </div>
                </div>
                
                <div class="col-md-4 d-flex">
                    <div class="sercices-container__service-box">
                        <div class="icon-box mb-3">
                        <i class="bi bi-pencil-square icon-box__icon"></i>
                    </div>
                    <div class="icon-caption">
                        <secondaryHeading>GRAPHIC DESIGN</secondaryHeading>
                    </div>
                    <div class="icon-desc my-4">
                        <Paragraph>
                            e create beautiful, clear and functional graphics for all of your print and digital design needs.
                        </Paragraph>
                    </div>
                    </div>
                </div>

                <div class="col-md-4 d-flex">
                    <div class="sercices-container__service-box">
                        <div class="icon-box mb-3">
                        <i class="bi bi-boxes icon-box__icon"></i>
                    </div>
                    <div class="icon-caption">
                        <secondaryHeading>BRANDING</secondaryHeading>
                    </div>
                    <div class="icon-desc my-4">
                        <Paragraph>
                            When it comes to your target market, a distinctive brand may set you apart from the competition and keep you well ahead of it.
                        </Paragraph>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container sercices-container">
            <div class="row">
                <div class="col-md-4 d-flex">
                    <div class="sercices-container__service-box">
                        <div class="icon-box mb-3">
                        <i class="bi bi-camera-reels icon-box__icon"></i>
                    </div>
                    <div class="icon-caption">
                        <secondaryHeading>COMMERCIAL VIDEOGRAPHY</secondaryHeading>
                    </div>
                    <div class="icon-desc my-4">
                        <Paragraph>
                            Moving content brings incredible life to your brand. It dramatically increases conversions and bolsters your credibility considerably.
                        </Paragraph>
                    </div>
                    </div>
                </div>
                
                <div class="col-md-4 d-flex">
                    <div class="sercices-container__service-box">
                        <div class="icon-box mb-3">
                        <i class="bi bi-camera icon-box__icon"></i>
                    </div>
                    <div class="icon-caption">
                        <secondaryHeading>COMMERCIAL PHOTOGRAPHY</secondaryHeading>
                    </div>
                    <div class="icon-desc my-4">
                        <Paragraph>
                            It dramatically increases conversions and bolsters your credibility considerably.
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
                            Develops modern Android as well as iOS based Mobile Application using clients needs.
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
@import '~bootstrap-icons/font/bootstrap-icons.css';
.services {
    margin: 4rem 0;
}
.sercices-container {
    margin-top: 4rem;

    &__service-box {
        border: 1px solid rgba(78, 79, 79, .4);
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
import MainHeading from './Typography/MainHeading.vue';
import secondaryHeading from './Typography/secondaryHeading.vue';
import Paragraph from './Typography/Paragraph.vue';
export default {
    name: 'serviceBlock',
    components: {
        MainHeading,
        secondaryHeading,
        Paragraph
    }
}
</script>