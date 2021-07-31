<template>
  <div class="footer">
    <Container>
      <div class="row">
        <div class="col col-1">
          <ul>
            <h3>Tripzone</h3>
            <li><a href="#">About</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div class="col col-2">
          <ul>
            <h3>Main Offices</h3>
            <li><a href="#">The United States</a></li>
            <li><a href="#">India</a></li>
            <li><a href="#">Brazil</a></li>
            <li><a href="#">Canada</a></li>
          </ul>
        </div>
        <div class="col col-3">
          <ul>
            <h3>Sub Offices</h3>
            <li><a href="#">Australia</a></li>
            <li><a href="#">England</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Germany</a></li>
          </ul>
        </div>
        <div class="col col-4">
          <h3>Desclaimer</h3>
          <p>This layout is created as a part of Sirius UI Recruitments.</p>
          <p>
            All the above content has no direct relation with Sirius business.
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'Footer',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
$class: '.footer';

#{$class} {
  @extend %linear-bg;
  padding: 3rem;
  color: #fff;

  @include respond-below(sm) {
    padding: 1rem;
  }

  .row {
    @extend %flex-row;
    justify-content: space-between;
    @include respond-below(sm) {
      flex-direction: column;
    }
    .col {
      h3 {
        font-weight: 500;
        margin-bottom: 1rem;
      }
      ul {
        li {
          font-weight: 300;
          &:not(:last-of-type) {
            margin-bottom: 0.8rem;
          }
        }
      }

      p {
        font-weight: 300;
        &:first-of-type {
          margin-bottom: 0.3rem;
        }
      }

      @include respond-below(lg) {
        &.col-4 {
          margin-top: 2.5rem;
        }
      }

      @include respond-below(sm) {
        &:not(:last-of-type) {
          margin-top: 2.5rem;
        }
      }
    }
  }
}
</style>
