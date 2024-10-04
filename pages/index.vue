<template>
  <div class="snap-container h-screen snap-y snap-mandatory overflow-auto">
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :class="[
        'flex min-h-screen snap-start flex-col items-center justify-center pt-16',
        index % 2 === 0 ? 'bg-primary' : 'bg-secondary',
      ]"
    >
      <div class="container px-4">
        <h2
          v-if="section.title"
          class="text-header mb-6 text-3xl font-extrabold"
        >
          {{ section.title }}
        </h2>
        <component
          class="max-h-screen overflow-auto px-2 py-4 sm:py-20 md:px-14"
          :is="section.content"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import About from "~/components/About.vue";
import Projects from "~/components/Projects.vue";
import Contact from "~/components/Contact.vue";

const sections = shallowRef([
  {
    id: "about",
    content: About,
  },
  {
    id: "projects",
    title: "Projects",
    content: Projects,
  },
  {
    id: "contact",
    title: "Contact",
    content: Contact,
  },
]);
</script>
