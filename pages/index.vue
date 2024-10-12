<template>
  <div
    class="snap-container h-screen w-full snap-y snap-mandatory lg:overflow-auto"
  >
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :class="[
        'my-6 flex min-h-screen flex-col items-center justify-center md:snap-start lg:my-2',
        index % 2 === 0 ? 'before:bg-primary' : '-z-1 bg-secondary',
      ]"
    >
      <div class="container px-4 text-center">
        <div class="flex justify-center">
          <component
            :is="section.component"
            class="z-10 px-2 py-4 text-center sm:py-20 md:px-14 lg:max-h-screen"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SectionAboutMe from "~/components/Section/AboutMe.vue";
import SectionContactForm from "~/components/Section/ContactForm.vue";

const sections = [
  {
    id: "about",
    component: SectionAboutMe,
  },
  {
    id: "contact",
    component: SectionContactForm,
  },
];
</script>
