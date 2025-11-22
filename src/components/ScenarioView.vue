<!-- src/components/ScenarioView.vue -->
<template>
  <div class="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
    <transition name="fade" mode="out-in">
      <div :key="currentScenario.id" class="max-w-2xl text-center">
        <h2 class="text-3xl font-bold mb-6">{{ currentScenario.question }}</h2>
        <div class="flex flex-col gap-4">
          <button
            v-for="(choice, idx) in currentScenario.choices"
            :key="idx"
            @click="selectChoice(choice)"
            class="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md text-lg font-semibold transition-all hover:scale-105 active:scale-95"
          >
            {{ choice.text }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
import questionsData from "@/assets/data/questions.json";
const selectedCategory = localStorage.getItem("selectedCategory") || "";
const currentScenario = ref({});
const allScenarios = ref([]);
const currentIndex = ref(0);
allScenarios.value =
  questionsData.find((c) => c.category === selectedCategory)?.scenarios || [];
currentScenario.value = allScenarios.value[currentIndex.value];
const selectChoice = (choice) => {
  localStorage.setItem("lastChoice", JSON.stringify(choice));
  window.location.href = "/comments";
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
