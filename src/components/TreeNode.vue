<template>
  <li class="tree-node">
    <div class="bot-message">{{ node.botMessage }}</div>
    <ul v-if="node.children && node.children.length" class="tree-branch">
      <li v-for="child in node.children" :key="child.node.id" class="mb-2">
        <div class="option">{{ child.text }}</div>
        <ul>
          <TreeNode :node="child.node" />
        </ul>
      </li>
    </ul>
  </li>
</template>
<script setup>
defineProps({
  node: Object
});
</script>
<style scoped>
.tree-root, .tree-branch {
  list-style-type: none;
  padding-left: 1rem;
  border-left: 2px solid #d1d5db;
  margin-left: 0.5rem;
}
.tree-node {
  margin: 0.5rem 0;
}
.bot-message {
  background-color: #fef3c7;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.option {
  color: #2563eb;
  cursor: pointer;
  margin: 0.3rem 0;
}
.option:hover {
  text-decoration: underline;
}
</style>
