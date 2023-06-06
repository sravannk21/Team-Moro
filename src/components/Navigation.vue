<template>
  <div class="container-fluid w-100 fixed-menu">
    <div class="container">
    <nav class="navbar navbar-expand-lg">
      <div class="container main-nav">
        <a class="navbar-brand" href="#"><img src="../assets/520.png" class="img-fluid navLogo" alt=""></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/services'}" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/portfolio'}" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/about'}" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: "navMain",
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style>
.navbar-nav{
    right: 0;
    position:absolute;
}
.main-nav {
  position: fixed;
  padding-top: 3rem;
  z-index: 100;
}
.fixed-menu {
  position: fixed;
  z-index: 99;
  height: 4.32rem;
  background-color: #fff;
}
.nav-link {
    color: #000;
    font-size: 0.75rem;
    font-weight: 200;
    letter-spacing: 3px;
    padding: .2rem .6rem !important;
    border: 1px dashed transparent;
    transition: all .3s ease-out;
    text-transform: capitalize;
}

.nav-link:hover {
    border: 1px dashed #4e4f4f;
    color: red;
}
.navbar-toggler {
    background-color: #fff;
    margin-right: 2rem;
}
.navbar-brand img{
    width: 4rem;
    height: auto;
}
.nav-item:not(:last-child) {
    margin-right: 2rem;
}
</style>
