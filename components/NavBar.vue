<template>
  <nav class="bgNavBar absolute min-w-full top-0 h-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-white font-bold">WWD</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <button
                v-for="button in scrollButtons"
                class="hover:underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                @click="scrollToSection(button.sectionId)"
              >
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
/**
 * Scrolls smoothly to a given section by ID.
 */
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

const scrollButtons: { text: string; sectionId: string }[] = [
  { text: "About Me", sectionId: "about" },
  { text: "My Projects", sectionId: "projects" },
  { text: "Contact Me", sectionId: "contact" },
];
</script>
