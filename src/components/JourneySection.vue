<template>
  <section class="py-20 px-6 bg-soft-bg">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-primary">
        Start Your Journey Today
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-gray-100
            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]
            hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]
            hover:-translate-y-2
            transition-all duration-500 ease-out" style="box-shadow:0px 20px 20px 10px rgba(0, 0, 0, 0.25)">

  <!-- Image -->
  <img
    src="/src/assets/imgs/journey-flexibility.jpg"
    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <!-- Gradient overlay -->
  <div
    class="absolute bottom-0 left-0 w-full h-40
           bg-gradient-to-t from-black/70 via-black/40 to-transparent"
  ></div>

  <!-- Arrow Icon -->
  <div class="absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  </div>

  <!-- Text -->
  <div class="absolute bottom-0 left-0 w-full px-8 py-6 text-white">
    <h3 class="text-xl font-bold mb-2 drop-shadow-lg">
      Improved Flexibility
    </h3>
    <p class="text-sm opacity-90 leading-relaxed drop-shadow-md">
      Improve your body's flexibility and balance with our expert guidance.
    </p>
  </div>
</div>



        <!-- Card 2 -->
        <div style="box-shadow:0px 20px 20px 10px rgba(0, 0, 0, 0.25)" class="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-gray-100 shadow-xl hover:shadow-2xl hover:transition-all duration-500 ease-out"> <!-- Staggered effect box -->
          <img src="../assets/imgs/juorny2.jpg" alt="Stress Reduction" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          <!-- Arrow Icon -->
          <div class="absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <h3 class="text-xl font-bold mb-2">Stress Reduction</h3>
            <p class="text-sm opacity-80 leading-relaxed">
              Find inner peace and reduce daily stress through mindfulness.
            </p>
          </div>
        </div>
<!-- Card 3 -->
<div style="box-shadow:0px 20px 20px 10px rgba(0, 0, 0, 0.25)" class="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-gray-100 shadow-xl hover:shadow-2xl hover:transition-all duration-500 ease-out">
  <!-- Image -->
  <img
    src="../assets/imgs/juorny1.jpg"
    alt="Mental Clarity"
    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <!-- Gradient overlay -->
  <div
    class="absolute bottom-0 left-0 w-full h-40
           bg-gradient-to-t from-black/70 via-black/40 to-transparent"
  ></div>

  <!-- Arrow Icon -->
  <div class="absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  </div>

  <!-- Text -->
  <div class="absolute bottom-0 left-0 w-full px-8 py-6 text-white">
    <h3 class="text-xl font-bold mb-2 drop-shadow-lg">
      Mental Clarity
    </h3>
    <p class="text-sm opacity-90 leading-relaxed drop-shadow-md">
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
