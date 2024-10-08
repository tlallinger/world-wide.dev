<template>
  <div
    class="snap-container h-screen w-full snap-y snap-mandatory lg:overflow-auto"
  >
    <section
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :class="[
        'flex min-h-screen flex-col items-center justify-center md:snap-start',
        index % 2 === 0 ? 'bg-primary' : 'bg-secondary',
      ]"
    >
      <div class="container px-4 text-center">
        <div class="flex justify-center">
          <component
            :is="section.component"
            class="px-2 py-4 text-center sm:py-20 md:px-14 lg:max-h-screen"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "~/components/AboutMe.vue";
import ContactForm from "~/components/ContactForm.vue";

const sections = shallowRef([
  {
    id: "about",
    component: AboutMe,
  },
  {
    id: "contact",
    component: ContactForm,
  },
]);
</script>
