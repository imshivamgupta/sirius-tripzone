<template>
  <div id="app">
    <Header />
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {
    Header,
    Navigation
  }
}
</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>
