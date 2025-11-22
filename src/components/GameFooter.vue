<!-- src/components/GameFooter.vue -->
<template>
  <div class="action-footer">
    <button class="footer-btn" @click="restartGame">إعادة اللعب</button>
    <button class="footer-btn" @click="showHelp">مساعدة</button>
    <button class="footer-btn" @click="toggleSound">
      {{ isMuted ? "كتم الصوت" : "الصوت" }}
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isMuted = ref(false)
function restartGame() {
  console.log("إعادة اللعبة!")
}
function showHelp() {
  console.log("عرض المساعدة!")
}
function toggleSound() {
  isMuted.value = !isMuted.value
  console.log(isMuted.value ? "الصوت كتم" : "الصوت مفعل")
}
</script>
<style scoped>
.action-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a; /* داكن أنيق */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px 0;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
  border-top: 2px solid #396fb5; /* لمسة جمالية */
}
.footer-btn {
  background: #396fb5;
  color: #fff;
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}
.footer-btn:hover {
  transform: scale(1.05);
  background: #274a7d;
}
@media (max-width: 768px) {
  .action-footer {
    flex-direction: column;
    gap: 12px;
    padding: 15px 0;
  }
  .footer-btn {
    width: 80%;
    font-size: 16px;
  }
}
</style>
