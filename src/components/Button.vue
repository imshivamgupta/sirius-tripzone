<template>
  <button class="btn"><slot /></button>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
$class: '.btn';
#{$class} {
  padding: 0.8rem 2rem;
  border-radius: 2px;
  text-transform: uppercase;
  cursor: pointer;
  &.btn-primary {
    color: #fff;
    font-size: 14px;
    @extend %linear-bg;
  }
}
</style>
