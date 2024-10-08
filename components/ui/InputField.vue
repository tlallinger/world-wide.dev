<template>
  <div class="relative">
    <input
      :value="modelValue"
      type="text"
      :name="label"
      class="w-full"
      :required="required"
      placeholder=""
      v-bind="$attrs"
      @input="handleInput"
    />
    <label :class="{ required }">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string;
  label?: string;
  required?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target) return;
  emit("update:modelValue", target.value);
};
</script>

<style scoped>
.required:after {
  content: " *";
  @apply text-accent/50;
}

input {
  @apply flex h-12 rounded-md border border-white/10 bg-primary px-4 py-5 text-sm font-light outline-none placeholder:text-white/60 focus:border-accent;
}

input + label {
  @apply absolute left-4 top-1/2 -translate-y-1/2 transform text-white/60 transition-all;
  pointer-events: none;
}

input:focus + label,
input:not(:placeholder-shown) + label {
  @apply left-1 top-1 text-xs text-accent;
  transform: translateY(-150%);
}
</style>
