<template>
<Banner/>
<Portfolio/>
<Footer/>
</template>

<style scoped lang="scss">

</style>

<script>
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import Portfolio from '@/components/Portfolio/Portfolio.vue';
export default {
    name:'portfolioMoro',
    components: {
        Banner,
        Footer,
        Portfolio
    }
}
</script>