<template>
  <section
    class="min-h-auto bg-cover bg-no-repeat bg-center lg:bg-[url('@/assets/servicebg.png')] my-20" id="expertises"
  >
    <Container>
      <div>
        <h2 class="text-[#72C18B] leading-5 tracking-normal capitalize">Our Expertises</h2>
      </div>

      <div class="flex justify-between items-center">
        <h1 class="text-xl font-semibold">We provide All-in-one Solution</h1>

        <BaseButton
          label="All services"
          button-class="px-7  py-3  text-sm lg:text-xl text-white bg-blue-600 rounded-full "
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div
          v-for="(item, index) in details"
          :key="index"
          data-aos="fade-left"
          data-aos-duration="2000"
          class="border border-slate-400 rounded-xl p-5 bg-white"
        >
          <img :src="item.icon" alt="icon" class="w-12 h-12" />

          <h1 class="py-3 font-bold text-lg">{{ item.title }}</h1>
          <p class="py-2 text-gray-700">{{ item.text }}</p>

          <BaseButton :label="item.more" button-class="mt-3" />
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup>
import BaseButton from '@/components/ui/Button.vue'
import Container from '@/components/Layouts/Container.vue'
import iconOne from '@/assets/icon2.png'
import iconTwo from '@/assets/icon3.png'
import iconThree from '@/assets/icon4.png'

const details = [
  {
    icon: iconOne,
    title: 'Software Devleopment',
    text: 'We provide customized all in one development that perfect the process of our customers',
    more: 'View Details',
  },
  {
    icon: iconTwo,
    title: 'Business Process consulting',
    text: 'we help organizations improve thier operational effienciency and effectivness by optimizing thier business processes',
    more: 'View Details',
  },
  {
    icon: iconThree,
    title: 'Digital Transformation',
    text: 'We integrate digital technologies to fundamentally change how a business operates, delivers value, and interacts with customers  .',
    more: 'View Details',
  },
  {
    icon: iconTwo,
    title: 'Server and Network Solutions',
    text: 'Server and network solution are critcal componenets of modern IT infracstructure businesses.',
    more: 'View Details',
  },
]
</script>
