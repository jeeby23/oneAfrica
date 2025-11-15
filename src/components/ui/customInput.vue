<template>
  <div>
    <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading">
      {{ label }}
      <span class="text-red-600">*</span>
    </label>
    <input
      type="text"
      id="first_name"
      :class="inputClass"
      :placeholder="placeholder"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'First name',
  },
  placeholder: {
    type: String,
    default: 'john',
  },
  inputClass: {
    type: String,
    default:
      'bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-full capitalize placeholder-slate-300',
  },
})
</script>
