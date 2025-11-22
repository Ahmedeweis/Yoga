<!-- src/components/ResultScreen.vue -->
<template>
<section class="bg-[#0040D0]  flex justify-center items-center min-h-screen">
    <div class="bg-[#0040D0] p-8 rounded-lg  w-full max-w-lg text-center">
        <!-- Circle and number -->
        <div class="relative mb-6">
            <div
                class="w-24 h-24 rounded-full border-8 border-white border-t-green-500 flex justify-center items-center mx-auto">
                <span class="text-3xl font-semibold text-green-500">60</span>
            </div>
        </div>
        <!-- Text below the circle -->
        <p class="text-2xl font-bold text-white mb-4">أنت صحفي جيد!</p>
        <p class="text-lg text-white mb-6">لكن هناك مجال لتلميع مهاراتك.</p>
        <!-- Button -->
        <a href="#"
            class="text-white text-lg font-semibold py-2 px-4 rounded-lg border-2 border-white hover:bg-white hover:text-black transition">
            شارك
        </a>
    </div>
</section>
</template>
<script setup>
import { ref } from "vue";
const score = ref(parseInt(localStorage.getItem("score") || "0"));
const correct = ref(parseInt(localStorage.getItem("correct") || "0"));
const restart = () => {
  localStorage.clear();
  window.location.href = "/";
};
</script>
