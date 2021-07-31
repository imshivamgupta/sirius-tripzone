<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$class: '.container';
#{$class} {
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 1rem;
  &.fluid {
    padding: 0;
    max-width: 100%;
  }
}
</style>
