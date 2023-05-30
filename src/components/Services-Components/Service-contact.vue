<template>
    <div class="bg-light text-center p-5 mb-5">
        <secondaryHeading secondHeading="text-center mb-3">READY TO START A PROJECT ?</secondaryHeading>
        <Paragraph>Contact us for a powerful digital marketing agency that will take your online presence to new heights.</Paragraph>
        <div class="d-flex justify-content-center">
            <CommonButton url="#" button="button">Connect us</CommonButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>

<script>
import secondaryHeading from '../Typography/secondaryHeading.vue';
import Paragraph from '../Typography/Paragraph.vue';
import CommonButton from '../CommonButton.vue';
export default {
    name: 'serviceConnection',
    components: {
        secondaryHeading,
        Paragraph,
        CommonButton
    }
}
</script>