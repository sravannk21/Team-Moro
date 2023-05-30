<template>
    <a :href="url" :class="button">
        <slot></slot>
    </a>
</template>

<style scoped lang="scss">
.button {
    padding: .5rem 1rem;
    border: 1px solid #000;
    border-radius: 0;
    text-transform: capitalize;
    color: red;
    text-decoration: none;
    transition: all .4s;
    font-size: 0.75rem;

    &:hover,
    &:active {
        background-position: 100%;
        color: #fff;
    }

    &:link,
    &:visited {
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #000 50%);
    background-size: 220%;
    }
}
</style>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: 'default'
    }
  }
}
</script>