<template>
  <form
    class="flex w-full flex-col justify-center gap-8 rounded-xl text-content lg:w-2/3"
    @submit.prevent="handleSubmit"
  >
    <h3 class="mb-4 text-4xl text-accent">Let's work together</h3>

    <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
      <UiInputField v-model="formData.name" label="Name" required />
      <UiInputField v-model="formData.from" label="Email" required />
      <UiInputField v-model="formData.phone" label="Phone number" />
      <UiInputField v-model="formData.subject" label="Subject" required />
    </div>

    <textarea
      v-model="formData.message"
      class="flex h-52 w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      placeholder="Type your message here."
    />

    <button size="md" type="submit" class="btn-lg w-full md:w-1/2">
      <svg
        v-if="isLoading"
        aria-hidden="true"
        class="size-6 animate-spin fill-accent text-primary"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <div v-else>Send</div>
    </button>
    <Toast v-model="toastProps" />
  </form>
</template>

<script setup lang="ts">
import type { EmailBody } from "~/server/api/email.post";
import type { ToastProps } from "./Toast.vue";

const formData = reactive<EmailBody>({
  from: "",
  name: "",
  phone: "",
  subject: "",
  message: "",
});

const isLoading = ref(false);
const toastProps = ref<ToastProps>({
  show: false,
  message: "",
  variant: "success",
});

const handleSubmit = async () => {
  try {
    isLoading.value = true;
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error();
    }

    Object.keys(formData).forEach(
      (key) => (formData[key as keyof EmailBody] = ""),
    );

    toastProps.value.message = "Email sent successfully";
    toastProps.value.variant = "success";
    scrollToSection("about");
  } catch (error) {
    toastProps.value.message = "Failed to send email";
    toastProps.value.variant = "error";
  } finally {
    toastProps.value.show = true;
    isLoading.value = false;
  }
};
</script>
