<!-- src/views/AllQuestionsView.vue -->
<template>
  <div class="catch-all"  >
    <!-- المودال (يظهر دائماً عند فتح الصفحة) -->
    <div v-if="false" class="modal-overlay">
      <div class="modal-content" >
        <div class="modal-title"> عرض كل الأسئلة </div>
        <p class="modal-text">
          من فضلك أدخل اسمك للبدء في العرض.
        </p>
        <input
          v-model="playerNameO"
          dir="rtl"
          type="text"
          placeholder="اكتب اسمك هنا..."
          class="modal-input"
          @keyup.enter="submitName"
        />
        <div style="display:flex;gap:10px;justify-content:center;margin-top:18px;">
          <button
            :disabled="!playerNameO.trim()"
            @click="submitName"
            class="modal-btn"
          >
            ابدأ العرض
          </button>
        </div>
      </div>
    </div>
    <GameHeader :score="0" :progress="0" />
    <AllQuestionsSwiper

    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import AllQuestionsSwiper from "../components/AllQuestionsSwiper.vue";
import GameHeader from "../components/GameHeader.vue";

const showModal = ref(true);
const playerNameO = ref("");

function saveUserNameToDB(name) {
  localStorage.setItem("playerNameO", name);
}

function submitName() {
  const name = playerNameO.value.trim();
  if (!name) return;
  saveUserNameToDB(name);
  showModal.value = false;
}
</script>
<style scoped>
.catch-all {
  background-color:#DDEAFC;
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
}
/* 🔹 خلفية المودال */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(253, 199, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(6px);
  animation: fadeIn 0.35s ease;
}
/* 🔹 محتوى المودال */
.modal-content {
  background: white;
  color: #222;
  padding: 28px 24px;
  border-radius: 14px;
  text-align: center;
  width: 92%;
  max-width: 420px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  animation: slideIn 0.45s cubic-bezier(.2,.9,.3,1);
}
/* نصوص */
.modal-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #396fb5;
}
.modal-text {
  font-size: 15px;
  margin-bottom: 14px;
  color: #444;
}
/* الادخال */
.modal-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 2px solid #dfe9f6;
  outline: none;
  font-size: 16px;
  transition: 0.18s;
}
.modal-input:focus {
  border-color: #396fb5;
  box-shadow: 0 6px 20px rgba(57,111,181,0.08);
}
/* الأزرار */
.modal-btn {
  margin-top: 8px;
  background: linear-gradient(135deg, #396fb5, #274a7d);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.15s;
}
.modal-btn:hover { transform: translateY(-3px); }
.modal-btn:disabled { opacity: 0.5; cursor: not-allowed; }
/* animations */
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes slideIn {
  from { transform: translateY(-18px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}
</style>
