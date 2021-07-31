<template>
  <Container>
    <section class="welcome">
      <img
        class="welcome__img"
        src="@/assets/welcome-image.svg"
        alt="travel bag"
      />
      <div class="welcome__heading">
        <h1>Life is short</h1>
        <h1>and the world is wide!</h1>
        <p>
          Stay at the comfort of your homes and book a trip to travel <br />
          after the post pandemic era.
        </p>
        <Button class="btn-primary">plan a trip</Button>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Button from '@/components/Button'
export default {
  name: 'Welcome',
  components: {
    Container,
    Button
  }
}
</script>

<style lang="scss" scoped>
$class: '.welcome';
#{$class} {
  @extend %flex-row;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  @include respond-below(sm) {
    margin-top: 2rem;
  }
  &__img {
    height: 350px;
  }
  &__heading {
    margin-inline-start: 4rem;
    @include respond-below(sm) {
      margin: 0;
      margin-top: 1rem;
      display: flex;
      flex-flow: wrap column;
      align-items: center;
    }
    h1 {
      font-weight: 700;
      font-size: 2.5rem;
      margin: 0;
      @include respond-below(sm) {
        font-size: 2rem;
      }
    }
    p {
      &:first-of-type {
        margin-block-start: 1rem;
        margin-block-end: 0.5rem;
        line-height: 1.4;
        @include respond-below(sm) {
          margin-block-end: 0;
        }
      }
      @include respond-below(sm) {
        font-size: 1.3rem;
        text-align: center;
        br {
          display: none;
        }
      }
    }

    @include respond-below(sm) {
      button {
        margin-top: 1rem;
      }
    }
  }
}
</style>
