<!-- src/components/LoadingScreen.vue -->
<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden text-white"
  >
    <!-- خلفية متحركة بسيطة -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] animate-pulse"></div>
    <!-- اللوجو أو العنوان -->
    <div class="z-10 text-center">
      <h1 class="text-5xl md:text-6xl font-bold tracking-widest drop-shadow-lg mb-6">
        لعبة القرارات
      </h1>
      <p class="text-lg text-gray-300 mb-10">تحدى عقلك واتخذ القرار الصحيح 🎯</p>
      <!-- زر Play -->
      <button
        @click="$emit('start')"
        class="text-2xl px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg animate-bounce"
      >
        ▶ اضغط لبدء اللعبة
      </button>
    </div>
  </div>
</template>
<script setup>
</script>
