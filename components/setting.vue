<script setup lang="ts">
import useTheme from "~/hook/useTheme";
const { systemTheme, setTheme } = useTheme();

const themeSwitch = ref(false);

function themeChange(val: boolean | string | number) {
  console.log("val", val);
}
</script>

<template>
  <div position-fixed bottom-40px right-40px w-30px h-30px border-rd-50% z-index-100>
    <el-dropdown>
      <div class="i-material-symbols:settings-outline-rounded" size="30px" color="#fff"></div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-switch v-model="themeSwitch" @change="themeChange"
              style="--el-switch-on-color: #344955; --el-switch-off-color: #78A083">
              <template #active-action>
                <div class="i-carbon:moon" />
              </template>
              <template #inactive-action>
                <div class="i-carbon:sun" />
              </template>
            </el-switch>
          </el-dropdown-item>
          <el-dropdown-item disabled>禁用</el-dropdown-item>
          <el-dropdown-item divided>底部</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>