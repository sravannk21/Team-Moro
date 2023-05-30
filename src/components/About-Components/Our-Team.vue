<template>
  <section class="our-team">
    <div class="row">
      <MainHeading>Meet our Team</MainHeading>
    </div>

    <div class="container my-4">
      <div class="row my-5">
          <div class="slider-cotainer">
            <div class="card p-4 justify-center items-center text-center border-0 bg-light">
              <img src="@/assets/user.jpg" alt="" class="card__img">
              <div class="card__title mt-2">
                <p class="h6">User Name</p>
              </div>
              <div class="card__position">
                <p>Position-of-user</p>
              </div>
              <div class="card__social-icons">
                <a href="#" class="mx-3"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="mx-3"><i class="bi bi-instagram"></i></a>
                <a href="#" class="mx-3"><i class="bi bi-telegram"></i></a> 
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}
.card {
  background-color: #fff;
  border-radius: 25px;
  width: 320px;
}
.slider-cotainer {
  max-width: 1140px;
  width: 100%;
  background-color: black;
}
.name {
  font-weight: 400;
  font-size: 18px;
  color: #333;
}
.description {
  text-align: center;
  font-size: 14px;
  color: #707070;
}
.slide-content {
  margin: 0 40px;
}
.img-content, .card-content {
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 14px;
}
.img-content {
  row-gap: 5px;
  position: relative;
  border-radius: 25px 25px 0 25px;
}

.card-image {
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  padding: 3px;

  .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  border-radius: 50%;
    border: 4px solid #efefef;
  }
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: aqua;
}
.button {
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
  background-color: #efefef;
  border-radius: 6px;
  cursor: pointer;
  margin: 14px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #000;
  }
}
</style>

<script>
import MainHeading from "../Typography/MainHeading.vue";
export default {
  name: "teamMoro",
  components: {
    MainHeading,
  },
};
</script>
