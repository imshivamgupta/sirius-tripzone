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
  @extend %flex-row;
  justify-content: flex-end;
  padding: 1rem;
  &__link {
    font-family: $roboto-slab;
    &:not(:last-of-type) {
      margin-inline-end: 3rem;
    }
    &:last-of-type {
      margin-inline-end: 6rem;
    }
    a {
      all: unset;
      cursor: revert;
      font-family: inherit;
      font-size: 1.2rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
