<template>
  <div class="relative h-full w-full">
    <!-- Image container -->
    <div
      class="absolute flex h-[298px] w-[298px] items-center justify-center mix-blend-lighten xl:h-[498px] xl:w-[498px]"
    >
      <NuxtImg
        src="/assets/photo.png"
        alt="Photo"
        class="h-60 object-contain xl:h-96"
      />
      <div
        class="absolute bottom-0 right-0 size-40 rounded-full bg-gradient-to-t from-black to-transparent xl:right-20"
      ></div>
    </div>

    <!-- Circle SVG -->
    <svg
      class="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
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
// No additional imports or setup needed
</script>
