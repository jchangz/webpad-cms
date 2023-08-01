import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				// search up for workspace root
				searchForWorkspaceRoot(process.cwd()),
				// your custom rules
				'/opt/app/'
			]
		},
		proxy: {
			'/api': {
				target: process.env.REST_API_URL,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	cacheDir: 'cacheDir/node_modules/.vite',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
