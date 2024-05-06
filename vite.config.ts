import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ command, mode }) => {
  const timestamp = new Date().getTime();
  console.log(mode);

  return {
    plugins: [
      solid(),
      createHtmlPlugin({
        minify: true
      })
    ],
    cacheControl: "max-age=3600",
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]_[hash:base64:5]"
      }
    },
    build: {
      // minify: "esbuild",
      emptyOutDir: true,
      outDir: "build",
      sourcemap: false,
      minify: mode === "production",
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
