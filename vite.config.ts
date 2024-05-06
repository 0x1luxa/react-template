import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

const root = resolve(__dirname, "src")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: true, include: "**/*.svg" }),
  ],
  resolve: {
    alias: {
      "@": root,
      "@api": `${root}/api`,
      "@assets": `${root}/assets`,
      "@components": `${root}/components`,
      "@elements": `${root}/elements`,
      "@layouts": `${root}/layouts`,
      "@pages": `${root}/pages`,
      "@routes": `${root}/routes`,
      "@store": `${root}/store`,
      "@utils": `${root}/utils`,
    },
  },
})
