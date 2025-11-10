<template>
  <div class="demo-block">
    <h2 class="demo-title">自定义位置（角落提示）</h2>
    <div class="btn-group">
      <button @click="showTopLeft">左上角</button>
      <button @click="showTopRight">右上角</button>
      <button @click="showBottomLeft">左下角</button>
      <button @click="showBottomRight">右下角</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showMessage } from '../../lib/message'
const showTopLeft = () => showMessage('左上角提示', 'info', 3000, 'top-left')
const showTopRight = () => showMessage('右上角提示', 'info', 3000, 'top-right')
const showBottomLeft = () => showMessage('左下角提示', 'info', 3000, 'bottom-left')
const showBottomRight = () => showMessage('右下角提示', 'info', 3000, 'bottom-right')
</script>


<script lang="ts">
  export default{
    name: 'MessagePosition'
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
