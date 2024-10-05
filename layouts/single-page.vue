<template>
  <div>
    <main>
      <slot />
    </main>

    <footer
      class="absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 transform text-center text-gray-400"
    >
      © 2024 worldwidedev - All Rights Reserved
    </footer>
  </div>
</template>

<script>
export default {
  name: "single-page",
};
</script>
