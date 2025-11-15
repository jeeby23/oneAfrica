<template>
  <section class="min-h-auto bg-contain bg-no-repeat bg-center lg:bg-[url('@/assets/bannerbg.png')]">
  <Header/>
    <slot/>
  </section>
</template>

<script setup>
import Header from './Layouts/Header.vue';
</script>
