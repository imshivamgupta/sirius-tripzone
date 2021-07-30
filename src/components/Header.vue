<template>
  <header class="header">
    <p class="header__desc">
      Book now to get exciting travel deals. Upto 40% off on credit card
      payments
    </p>
    <p class="header__countdown">Offers ends in {{ countdown }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      countdown: 'loading...',
      interval: null
    }
  },
  mounted() {
    // Reference from w3schools
    // Set the date we're counting down to
    var countDownDate = new Date('Aug 10, 2021 18:00:00').getTime()

    // Update the count down every 1 second
    this.interval = setInterval(() => this.calculateTimer(countDownDate), 1000)
  },
  methods: {
    calculateTimer(target) {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = target - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Display the result in the element with id="demo"
      this.countdown =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

      console.log(this.countdown)
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(this.interval)
        this.countdown = 'EXPIRED'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.header';
#{$class} {
  padding: 1rem;
  color: #fff;
  /* font-size: 14px; */
  text-align: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(19, 51, 87, 1) 100%
  );

  &__desc {
    font-weight: 300;
  }
  &__countdown {
    font-weight: 400;
    margin-top: 6px;
  }
}
</style>
