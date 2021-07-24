<template>
  <nav class="w-72 flex flex-col border-r border-gray-300">
    <h1 class="text-xl font-bold px-2 py-4 dark:text-white">DASHSTACK</h1>
    <NuxtLink to="/dashboard">Dash</NuxtLink>
    <NuxtLink to="/account">Account</NuxtLink>
    <NuxtLink to="/swap">Swap</NuxtLink>
    <NuxtLink to="/stake">Stake</NuxtLink>
  </nav>
</template>

<style lang="postcss">
nav a {
  @apply px-2 py-4 dark:text-white hover:text-blue-300;
}
nav a.nuxt-link-exact-active {
  @apply font-bold;
}
</style>