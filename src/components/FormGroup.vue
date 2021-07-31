<template>
  <div class="form-group">
    <label class="form-control-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <span class="error" v-show="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    type: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$class: '.form-group';

#{$class} {
  @extend %flex-col;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  label {
    margin-bottom: 0.4rem;
    font-size: 14px;
    font-weight: 600;
    color: rgba($color: #000000, $alpha: 0.4);
  }
  input {
    border-radius: 2px;
    padding: 0.6rem;
    border: 1px solid rgba($color: #000000, $alpha: 0.3);
  }

  span.error {
    margin-top: 0.6rem;
    font-size: 12px;
    font-weight: 500;
    color: rgb(180, 6, 6);
  }
}
</style>
