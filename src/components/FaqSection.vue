<template>
  <section class="py-20 px-6 bg-white overflow-hidden">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-primary">
        Common Questions
      </h2>

      <div class="flex flex-col lg:flex-row gap-12 items-start justify-between">
        <!-- Left Image Card -->
        <div class="w-full lg:w-[45%] relative group">
          <div class="rounded-[40px] overflow-hidden h-[500px] relative shadow-2xl">
            <img src="/src/assets/imgs/faq-yoga-pose.jpg" alt="Yoga Pose" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <!-- Overlay Content -->
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

            <div class="absolute bottom-10 left-10 right-10 text-white">
              <h3 class="font-bold text-3xl mb-8 leading-tight drop-shadow-lg">
                Need any help? Don't<br /> hesitate to join us.
              </h3>

              <button class="flex items-center gap-4 bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-lg group-btn">
                <span class="text-sm">Get In touch</span>
                <span class="w-10 h-10 bg-[#1f2937] text-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Accordion -->
        <div class="w-full lg:w-[50%] space-y-5">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-gray-50 rounded-3xl overflow-hidden transition-all duration-300"
            :class="{ 'bg-gray-50': activeIndex !== index, 'bg-gray-50': activeIndex === index }"
          >
            <button
              @click="toggle(index)"
              class="w-full flex justify-between items-start p-6 text-left focus:outline-none hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span class="font-bold text-primary text-lg pr-8">{{ faq.question }}</span>
              <span class="shrink-0 text-primary mt-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-transform duration-300">
                <!-- Minus Icon (Open) -->
                <svg v-if="activeIndex === index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
                <!-- Plus Icon (Closed) -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>

            <div
              class="grid transition-[grid-template-rows] duration-500 ease-in-out"
              :class="activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <div class="px-6 pb-6 text-gray-700 font-medium leading-relaxed text-base">
                  {{ faq.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const faqs = [
  {
    question: "What is new cluster housing?",
    answer: "Our Dedicated team members are at the heart og work. and their hard work drives us to deliver your exceptional house and we give solution to others problems. Don't worry we have gone through the certification on process so our insurance is safe and"
  },
  {
    question: "What is the difference between a real estate agent and a real estate broker?",
    answer: "A real estate agent is licensed to help people buy and sell property, but they must work under a sponsoring broker. A broker has additional training and licenses."
  },
  {
    question: "What is a homeowner's association (HOA)?",
    answer: "An HOA is an organization in a subdivision, planned community, or condominium building that makes and enforces rules for the properties and their residents."
  },
  {
    question: "These are just a few common real estate FAQs, and the specifics can vary based your?",
    answer: "Real estate laws and practices can vary significantly by location. It's always best to consult with a local professional for advice specific to your area and situation."
  }
]

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
