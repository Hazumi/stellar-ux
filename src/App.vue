<template>
  <div id="app">
    <div class="container-xl">
      <div class="row">
        <div class="col">
          <Header />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>
