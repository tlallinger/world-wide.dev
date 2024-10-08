<template>
  <div
    class="flex w-full flex-col items-center justify-between py-4 lg:flex-row"
  >
    <Photo class="mb-4 mr-0 lg:mb-0 lg:mr-8" />
    <div class="space-y-5 text-center lg:text-left">
      <div>
        <span class="text-xl">Software Developer</span>
        <h1 class="h1">
          Hello I'm <br />
          <span class="text-accent">Thomas.</span>
        </h1>
      </div>
      <p class="text-white/80">
        I'm a passionate software developer from Germany, specialized in
        frontend development. My expertise lies in modern web technologies,
        ensuring clean, efficient, and scalable code for seamless user
        experiences.
      </p>
      <Stack size="sm" class="justify-center lg:justify-start" />
      <div
        class="flex flex-col items-center justify-center gap-8 md:flex-row lg:justify-start"
      >
        <button class="btn-lg uppercase" @click="scrollToSection('contact')">
          Hire Me
        </button>
        <div class="flex gap-4">
          <NuxtLink
            v-for="(item, index) in socials"
            :key="index"
            :to="item.path"
            class="hoverEffect flex size-12 items-center justify-center rounded-full border border-accent text-base text-accent duration-500 hover:bg-accent hover:text-primary hover:transition-all"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <!-- Github -->
              <path
                v-if="item.icon === 'github'"
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />

              <!-- LinkedIn -->
              <path
                v-if="item.icon === 'linkedin'"
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path
                v-if="item.icon === 'linkedin'"
                d="M7.2 8.809H4V19.5h3.2V8.809Z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Photo from "@/components/Photo.vue";
import Stack from "@/components/Stack.vue";

const socials = [
  {
    icon: "linkedin",
    path: "https://www.linkedin.com/in/thomas-lallinger-b3a116117/",
  },
  { icon: "github", path: "https://github.com/tlallinger" },
];
</script>
