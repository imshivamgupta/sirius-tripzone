<template>
  <Container>
    <div class="quote">
      <h3 class="quote__heading">Travelling as a group? Get a Quote</h3>
      <form class="quote__form">
        <FormGroup label="Your name" type="text" required />
        <FormGroup label="Contact No" type="number" required />
        <FormGroup label="Email" type="email" required />
        <Button class="btn-primary">submit</Button>
      </form>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import FormGroup from '@/components/FormGroup'
import Button from '@/components/Button'
export default {
  name: 'Quote',
  components: {
    Container,
    FormGroup,
    Button
  }
}
</script>

<style lang="scss" scoped>
$class: '.quote';

#{$class} {
  @extend %flex-center;
  @extend %flex-col;
  padding: 2rem;
  &__heading {
    font-family: $roboto-slab;
    font-weight: 500;
    font-size: 1.5rem;
  }

  &__form {
    padding: 2rem 0;
    width: 30vw;

    .btn {
      display: block;
      margin: 1rem auto;
    }
  }
}
</style>
