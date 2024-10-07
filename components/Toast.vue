<template>
  <div
    v-if="modelValue.show"
    class="absolute bottom-4 left-1/2 -translate-x-1/2 transform"
  >
    <div
      id="toast-success"
      class="right-auto flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div
        v-if="modelValue.variant === 'success'"
        class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
      >
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div
        v-if="modelValue.variant === 'error'"
        class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
      >
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
          />
        </svg>
        <span class="sr-only">Error icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">{{ modelValue.message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ToastVariant = "success" | "error";

export type ToastProps = {
  show: boolean;
  message: string;
  variant?: ToastVariant;
};

const props = defineProps<{
  modelValue: ToastProps;
}>();

const emit = defineEmits(["update:modelValue"]);

const showToast = computed({
  get: () => props.modelValue.show,
  set: (value: boolean) => {
    emit("update:modelValue", { ...props.modelValue, show: value });
  },
});

const SHOW_TOAST_INTERVAL = 4000;

const hideToastAfterDelay = () => {
  setTimeout(() => {
    showToast.value = false;
  }, SHOW_TOAST_INTERVAL);
};

watch(() => props.modelValue.show, hideToastAfterDelay);
</script>
