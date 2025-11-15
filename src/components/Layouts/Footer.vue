<template>
  <section
    class="min-h-auto bg-[#020842] bg-cover bg-no-repeat bg-center bg-[url('@/assets/footerbg.png')] pt-10"
  >
    <Container>
      <div class="text-white py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        <!-- Logo + Info -->
        <div class="space-y-4">
          <img :src="logo" alt="logo" class="w-32 md:w-40" />
          <h3 class="text-sm leading-relaxed">
            Drives innovation within the IT sector, making it a dynamic
          </h3>

          <div class="space-y-2 text-sm">
            <span class="block">
              <i class="fa-solid fa-phone mr-2"></i> <strong>Phone</strong><br />
              <p class="ml-6">+2349167630494</p>
            </span>

            <span class="block">
              <i class="fa-solid fa-envelope mr-2"></i> <strong>Email</strong><br />
              <p class="ml-6">info.example@gmail.com</p>
            </span>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h2 class="text-lg font-semibold mb-3">Services</h2>
          <ul class="space-y-2 text-sm">
            <li v-for="(service, index) in services" :key="index">
              {{ service }}
            </li>
          </ul>
        </div>

        <!-- Links -->
        <div>
          <h2 class="text-lg font-semibold mb-3">Links</h2>
          <ul class="space-y-2 text-sm">
            <li v-for="(link, index) in links" :key="index">
              {{ link }}
            </li>
          </ul>
        </div>

        <!-- Newsletter / Date -->
        <div class="space-y-3 text-sm">
          <h1 class="text-2xl">Recent Post</h1>
          <p class="leading-relaxed">Crafting Tomorrow’s Digital World</p>
          <p>
            <i class="fa-regular fa-calendar mr-2"></i>
            November 3, 2025
          </p>
        </div>
      </div>
      <div>
        <hr class="text-slate-200" />
        <div class="flex flex-col md:flex-row justify-between gap-6 items-start text-white py-10">
          <span>&copy; OneAfrica 2025 | AlL Right Reserved</span>
          <span class="flex gap-3">
            <small>Terms & Condidtions</small>
            <small>Privacy </small>
            <small>contact us</small>
          </span>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import logo from '@/assets/africlogo.png'
import Container from '@/components/Layouts/Container.vue'

const services = [
  'InfoSec Experts',
  'Quantum IT Solutions',
  'NexusTech Systems',
  'SmartNet IT Services',
  'ByteForce Solutions',
]

const links = ['About Us', 'Services', 'Gallery', 'Testimonial', 'Blog And News']
</script>
