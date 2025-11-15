<template>
  <header>
    <Container>
      <nav>
        <div class="flex justify-between items-center bg-[#97b8e0] my-3 p-5 rounded-full">
          <div>
            <img :src="logo" alt="logo" class="w-32" />
          </div>

          <!-- Desktop menu -->
          <div class="hidden lg:block">
            <ul class="flex flex-row gap-8">
              <li v-for="(navbarlink, index) in navbarlinks" :key="index">
                <a
                  :href="'#' + navbarlink.link"
                  class="cursor-pointer"
                  @click="scrollToSection(navbarlink.link)"
                >
                  {{ navbarlink.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Desktop button -->
          <div class="hidden lg:block">
            <div class="flex items-center gap-3">
              <span
                class="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white"
                ><i class="fa-solid fa-phone-volume"></i
              ></span>
              <span>
                Need Help <br />
                <p class="font-semibold text-xl">+2349167630409</p>
              </span>
            </div>
          </div>

          <!-- Hamburger icon for mobile -->
          <div
            @click="toggleMenu"
            class="block lg:hidden cursor-pointer bg-white border border-slate-600 p-3 rounded-full"
          >
            <img :src="hamburger" alt="hamburger menu" class="text-black" />
          </div>
        </div>

        <!-- Mobile menu -->
        <transition name="slide-fade">
          <div
            v-if="showMobile"
            class="fixed top-0 left-0 block sm:block lg:hidden min-h-screen w-64 bg-white shadow-lg z-50 border-r-3 border-blue-500"
          >
            <div class="flex justify-between items-center mb-6 bg-blue-300 p-3">
              <img :src="logo" alt="logo" class="w-24" />
              <button
                @click="toggleMenu"
                class="text-2xl font-normal text-white translate-x-7 bg-blue-600 rounded-full px-2"
              >
                x
              </button>
            </div>
            <ul class="flex flex-col gap-6 text-slate-500 p-6">
              <li v-for="(navbarlink, index) in navbarlinks" :key="index">
                 <a
                  :href="'#' + navbarlink.link"
                  class="cursor-pointer"
                  @click="scrollToSection(navbarlink.link)"
                >
                  {{ navbarlink.name }}
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import logo from '@/assets/africlogo.png'
import hamburger from '@/assets/menu.svg'
import BaseButton from '@/components/ui/Button.vue'
import Container from '@/components/Layouts/Container.vue'
import { ref } from 'vue'

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const showMobile = ref(false)
const toggleMenu = () => {
  showMobile.value = !showMobile.value
}

const navbarlinks = [
  { name: 'Home', link: 'home' },
  { name: 'About', link: 'about' },
  { name: 'Projects', link: 'projects' },
  // { name: 'Solutions', link: 'solutions' },
  { name: 'Expertises', link: 'expertises' },
  { name: 'Contact', link: 'contact' },
]
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
