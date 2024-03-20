//设置主题
import { ref, watch } from "vue";

import { useDark, useToggle } from '@vueuse/core'



function useTheme() {
  const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggleDark = useToggle(isDark)
  const prefersDark = window?.matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = ref(prefersDark?.matches ? "dark" : "light");
  const updateTheme = (e: any) => {
    if (e.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  watch(systemTheme, (value) => {
    console.log("我变化了", value);
    value == 'light' ? toggleDark() : toggleDark();
    // console.log("isdark", toggleDark());
  },
    { immediate: true }
  )

  const setTheme = (theme: string) => {
    systemTheme.value = theme;
  }

  // 监听系统主题变化
  prefersDark?.addEventListener('change', updateTheme);

  return {
    systemTheme,
    setTheme
  }

}

export default useTheme;