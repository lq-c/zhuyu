<script setup lang="ts">
import useTheme from "~/hook/useTheme";
const { systemTheme, setTheme } = useTheme();
</script>

<template>
  <div position-fixed bottom-40px right-40px w-30px h-30px border-rd-50% z-index-100>
    <el-dropdown>
      <div class="i-material-symbols:settings-outline-rounded" size="30px" svg-color></div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <div v-if="systemTheme == 'dark'" i-carbon:moon color="#000" size="24px" @click="setTheme('light')"></div>
            <div v-else i-carbon:sun color="#000" size="24px" @click="setTheme('dark')" />
          </el-dropdown-item>
          <el-dropdown-item divided>底部</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>