<!-- src/components/CommentsSection.vue -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col justify-center items-center text-white p-8"
  >
    <div class="text-center max-w-2xl">
      <h2 class="text-3xl font-bold mb-4">ردود الفعل 💬</h2>
      <div class="space-y-4 mb-8">
        <p
          v-for="(comment, index) in comments"
          :key="index"
          class="bg-slate-800 px-6 py-3 rounded-xl shadow-sm hover:bg-slate-700 transition-all"
        >
          {{ comment }}
        </p>
      </div>
      <button
        @click="nextScenario"
        class="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        التالي ➡️
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import questionsData from "@/assets/data/questions.json";
const selectedCategory = localStorage.getItem("selectedCategory");
const lastChoice = JSON.parse(localStorage.getItem("lastChoice"));
const allScenarios =
  questionsData.find((c) => c.category === selectedCategory)?.scenarios || [];
const currentIndex = parseInt(localStorage.getItem("currentIndex") || "0");
const comments = ref(lastChoice?.comments || []);
const nextScenario = () => {
  const next = currentIndex + 1;
  if (next < allScenarios.length) {
    localStorage.setItem("currentIndex", next);
    window.location.href = "/game"; // يرجع يعرض السؤال التالي
  } else {
    window.location.href = "/result";
  }
};
</script>
