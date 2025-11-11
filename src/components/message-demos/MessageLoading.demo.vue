<template>
  <div class="demo-block">
    <h2 class="demo-title">加载提示</h2>
    <button @click="showLoading">加载中 → 自动变成功</button>
  </div>
</template>

<script setup lang="ts">
import { showMessage } from '../../lib'
const showLoading = () => {
  const close = showMessage('正在加载中...', 'loading', 0)
  setTimeout(() => {
    close()
    showMessage('加载成功', 'success', 2000)
  }, 3000)
}
</script>

<script lang="ts">
  export default{
    name: 'MessageLoading'
  }
</script>

<style scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start; /* 添加这行，让内容左对齐 */
}
button {
  padding: 6px 14px;
  font-size: 16px;
  border-radius: 6px;
  background: #444;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #555;
}
</style>
