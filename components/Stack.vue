<template>
  <div v-bind="$attrs" class="flex flex-wrap items-center">
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
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    path: "https://vuejs.org/images/logo.png",
    alt: "Vue.js",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "react",
  },
  {
    path: "/img/nuxtJs.png",
    alt: "Nuxt.js",
  },
  {
    path: "https://vitejs.dev/logo.svg",
    alt: "ViteJs",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "tailwindcss",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    alt: "Sass",
  },
  {
    path: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.svg",
    alt: "Vuetify",
  },

  // BE
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
];
</script>
