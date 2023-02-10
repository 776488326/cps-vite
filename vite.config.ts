import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 代理地址
const PROXY_TARGET = "http://test.cps.gridsum.com:38083";

// 代理端口
const PORT = 3210;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: PROXY_TARGET,
        changeOrigin: true,
      },
      "/api/ws": {
        target: PROXY_TARGET,
        changeOrigin: true,
        ws: true
      }
    },
    port: PORT,
    open: true,
    cors: true,
    
  }

})
