<template>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-20">
        <!-- Left Content -->
        <div class="w-full md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-primary mb-12 leading-tight">
            Your Life For Greater<br />
            Self Of Yoga
          </h2>

          <div class="space-y-10">
            <!-- Feature 1 -->
            <div class="flex flex-col gap-4 group cursor-default transition-transform duration-300 hover:translate-x-2">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Expert Instructors</h3>
                  <p class="text-sm text-secondary leading-relaxed mb-3">
                    Our certified masters bring decades of experience across diverse disciplines, ensuring every session guides you toward true mastery and safety.
                  </p>
                </div>
              </div>
              <!-- Full Width Decorative Line -->
              <div class="flex items-center w-full gap-0.5 opacity-80">
                 <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                 <div class="h-[1.5px] flex-1 bg-purple-400"></div>
                 <div class="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex flex-col gap-4 group cursor-default transition-transform duration-300 hover:translate-x-2">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Transformative Power</h3>
                  <p class="text-sm text-secondary leading-relaxed mb-3">
                    Unlock your full potential through consistent practice that deeply rejuvenates your spirit while strengthening your physical body.
                  </p>
                </div>
              </div>
              <!-- Full Width Decorative Line -->
              <div class="flex items-center w-full gap-0.5 opacity-80">
                 <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                 <div class="h-[1.5px] flex-1 bg-green-400"></div>
                 <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="flex flex-col gap-4 group cursor-default transition-transform duration-300 hover:translate-x-2">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Welcoming Community</h3>
                  <p class="text-sm text-secondary leading-relaxed mb-3">
                    Connect with a vibrant, supportive network of individuals who share your passion for wellness, growth, and lasting inner peace.
                  </p>
                </div>
              </div>
              <!-- Full Width Decorative Line -->
              <div class="flex items-center w-full gap-0.5 opacity-80">
                 <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                 <div class="h-[1.5px] flex-1 bg-blue-400"></div>
                 <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="w-full md:w-1/2 relative">
          <div class="relative rounded-3xl overflow-hidden h-[500px]">
            <img src="/src/assets/imgs/feature-yoga-practice.webp" alt="Yoga Practice" class="w-full h-full object-cover" />

            <!-- Play Button Overlay -->
            <!-- Play Video Card -->
            <div class="absolute bottom-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 p-5 pl-6 rounded-3xl flex justify-center items-center gap-5 shadow-2xl min-w-[240px]">
               <div class="flex flex-col">
                  <span class="text-white text-base font-medium leading-tight">View Patient</span>
                  <span class="text-white text-base font-medium leading-tight">Stories</span>
                  <!-- Waveform -->
                  <div class="mt-2.5 text-white">
                    <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12L6 16L10 8L14 18L18 6L22 14L26 10L30 15L34 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M34 12 H 90" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round"/>
                    </svg>
                  </div>
               </div>

               <!-- Play Button -->
               <button @click="isVideoOpen = true" class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-black ml-0.5">
                   <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <div v-if="isVideoOpen" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" @click="isVideoOpen = false">
        <div class="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl" @click.stop>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/watch?v=1cME3M5A5qY?autoplay=0" 
            title="Yoga Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <!-- Close Button -->
          <button @click="isVideoOpen = false" class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isVideoOpen = ref(false);
</script>
