import tailwind from 'tailwindcss'
import tailwindConfig from '@femm/tailwind-config'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwind({
      presets: [tailwindConfig],
      content: ['./docs/.vitepress/**/*.{js,ts,vue}', './docs/**/*.{md,vue}'],
    }),
    autoprefixer(),
  ],
}
