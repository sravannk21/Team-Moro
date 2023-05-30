<template>
    <body>
        <Banner/>
        <Service2/>
        <Footer/>
    </body>
</template>

<style scoped lang="scss">
/* PAGE BASICS */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
body {
    background-color: #fff;
    box-sizing: border-box;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif; 
}
</style>

<script>
import Banner from '@/components/Banner.vue';
import Footer from '@/components/Footer.vue';
import Service2 from '@/components/Services-Components/Service2.vue';
export default {
    name: 'ServicesMoro',
    components: {
       Banner,
       Footer,
       Service2
    }
}
</script>