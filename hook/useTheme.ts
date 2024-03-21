// //设置主题
// import { ref, watch } from "vue";
// import { useDark, useToggle } from '@vueuse/core'

// function useTheme() {
//   const isDark = useDark({
//     selector: 'body',
//     attribute: 'class',
//     valueDark: 'dark',
//     valueLight: 'light',
//   })
//   const storageColorTheme = window?.localStorage.getItem("current-color-theme");
//   const toggleDark = useToggle(isDark)
//   const prefersDark = window?.matchMedia('(prefers-color-scheme: dark)');
//   const systemTheme = ref(storageColorTheme ? storageColorTheme : prefersDark?.matches ? "dark" : "light");
//   const updateTheme = (e: any) => {
//     if (e.matches) {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };

//   watch(systemTheme, (value) => {
//     window?.localStorage.setItem("current-color-theme", value);
//     // console.log("我变化了", value);
//     // value == 'light' ? toggleDark() : toggleDark();
//     // console.log("isdark", toggleDark());
//   },
//     { immediate: true }
//   )

//   const setTheme = (theme: string) => {
//     systemTheme.value = theme;
//     theme == 'light' ? toggleDark() : toggleDark();
//   }

//   // 监听 theme 变化并动态更新 <head>
//   // useHead(() => ({
//   //   link: [
//   //     {
//   //       rel: 'stylesheet',
//   //       href: systemTheme.value === 'dark' ? '/theme/dark.css' : '/theme/light.css'
//   //     }
//   //   ]
//   // }))

//   // 监听系统主题变化
//   prefersDark?.addEventListener('change', updateTheme);

//   return {
//     systemTheme,
//     setTheme
//   }

// }

// export default useTheme;

import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

function useTheme() {
  const isDark = useDark({
    // selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  });

  // useToggle 返回的可能是一个切换函数
  const toggleDark = useToggle(isDark);

  // 直接从 localStorage 获取主题，如果没有则依赖系统主题
  const storageColorTheme = isDark.value ? "dark" : "light";
  const prefersDark = window?.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storageColorTheme || (prefersDark ? "dark" : "light");
  const systemTheme = ref(initialTheme);

  // 设置主题并更新 localStorage
  const setTheme = (theme: string) => {
    console.log("setTheme", theme);
    systemTheme.value = theme;
    const isChange = theme == "dark" ? true : false;
    if (isChange != isDark.value) {
      toggleDark();
    }
    // 直接调用 toggleDark 来切换主题
    // if ((theme === 'dark') !== isDark.value) {
    // }
  };

  // 初始化时应用主题
  setTheme(initialTheme);

  // 响应系统主题变化
  window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
  });

  return { systemTheme, setTheme };
}

export default useTheme;

