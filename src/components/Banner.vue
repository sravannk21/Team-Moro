<template>
    <div class="banner">
        <div class="container">
            <Navigation/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner {
    background-color: #efefef;
    height: 10rem;
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