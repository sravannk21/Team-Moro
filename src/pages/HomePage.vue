<template>
    <Basic/>
</template>
<script>
import Basic from '@/components/Basic.vue';
export default {
    name: 'HomePage',
    components: {
        Basic
    },
    created() {
    document.title = this.$route.meta.title;
  }
}
</script>