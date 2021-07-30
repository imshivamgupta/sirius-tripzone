<template>
  <Container>
    <div class="weather">
      <h4 class="weather__heading">The Weather Channel</h4>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'Weather',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
$class: '.weather';
#{$class} {
  margin-block-start: 2rem;
  &__heading {
    padding: 1rem;
    color: #fff;
    background-color: #123052;
    text-transform: uppercase;
  }
}
</style>
