<template>
  
<label for="message" class="block mb-2.5 text-sm font-medium text-heading">
    {{ label }}
    <span class="text-red-600">*</span>

</label>
<textarea  @input="$emit('update:modelValue', $event.target.value)" id="message" rows="4" :class="TextareaClass" :placeholder="placeholder"></textarea>

</template>

<script setup>
defineProps({
    label: {
    type: String,
    default: 'messgae',
  },
    placeholder: {
    type: String,
    default: 'Write your thoughts here...',
  },
    TextareaClass: {
    type: String,
    default: 'bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body resize-none rounded-xl',
  },
})
</script>