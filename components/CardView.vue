<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="(card, index) in cards"
      :key="index"
      :class="[card.withBg ? 'bg-card' : '', card.class ?? '']"
      class="text-content flex items-center justify-center rounded-lg p-6 text-center"
    >
      <p v-if="card.content">{{ card.content }}</p>
      <NuxtImg
        v-if="card.showLogo"
        class="size-40"
        src="/logo.png"
        alt="Logo"
      />

      <div
        v-if="card.showTechStack"
        class="flex flex-wrap items-center justify-center"
      >
        <div
          v-for="logo in techStackLogos"
          :key="logo.alt"
          class="group relative"
        >
          <NuxtImg :src="logo.path" :alt="logo.alt" class="m-2 size-12" />
          <div
            class="absolute bottom-full mb-2 hidden w-max rounded-md bg-gray-700 px-2 py-1 text-xs text-white group-hover:block"
          >
            {{ logo.alt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards: {
  content?: string;
  class?: string;
  showTechStack?: boolean;
  showLogo?: boolean;
  withBg: boolean;
}[] = [
  {
    content:
      "Welcome to worldwidedev, your partner in innovative web and software development. We specialize in crafting cutting-edge solutions that bring your ideas to life.",
    class: "lg:col-span-2",
    withBg: true,
  },
  {
    showTechStack: true,
    class: "lg:row-span-2",
    withBg: false,
  },
  {
    content:
      "Why choose worldwidedev? We prioritize collaboration, transparency, and agility. Our process keeps you involved, ensuring the final product exceeds your expectations.",
    withBg: true,
  },
  {
    content:
      "From startups to enterprise-level applications, worldwidedev handles projects of any scale. We focus on efficient coding, best practices, and timely delivery.",
    class: "lg:row-span-2",
    withBg: true,
  },
  {
    showLogo: true,
    withBg: true,
  },
  {
    content:
      "At worldwidedev, we stay ahead of the curve by adopting the latest tools and frameworks, ensuring your project is built with modern technology and remains scalable.",
    withBg: true,
  },
  {
    content: "true",
    class: "lg:col-span-3 sm:col-span-2",
    withBg: true,
  },
];

const techStackLogos: { path: string; alt: string }[] = [
  {
    path: "https://vuejs.org/images/logo.png",
    alt: "Vue.js",
  },
  {
    path: "/img/nuxtJs.png",
    alt: "Nuxt.js",
  },
  {
    path: "https://vitejs.dev/logo.svg",
    alt: "Vite",
  },
  {
    path: "https://pinia.vuejs.org/logo.svg",
    alt: "Pinia",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java",
  },
  {
    path: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    alt: "GitHub",
  },
  {
    path: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
    alt: "Jira",
  },
  {
    path: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
    alt: "Bootstrap",
  },
  {
    path: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.svg",
    alt: "Vuetify",
  },
  {
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    alt: "Swift",
  },
];
</script>
