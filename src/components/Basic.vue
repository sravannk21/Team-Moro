<script>
import Header from './Header.vue';
export default {
    name: 'BasicSetup',
    components: {
        Header
    }
}
</script>
<template>
    <body>
        <Header/>
    </body>
</template>
<style>
/* PAGE BASICS */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
body {
    box-sizing: border-box;
}
</style>