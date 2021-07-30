<template>
  <div id="app">
    <Header />
    <Navigation />
    <Welcome />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Welcome from '@/components/Welcome'
export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Welcome
  }
}
</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>
