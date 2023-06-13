<template>
    <section class="about">
        <div class="container">
            <div class="row about-container">
                <div class="col-md-6 my-auto" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
                    <div class="row mb-2">
                        <secondaryHeading>About Us</secondaryHeading>
                    </div>
                    <div class="about-container__text py-3">
                        <Paragraph>We believe that truly impactful brands inspire their audiences to action, to dream, to change; they leave an impression on their audiences and wield genuine influence.</Paragraph>
                    </div>
                    <div class="about-container__bold-text pb-4">
                        <Paragraph><strong>Creating work like this is our passion, it’s what brought us together, and it’s what keeps us moving forward.</strong></Paragraph>
                    </div>
                    <div class="about-container__button-box py-4">
                        <CommonButton url="" button="contact-btn" >Contact Us</CommonButton>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
                    <div class="about-image-box">
                        <img src="@/assets/logo1.jpg" class="img-fluid about-image-box--img" alt="">
                    </div>
                </div>
            </div>
        </div>
        <MissionVision/>
        <Clients/>
    </section>
</template>

<style scoped lang="scss">
.about {
    margin: 4rem 0;
}
.contact-btn {
    padding: .5rem 2rem;
    border: 1px solid #000;
    border-radius: 0;
    text-transform: capitalize;
    color: red;
    text-decoration: none;
    transition: all .4s;

    &:hover,
    &:active {
        background-position: 100%;
        color: #fff;
    }

    &:link,
    &:visited {
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #000 50%);
    background-size: 220%;
    }
}
</style>

<script>
import secondaryHeading from '../Typography/secondaryHeading.vue';
import Paragraph from '../Typography/Paragraph.vue';
import CommonButton from '../CommonButton.vue';
import MissionVision from './Mission-Vision.vue';
import Clients from './Clients.vue';
export default {
    name: 'AboutMoro',
    components: {
        Paragraph,
        CommonButton,
        secondaryHeading,
        MissionVision,
        Clients
    }
}
</script>