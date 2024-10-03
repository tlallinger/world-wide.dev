<template>
  <div
    class="snap-container h-screen overflow-auto snap-y snap-mandatory scroll-smooth"
  >
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :class="[
        'min-h-screen flex items-center snap-start',
        index % 2 === 0 ? 'bgPrimary' : 'bgSecondary',
      ]"
    >
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold textHeader mb-6">
            {{ section.title }}
          </h2>
          <component
            :style="{ maxHeight: '70vh' }"
            class="overflow-auto"
            :is="section.content"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Contact from "~/components/Contact.vue";
import About from "~/components/About.vue";
import Projects from "~/components/Projects.vue";

const sections = shallowRef([
  {
    id: "about",
    title: "About Me",
    content: About,
  },
  {
    id: "projects",
    title: "My Projects",
    content: Projects,
  },
  {
    id: "contact",
    title: "Contact Me",
    // content: Contact,
  },
]);
</script>

<style scoped></style>
