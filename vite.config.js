import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      // Configuración para optimizar imágenes y convertirlas a WebP si no lo están ya
      webp: {
        quality: 75,
        // Evitar reconvertir las imágenes que ya están en formato WebP
        exclude: [/\.webp$/],
      },
      pngquant: {
        quality: [0.65, 0.8],
        // Excluir WebP del procesamiento
        exclude: [/\.webp$/],
      },
      mozjpeg: {
        quality: 75,
        // Solo procesar JPG/JPEG, no WebP
        exclude: [/\.webp$/],
      },
    }),
  ],
})
