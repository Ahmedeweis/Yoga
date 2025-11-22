<template>
  <section class="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1593164842264-854604db8a4e?q=80&w=2070&auto=format&fit=crop" alt="Yoga Meditation" class="w-full h-full object-cover object-center" />
      <!-- Overlay Gradient for text readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 relative z-10 pt-20">
      <div class="max-w-2xl text-white">
        <span class="block text-sm font-medium tracking-wider mb-4 opacity-90">Best Fitness Studio</span>
        <h1 class="font-display text-5xl md:text-7xl font-semibold leading-tight mb-8">
          Meditations change<br />
          your lifestyle
        </h1>

        <button class="group flex items-center gap-3 bg-white text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg shadow-white/10">
          Get In Touch
          <span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <!-- Stats/Tags -->
        <div class="mt-20 flex items-center gap-6 text-xs font-medium opacity-80">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            <span>Healthy Life</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            <span>Mind Peace</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            <span>Body Flow</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            <span>Be Calm</span>
          </div>
        </div>
      </div>

      <!-- Floating Card (Bottom Right) -->
      <div class="absolute bottom-20 right-6 md:right-20 max-w-xs w-full">
        <div class="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl text-white shadow-glass">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white/20"></div>
              <div class="w-8 h-8 rounded-full bg-gray-400 border-2 border-white/20"></div>
              <div class="w-8 h-8 rounded-full bg-gray-500 border-2 border-white/20"></div>
            </div>
            <div class="text-xs">
              <span class="block font-bold">150+</span>
              <span class="opacity-70">Members</span>
            </div>
          </div>
          <p class="text-xs opacity-80 mb-3 leading-relaxed">
            "The atmosphere is very calm for doing yoga"
          </p>
          <div class="flex items-end justify-between">
            <div class="text-4xl font-display font-bold">4.9 <span class="text-lg text-yellow-400">★</span></div>
            <div class="text-xs opacity-60">Rating</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// HeroSection Component
</script>
