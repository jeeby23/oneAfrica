<script setup>
import Hero from '@/components/Hero.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import Whychoosection from '@/components/Whychoosection.vue'
import TalktousSection from '@/components/TalktousSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import BaseButton from '@/components/ui/Button.vue'
import heroimage from '@/assets/banner.png'
import Container from '@/components/Layouts/Container.vue'
import Footer from '@/components/Layouts/Footer.vue'
</script>

<template>
  <main>
    <Hero>
      <Container>
        <section id="home">
          <div
            class="flex flex-col-reverse md:flex-row justify-between items-center mt-10 md:mt-[50px] gap-10 md:gap-5 overflow-hidden"
          >
            <!-- Text Section -->
            <div class="w-full md:w-[500px] px-4 sm:px-6 md:px-0 text-center md:text-left"  data-aos="fade-up"
            data-aos-duration="3000"
            >
              <span>
                <h1
                  class="font-bold text-3xl sm:text-4xl lg:text-6xl xl:text-7xl py-4 leading-tight"
                >
                  Creating Digital
                  <span class="text-green-500">Innovation</span> & Excellence
                </h1>
                <h2
                  class="py-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700"
                >
                  One-Stop Solution For All Your Business Needs
                </h2>
              </span>
              <div class="flex justify-center md:justify-start">
                <BaseButton
                  label="Get Started Now"
                  button-class="bg-blue-600 text-white py-4 px-7 rounded-full my-2"
                />
              </div>
            </div>

            <!-- Image Section -->
            <div class="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
              data-aos="fade-left"
              data-aos-duration="3000"
                :src="heroimage"
                alt="hero-image"
                class="rounded-xl w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </Container>
    </Hero>
    <section>
      <AboutSection />
      <ServicesSection/>
      <Whychoosection/>
      <TalktousSection/>
      <ProjectSection/>
      <Footer/>
    </section>
  </main>
</template>