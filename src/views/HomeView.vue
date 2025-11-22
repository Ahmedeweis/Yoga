<template>
  <section class="bg-yellow-400 h-screen flex items-center justify-center relative font-sans overflow-hidden">
    <!-- الشعار + فقاعات الكلام -->
    <div class="text-center flex flex-col items-center">
      <img src="../assets/imgs/logo.png">
      <router-link to="/game" class="mt-10 md:mt-12 pixel border-4 border-blue-600 text-blue-600 font-bold text-xl md:text-2xl px-10 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
        العب
      </router-link>
    </div>
    <!-- فقاعات الكلام -->
    <div class="speech red absolute top-12 left-12 bg-red-600 text-white shadow-lg rotate-[-5deg] text-xl md:text-2xl">اكتب</div>
    <div class="speech red absolute top-16 right-12 bg-red-600 text-white shadow-lg rotate-[5deg] text-xl md:text-2xl">شارك</div>
    <div class="speech blue absolute top-[20%] md:top-1/3 left-[30px] md:left-1/5 bg-blue-600 text-white shadow-lg text-2xl md:text-3xl px-4">ابدع</div>
    <div class="speech white absolute top-1/4 right-1/3 bg-white text-black shadow-md text-2xl md:text-3xl">فكّر</div>
    <div class="speech white absolute bottom-1/3 left-1/3 md:left-1/3 md:right-auto bg-white text-black shadow-md text-2xl md:text-3xl left-2 md:left-1/3">احكي</div>
    <div class="speech blue absolute bottom-1/3 right-1/4 md:right-1/4 md:left-auto bg-blue-600 text-white shadow-lg text-2xl md:text-3xl right-2 md:right-1/4">قرّر</div>
    <div class="speech blue absolute bottom-24 left-1/4 bg-blue-600 text-white shadow-lg text-2xl md:text-3xl">حرّر</div>
    <div class="speech red absolute bottom-24 right-1/4 bg-red-600 text-white shadow-lg text-2xl md:text-3xl">انشر</div>
    <!-- شجرة المحادثة -->
  </section>
 <!-- <section
    v-for="(sec, index) in sections"
    :key="index"
    class="mb-10 p-4 bg-white rounded shadow"
  >
    <h2 class="font-bold text-2xl mb-4 text-blue-700">
      Section {{ index + 1 }}
    </h2>
    <ul class="tree-root">
      <TreeNode :node="sec" />
    </ul>
  </section> -->
</template>
<script setup>
import { computed } from "vue";
import { conversationData } from "../data/conversation";
import TreeNode from "../components/TreeNode.vue";
// ===============================
// 🔵 1) تعريف بدايات كل سيكشن
// ===============================
const sectionStartIds = [4, 26, 35, 38, 47, 56, 59, 76];
// ===============================
// 🟢 2) خريطة ID → Node
// ===============================
const nodeMap = {};
conversationData.forEach(n => (nodeMap[n.id] = n));
// ===============================
// 🟣 3) دالة بناء سيكشن مستقل
// ===============================
const buildSectionTree = (startId) => {
  const visited = new Set(); // مهم جدًا لكل سكشن لوحده
  const walk = (id) => {
    if (!nodeMap[id] || visited.has(id)) return null;
    visited.add(id);
    const node = {
      ...nodeMap[id],
      children: []
    };
    if (node.options) {
      node.options.forEach(opt => {
        if (opt.nextId) {
          const child = walk(opt.nextId);
          if (child) {
            node.children.push({
              text: opt.text,
              node: child
            });
          }
        }
      });
    }
    return node;
  };
  return walk(startId);
};
// ===============================
// 🟠 4) حساب كل السيكشنات
// ===============================
const sections = computed(() =>
  sectionStartIds.map(id => buildSectionTree(id))
);
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.pixel {
  font-family: "Press Start 2P", cursive;
  letter-spacing: 1px;
}
/* فقاعات الكلام */
.speech {
  display: inline-block;
  padding: 1.2rem 1.8rem;
  border-radius: 0.75rem;
  font-weight: bold;
}
.speech::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 24px;
  border-width: 12px 12px 0 12px;
  border-style: solid;
  border-color: transparent transparent transparent transparent;
}
.speech.red::after {
  border-top-color: #dc2626;
}
.speech.blue::after {
  border-top-color: #2563eb;
}
.speech.white::after {
  border-top-color: #ffffff;
}
/* شعار PRESS */
.press-bg {
  position: relative;
  display: inline-block;
  background-color: #b91c1c;
  color: #ffcc00;
  padding: 1.5rem 3rem;
  transform: skewX(-15deg);
  box-shadow: 0 6px 0 #7f1d1d;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.press-bg:hover {
  transform: skewX(-15deg) translateY(3px);
  box-shadow: 0 3px 0 #7f1d1d;
}
.press-bg span {
  display: inline-block;
  transform: skewX(15deg);
}
.press-bg span:first-child {
  position: relative;
  top: -8px;
}
.pixel {
  font-family: "Press Start 2P", cursive;
  letter-spacing: 1px;
}
/* فقاعات الكلام */
.speech {
  display: inline-block;
  padding: 1.2rem 1.8rem;
  border-radius: 0.75rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}
.speech::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 24px;
  border-width: 12px 12px 0 12px;
  border-style: solid;
  border-color: transparent transparent transparent transparent;
}
.speech.red::after {
  border-top-color: #dc2626;
}
.speech.blue::after {
  border-top-color: #2563eb;
}
.speech.white::after {
  border-top-color: #ffffff;
}
/* شعار PRESS */
.press-bg {
  position: relative;
  display: inline-block;
  background-color: #b91c1c;
  color: #ffcc00;
  padding: 1.5rem 3rem;
  transform: skewX(-15deg);
  box-shadow: 0 6px 0 #7f1d1d;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.press-bg:hover {
  transform: skewX(-15deg) translateY(3px);
  box-shadow: 0 3px 0 #7f1d1d;
}
.press-bg span {
  display: inline-block;
  transform: skewX(15deg);
}
.press-bg span:first-child {
  position: relative;
  top: -8px;
}
/* ✅ تصغير الفقاعات في الموبايل */
@media (max-width: 768px) {
  .speech {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
  }
  .speech::after {
    bottom: -8px;
    left: 16px;
    border-width: 8px 8px 0 8px;
  }
  .press-bg {
    padding: 1rem 1.8rem;
    font-size: 1rem;
  }
  .press-bg span:first-child {
    top: -5px;
  }
}
</style>
<style scoped>
.tree-root, .tree-branch {
  list-style-type: none;
  padding-left: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  direction: rtl; /* للغة العربية */
}
.tree-node {
  margin: 0.25rem 0;
}
.option {
  margin-left: 1rem;
  cursor: pointer;
  color: #1d4ed8;
}
.option:hover {
  text-decoration: underline;
}
</style>