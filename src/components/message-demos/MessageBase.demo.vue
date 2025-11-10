<template>
  <div class="demo-block">
    <h2 class="demo-title">基础提示</h2>
    <div class="btn-group">
      <button @click="showInfo">普通提示</button>
      <button @click="showSuccess">成功</button>
      <button @click="showWarning">警告</button>
      <button @click="showError">错误</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showMessage } from '../../lib/message'
const showInfo = () => showMessage('这是普通提示')
const showSuccess = () => showMessage('操作成功', 'success', 2000)
const showWarning = () => showMessage('警告警告', 'warning', 4000)
const showError = () => showMessage('错误提示', 'error', 5000)
</script>

<script lang="ts">
  export default{
    name: 'MessageBase'
  }
</script>

<style scoped>
.demo-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
