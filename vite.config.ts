import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig(({ command, mode }) => {
  const timestamp = new Date().getTime();

  return {
    plugins: [solid()],
    cacheControl: "max-age=3600",
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]_[hash:base64:5]"
      }
    },
    build: {
      minify: "terser",
      emptyOutDir: true,
      outDir: "build",
      sourcemap: false,
      // minify: mode === "production",
      cssCodeSplit: true,
      modulePreload: true,
      chunkSizeWarningLimit: 1000000,
      cacheControl: "max-age=3600",
      rollupOptions: {
        output: {
          chunkFileNames: `assets/js/[hash]-${timestamp}.js`,
          entryFileNames: `assets/js/[hash]-${timestamp}.js`,
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
              return `assets/images/[hash]-${timestamp}[extname]`;
            }
            if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
              return `assets/font/[hash]-${timestamp}[extname]`;
            }
            if (/\.css$/.test(name ?? "")) {
              return `assets/css/[hash]-${timestamp}[extname]`;
            }
            return `assets/[hash]-${timestamp}[extname]`;
          }
        }
      }
    }
  };
});
