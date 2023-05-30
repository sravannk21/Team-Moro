<template>
    <p :class="className">
        <slot></slot>
    </p>
</template>

<style scoped lang="scss">
p {
    font-size: 0.75rem;
    color: #4f4e4e;
    letter-spacing: -0.01em;
    line-height: 1.78;
}
</style>

<script>
export default {
    name: 'paragraphText',
    props: {
        className: {
            type: String,
            required: 'default',
        }
    }
}
</script>