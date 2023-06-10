<template>
    <div class="container">
        <section class="about">
            <div class="container mt-3">
                <h1 class="display-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Get started in seconds</h1>
            </div>
            <div class="container --padding-none">
                <div class="row about__about-box">
                    <div class="col-md-6" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <div class="about-left">
                            <div class="about-left__content">
                                <p class="about-left__paragraph">Vercel is a platform from the founders of Next.js, making it a framework you can deploy easily.</p>
                            </div>
                            <div class="about-left__content">
                                <p class="about-left__paragraph">Jumpstart your Next.js development with one of our pre-built solutions.</p>
                            </div>
                            <div class="about-left__button">
                                <CommonButton url ="#" button="button">Deploy a Template &rarr;</CommonButton>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-none d-md-block" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        <div class="about-right">
                            <img src="../assets/template-next-boilerplate.jpg" alt="" class="about-right__photo about-right__photo--p1 img-fluid">
                            <img src="../assets/template-next-commerce.jpg" alt="" class="about-right__photo about-right__photo--p2 img-fluid">
                            <img src="../assets/template-next-gallery.jpg" alt="" class="about-right__photo about-right__photo--p3 img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

.-btn {
    padding: 1rem 2rem;
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
.--padding-none {
    padding: 0;
}
.about {
    padding: 4rem 0;
    h1 {
        text-transform: capitalize;
        color: #000;
        font-size: 2rem;
    }
    &__about-box {
        margin: 2rem 0;
        box-sizing: border-box;
    }
}
.about-left {
        box-sizing: border-box;

        &__content{

        }
        &__button {
            margin-top: 3rem;
        }
        &__paragraph {
            font-size: 0.75rem;
            color: #4f4e4e;
            letter-spacing: -0.01em;
            line-height: 1.78;
        }
    }

.about-right {
    position: relative;
    &__photo {
        position: absolute;
        height: 180px;
        width: 55%;
        border-radius: 3px;
        box-shadow: 0 .7rem 1.2rem rgba(180, 180, 180, 0.4);
        overflow: hidden;
        transition: all .4s;

        &--p1{
            top:0;
            right: 0;
            transform: skew(-5deg, 6deg);
        }
        &--p2 {
            top:1rem;
            right: 15%;
            z-index: 2;
            transform: skew(3deg, -3deg);
        }
        &--p3 {
            top:0;
            right: 30%;
            z-index: 3;
            transform: skew(5deg, -5deg);
        }
        &:hover {
            transform: scale(1.1);
            z-index: 888;
        }
    }
    &:hover &__photo:not(:hover) {
        transform: scale(.9);
    }
}

//RESPONSIVE STYLES
@media only screen and (max-width: 767px) {
    .about-right {
        margin-top: 8rem;
    }
}
</style>

<script>
import CommonButton from './CommonButton.vue'
export default {
    name: 'aboutHome',
    components: {
        CommonButton,
    }
}
</script>