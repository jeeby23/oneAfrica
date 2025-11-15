<template>
  <section class="bg-gray-100 py-[90px]" id="projects">
    <div>
      <h5 class="text-center text-[#72C18B] uppercase leading-relaxed tracking-normal">
        Case Studies
      </h5>
      <h1 class="text-center text-3xl">Discover Our Latest Projects</h1>
    </div>
    <div class="flex flex-wrap flex-col md:flex-row justify-center gap-10 p-6">
      <!-- Image Grid -->
      <div
        v-for="(img, index) in images"
        :key="index"
        class="relative group overflow-hidden rounded-2xl cursor-pointer"
      >
        <img
          :src="img"
          alt="Gallery Image"
          class="w-[500px] h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-110 my-4 shadow-md rounded-xl"
        />
        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        >
          <button
            @click="openViewer(index)"
            class="bg-white text-black p-3 rounded-full hover:bg-blue-300 hover:text-white transition duration-500 ease-in-out"
          >
            🔍
          </button>
        </div>
      </div>

      <!-- Lightbox Viewer -->
      <div
        v-if="isViewerOpen"
        class="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 transition-all"
      >
        <div class="relative w-11/12 md:w-2/3 lg:w-1/2">
          <img
            :src="images[currentIndex]"
            alt="Large View"
            class="rounded-xl max-h-[80vh] mx-auto transition-transform duration-500 ease-in-out"
          />
          <!-- Close Button -->
          <button
            @click="closeViewer"
            class="absolute top-2 right-2 bg-white/90 text-black rounded-full px-3 py-1 hover:bg-blue-300 hover:text-white transition duration-300"
          >
            ✕
          </button>

          <button
            @click="prevImage"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 hover:bg-blue-300 hover:text-white transition duration-300"
          >
            ◀
          </button>
          <button
            @click="nextImage"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-2 hover:bg-blue-300 hover:text-white transition duration-300"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import minierpdashboard from '@/assets/minierpdashboard.png'
import redspeeddashboard from '@/assets/redspeeddashboard.png'
import rsmdashboard from '@/assets/rsmdashboard.png'
import hrdashboard from '@/assets/hrdashboard.png'


const images = [rsmdashboard, hrdashboard, redspeeddashboard, minierpdashboard]

const isViewerOpen = ref(false)
const currentIndex = ref(0)

const openViewer = (index) => {
  currentIndex.value = index
  isViewerOpen.value = true
}

const closeViewer = () => {
  isViewerOpen.value = false
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<style scoped>
img {
  transition: all 0.4s ease-in-out;
}
</style>
