<script setup lang="ts">
import { ref } from "vue";
import useTheme from "~/hook/useTheme";
import { Icon } from '@iconify/vue';
const { systemTheme, setTheme } = useTheme();

const themeSwitch = ref(false);

function themeChange(val: boolean | string | number) {
  console.log("val", val);
}

</script>

<template>
  <div class="flex flex-items-center flex-justify-between h-60px bg-#527853 px-24px">
    <div>今日大吉</div>
    <div class="font-size-22px">zhuyu</div>
    <el-switch v-model="themeSwitch" @change="themeChange"
      style="--el-switch-on-color: #344955; --el-switch-off-color: #78A083">
      <template #active-action>
        <Icon icon="material-symbols:dark-mode" />
      </template>
      <template #inactive-action>
        <Icon icon="material-symbols:light-mode" />
      </template>
    </el-switch>
  </div>
</template>