<template>
<Banner/>
<Contact/>
<Footer/>
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
import Contact from '@/components/Contact-Components/Contact.vue';''
import Footer from '@/components/Footer.vue';
export default {
    name: 'contactMoro',
    components: {
        Banner,
        Contact,
        Footer,
    }
}
</script>