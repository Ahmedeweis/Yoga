<!-- src/components/CategorySwiper.vue -->
<template>
  <div style="direction: rtl">
      <!-- زر الانتقال المباشر -->
    <section class="talker-body" style="background-color: #DDEAFC;">
      <div class="container" ref="chatContainer" style="margin-top: 116px;">
        <!-- 🔵 عرض كل الرسائل -->
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="{
            'message-holder': msg.sender === 'bot',
            'user-message-holder': msg.sender === 'user',
            'public-comment': msg.sender === 'public'
          }"
        >
<!-- 🟡 تعليق الجمهور -->
<div
  v-if="msg.sender === 'public'"
  class="flex items-center   gap-3 mb-[10px]  rounded-2xl bg-white/40 backdrop-blur-md shadow-sm p-4 border border-white/30 hover:bg-white/60 transition duration-200"
>
  <img
    src="../assets/imgs/user.png"
    alt="user"
    class="w-10 h-10 rounded-full object-cover border border-white/50 shadow-sm"
  />
  <div class="text-gray-800 leading-relaxed text-[15px] font-medium">
    {{ msg.text }}
  </div>
</div>
          <!-- 💙 رسالة المستخدم -->
          <div v-else-if="msg.sender === 'user'" class="user-message-holder">
            <div class="talker-img-div">
              <img
                src="../assets/imgs/profil-pic.png"
                class="talker-img icone-resize"
                style="object-fit: cover;"
              />
            </div>
            <div class="talker-sec">
              <div class="talker-info">
                <h3 class="talker-name">{{ playerName }}</h3>
                <span class="message-time">
                  {{
                    new Date().toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  }}
                </span>
              </div>
              <div class="talker-message">
                <p class="message">{{ msg.text }}</p>
              </div>
            </div>
          </div>
          <!-- 🤖 رسالة البوت -->
          <div v-else class="message-holder">
            <div class="talker-sec">
              <div class="talker-message">
                <p class="message">{{ msg.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 🔵 رسالة البوت أثناء الكتابة -->
        <div class="message-holder" v-if="typingBot">
          <div class="talker-img-div"></div>
          <div class="talker-sec">
            <div class="talker-message">
              <p class="message">{{ botMessage }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 🔵 الأزرار -->
      <div v-if="showButtons" class="center-buttons">
        <!-- زر واحد أو mode counter للـ IDs المحددة -->
        <template v-if="buttons.length === 1 || counterModeIds.includes(currentId)">
          <button class="reply-btn big" @click="publishOption" :disabled="buttons.length === 0">
            {{ buttons.length > 0 ? buttons[currentOptionIndex].text : 'لا توجد خيارات' }}
          </button>
          <!-- عرض counter و أزرار انشر/التالي لما يكون في اختيارات متعددة -->
          <template v-if="buttons.length > 1">
            <div class="option-counter">
              {{ currentOptionIndex + 1 }} / {{ buttons.length }}
            </div>
            <div style="display:flex; gap:20px; margin-top:20px; justify-content:space-between; width:100%;">
              <button class="reply-btn big" @click="publishOption" style="background:#27ae60">
                انشر
              </button>
              <button class="reply-btn big" @click="nextOption">
                التالي
              </button>
            </div>
          </template>
        </template>
        <!-- عرض كل الخيارات عمودي (تحت بعضها) -->
        <template v-else>
          <div style="display:flex; flex-direction:column; gap:15px; width:100%; align-items:center;">
            <button
              v-for="(btn, idx) in buttons"
              :key="idx"
              class="reply-btn big"
              @click="handleReply(btn)"
              style="width:100%;"
            >
              {{ btn.text }}
            </button>
          </div>
        </template>
      </div>
    </section>
  </div>
   <!-- <button class="reply-btn big" @click="goToNode(54)" style="background:#f39c12; margin-top: 10px;">
  اذهب مباشرة لـ ID 70
</button> -->
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, onUpdated } from "vue";
import { useRouter } from "vue-router";
import { conversationData } from "../data/conversation.js";
import typingSound from "../assets/sounds/typing.mp3";
import clickSound from "../assets/sounds/click.mp3";
import victorySound from "../assets/sounds/victory.mp3";
const typingAudio = new Audio(typingSound);
const clickAudio = new Audio(clickSound);
const victoryAudio = new Audio(victorySound);
const router = useRouter();
// 🟢 المتغيرات
const messages = ref([]);         // كل التاريخ هنا
const currentId = ref(1);
const buttons = ref([]);
const botMessage = ref("");
const typingBot = ref(false);
const showButtons = ref(false);
const currentOptionIndex = ref(0);
const score = ref(0);
const chatContainer = ref(null);
const playerName = localStorage.getItem("playerNameO") || "مستخدم";
const emit = defineEmits(["updateScore"]);
// 🔴 IDs اللي تحتاج زر "انشر" و"التالي" (counter mode)
const counterModeIds = [ 4, 5, 6, 7]; // اضف الـ IDs هنا
// ⚠️ سنخزن معرف الـ interval هنا عشان نوقفه لاحقًا
let autoScrollInterval = null;
// ⛔ وظيفة واحدة للكتابة
function typeBotMessage(text, callback) {
  typingBot.value = true;
  botMessage.value = "";
  let i = 0;
  typingAudio.currentTime = 0; // إعادة الصوت من البداية
  typingAudio.play(); // تشغيل صوت الكتابة
  if (window.typingInterval) clearInterval(window.typingInterval);
  window.typingInterval = setInterval(() => {
    if (i < text.length) {
      botMessage.value += text[i];
      i++;
    } else {
      clearInterval(window.typingInterval);
      typingBot.value = false;
      typingAudio.pause(); // إيقاف صوت الكتابة عند الانتهاء
      typingAudio.currentTime = 0;
      // حفظ الرسالة في history
      messages.value.push({ id: Date.now(), sender: "bot", text });
      nextTick(() => {
        if (chatContainer.value) {
          chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
      });
      if (callback) callback();
    }
  }, 45);
}
// 🟢 startAutoScroll: يحفظ الـ interval في المتغيّر global
const startAutoScroll = () => {
  // لو فيه interval شغال نمنعه أول
  if (autoScrollInterval) clearInterval(autoScrollInterval);
  // تأخيرة بسيطة للتأكد أن الـ ref موجود بعد ال mounted/render
  nextTick(() => {
    autoScrollInterval = setInterval(() => {
      if (chatContainer.value) {
        chatContainer.value.scrollTo({
          top: chatContainer.value.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 3000);
  });
};
function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}
// 🔵 تشغيل أول رسالة عند التحميل (واحد onMounted فقط)
onMounted(() => {
  startAutoScroll();
  // تشغيل أول رسالة
  const first = conversationData.find((n) => n.id === 1);
  if (first) {
    currentId.value = 1; // 🔴 تعيين الـ ID الأول
    typeBotMessage(first.botMessage, () => {
      buttons.value = first.options;
      showButtons.value = true;
      nextTick(() => {
        if (chatContainer.value) {
          chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
      });
    });
  }
});
// 🔵 عند نشر اختيار
function publishOption() {
  const selected = buttons.value[currentOptionIndex.value];
  handleReply(selected);
}
// 🔵 الرد
function handleReply(option) {
  if (!option) return;
    clickAudio.currentTime = 0;
  clickAudio.play();
  showButtons.value = false;
  messages.value.push({
    id: Date.now(),
    sender: "user",
    text: option.text,
  });
    score.value += option.score || 0;
  if (score.value < 0) score.value = 0;
  emit("updateScore", score.value);
  nextTick(() => {
    if (chatContainer.value)
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  });
  if (option.nextId === null) {
      victoryAudio.currentTime = 0;
  victoryAudio.play();
    // 🚨 إذا لا يوجد node التالي، الانتقال للنتائج مع الدرجة
router.push({ name: 'result', params: { finalScore: Math.round(score.value) }});
    return; // ننهي الدالة هنا
  }
  const nextNode = conversationData.find(n => n.id === option.nextId);
  if (nextNode) {
    currentId.value = nextNode.id; // 🔴 تحديث ID الحالي
    if (nextNode.publicComments && nextNode.publicComments.length > 0) {
      showPublicComments(nextNode.publicComments, () => {
        typeBotMessage(nextNode.botMessage, () => {
          buttons.value = nextNode.options || [];
          currentOptionIndex.value = 0;
          showButtons.value = buttons.value.length > 0;
        });
      });
    } else {
      typeBotMessage(nextNode.botMessage, () => {
        buttons.value = nextNode.options || [];
        currentOptionIndex.value = 0;
        showButtons.value = buttons.value.length > 0;
      });
    }
  }
}
// 🔵 تغيير الاختيار
function nextOption() {
  currentOptionIndex.value++;
  if (currentOptionIndex.value >= buttons.value.length) {
    currentOptionIndex.value = 0;
  }
}
// 🔵 سكروول تلقائي عند أي تحديث آخر (اختياري)
onUpdated(() => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
});
// توقف الـ interval عند غلق الكمبوننت
onBeforeUnmount(() => {
  stopAutoScroll();
});
// 🟢 عرض تعليقات الجمهور
async function showPublicComments(comments, callback) {
  for (let text of comments) {
    messages.value.push({ id: Date.now(), sender: "public", text });
    await nextTick();
    if (chatContainer.value)
      chatContainer.value.scrollTo({ top: chatContainer.value.scrollHeight, behavior: "smooth" });
    await new Promise(res => setTimeout(res, 300)); // فاصلة بين كل تعليق
  }
  if (callback) callback();
}
function goToNode(targetId) {
  const nextNode = conversationData.find(n => n.id === targetId);
  if (!nextNode) return;
  currentId.value = nextNode.id;
  showButtons.value = false;
  // عرض الرسالة مباشرة
  typeBotMessage(nextNode.botMessage, () => {
    buttons.value = nextNode.options || [];
    currentOptionIndex.value = 0;
    showButtons.value = buttons.value.length > 0;
  });
  // إذا فيه تعليقات عامة، نعرضها أولًا
  if (nextNode.publicComments && nextNode.publicComments.length > 0) {
    showPublicComments(nextNode.publicComments, () => {
      typeBotMessage(nextNode.botMessage, () => {
        buttons.value = nextNode.options || [];
        currentOptionIndex.value = 0;
        showButtons.value = buttons.value.length > 0;
      });
    });
  }
}
</script>
<style scoped>
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.icone-resize {
  width: 40px;
}
/* 0 full req*/
.delete-head {
  border-bottom: solid 3px #f5f5f5;
}
.delete-head .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.justfy-c {
  width: 100%;
  text-align: center;
}
.slider-sec {
  padding-top: 30px;
}
.m-r-20 {
  margin-right: 20px;
}
.m-t-20 {
  margin-top: 20px;
}
.talker-body {
  margin: 10px 0 0px 0;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.talker-body .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: clip;
  background-color: #DDEAFC;
  /* الرسائل تبدأ من فوق */
  /* max-height: 100vh; */
  /* تحجيم الشاشة */
  /* overflow-y: auto; */
  /* تفعيل التمرير إذا زاد المحتوى */
  padding-bottom: 20px;
}
.message-holder {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* margin: 10px 0; */
}
.talker-img-div {
  color: #2196f3;
}
.talker-img {
  border-radius: 50%;
}
.talker-info {
  display: flex;
  align-items: center;
}
.talker-name {
  margin: 0 5px;
}
.message-time {
  margin: 0 5px;
}
.talker-message {
  padding: 10px;
}
.message {
  margin: 0;
  background-color: white;
  box-shadow: 0px 0px 24px 20px rgba(19, 22, 25, 0.1);
  padding: 10px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: right;
  /* لتصحيح اتجاه النص العربي */
  direction: rtl;
  /* مهم جدًا للعربية */
}
.refixed {
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;
  width: 100%;
}
.toggle-chat {
  width: 30px;
  cursor: pointer;
}
.hiddenDiv {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 0px 24px 20px rgba(19, 22, 25, 0.1);
  background-color: white;
  position: absolute;
  top: 89px;
  left: 5px;
  padding: 5px;
  width: fit-content;
}
.hiddin-link {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  font-weight: bold;
  color: black;
}
.restyle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 5px 0;
}
.restyle .container {
  position: relative;
}
.talker-body {
  margin: 0px 0 0px 0;
}
.talker-body .container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 89px;
}
.message-holder {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
}
.talker-img-div {
  color: #2196f3;
}
.talker-img {
  border-radius: 50%;
}
.talker-sec {
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;
}
.talker-info {
  display: flex;
  align-items: center;
}
.talker-name {
  margin: 0 5px;
}
.message-time {
  margin: 0 5px;
}
.talker-message {
  padding: 10px;
}
.message {
  margin: 0;
  text-align: start;
  background-color: white;
  box-shadow: 0px 0px 24px 20px rgba(19, 22, 25, 0.1);
  padding: 10px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 1.8;
}
/* 1 chat */
/* تأثير الظهور للروبوت */
.message-holder:first-child {
  animation: slideInRight 0.8s ease-out;
}
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* مؤثر الكتابة */
.bot-message {
  white-space: pre-wrap;
  border-right: 2px solid #396fb5;
  animation: caretBlink 0.8s infinite;
}
@keyframes caretBlink {
  50% {
    border-color: transparent;
  }
}
/* أزرار الرد */
.response-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.reply-btn {
  background: #396fb5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.reply-btn:hover {
  background: #274a7d;
}
/* ------------------------- */
/* أزرار وسط الصفحة */
.center-buttons {
  /* position: fixed; */
  /* top: 70%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* gap: 30px; */
  justify-content: center;
  z-index: 1000;
  /* animation: fadeIn 0.8s ease-out; */
  width: 70%;
  margin: 15px;
}
/* 🎯 الموبايل */
@media (max-width: 768px) {
  .center-buttons {
    flex-direction: column;
    gap: 15px;
    top: 60%;
    width: 100%;
    /* نزلها شوي لتناسب الموبايل */
    /* transform: translate(-50%, -50%); */
    /* width: 90%; */
    /* علشان الأزرار تبقى جوا الشاشة */
  }
  .reply-btn.big {
    width: 100%;
    font-size: 1.2rem;
  }
}
.bottom-buttons {
  position: sticky;
  bottom: 0;
  background: white;
  padding: 20px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10;
  border-top: 2px solid #eee;
}
.button-row {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
}
/* حجم الأزرار */
.reply-btn.big {
  background: linear-gradient(135deg, #396fb5, #274a7d);
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 22px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s, background 0.3s;
  width: 100%;
}
.reply-btn.big:hover {
  transform: scale(1.1);
  background: linear-gradient(135deg, #274a7d, #396fb5);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
.response-buttons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
}
/* رسائل المستخدم */
/* رسائل المستخدم */
.user-message-holder {
  display: flex;
  flex-direction: row-reverse;
  /* الصورة على اليسار والنص على اليمين */
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0;
  align-self: flex-end;
}
.user-message-holder .talker-img-div {
  margin-right: 12px;
  /* مسافة بين الصورة والنص */
  order: 0;
  /* الصورة أول عنصر */
}
.user-message-holder .talker-img {
  width: 60px;
  /* حجم أكبر للصورة */
  height: 60px;
  border-radius: 50%;
  object-fit: contain;
  /* border: 2px solid #396fb5; */
}
.user-message-holder .talker-sec {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.user-message-holder .talker-info {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.user-message-holder .talker-name {
  margin: 0 5px;
  font-weight: 600;
}
.user-message-holder .message-time {
  margin: 0 5px;
  font-size: 12px;
  color: #555;
}
.user-message-holder .talker-message .message {
  background-color: white;
  /* اللون الأساسي زي طلبك */
  color: #222;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  /* اتجاه النص عربي */
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
}
/* أنيميشن دخول رسالة المستخدم بدون مشاكل السكروول */
.user-message-holder {
  animation: slideInLeft 0.5s ease-out forwards;
}
@keyframes slideInLeft {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.talker-img-div .talker-imgII {
  width: 250px;
  /* الحجم الافتراضي للكمبيوتر */
  height: auto;
  /* يحافظ على النسبة */
  transition: width 0.3s;
}
@media (max-width: 768px) {
  .talker-img-div .talker-imgII {
    width: 150px;
    /* أصغر على الموبايل */
  }
}
.option-counter {
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  /* margin-bottom: 10px; */
  color: #274a7d;
  opacity: 0.9;
}
.public-comment-sec {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 10px 20px;
}
.public-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3px;
}
.public-message {
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 12px;
  font-style: italic;
  font-size: 16px;
  flex: 1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.public-comment-sec {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 10px 20px;
}
.public-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 3px;
}
.public-message {
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 12px;
  font-style: italic;
  font-size: 16px;
  flex: 1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
</style>
