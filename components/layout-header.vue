<script setup lang="ts">
import { ref } from "vue";
import useTheme from "~/hook/useTheme";
const { systemTheme, setTheme } = useTheme();

const themeSwitch = ref(false);

function themeChange(val: boolean | string | number) {
  console.log("val", val);
}

</script>

<template>
  <div class="flex flex-items-center justify-center h-60px">
    <el-switch v-model="themeSwitch" @change="themeChange" />
  </div>
</template>