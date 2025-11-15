<template>
  <section class="bg-[#F1F6FC]">
    <Container>
      <section class="my-16" id="about">
        <div class="flex flex-col md:flex-row items-start justify-start gap-10">
          <!-- Image -->
          <div class="w-full md:w-1/2 relative">
            <img :src="about1" alt="about image" class="rounded-lg object-contain" />

            <img
              data-aos="fade-down"
              data-aos-duration="2000"
              :src="about2"
              alt="about-small-image"
              class="border-10 border-white rounded-xl absolute top-[280px] right-0 hidden md:block w-[300px] object-cover"
            />
          </div>

          <!-- Text + Icons -->
          <div class="w-full md:w-[500px]">
            <h5 class="text-[#72C18B] font-semibold mb-2 uppercase tracking-wide">Who We Are</h5>
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 leading-snug text-gray-800">
             We’re Building Modern And Hight QualitySoftware
            </h2>

            <ul class="space-y-6">
              <li
                v-for="(detail, index) in details"
                :key="index"
                 data-aos="fade-up"
              data-aos-duration="1000"
                class="flex flex-col md:flex-row items-start justify-center gap-4"
              >
                <div
                  class="text-3xl p-4 rounded-full text-white flex items-center justify-center shadow-md"
                  :style="{ backgroundColor: detail.bgColor }"
                >
                  <i :class="detail.icon"></i>
                </div>

                <div>
                  <h3 class="font-semibold text-lg mb-1 text-gray-900">
                    {{ detail.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    {{ detail.text }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  </section>
</template>

<script setup>
import about1 from '@/assets/about1.png'
import about2 from '@/assets/about2.png'
import Container from '@/components/Layouts/Container.vue'

const details = [
  {
    icon: 'fa-solid fa-lightbulb',
    bgColor: '#F59E0B',
    title: 'Tech Vista Solutions',
    text: 'Our mission is to empower digital transformation through creative technology and innovation.',
  },
  {
    icon: 'fa-solid fa-gear',
    bgColor: '#3B82F6',
    title: 'Pro Guard IT Services',
    text: 'We build scalable systems with precision, ensuring seamless user experiences and secure platforms.',
  },
  {
    icon: 'fa-solid fa-handshake',
    bgColor: '#10B981',
    title: 'Cyber Shield Experts',
    text: 'Partnering with businesses to deliver robust, reliable, and future-ready solutions.',
  },
]
</script>
