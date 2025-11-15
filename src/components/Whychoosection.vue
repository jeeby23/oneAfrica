<template>
  <section class="bg-[#F1F6FC]" id="">
    <Container>
      <section class="my-16">
        <div class="max-w-[500px]">
          <h1 class=" text-2xl md:text-3xl font-bold leading-7 tracking-0 py-10">
            Powerful Software At The Forefront of Digital Excellence & Technology
          </h1>
        </div>
        <div class="flex flex-col md:flex-row gap-10">
          <div class="" >
            <h4   data-aos="fade-up"
              data-aos-duration="1500">
              The IT industry offers diverse career opportunities, from network administration to
              software development. As technology continues to evolve, the importance of IT in
              shaping the future of businesses
            </h4>
            <Stat />
          </div>
          <div   data-aos="fade-left"
              data-aos-duration="1500">
            <img :src="counter" alt="counter-img" class="max-w-[400px] lg:max-w-[700px]"/>
          </div>
        </div>
      </section>
    </Container>
  </section>
</template>

<script setup>
import counter from '@/assets/counter.png'
import Container from '@/components/Layouts/Container.vue'
import Stat from './ui/Stat.vue'
</script>
