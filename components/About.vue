<template>
  <p class="mt-4 text-lg textContent">
    I am a software engineer with a passion for building web applications. I
    have experience working with JavaScript, TypeScript, and Python. I am also
    familiar with frameworks like React, Vue, and Django.
  </p>
  <div class="flex flex-wrap justify-center mt-8">
    <img
      v-for="logo in techStackLogos"
      :key="logo.alt"
      :src="logo.path"
      :alt="logo.alt"
      class="h-12 w-12 m-2"
    />
  </div>
</template>

<script setup lang="ts">
const techStackLogos: { path: string; alt: string }[] = [
  {
    path: "https://vuejs.org/images/logo.png",
    alt: "Vue.js Logo",
  },
  {
    path: "/img/nuxtJs.png",
    alt: "Nuxt.js Logo",
  },
  {
    path: "https://vitejs.dev/logo.svg",
    alt: "Vite Logo",
  },
  {
    path: "https://pinia.vuejs.org/logo.svg",
    alt: "Pinia Logo",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java Logo",
  },
  {
    path: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    alt: "GitHub Logo",
  },
  {
    path: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
    alt: "Jira Logo",
  },
  {
    path: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
    alt: "Bootstrap Logo",
  },
  {
    path: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.svg",
    alt: "Vuetify Logo",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    alt: "Swift Logo",
  },
];
</script>
