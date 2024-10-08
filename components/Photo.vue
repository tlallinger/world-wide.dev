<template>
  <div class="relative">
    <div
      :class="[
        'absolute flex items-center justify-center mix-blend-lighten',
        sizeClasses,
      ]"
    >
      <NuxtImg
        src="~/assets/img/photo.png"
        alt="Photo"
        class="h-60 object-contain lg:h-80 xl:h-96"
      />
      <div
        class="absolute bottom-0 right-0 size-40 rounded-full bg-gradient-to-t from-black to-transparent lg:right-20"
      ></div>
    </div>

    <svg
      :class="sizeClasses"
      fill="transparent"
      viewBox="0 0 506 506"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
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
