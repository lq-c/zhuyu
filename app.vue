<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Setting></Setting>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  color: #adbac7;
}
</style>
