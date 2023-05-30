<template>
<h3 :className="secondHeading">
    <slot></slot>
</h3>
</template>

<style scoped lang="scss">
h3 {
    color: #000;
    font-size: 1.4rem;
    text-align: left;
    text-transform: capitalize;
}
</style>

<script>
export default {
    name: 'secondaryHeading',
    props:{
        secondHeading:{
            type: String,
            required: 'default'
        }
    }
}
</script>