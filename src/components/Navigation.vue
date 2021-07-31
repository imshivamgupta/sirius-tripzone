<template>
  <ul class="nav">
    <li class="nav__link"><a href="#weather">Weather</a></li>
    <li class="nav__link"><a href="#destinations">Destinations</a></li>
    <li class="nav__link"><a href="#quote">Get A Quote</a></li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$class: '.nav';
#{$class} {
  padding: 1rem;
  @extend %flex-row;
  justify-content: flex-end;
  @include respond-below(sm) {
    padding: 0.6rem;
    justify-content: space-between;
  }
  &__link {
    font-family: $roboto-slab;
    &:not(:last-of-type) {
      margin-inline-end: 3rem;
      @include respond-below(sm) {
        margin-inline-end: 0;
      }
    }
    &:last-of-type {
      margin-inline-end: 6rem;
      @include respond-below(sm) {
        margin-inline-end: 0;
      }
    }
    a {
      all: unset;
      cursor: revert;
      font-family: inherit;
      font-size: 1.2rem;
      @include respond-below(sm) {
        font-size: 1rem;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
