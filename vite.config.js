import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.PNG', '**/*.png'],  // PNG 파일을 Vite가 올바르게 처리할 수 있도록 포함
	logLevel: 'info',
	 base: '/saltrain/',

  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		
	],
	resolve: {
		alias: {
		  '@': fileURLToPath(new URL('./src', import.meta.url))
		}
	  }
})
