<!-- src/components/AllQuestionsSwiper.vue -->
<template>
  <div style="direction: rtl">
    <section class="talker-body" style="background-color: #DDEAFC;">
      <div class="container" style="margin-top: 116px;">

        <!-- Loop through ALL conversation data -->
        <div v-for="item in conversationData" :key="item.id" class="conversation-block">

          <!-- 1. عرض تعليقات الجمهور (إن وجدت) -->
          <div v-if="item.publicComments && item.publicComments.length > 0" class="public-comments-section">
             <div
              v-for="(comment, cIdx) in item.publicComments"
              :key="cIdx"
              class="flex items-center gap-3 mb-[10px] rounded-2xl bg-white/40 backdrop-blur-md shadow-sm p-4 border border-white/30 hover:bg-white/60 transition duration-200"
            >
              <img
                src="../assets/imgs/user.png"
                alt="user"
                class="w-10 h-10 rounded-full object-cover border border-white/50 shadow-sm"
              />
              <div class="text-gray-800 leading-relaxed text-[15px] font-medium">
                {{ comment }}
              </div>
            </div>
          </div>

          <!-- 2. رسالة البوت -->
          <div class="message-holder">
            <div class="talker-sec">
              <div class="talker-message">
                <p class="message">
                  <span style="color: #396fb5; font-weight: bold; font-size: 0.8em; display: block; margin-bottom: 5px;">ID: {{ item.id }}</span>
                  {{ item.botMessage }}
                </p>
              </div>
            </div>
          </div>

          <!-- 3. الخيارات -->
          <div class="options-container">
             <div style="display:flex; flex-direction:column; gap:10px; width:100%; align-items:center;">
                <div
                  v-for="(opt, oIdx) in item.options"
                  :key="oIdx"
                  class="reply-btn big static-btn"
                >
                  {{ opt.text }}
                  <span v-if="opt.score !== 0" style="font-size: 0.8em; opacity: 0.8; margin-right: 10px;">(نقاط: {{ opt.score }})</span>
                  <span v-if="opt.nextId" style="font-size: 0.8em; opacity: 0.8; margin-right: 10px;">-> يذهب لـ: {{ opt.nextId }}</span>
                </div>
                <div v-if="!item.options || item.options.length === 0" class="no-options">
                  لا توجد خيارات (نهاية أو انتقال تلقائي)
                </div>
             </div>
          </div>

          <!-- فاصل بين كل سؤال -->
          <div class="divider"></div>

        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { conversationData } from "../data/conversation.js";
</script>

<style scoped>
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
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

.talker-body {
  margin: 10px 0 0px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
}

.conversation-block {
  margin-bottom: 20px;
}

/* تنسيق رسائل البوت */
.message-holder {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0;
}
.talker-sec {
  display: flex;
  flex-direction: column;
  align-items: unset;
  justify-content: center;
  width: 100%;
}
.talker-message {
  padding: 10px;
}
.message {
  margin: 0;
  background-color: white;
  box-shadow: 0px 0px 24px 20px rgba(19, 22, 25, 0.1);
  padding: 15px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: right;
  direction: rtl;
}

/* تنسيق الخيارات */
.options-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}

.reply-btn.big.static-btn {
  background: linear-gradient(135deg, #396fb5, #274a7d);
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 18px;
  border-radius: 15px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: default; /* غير قابل للنقر كزر تفاعلي */
}

.no-options {
  color: #7f8c8d;
  font-style: italic;
  padding: 10px;
}

.divider {
  height: 2px;
  background-color: #ccc;
  opacity: 0.3;
  margin: 40px 0;
  width: 100%;
}

/* تنسيق تعليقات الجمهور */
.public-comments-section {
  margin-bottom: 15px;
  padding: 0 10px;
}
</style>
