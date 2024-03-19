<script setup lang="ts">
// import { ref } from "vue";
import useTheme from "~/hook/useTheme";
// import { Icon } from '@iconify/vue';
const { systemTheme, setTheme } = useTheme();

const themeSwitch = ref(false);

function themeChange(val: boolean | string | number) {
  console.log("val", val);
}

</script>

<template>
  <div bg="[rgba(243,242,241)]" w-400px border-rd-6px flex flex-items-center flex-justify-between h-40px px-24px
    shadow-sm shadow="#fff" border="1px solid #000">
    <div>太抽象了</div>
    <div class="font-size-22px">zhuyu</div>
    <el-switch v-model="themeSwitch" @change="themeChange"
      style="--el-switch-on-color: #344955; --el-switch-off-color: #78A083">
      <template #active-action>
        <div class="i-carbon:moon" />
      </template>
      <template #inactive-action>
        <div class="i-carbon:sun" />
      </template>
    </el-switch>
  </div>
</template>