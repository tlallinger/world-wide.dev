<template>
  <div class="flex flex-wrap items-center">
    <div v-for="logo in techStackLogos" :key="logo.alt" class="group relative">
      <img
        :src="logo.path"
        :alt="logo.alt"
        :class="['hoverEffect m-2', classes]"
      />
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

const modules = import.meta.glob("~/assets/img/techLogos/*.svg", {
  eager: true,
});

const getImageUrl = (path: string) => modules[path]?.default as string;

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
    path: getImageUrl("/assets/img/techLogos/typescript.svg"),
    alt: "TypeScript",
  },
  {
    path: getImageUrl("/assets/img/techLogos/javascript.svg"),
    alt: "Javascript",
  },
  {
    path: getImageUrl("/assets/img/techLogos/vuejs.svg"),
    alt: "Vue.js",
  },
  {
    path: getImageUrl("/assets/img/techLogos/nuxtjs.svg"),
    alt: "Nuxt.js",
  },
  {
    path: getImageUrl("/assets/img/techLogos/vitejs.svg"),
    alt: "ViteJs",
  },
  {
    path: getImageUrl("/assets/img/techLogos/vitest.svg"),
    alt: "vitest",
  },
  {
    path: getImageUrl("/assets/img/techLogos/tailwindcss.svg"),
    alt: "tailwindcss",
  },
  {
    path: getImageUrl("/assets/img/techLogos/bootstrap.svg"),
    alt: "Bootstrap",
  },
  {
    path: getImageUrl("/assets/img/techLogos/css3.svg"),
    alt: "CSS",
  },

  // BE
  {
    path: getImageUrl("/assets/img/techLogos/java.svg"),
    alt: "Java",
  },
  {
    path: getImageUrl("/assets/img/techLogos/mySQL.svg"),
    alt: "MySQL",
  },
  {
    path: getImageUrl("/assets/img/techLogos/git.svg"),
    alt: "git",
  },
];
</script>
