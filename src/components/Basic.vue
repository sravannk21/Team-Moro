<script>
import Header from './Header.vue';
import About from './About.vue';
import Services from './Services.vue';
import Portfolio2 from './Portfolio2.vue';
import Testimonials from './Testimonials.vue';
import Footer from './Footer.vue';
import HireUs from './Hire-us.vue';
import Gallery from './Clients.vue';
export default {
    name: 'BasicSetup',
    components: {
        Header,
        About,
        Services,
        Portfolio2,
        Footer,
        Testimonials,
        HireUs,
        Gallery,
    }
}
</script>
<template>
    <body>
        <Header/>
        <About/>
        <Services/>
        <Portfolio2/>
        <Testimonials/>
        <Gallery/>
        <HireUs/>
        <Footer/>
    </body>
</template>
<style lang="scss">
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