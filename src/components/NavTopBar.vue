<template>
  <div class="w-full flex flex-row justify-between px-2 py-4 border-b border-gray-300 dark:text-white">
    <h1>{{ $store.getters.addr }}</h1>

    <div class="flex flex-row">
      <NuxtLink to="/settings">Settings</NuxtLink>
    </div>
  </div>
</template>