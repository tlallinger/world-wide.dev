<template>
  <div class="dark">
    <NavBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document.documentElement.classList.add("dark");
});
</script>
