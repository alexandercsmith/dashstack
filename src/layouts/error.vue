<template>
  <section>
    <h1>Error</h1>
    <p v-text="error.statusCode" />
    <p v-text="error.message" />
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>