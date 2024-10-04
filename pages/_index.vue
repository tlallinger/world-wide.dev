<template>
  <div class="snap-container h-screen snap-y snap-mandatory overflow-auto">
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :class="[
        'flex min-h-screen flex-col items-center justify-center pt-16 sm:snap-start md:snap-start',
        index % 2 === 0 ? 'bg-primary' : 'bg-secondary',
      ]"
    >
      <div class="container px-4 text-center">
        <h2
          v-if="section.title"
          class="text-header mb-6 text-3xl font-extrabold"
        >
          {{ section.title }}
        </h2>
        <div class="flex justify-center">
          <component
            class="overflow-auto px-2 py-4 text-center sm:py-20 md:px-14 lg:max-h-screen"
            :is="section.content"
          />
        </div>
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
