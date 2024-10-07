<template>
  <div id="projects" class="flex snap-x space-x-6 overflow-x-auto pb-6">
    <div
      v-for="project in projects"
      :key="project.title"
      class="w-50 flex flex-shrink-0 snap-center flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div class="flex-shrink-0">
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          class="h-48 w-full object-cover"
        />
      </div>
      <div class="flex flex-1 flex-col justify-between bg-white p-6">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600">
            <a :href="project.href" class="hover:underline">{{
              project.category
            }}</a>
          </p>
          <a :href="project.href" class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
              {{ project.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ project.description }}
            </p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">{{ project.date }}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{{ project.readingTime }} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    title: "Project 1",
    category: "Web Development",
    description: "This is a description of project 1.",
    href: "#",
    image: "https://via.placeholder.com/300",
    date: "March 16, 2020",
    readingTime: "6 min",
  },
  {
    title: "Project 2",
    category: "Mobile Development",
    description: "This is a description of project 2.",
    href: "#",
    image: "https://via.placeholder.com/300",
    date: "March 16, 2020",
    readingTime: "6 min",
  },
  {
    title: "Project 3",
    category: "Web Development",
    description: "This is a description of project 3.",
    href: "#",
    image: "https://via.placeholder.com/300",
    date: "March 16, 2020",
    readingTime: "6 min",
  },
  {
    title: "Project 4",
    category: "Web Development",
    description: "This is a description of project 4.",
    href: "#",
    image: "https://via.placeholder.com/300",
    date: "March 16, 2020",
    readingTime: "6 min",
  },
  {
    title: "Project 5",
    category: "Web Development",
    description: "This is a description of project 5.",
    href: "#",
    image: "https://via.placeholder.com/300",
    date: "March 16, 2020",
    readingTime: "6 min",
  },
]);
</script>
