<template>
  <section class="py-20 px-6 bg-soft-bg">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <h2 class="text-3xl md:text-4xl font-display font-bold text-primary">
          Meet Expert Instructor
        </h2>
        <p class="text-sm text-secondary max-w-xs mt-4 md:mt-0">
          Our expert instructors will guide you through your journey to better health.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Instructor 1 -->
        <div class="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" alt="Instructor 1" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 class="text-xl font-bold">Jacob Jones</h3>
            <p class="text-sm opacity-80">Yoga Expert</p>
          </div>
        </div>

        <!-- Instructor 2 -->
        <div class="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" alt="Instructor 2" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 class="text-xl font-bold">Esther Howard</h3>
            <p class="text-sm opacity-80">Meditation Guide</p>
          </div>
        </div>

        <!-- Instructor 3 -->
        <div class="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Instructor 3" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white w-full">
            <h3 class="text-xl font-bold">Jenny Wilson</h3>
            <p class="text-sm opacity-80">Pilates Trainer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// InstructorsSection Component
</script>
