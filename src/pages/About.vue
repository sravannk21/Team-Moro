<template>
    <Banner/>
    <About/>
    <Footer/>
</template>

<style scoped lang="scss">

</style>

<script>
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import About from '@/components/About-Components/About.vue';
export default {
    name: 'AboutMoro',
    components: {
        Banner,
        Footer,
        About,
    }
}
</script>