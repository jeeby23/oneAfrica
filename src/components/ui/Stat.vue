<template>
  <div class="w-full flex justify-center px-4" ref="counterSection">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[500px] md:max-w-[700px] w-full py-8">

      <div class="text-center py-8 px-4 bg-white shadow rounded-xl">
        <h2 class="font-bold text-4xl pt-2">{{ winning }}+</h2>
        <p class="text-lg">Winning Award</p>
      </div>

      <div class="text-center py-8 px-4 bg-white shadow rounded-xl">
        <h2 class="font-bold text-4xl pt-2">{{ ActiveMembers }}K</h2>
        <p class="text-lg">Active Members</p>
      </div>

      <div class="text-center py-8 px-4 bg-white shadow rounded-xl">
        <h2 class="font-bold text-4xl pt-2">{{ SatishfiedClient }}+</h2>
        <p class="text-lg">Satisfied Client</p>
      </div>

      <div class="text-center py-8 px-4 bg-white shadow rounded-xl">
        <h2 class="font-bold text-4xl pt-2">{{ ClientsComment }}+</h2>
        <p class="text-lg">Clients Comment</p>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Container from '@/components/Layouts/Container.vue'

const winning = ref(0)
const ActiveMembers = ref(0)
const SatishfiedClient = ref(0)
const ClientsComment = ref(0)

const animateCount = (refVar, target, duration = 2000) => {
  let start = 0
  const increment = target / (duration / 16)

  const step = () => {
    start += increment
    if (start < target) {
      refVar.value = Math.floor(start)
      requestAnimationFrame(step)
    } else {
      refVar.value = target
    }
  }

  step()
}
const counterSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(winning, 36)
          animateCount(ActiveMembers, 180)
          animateCount(SatishfiedClient, 500)
          animateCount(ClientsComment, 250)

          observer.disconnect()
        }
      })
    },
    {
      threshold: 0.3,
    },
  )
  if (counterSection.value) {
    observer.observe(counterSection.value)
  }
})
</script>
