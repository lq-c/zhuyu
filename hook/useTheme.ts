//设置主题
import { ref, watch } from "vue";


function useTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = ref(prefersDark.matches ? "dark" : "light");
  const updateTheme = (e: any) => {
    if (e.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  watch(systemTheme, (value) => {
    // console.log("我变化了", value);
  },
    { immediate: true }
  )

  const setTheme = (theme: string) => {
    systemTheme.value = theme;
  }

  // 监听系统主题变化
  prefersDark.addEventListener('change', updateTheme);

  return {
    systemTheme,
    setTheme
  }

}

export default useTheme;