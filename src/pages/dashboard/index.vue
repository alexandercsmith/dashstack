<!-- [pages] dashboard/index -->
<template>
  <section class="container max-w-screen-md p-2 dark:text-white">
    <h1 class="text-3xl border-b border-gray-300 py-2 mb-4">Dashboard</h1>
  </section>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('initialize');
  }
}
</script>