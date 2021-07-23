<template>
  <nav class="w-72 flex flex-col border-r border-gray-300">
    <NuxtLink to="/">Dash</NuxtLink>
    <NuxtLink to="/account">Account</NuxtLink>
    <NuxtLink to="/swap">Swap</NuxtLink>
    <NuxtLink to="/earn">Earn</NuxtLink>
    <NuxtLink to="/farm">Farm</NuxtLink>
  </nav>
</template>

<style lang="postcss">
nav a {
  @apply px-2 py-4 hover:bg-gray-100;
}
</style>