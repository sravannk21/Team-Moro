<script>
import Button from "./Button.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "HeaderMain",
  components: {
    Button,
    Navbar
  },
};
</script>
<template>
        <header class="header">
        <Navbar/>
        <div class="container d-table">
          <div class="heading-box">
            <h1 class="heading-primary">
              <span class="main">Unlock the power</span>
              <span class="sub">of creative advertising</span>
              <Button />
            </h1>
          </div>
        </div>
          
        <div class="bottom-border">&nbsp;</div>
        </header>
</template>

<style>
.header {
  background-image: url('@/assets/logo1.jpg');
  background-position: right;
  background-size: cover;
  width: 100%;
  height: 90vh;
  overflow: hidden;
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
  top: 40%;
  left: 6.5%;
}

.heading-primary {
  display: block;
  text-transform: uppercase;
  color: #000;
  font-size: max(32px, min(4vw, 60px));
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
