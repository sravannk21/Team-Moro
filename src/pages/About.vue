<template>
    <Banner/>
    <About/>
    <OurTeam/>
    <Footer/>
</template>

<style scoped lang="scss">

</style>

<script>
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import About from '@/components/About-Components/About.vue';
import OurTeam from '@/components/About-Components/Our-Team.vue';
export default {
    name: 'AboutMoro',
    components: {
        Banner,
        Footer,
        About,
        OurTeam
    }
}
</script>