<!-- src/views/GameView.vue -->
<template>
  <div class="catch-all"  >
    <!-- المودال (يظهر دائماً عند فتح الصفحة) -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content" >
        <div class="modal-title"> أهلاً بك </div>
        <p class="modal-text">
          من فضلك أدخل اسمك للبدء في اللعبة.
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
            ابدأ اللعبة
          </button>
        </div>
      </div>
    </div>
    <GameHeader :score="score" :progress="progress" />
<CategorySwiper
  v-if="!showModal"
  @updateScore="updateScore"
/>
  </div>
</template>
<script setup>
import { ref } from "vue";
const maxScore = 100
const progress = ref(0)
function updateScore(newScore) {
  score.value = newScore
  progress.value = Math.min(100, Math.floor((score.value / maxScore) * 100))
}
const score = ref(0)
const likes = ref(0) // لو عايز تحسب الإعجابات بعدين
import CategorySwiper from "../components/CategorySwiper.vue";
import GameHeader from "../components/GameHeader.vue";
import GameFooter from "../components/GameFooter.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const selectedCat =
  route.query.category || localStorage.getItem("selectedCategory");
// المودال ظاهِر دائماً عند الدخول (showModal = true)
const showModal = ref(true);
const playerNameO = ref("");
const remember = ref(false);
// اسم محفوظ لعرضه كاقتراح (لكن لن يمنع ظهور المودال)
const savedName = localStorage.getItem("playerNameO") || "";
function saveUserNameToDB(name) {
  localStorage.setItem("playerNameO", name);
}
/**
 * حفظ الاسم واخفاء المودال
 */
function submitName() {
  const name = playerNameO.value.trim();
  if (!name) return;
  saveUserNameToDB(name);
  showModal.value = false;
}
/**
 * زر يستخدم الاسم المحفوظ (لو موجود) بدون ما تكتبه يدوياً.
 * لو مفيش اسم محفوظ الزر هيبقى معطل تلقائياً عبر حالة savedName.
 */
function useSavedName() {
  if (!savedName) return;
  // لو المستخدم ضغط استخدم الاسم المحفوظ نعتبره تذكر وحفظه في localStorage
  playerNameO.value = savedName;
  remember.value = true;
  submitName();
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
/* تذكرة */
.remember-row {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
  color: #555;
  font-size: 14px;
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
.modal-btn.ghost {
  background: transparent;
  color: #396fb5;
  border: 1px solid #396fb5;
}
/* hint */
.hint { margin-top: 12px; color: #666; font-size: 13px; }
/* animations */
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes slideIn {
  from { transform: translateY(-18px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}
</style>
