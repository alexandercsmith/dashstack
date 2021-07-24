<template>
  <div class="min-w-full min-h-screen flex flex-row dark:bg-gray-900">
    <NavSideBar />
    <div class="w-full max-h-screen flex flex-col overflow-y-scroll">
      <div class="w-full min-h-screen flex flex-col">
        <NavTopBar />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'provider'
}
</script>
