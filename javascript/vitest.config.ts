/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
// import { vitePlugin as remix } from '@remix-run/dev'

export default defineConfig({
	// plugins: [remix()],
	test: {
		include: ['**/__tests__/**.{js,jsx,ts,tsx}'],
		environment: 'jsdom',
		setupFiles: ['./tests/setup/setup-tests-env.ts'],

		restoreMocks: true,
		coverage: {
			exclude: ['**/__tests__/**'],
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
	},
})
