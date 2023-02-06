import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			includePaths: ['src', 'node_modules/open-props']
		}
	}),

	kit: {
		adapter: adapter(),
		serviceWorker: {
			register: false
		}
	}
};

export default config;
