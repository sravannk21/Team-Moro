<template>
    <div class="banner">
        <div class="banner-bg">
             <Navbar/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner {
    background-color: #efefef;
    height: 10rem;
}
.banner-bg{
    background-color: #efefef;
}
</style>

<script>
import Navbar from './Navbar.vue';
export default {
    name: 'BannerMoro',
    components: {
        Navbar
    },
}
</script>