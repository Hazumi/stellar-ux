<template>
  <nav class="navbar navbar-expand-lg navbar-light mb-3">
    <router-link class="navbar-brand" to="/">Stellar UX</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="main-nav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/ux-design">User Experience Design</router-link></li>
            <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Front-End Web Development</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/how-it-works">How It Works</router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/our-mission">Our Mission</router-link></li>
            <li><router-link class="dropdown-item" to="/contact">Contact Us</router-link></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>

      </ul>
      <router-link class="nav-link" to="/login">Log In</router-link>
      <router-link class="btn btn-primary" to="/register">Get Started</router-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .nav-link {
    margin-right: 0.3em;
  }
  .dropdown-toggle::after {
    margin-left: 0;
    border-top: .2em solid;
    border-right: .2em solid transparent;
    border-left: .2em solid transparent;
  }
</style>
