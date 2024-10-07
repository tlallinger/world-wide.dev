<template>
  <nav
    class="bg-nav-bar fixed top-0 z-10 h-16 w-full border-b border-slate-100/10 backdrop-blur-md"
  >
    <div class="container flex h-16 items-center">
      <NuxtLink to="/">
        <NuxtImg class="size-10" src="/logo.png" alt="Logo" />
      </NuxtLink>
      <div class="ml-10 flex items-center space-x-6">
        <NuxtLink
          v-for="button in scrollButtons"
          :key="button.text"
          class="text-link flex flex-col items-center justify-center space-x-1 rounded-md p-2 sm:flex-row"
          :to="button.sectionId"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path fill-rule="evenodd" :d="button.svg" clip-rule="evenodd" />
          </svg>
          <div class="hidden pl-2 text-center sm:block">
            {{ button.text }}
          </div>
        </NuxtLink>
      </div>
      <!-- Spacer -->
      <div class="grow" />

      <NuxtLink to="/contact" class="p-2">
        <button class="btn-md">Hire me</button>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrollButtons: { text: string; sectionId: string; svg: string }[] = [
  {
    text: "About Me",
    sectionId: "about",
    svg: "M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z",
  },
  {
    text: "My Projects",
    sectionId: "projects",
    svg: "M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z",
  },
];
</script>
