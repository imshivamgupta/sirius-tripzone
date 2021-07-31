<template>
  <Container>
    <div class="weather" id="weather">
      <h4 class="weather__heading">The Weather Channel</h4>
      <div class="row">
        <div
          v-for="(channel, index) in channels"
          :key="index"
          :class="`col col-${++index} weather__channel`"
        >
          <p>{{ channel.city }}</p>
          <img
            src="@/assets/icon-party-sunny.svg"
            alt="mostly sunny weather icon"
          />
          <h1>{{ channel.temp_Celsius }} <span class="degree"></span></h1>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import axios from 'axios'
export default {
  name: 'Weather',
  components: {
    Container
  },
  data() {
    return {
      channels: []
    }
  },
  mounted() {
    this.loadDataFromAPI()
  },
  methods: {
    async loadDataFromAPI() {
      try {
        const endPoint =
          'https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576'
        const res = await axios.get(endPoint)
        this.channels = res.data.result
      } catch (e) {
        new Error('API issue', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.weather';
#{$class} {
  margin-block-start: 2rem;
  &__heading {
    padding: 1rem;
    color: #fff;
    background-color: #123052;
    text-transform: uppercase;
  }
  .row {
    @extend %flex-row;
    .col {
      @extend %flex-center;
      @extend %flex-col;
      flex: 1;
      height: 200px;
    }
    .col-1 {
      background-color: #0d7e88;
    }
    .col-2 {
      background-color: #d09378;
    }
    .col-3 {
      background-color: #405b5d;
    }
    .col-4 {
      background-color: #74a748;
    }
  }

  &__channel {
    color: #fff;
    p {
      font-weight: 500;
      font-size: 1.2rem;
      font-family: $roboto-slab;
    }
    img {
      width: 40px;
      margin-block: 1rem;
    }
    h1 {
      font-weight: 500;
      font-size: 4rem;
      margin: 0;
      @extend %flex-row;
      span.degree {
        width: 20px;
        height: 20px;
        border: 4px solid currentColor;
        border-radius: 100px;
        margin-inline-start: 6px;
        margin-block-start: 10px;
      }
    }
  }
}
</style>
