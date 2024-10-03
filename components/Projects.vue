<template>
  <div id="projects" class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">My Projects</h2>
        <p class="mt-4 text-lg text-gray-600">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              :src="project.image"
              :alt="project.title"
              class="h-48 w-full object-cover"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="project.href" class="hover:underline">{{
                  project.category
                }}</a>
              </p>
              <a :href="project.href" class="block mt-2">
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
]);
</script>
