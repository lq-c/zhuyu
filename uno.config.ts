import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true
    }),
    presetAttributify()
  ],
  // theme: {
  //   colors: {
  //     'main-img': 'var(--main-bgimg)', // class="text-info"
  //     'content': {
  //       'primary': 'fe003b',  // class="text-content-primary"
  //     }
  //   },
  // }
})