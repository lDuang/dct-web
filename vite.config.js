import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 保持这个，以便监听所有接口
    allowedHosts: [
      '5173.app.cloudstudio.work' // 添加你的主机名到允许列表中
    ]
  }
})