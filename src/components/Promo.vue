<template>
  <Container class="fluid">
    <div class="promo">
      <h1>Plan a trip</h1>
      <h2>Make your vacation the most</h2>
      <h2>memorable one</h2>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'Promo',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
$class: '.promo';

#{$class} {
  margin-top: 2rem;
  height: 80vh;
  background: url('~@/assets/promo-image.png') center no-repeat;
  background-size: cover;
  @extend %flex-col;
  justify-content: flex-end;
  padding: 2rem 4rem;
  color: #fff;
  font-weight: 600;
  @include respond-below(md) {
    height: 40vh;
  }
  @include respond-below(sm) {
    height: 25vh;
    padding: 1rem;
  }
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    @include respond-below(sm) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-size: 1.7rem;
    font-weight: 500;
    @include respond-below(sm) {
      font-size: 1rem;
    }
  }
}
</style>
