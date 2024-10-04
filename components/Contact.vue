<template>
  <div class="w-2/3">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email" class="sr-only fixed">Email address</label>
        <input
          id="email"
          v-model="formData.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address"
        />
      </div>

      <div>
        <label for="subject" class="sr-only fixed">Subject</label>
        <input
          id="subject"
          v-model="formData.subject"
          name="subject"
          type="text"
          required
          class="block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Subject"
        />
      </div>

      <div>
        <label for="message" class="sr-only fixed">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          required
          class="block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Message"
        ></textarea>
      </div>

      <div class="pt-4">
        <button
          type="submit"
          class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive form data
const formData = ref({
  email: "",
  subject: "",
  message: "",
});

// Handle form submission
function handleSubmit() {
  console.log(formData.value);
}
</script>
