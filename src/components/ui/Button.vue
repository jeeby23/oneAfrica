
<template>
    <div >
    <button :type="type" :class="buttonClass">{{label}}</button>
    </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    default: 'Submit',
  },
  type: {
    type: String,
    default: 'Submit',
  },
  buttonClass: {
    type: String,
    default: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
  },
})
</script>
