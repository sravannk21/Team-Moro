<template>
    <div class="banner">
        <div class="banner-bg">
            <Navigation/>
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
import Navigation from './Navigation.vue';
export default {
    name: 'BannerMoro',
    components: {
        Navigation,

    }
}
</script>