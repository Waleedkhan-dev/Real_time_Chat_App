import daisyui from "daisyui/package.json" assert { type: "json" };
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    daisyui
  ],
})
