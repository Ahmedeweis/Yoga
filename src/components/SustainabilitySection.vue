<template>
  <section class="relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="/src/assets/imgs/sustainability-yoga.webp" alt="Sustainability" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/20"></div> <!-- Lighter overlay as per image -->
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between py-20">

      <!-- Top Left Text -->
      <div class="max-w-xl text-white mt-10">
        <span class="block text-sm md:text-base font-medium tracking-wide mb-4 opacity-90">More Power Efficiency</span>
        <h2 class="font-display text-4xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-lg">
          Where Sustainability<br />
          Meets Meditation.
        </h2>

        <button class="flex items-center gap-3 bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg group">
          Start Doing Today
          <span class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Bottom Cards -->
      <div class="flex flex-col lg:flex-row items-end justify-between gap-6 w-full">

        <!-- Left Card: Trust/Community -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-3xl w-full md:w-[300px] max-w-sm text-white shadow-2xl shrink-0">
           <div class="flex items-center justify-between mb-4">
              <div class="flex -space-x-3">
                 <img src="/src/assets/imgs/member1.webp" class="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                 <img src="/src/assets/imgs/member2.webp" class="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                 <img src="/src/assets/imgs/member3.webp" class="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
              </div>
              <div class="text-xs font-semibold flex items-center gap-2">
                 <span class="bg-white/20 px-2 py-1 rounded-lg">Plus 26k</span>
                 <span class="underline decoration-white/50">Trusted!</span>
              </div>
           </div>
           <p class="text-sm opacity-80 leading-relaxed">
             The perfect organizer and developer for dream agency.
           </p>
        </div>

        <!-- Right Side: Slider Area -->
        <div class="flex items-center gap-5 w-full lg:w-auto relative">
            <!-- Active Feature Card -->
            <div class="bg-white/10 backdrop-blur-xl border border-white/10 p-4 pr-8 rounded-3xl w-full lg:w-[400px] shrink-0 text-white shadow-2xl flex items-center gap-5 z-20">
            <!-- Thumbnail -->
            <div class="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden group cursor-pointer">
                <img src="/src/assets/imgs/journey-flexibility.webp" class="w-full h-full object-cover" />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/10"></div>
                <!-- Play Button: Top Left -->
                <div class="absolute top-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-black ml-0.5">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <!-- Text -->
            <div>
                <h3 class="font-bold text-lg mb-1 leading-tight">Experience the future of meditation</h3>
                <p class="text-xs opacity-70 leading-relaxed">
                    Renew Home is working with leading brands making...
                </p>
            </div>
            </div>

            <!-- Peeking Slider Card (Next Item) -->
            <!-- Positioned to the right, partially visible -->
            <div class="absolute left-full ml-4 bg-white/10 backdrop-blur-sm border border-white/5 p-4 rounded-3xl w-[300px] h-[120px] text-white opacity-60 flex items-center gap-4 overflow-hidden z-10">
                <div class="w-20 h-20 bg-gray-500/30 rounded-xl shrink-0 animate-pulse"></div>
                <div class="space-y-2 w-full">
                    <div class="h-4 bg-white/20 rounded w-3/4"></div>
                    <div class="h-3 bg-white/10 rounded w-1/2"></div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// SustainabilitySection Component
</script>
