<template>
  <section id="contact">
    <Container>
      <div class="my-[90px]">
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col md:flex-row gap-[100px]">
            <div data-aos="fade-up"
              data-aos-duration="2000">

              <div>
                <h6 class="capitalize py-3 text-[#72C18B]">Work With Us</h6>
                <h1 class="text-3xl pb-3">We are ready to work for your projects</h1>
              </div>

              <!-- First row -->
              <div class="flex flex-col md:flex-row gap-5 my-3 sm:max-w-[600px] lg:max-w-[800px]">
                <div>
                  <BaseInput 
                    label="first name" 
                    v-model="form.name"
                    input-class="w-full md:w-64 rounded-full py-5 focus:border-[#72C18B]" 
                    placeholder="John Doe" 
                  />
                  <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
                </div>

                <div>
                  <BaseInput 
                    label="Your email" 
                    v-model="form.email"
                    input-class="w-full md:w-64 rounded-full py-5 focus:border-[#72C18B]" 
                    placeholder="info.example@gmail.com" 
                  />
                  <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Second row -->
              <div class="flex flex-col md:flex-row gap-5">
                <div>
                  <BaseInput 
                    label="Your number" 
                    v-model="form.number"
                    input-class="w-full md:w-64 rounded-full py-5 focus:border-[#72C18B] " 
                    placeholder="+234914747484" 
                  />
                  <p v-if="errors.number" class="text-red-500 text-sm mt-1">{{ errors.number }}</p>
                </div>

                <div>
                  <BaseInput 
                    label="subject" 
                    v-model="form.subject"
                    input-class="w-full md:w-64 rounded-full py-5 focus:border-[#72C18B]" 
                    placeholder="Your subject here" 
                  />
                  <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
                </div>
              </div>

              <!-- Message -->
              <div class="py-7">
                <BaseTextarea 
                  label="your message" 
                  v-model="form.message"
                  TextareaClass=" w-full md:w-full rounded-xl resize-none py-5 focus:border-[#72C18B]" 
                  placeholder="Message here.." 
                />
                <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
              </div>

              <!-- Submit button -->
              <div>
                <BaseButton
                type="submit"
                  label="Submit"
                  button-class="bg-[#72C18B] px-10 py-2 text-white rounded-full"
                />
              </div>
            </div>

            <div data-aos="fade-left"
              data-aos-duration="2000">
              <img :src="messagesimg" alt="messgae image" class=" sm:max-w-[500px] lg:max-w-[600px]" />
            </div>
          </div>
        </form>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useValidation } from "@/hooks/useValidation";

import BaseInput from "@/components/ui/customInput.vue";
import BaseButton from "@/components/ui/Button.vue";
import BaseTextarea from "@/components/ui/customTextarea.vue";
import Container from "@/components/Layouts/Container.vue";
import messagesimg from "@/assets/messagesimg.png";

const form = reactive({
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
});

const { errors, validateInputs } = useValidation();

const handleSubmit = () => {
  const isValid = validateInputs(form);

  if (!isValid) return;

  alert("Form submitted successfully!");
};
</script>