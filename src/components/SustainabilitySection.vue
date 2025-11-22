<template>
  <section class="relative py-32 px-6 w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="/src/assets/imgs/sustainability-yoga.jpg" alt="Sustainability" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between text-white">
      <div class="max-w-xl">
        <span class="block text-sm font-medium tracking-wider mb-4 opacity-90">Mind Peace Balance</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
          Where Sustainability<br />
          Meets Meditation.
        </h2>

        <button class="flex items-center gap-3 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
          Get Started Today
          <span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Floating Card (Right) -->
      <div class="mt-12 md:mt-0 max-w-xs w-full">
         <div class="bg-white/15 backdrop-blur-lg border border-white/30 p-5 rounded-2xl flex items-center gap-4 shadow-xl">
            <img src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=100&q=80" alt="Instructor" class="w-14 h-14 rounded-full object-cover border-2 border-white/40" />
            <div>
               <p class="text-sm font-bold">Experience the future</p>
               <p class="text-xs opacity-80">of meditation.</p>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// SustainabilitySection Component
</script>
