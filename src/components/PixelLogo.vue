<template>
  <section class="p-6 space-y-12">
    <!-- Loop sections -->
    <div
      v-for="sec in sections"
      :key="sec.name"
      class="border p-4 rounded-xl bg-gray-100"
    >
      <h2 class="text-2xl font-bold mb-4">{{ sec.name }}</h2>
      <!-- لو السيكشن فاضي -->
      <p
        v-if="sec.nodes.length === 0"
        class="text-red-500 italic"
      >
        لا توجد عناصر داخل هذا السيكشن.
      </p>
      <!-- Grid for nodes -->
      <div
        v-else
        class="grid grid-cols-1 gap-4"
      >
        <div
          v-for="node in sec.nodes"
          :key="node.id"
          class="p-4 bg-white shadow rounded-lg border"
        >
          <h3 class="font-bold text-lg mb-2">ID: {{ node.id }}</h3>
          <!-- رسالة البوت -->
          <p class="text-gray-700 mb-3 whitespace-pre-line">
            {{ node.botMessage || "— بدون رسالة —" }}
          </p>
          <!-- الخيارات -->
          <ul
            v-if="node.options && node.options.length"
            class="text-sm text-gray-700"
          >
            <li
              v-for="opt in node.options"
              :key="opt.text"
              class="border-b py-1"
            >
              • {{ opt.text }}
              <span class="text-gray-500">(→ {{ opt.nextId }})</span>
            </li>
          </ul>
          <p
            v-else
            class="text-gray-400 italic text-sm"
          >
            لا يوجد اختيارات.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { conversationData } from "../data/conversation";
// تقسيم السكاشن بالرنجات المطلوبة
const sectionRanges = [
  { name: "Section A", from: 5,  to: 7  },
  { name: "Section B", from: 8,  to: 16 },
  { name: "Section C", from: 17, to: 26 },
  { name: "Section D", from: 27, to: 35 },
  { name: "Section E", from: 36, to: 47 },
  { name: "Section F", from: 48, to: 56 },
  { name: "Section G", from: 57, to: 76 },
];
// إخراج سكاشن منظمة
const sections = computed(() => {
  return sectionRanges.map(sec => ({
    name: sec.name,
    nodes: conversationData.filter(n => n.id >= sec.from && n.id <= sec.to)
  }));
});
</script>
<style scoped>
/* ممكن تضيف تنسيق إضافي لو عاوز */
</style>
