<template>
  <div class="flex flex-wrap items-center">
    <div v-for="logo in techStackLogos" :key="logo.alt" class="group relative">
      <NuxtImg :src="logo.path" :alt="logo.alt" :class="['m-2', classes]" />
      <div
        class="absolute bottom-full mb-2 hidden w-max rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block"
      >
        {{ logo.alt }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Size = "sm" | "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    size?: Size;
  }>(),
  {
    size: "md",
  },
);

const classes = computed<string>(() => {
  const sizeClass: {
    [key in Size]: string;
  } = {
    sm: "size-8",
    md: "size-12",
    lg: "size-16",
    xl: "size-24",
  };

  return sizeClass[props.size];
});

const techStackLogos: { path: string; alt: string }[] = [
  // FE
  {
    path: "/techLogos/typescript.svg",
    alt: "TypeScript",
  },
  {
    path: "/techLogos/javascript.svg",
    alt: "Javascript",
  },
  {
    path: "/techLogos/vuejs.svg",
    alt: "Vue.js",
  },
  {
    path: "/techLogos/nuxtjs.svg",
    alt: "Nuxt.js",
  },
  {
    path: "/techLogos/vitejs.svg",
    alt: "ViteJs",
  },
  {
    path: "/techLogos/vitest.svg",
    alt: "vitest",
  },
  {
    path: "/techLogos/tailwindcss.svg",
    alt: "tailwindcss",
  },
  {
    path: "/techLogos/bootstrap.svg",
    alt: "Bootstrap",
  },
  {
    path: "/techLogos/css3.svg",
    alt: "CSS",
  },

  // BE
  {
    path: "/techLogos/java.svg",
    alt: "Java",
  },
  {
    path: "/techLogos/mySQL.svg",
    alt: "MySQL",
  },
  {
    path: "/techLogos/git.svg",
    alt: "git",
  },
];
</script>
