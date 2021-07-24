<!-- [pages] index "dash" -->
<template>
  <section>
    <h1>Dash</h1>
  </section>
</template>

<script>
export default {
  async asyncData ({ redirect }) {
    if (window.ethereum.selectedAddress) {
      redirect('/dashboard')
    }
  },
  layout: 'landing'
}
</script>
