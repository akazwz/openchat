import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		reactRouter({
			ssr: true,
		}),
		tsconfigPaths(),
	],
	build: {
		target: "esnext",
		rollupOptions: {
			external: ["localforage"],
		}
	},
});
