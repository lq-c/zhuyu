<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
import 'element-plus/theme-chalk/dark/css-vars.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Setting></Setting>
</template>

<style>
/* import 
body {
  margin: 0;
  padding: 0;
  color: #adbac7;
}
body,
body * {
  transition: background-image 0.3s, color 0.3s;
} */
</style>
