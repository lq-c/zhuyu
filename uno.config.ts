import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true
    }),
    presetAttributify()
  ],
  theme: {
    colors: {
      'color': '#adbac7', // class="text-info"
      'content': {
        'primary': 'fe003b',  // class="text-content-primary"
      },
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/public/vague-rose-light.jpg')"
        }
      },
    },
  }
})