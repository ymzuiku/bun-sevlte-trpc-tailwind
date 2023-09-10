/* eslint-disable @typescript-eslint/no-explicit-any */
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const bunPrismaPlugin = {
	name: 'bun_ignore_prisma_eval_dirname',
	configureServer(server: any) {
		server.middlewares.use((req: any, res: any, next: any) => {
			global.__dirname = __dirname;
			global.__filename = __filename;
			next();
		});
	},
};

export default defineConfig({
	plugins: [bunPrismaPlugin, sveltekit()],
});
