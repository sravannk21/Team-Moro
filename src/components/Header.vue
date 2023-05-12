<script>
import Button from './Button.vue';
    export default {
        name: 'HeaderMain',
        components: {
            Button
        }
    }
</script>
<template>
            <div class="row">
                <div class="container">
                    <div class="row">
                        <header class="header">
                            <div class="heading-box">
                                <h1 class="heading-primary">
                                    <span class="main">Welcome</span>
                                    <span class="sub">Go far with more</span>
                                    <Button/>
                                </h1>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
</template>

<style>

.header {
    width: 100%;
    height: 100vh;
    background-color: #000;
    position: relative;
    background-image: linear-gradient(rgb(79, 78, 78) 33%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 1px .4rem;
    background-repeat: repeat-y;
}
.heading-box {
    padding: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-image: linear-gradient(to right, rgb(79, 78, 78) 33%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: .4rem 1px;
    background-repeat: repeat-x;
}

.heading-primary {
    display: block;
    text-transform: uppercase;
    color: #fff;
    font-size: max(48px,min(5vw,76px));
    
}
.main {
    letter-spacing: .2em;
    display: block;
    backface-visibility: hidden;
    margin-bottom: 1rem;
}
.sub {
    display: block;
    font-size: max(30px,min(5vw,40px));
    text-transform: lowercase;
    font-weight: 200;
    margin-bottom: 1rem;

}
</style>