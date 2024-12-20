import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.PNG', '**/*.png'],  // PNG 파일을 Vite가 올바르게 처리할 수 있도록 포함
	logLevel: 'info',
	 base: '/',

  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		
	],
	resolve: {
		alias: {
		  '@': fileURLToPath(new URL('./src', import.meta.url))
		}
	  },
	  build: {
		outDir: 'dist', // 빌드된 파일들이 dist 폴더에 저장됩니다.
		rollupOptions: {
		  input: '/src/main.js' // main.js를 빌드의 시작점으로 설정
		}
	  }
})
