<template>
  <Container>
    <div class="featured" id="destinations">
      <h4 class="featured__heading">featured destinations</h4>
      <div class="row">
        <div
          class="col featured__city"
          v-for="(dest, index) in destinations"
          :key="index"
        >
          <img class="featured__img" :src="dest.imageUrl" alt="" />
          <p>{{ dest.city }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import axios from 'axios'
export default {
  name: 'Featured',
  components: {
    Container
  },
  data() {
    return {
      destinations: []
    }
  },
  mounted() {
    this.loadDataFromAPI()
  },
  methods: {
    async loadDataFromAPI() {
      try {
        const endPoint =
          'https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c'
        const res = await axios.get(endPoint)
        this.destinations = res.data.result
      } catch (e) {
        new Error('API issue', e)
      }
    }
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
    margin-top: 1rem;
    padding-bottom: 1rem;
    @extend %flex-row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    @include custom-scroll-bar;
    .col {
      flex-shrink: 0;
    }
  }

  &__city {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
    img {
      aspect-ratio: 1 / 1;
      height: 180px;
      border-radius: 10px;
      border-bottom-left-radius: 0;
    }
    p {
      margin-top: 0.6rem;
      font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>
