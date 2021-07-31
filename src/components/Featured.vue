<template>
  <Container>
    <div class="featured">
      <h4 class="featured__heading">featured destinations</h4>
      <div class="row">
        <div class="col col-1">
          <img class="featured__img" src="" alt="" />
          <p>London</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'Featured',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
$class: '.featured';

#{$class} {
  margin-block-start: 2rem;
  &__heading {
    text-transform: capitalize;
    font-family: $roboto-slab;
    font-weight: 500;
  }

  .row {
    @extend %flex-row;
    .col {
      & #{$class}__img {
      }
    }
  }
}
</style>
