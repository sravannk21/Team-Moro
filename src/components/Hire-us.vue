<template>
<section class="hire-us">
    <div class="container">
        <div>
            <secondaryHeading class="text-center">Want to Work with Us?</secondaryHeading>
        </div>
        <div class="hire-section-description py-5">
            <Paragraph className="paragraph">Are you a Start-Up or running a home-based business? Do you need an easy to navigate, simple website that has unique design through which users will understand the business easily by moving across the Home page? Shall we discuss?</Paragraph>
        </div>
        <div class="text-center">
            <CommonButton url ="#" button="button">Get in touch &rarr;</CommonButton>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
.hire-us {
    background-color: #efefef;
    padding: 4rem 0;
    margin: 4rem 0;
}
.paragraph {
    width: 70%;
    margin: 0 auto;
    text-align: center;
}
</style>

<script>
import secondaryHeading from './Typography/secondaryHeading.vue';
import Paragraph from './Typography/Paragraph.vue';
import CommonButton from './CommonButton.vue';
export default {
    name: 'HireMoro',
    components: {
        secondaryHeading,
        Paragraph,
        CommonButton
    }
}
</script>