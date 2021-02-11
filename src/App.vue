<template>
  <div id="app">
    <Header />
    <router-view/>
    <h1>TEST</h1>
    <h2>TEST 2</h2>
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
