<template>
  <main class="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</template>

<script setup lang="ts">
onMounted(() => {
  document.documentElement.classList.add("dark");
});
</script>
