<template>
  <component
    :is="isAnchor ? 'a' : 'button'"
    :class="computedClass"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

type Variant = "default" | "primary" | "outline";
type Size = "default" | "md" | "lg";
type ButtonVariants = {
  variant: Record<Variant, string>;
  size: Record<Size, string>;
};

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    isAnchor?: boolean;
  }>(),
  {
    variant: "default",
    size: "default",
    isAnchor: false,
  },
);

// Define button styles and variants
const buttonVariants: ButtonVariants = {
  variant: {
    default: "bg-accent text-primary hover:bg-accent-hover",
    primary: "bg-primary text-white",
    outline:
      "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
  },
  size: {
    default: "h-[44px] px-6",
    md: "h-[48px] px-6",
    lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
  },
};

// Compute the final class based on props
const computedClass = computed(() => {
  const variantClass =
    buttonVariants.variant[props.variant] || buttonVariants.variant.default;
  const sizeClass =
    buttonVariants.size[props.size] || buttonVariants.size.default;
  return [variantClass, sizeClass, "flex items-center"]
    .filter(Boolean)
    .join(" ");
});
</script>
