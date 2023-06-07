<template>
  <div class="container-fluid bg-white fixed-top p-3 p-md-0">
    <div class="container">
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="bi bi-list icon"></i>
        </label>
        <label
          ><router-link :to="{ path: '/' }"
            ><img
              src="../assets/520.png"
              class="img-fluid logo"
              alt="" /></router-link
        ></label>
        <ul>
          <li><router-link :to="{ path: '/' }">Home</router-link></li>
          <li>
            <router-link :to="{ path: '/services' }">Services</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/portfolio' }">Portfolio</router-link>
          </li>
          <li><router-link :to="{ path: '/about' }">About</router-link></li>
          <li><router-link :to="{ path: '/contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.colorChange{
    color: green;
}
.logo {
  width: 5rem;
  height: auto;
}
.icon {
  border: 1px solid black;
  border-radius: 0.6rem;
  padding: 0 0.4rem;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid red;
  }
}
nav {
  width: 100%;
}
nav ul {
  float: right;
  margin-right: 1.25rem;
}
nav ul li {
  display: inline-block;
  line-height: 5rem;
  margin: 0 5px;
}
nav ul li a {
  color: #000;
  font-size: 0.75rem;
  font-weight: 200;
  letter-spacing: 3px;
  padding: 0.2rem 0.6rem !important;
  border: 1px dashed transparent;
  transition: all 0.3s ease-out;
  text-transform: capitalize;
  text-decoration: none;
  &:hover {
    border: 1px dashed #4e4f4f;
    color: red;
  }
}
.checkbtn {
  font-size: 1.8rem;
  color: #000;
  float: right;
  line-height: 5rem;
  margin-right: 2.5rem;
  cursor: pointer;
  display: none;
  transition: all 0.3s ease;
  &:hover {
    color: red;
  }
}
#check {
  display: none;
}
@media (max-width: 952px) {
  label.logo {
    font-size: 1.875rem;
    padding-left: 2.5rem;
  }
  nav ul li a {
    font-size: 1rem;
  }
}
@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    top: 5rem;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
    z-index: -1;
    padding: 0;
  }
  nav ul li {
    display: block;
    margin: 2.5rem 0;
    line-height: 1.875rem;
  }
  nav ul li a {
    font-size: 1.25rem;
  }
  a:hover,
  a.active {
    background: none;
    color: red;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
</style>

<script>
export default {
  name: "navbar-mob",
  props: {
    colorChange: {
      type: String,
      required: 'default'
    }
  }
};
</script>
