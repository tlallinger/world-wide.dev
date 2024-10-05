<template>
  <section class="pb-12 pt-4 xl:pb-0 xl:pt-0">
    <div class="container mx-auto">
      <div class="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="flex flex-1 items-center justify-center gap-4 xl:justify-start"
        >
          <!-- Simply displaying the number -->
          <span class="text-4xl font-extrabold xl:text-6xl">{{
            item.num
          }}</span>
          <p
            :class="item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'"
            class="leading-snug text-white/80"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define the stats array
const stats = ref([
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 3,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 200,
    text: "Code commits",
  },
]);

const countUpPerSecond = () => {
  const finalNumbers = stats.value.map((stat) => stat.num);
  // Loop through each stat
  stats.value.forEach((stat) => {
    const interval = 2000 / stat.num;
    console.log(interval);
    stat.num = 0;
    // Set an interval to increase the number by 1 every second
    setInterval(() => {
      // If the number is less than the final number, increase it by 1
      if (stat.num < finalNumbers[stats.value.indexOf(stat)]) stat.num++;
    }, interval);
  });
};

onMounted(() => countUpPerSecond());
</script>
