<template>
<h1 class="main-heading">
    <slot></slot>
</h1>
</template>

<style scoped lang="scss">
.main-heading {
    color: #000;
    text-transform: capitalize;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
}
</style>

<script>
export default {
    name: 'mainHeading'
}
</script>