<template>
  <Container>
    <div class="quote">
      <h3 class="quote__heading">Travelling as a group? Get a Quote</h3>
      <form
        class="quote__form"
        @submit="handleQuote"
        autocomplete="true"
        id="formQuote"
      >
        <FormGroup
          label="Name"
          type="text"
          v-model="name"
          :error="validateName"
        />
        <FormGroup
          label="Contact No"
          type="number"
          v-model="mobile"
          :error="validateMobile"
        />
        <FormGroup
          label="Email"
          type="email"
          v-model="email"
          :error="validateEmail"
        />
        <span v-if="success" class="success"
          >We hear you! We will get back to you for planning your
          vacation.</span
        >
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
  },
  data() {
    return {
      name: null,
      mobile: null,
      email: null,
      submitted: false,
      success: false
    }
  },
  computed: {
    validateName() {
      if (!this.submitted) return
      if (!this.name) return 'Name is required'
      return null
    },
    validateMobile() {
      if (!this.submitted) return
      if (!this.mobile) return 'Contact No is required'
      if (this.mobile.length != 10) return 'Invalid Contact No'
      return null
    },
    validateEmail() {
      if (!this.submitted) return
      if (!this.email) return 'Email is required'

      if (this.email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(this.email).toLowerCase())) return 'Invalid Email'
      }
      return null
    }
  },
  methods: {
    handleQuote(e) {
      e.preventDefault()
      this.submitted = true
      if (!!this.name && !!this.email && !!this.mobile) {
        this.submitted = false
        this.name = this.mobile = this.email = null
        document.getElementById('formQuote').reset()
        this.success = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.quote';

#{$class} {
  @extend %flex-center;
  @extend %flex-col;
  padding: 2rem;
  @include respond-below(sm) {
    padding: 2rem 0;
  }
  &__heading {
    font-family: $roboto-slab;
    font-weight: 500;
    font-size: 1.5rem;
    @include respond-below(sm) {
      font-size: 1.2rem;
    }
  }

  &__form {
    margin-top: 2rem;
    width: 30vw;
    @include respond-below(md) {
      width: 100%;
    }
    span.success {
      display: block;
      margin-top: 1rem;
      padding: 0.4rem;
      font-size: 13px;
      font-weight: 500;
      background-color: rgb(176, 248, 176);
    }
    .btn {
      display: block;
      margin-inline: auto;
      margin-top: 1.5rem;
    }
  }
}
</style>
