<template>
  <div id="app">
    <Header />
    <Navigation />
    <Welcome />
    <Weather />
    <Featured />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Welcome from '@/components/Welcome'
import Weather from '@/components/Weather'
import Featured from '@/components/Featured'
export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Welcome,
    Weather,
    Featured
  }
}
</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>
