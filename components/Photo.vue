<template>
  <div class="relative">
    <div :class="['absolute flex items-center justify-center', sizeClasses]">
      <NuxtImg
        src="/photo.png"
        alt="Photo"
        class="h-60 rounded-full object-contain mix-blend-hard-light dark:mix-blend-lighten lg:h-80 xl:h-[26rem]"
        preload
      />
    </div>

    <svg
      :class="sizeClasses"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
      class="text-accent"
    >
      <circle
        cx="253"
        cy="253"
        r="250"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const sizeClasses =
  "size-72 md:size-80 lg:size-[400px] xl:size-[500px] 2xl:size-[600px]";
</script>
