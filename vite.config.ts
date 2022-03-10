import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  // Vite 2.0 core 现在与框架无关。现在通过@vitejs/plugin-vue这个插件来支持Vue
import { resolve } from 'path'; //配置别名@路径使用  tsconfig.json也需要配置
// 自动按需加载
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 支持jsx写法插件
import vueJsx from '@vitejs/plugin-vue-jsx';
// 自动封装svg组件插件
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // 自动按需加载的配置文件 按照element-ui官方
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['@vueuse/core'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 支持jsx写法插件 引入配置
    vueJsx(),
    // 封装svg插件组件
    svgLoader(),

  ],
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
    },
  },
  // 配置请求网络
  server:{
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    cors: true, // 跨域设置允许
    strictPort: true, // 如果端口已占用直接退出
    // 接口代理
    proxy: {
      '/api': {
        // 本地 8000 前端代码的接口 代理到 8888 的服务端口
        target: 'http://localhost:8888/',
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
  // 配置打包相关
  build: {
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true,
      },
    },
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  // 配置css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
      `,
        javascriptEnabled: true,
      },
    },
  },
  
})
  