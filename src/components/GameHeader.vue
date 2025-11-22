<template>
  <header class="game-header">
    <!-- شريط التقدم -->
    <div class="header-section progress-section">
      <div class="progress-label">المستوى</div>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progress + '%', backgroundColor: progressColor }"
        >
          <span class="progress-text">{{ score }} %</span>
        </div>
      </div>
    </div>
    <!-- الصورة -->
    <div class="header-section avatar-section">
      <div class="avatar-wrapper">
        <img src="../assets/imgs/profil-pic.png" alt="الصحفي" class="avatar" />
        <span class="verified-badge">✔</span>
      </div>
    </div>
    <!-- الإعجابات -->
    <div class="header-section likes-box">
      <div class="likes-number">{{ likes }}</div>
      <div class="likes-label">الإعجابات</div>
    </div>
  </header>
</template>
<script setup>
import { ref, computed, watch } from "vue"
const props = defineProps({
  score: { type: Number, default: 0 },
  progress: { type: Number, default: 0 },
})
const likes = ref(0)
// لون شريط التقدم
const progressColor = computed(() => {
  if (props.progress < 50) return "#e74c3c"
  if (props.progress < 100) return "#f1c40f"
  return "#2ecc71"
})
// كل مرة السكور يزيد، نزود likes عشوائي بين 5 و15
// وكل مرة السكور يقل، ننقص likes عشوائي بين 5 و10
watch(
  () => props.score,
  (newScore, oldScore) => {
    if (newScore > oldScore) {
      likes.value += Math.floor(Math.random() * 200) + 100 // 100-299
    } else if (newScore < oldScore) {
      likes.value -= Math.floor(Math.random() * 100) + 50 // 50-149
      if (likes.value < 0) likes.value = 0
    }
  }
)
</script>
<style scoped>
.game-header {
  position: fixed;
  width: 100%;
  z-index: 9999999;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  background: #FDC700;
  border-radius: 16px;
  padding: 16px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  direction: rtl;
  font-family: "Cairo", sans-serif;
  color: #333;
}
/* كل تلت */
.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* الإعجابات */
.likes-number {
  font-size: 28px;
  font-weight: 700;
  color: black;
  margin-bottom: 4px;
}
.likes-label {
  font-size: 19px;
  color: #666;
  font-weight: bold;
}
/* الصورة */
.avatar-wrapper {
  position: relative;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #396fb5;
  object-fit: cover;
}
.verified-badge {
  position: absolute;
  bottom: 4px;
  right: 6px;
  background: #1da1f2;
  color: white;
  font-size: 14px;
  border-radius: 50%;
  padding: 2px 5px;
  line-height: 1;
}
/* التقدم */
/* التقدم */
.progress-section {
  width: 100%;
  max-width: 300px; /* طول ثابت للشريط */
}
.progress-label {
  font-size: 18px;
  color: #555;
  margin-bottom: 6px;
  text-align: center;
  font-weight: bold;
}
.progress-bar {
  background: #eee; /* الخلفية ثابتة */
  border-radius: 20px;
  height: 22px;
  overflow: hidden;
  position: relative;
  width: 100%; /* الشريط كله عريض */
}
.progress-fill {
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.4s ease, background-color 0.4s ease;
  width: 0%; /* القيمة تبدأ من 0 */
}
.progress-text {
  color: black;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  right: 6px;
}
/* تحديد اللون حسب النسبة */
.progress-fill[data-progress] {
  background-color: #2ecc71; /* أخضر افتراضي */
}
/* 🎯 ريسبونسيف للموبايل */
@media (max-width: 768px) {
  .game-header {
    display: grid;
    gap: 18px;
    padding: 20px;
  }
  .avatar {
    width: 70px;
    height: 70px;
  }
  .progress-section {
    width: 100%;
    max-width: 280px;
  }
}
</style>