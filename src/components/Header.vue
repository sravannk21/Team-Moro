<script>
import Button from "./Button.vue";
import Navigation from "./Navigation.vue";
export default {
  name: "HeaderMain",
  components: {
    Button,
    Navigation
  },
};
</script>
<template>
        <header class="header">
        <Navigation/>
          <div class="heading-box">
            <h1 class="heading-primary">
              <span class="main">Welcome</span>
              <span class="sub">Go far with more</span>
              <Button />
            </h1>
          </div>
        <div class="bottom-border">&nbsp;</div>
        </header>
</template>

<style>
.header {
  background-image: url('@/assets/logo1.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 90vh;
  position: relative;
}
.logo-box{
    position:absolute;
    top: 0;
    left:0;
}
.logo {
    width: 4rem;
    height:auto;
}
.heading-box {
  position: absolute;
  top: 60%;
  left: 0;
  transform: translate(30%, -50%);
  text-align: left;
}

.heading-primary {
  display: block;
  text-transform: uppercase;
  color: #000;
  font-size: max(48px, min(5vw, 76px));
  -webkit-box-decoration-break: clone;
}
.main {
  letter-spacing: 0.2em;
  display: block;
  backface-visibility: hidden;
  margin-bottom: 1rem;
}
.sub {
  display: block;
  font-size: max(30px, min(5vw, 40px));
  text-transform: lowercase;
  font-weight: 200;
  margin-bottom: 1rem;
}
</style>
