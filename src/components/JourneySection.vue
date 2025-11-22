<template>
  <section class="py-20 px-6 bg-soft-bg">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-primary">
        Start Your Journey Today
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800&q=80" alt="Improved Flexibility" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <h3 class="text-xl font-bold mb-2">Improved Flexibility</h3>
            <p class="text-sm opacity-80 leading-relaxed">
              Improve your body's flexibility and balance with our expert guidance.
            </p>
          </div>
          <!-- Arrow Icon -->
          <div class="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer mt-0 md:-mt-8"> <!-- Staggered effect -->
          <img src="https://images.unsplash.com/photo-1599447421405-0c323d27bb83?auto=format&fit=crop&w=800&q=80" alt="Stress Reduction" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <h3 class="text-xl font-bold mb-2">Stress Reduction</h3>
            <p class="text-sm opacity-80 leading-relaxed">
              Find inner peace and reduce daily stress through mindfulness.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" alt="Mental Clarity" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <h3 class="text-xl font-bold mb-2">Mental Clarity</h3>
            <p class="text-sm opacity-80 leading-relaxed">
              Sharpen your focus and clear your mind with meditation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// JourneySection Component
</script>
