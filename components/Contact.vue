<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <!-- Email Field -->
      <div>
        <label for="email" class="sr-only">Email address</label>
        <input
          id="email"
          v-model="formData.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
        />
      </div>

      <!-- Subject Field -->
      <div>
        <label for="subject" class="sr-only">Subject</label>
        <input
          id="subject"
          v-model="formData.subject"
          name="subject"
          type="text"
          required
          class="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Subject"
        />
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="sr-only">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          required
          class="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Message"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  // Log the form data
  console.log(formData.value);
}
</script>
