<template>
  <section class="result-wrap">
    <div class="result-card" ref="resultCard">
      <div class="circle-wrap">
        <svg viewBox="0 0 120 120" class="result-svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" :stop-color="gradFrom" />
              <stop offset="100%" :stop-color="gradTo" />
            </linearGradient>
          </defs>
          <!-- background circle -->
          <circle class="bg-ring" cx="60" cy="60" r="52" stroke-width="12" />
          <!-- progress ring -->
          <circle
            class="progress-ring"
            cx="60"
            cy="60"
            r="52"
            stroke-width="12"
            :stroke="gradientStroke"
            :style="progressStyle"
            stroke-linecap="round"
            transform="rotate(-90 60 60)"
          />
          <!-- center number -->
          <text x="60" y="66" text-anchor="middle" class="score-text">
            {{ Math.round(score) }}%
          </text>
        </svg>
      </div>
      <h2 class="result-title" style="margin-top: 20px;">{{ title }}</h2>
      <p class="result-desc">{{ resultText }}</p>
      <div class="actions">
        <button class="btn" @click="shareResult">شارك </button>
        <button class="btn ghost" @click="retryGame">أعد المحاولة</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
// لو مستخدم html2canvas
import html2canvas from "html2canvas";
const route = useRoute();
const router = useRouter();
const resultCard = ref(null);
// score مباشرة من param
const score = ref(Number(route.params.finalScore || 0));
const title = "نتيجتك";
// ألوان الدائرة
const gradFrom = computed(() => {
  if (score.value < 40) return "#ff5252";
  if (score.value < 75) return "#ffd54f";
  return "#66bb6a";
});
const gradTo = computed(() => {
  if (score.value < 40) return "#ff8a80";
  if (score.value < 75) return "#ffecb3";
  return "#a5d6a7";
});
const gradientStroke = computed(() => `url(#grad)`);
// progress circle
const r = 52;
const circumference = 2 * Math.PI * r;
const progressStyle = computed(() => {
  const pct = Math.max(0, Math.min(100, score.value));
  const filled = (pct / 100) * circumference;
  const empty = circumference - filled;
  return {
    strokeDasharray: `${filled} ${empty}`,
    transition: "stroke-dasharray 700ms cubic-bezier(.2,.9,.2,1)",
  };
});
const resultText = computed(() => {
  const s = Math.round(score.value);
  if (s >= 90 && s <= 100) {
    return "أنت صحفى رفيع الموهبة، تسير أفكارك بثبات كأنها تدرك طريقها قبل أن ترسمه بقلمك";
  }
  if (s >= 75 && s <= 89) {
    return "تمتلك مهارات واضحة، ولا ينقصك سوى قدر يسير من الصقل";
  }
  if (s >= 60 && s <= 74) {
    return "لديك أساس قوي، وماتحتاجه هو دفعة إضافية لتبلغ مستوى أعلى";
  }
  if (s >= 45 && s <= 59) {
    return "ادائك مقبول، المزيد من التدريب سيجعلك أفضل" ;
  }
  if (s >= 30 && s <= 44) {
    return "مهارات محدودة، تحتاج لتوجيه كبير وتحسين شامل.";
  }
  // أقل من 30
  return "الأداء دون المستوى المطلوب، لا تمتلك مهارات كافية.";
});
// 🔄 إعادة اللعب
function retryGame() {
  router.push({ path: "/" });
}
// 📸 مشاركة / حفظ نتيجة كسكرين شوت
async function shareResult() {
  if (!resultCard.value) return;
  try {
    const canvas = await html2canvas(resultCard.value);
    const image = canvas.toDataURL("image/png");
    // حفظ الصورة
    const link = document.createElement("a");
    link.href = image;
    link.download = `my_score_${Math.round(score.value)}.png`;
    link.click();
    alert("تم حفظ الصورة بنجاح!");
  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء حفظ الصورة.");
  }
}
</script>
<style scoped>
.result-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  background-color: #0040D0;
}
.result-card {
  background: linear-gradient(180deg, #ffffff, #f7fbff);
  padding: 28px;
  border-radius: 16px;
  text-align: center;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 12px 40px rgba(14, 30, 60, 0.08);
}
/* .circle-wrap { width: 180px; margin: 0 auto 12px; } */
.result-svg { width: 180px; height: 180px; display: block; margin: 0 auto; }
/* rings */
.bg-ring {
  fill: none;
  stroke: #f0f2f7;
}
.progress-ring {
  fill: none;
  /* stroke-linecap is set in element */
}
/* center text */
.score-text {
  font-size: 27px;
  font-weight: 800;
  fill: #0b1220;
}
.score-subtext {
  font-size: 12px;
  fill: #5b6b7a;
}
/* texts */
.result-title { font-size: 20px; margin: 8px 0 4px; color: #04204b; }
.result-desc { font-size: 16px; color: black;font-weight: bold; margin-bottom: 16px; margin-top: 10px; }
/* buttons */
.actions { display:flex; gap: 12px; justify-content:center; }
.btn {
  padding: 10px 18px;
  border-radius: 10px;
  background: #0066ff;
  color: #fff;
  border: none;
  cursor: pointer;
}
.btn.ghost {
  background: transparent;
  border: 1px solid #dbe9ff;
  color: #0b1220;
}
.result-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.result-card {
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
.circle-wrap {
  width: 150px;
  /* height: 150px; */
  margin: 0 auto 20px;
  position: relative;
}
.score-text {
  font-size: 24px;
  font-weight: bold;
  fill: #333;
}
.bg-ring {
  fill: none;
  stroke: #eee;
}
.progress-ring {
  fill: none;
}
.actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>
