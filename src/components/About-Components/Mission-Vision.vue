<template>
<div class="container my-5 py-5">
    <div class="row d-flex">
        <div class="col-md-4" data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="mission-vision bg-light p-4">
                <h2 class="counter">01</h2>
                <span>Mission</span>
                <div class="mission-description">
                    <Paragraph>
                        Our mission is to be a part of a global scenario with requirements and work schedules coming in from all over the world, catering to our clients' 360° Marketing needs. We move to the conceptual / ideation phase that eventually leads to a gap analysis where features are designed and implemented.
                    </Paragraph>
                </div>
            </div>
        </div>
        <div class="col-md-4 d-flex" data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="mission-vision bg-light p-4">
                <h2 class="counter">02</h2>
                <span>Vision</span>
                <div class="mission-description">
                    <Paragraph>
                        We envision a systematic exchange of creative ideas and thoughts that can assist our clients in exceeding their expectations. We get it... Your site needs to perform in order for your company to grow and drive results.
                    </Paragraph>
                </div>
            </div>
        </div>
        <div class="col-md-4 d-flex" data-aos="zoom-in-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true">
            <div class="mission-vision bg-light p-4">
                <h2 class="counter">03</h2>
                <span>Values</span>
                <div class="mission-description">
                    <Paragraph>
                        We offer all types of services, from video, animation, content strategy and web design, to search engine optimization and social media sharing. We know you need to get your message out there, and we’re here to help.
                    </Paragraph>
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

<style scoped lang="scss">
.counter {
    display: inline-block;
    font-weight: 700;
    font-size: 2rem;
    color: red;
}
span {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    margin-left: .9rem;
}
.mission-description {
    margin: 2rem 0;
}
.mission-vision {
    height: auto;
}
</style>

<script>
import Paragraph from '../Typography/Paragraph.vue';
export default {
    name: 'MissionMoro',
    components: {
        Paragraph
    }
}
</script>