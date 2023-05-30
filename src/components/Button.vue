<script>
export default {
    name: 'ButtonMain'
}
</script>
<template>
<a href="#" class="btn">Explore More</a>
</template>

<style>
.btn {
    padding: .8rem 2rem;
    border: 1px solid #000;
    border-radius: 0;
    text-transform: capitalize;
    color: #000;
    transition: all .4s;
}
.btn:hover,
.btn:active {
    background-position: 100%;
    color: #fff;
    transform: translateX(1rem);
}
.btn:link,
.btn:visited {
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #000 50%);
    background-size: 220%;
}
</style>