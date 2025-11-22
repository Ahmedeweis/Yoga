<!-- src/components/MainMenu.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
    <h2 class="text-4xl font-bold mb-10">القائمة الرئيسية</h2>
    <div class="flex flex-col gap-5 w-64">
      <button
        @click="$router.push('/game')"
        class="py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-xl font-semibold transition-all shadow-lg hover:scale-105"
      >
        ▶ ابدأ اللعبة
      </button>
      <button
        @click="$router.push('/about')"
        class="py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-xl font-semibold transition-all shadow-md hover:scale-105"
      >
        ℹ️ عن اللعبة
      </button>
      <button
        class="py-3 rounded-xl bg-red-700 hover:bg-red-600 text-xl font-semibold transition-all hover:scale-105"
      >
        🚪 خروج
      </button>
    </div>
  </div>
</template>
<script setup>
</script>
