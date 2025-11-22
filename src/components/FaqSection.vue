<template>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-primary">
        Common Questions
      </h2>

      <div class="flex flex-col md:flex-row gap-12 items-start">
        <!-- Left Image -->
        <div class="w-full md:w-1/2 relative">
          <div class="rounded-3xl overflow-hidden h-[500px] relative">
            <img src="/src/assets/imgs/faq-yoga-pose.jpg" alt="Yoga Pose" class="w-full h-full object-cover" />
            <!-- Overlay Card -->
            <div class="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
              <p class="font-bold text-lg mb-2">Need any help? Don't hesitate to join us.</p>
              <button class="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
                Get Started
                <span class="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Accordion -->
        <div class="w-full md:w-1/2 space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-100 pb-4">
            <button @click="toggle(index)" class="w-full flex justify-between items-center py-4 text-left focus:outline-none">
              <span class="font-bold text-primary text-lg">{{ faq.question }}</span>
              <span class="ml-4 text-gray-400 transition-transform duration-300">
                <svg v-if="activeIndex !== index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </span>
            </button>
            <div v-show="activeIndex === index" class="text-secondary text-sm leading-relaxed pb-4">
              {{ faq.answer }}
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
    question: "What do I need to start yoga?",
    answer: "You don't need much to start! Just comfortable clothing that allows you to move freely and a yoga mat. We provide props like blocks and straps."
  },
  {
    question: "What is the difference between yoga and pilates?",
    answer: "Yoga focuses more on flexibility, balance, and spirituality, while Pilates focuses on core strength, posture, and muscle toning."
  },
  {
    question: "Do I need to be flexible to do yoga?",
    answer: "Not at all! Yoga is for everyone. Flexibility is a result of yoga, not a prerequisite. Our instructors will guide you through modifications."
  },
  {
    question: "Can I eat before a yoga class?",
    answer: "It's best to avoid heavy meals 2-3 hours before class. A light snack like fruit or nuts 30 minutes before is fine."
  }
]

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
