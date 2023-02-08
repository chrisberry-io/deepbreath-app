<script>
	import '$lib/assets/scss/global.scss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { webVitals } from '$lib/vitals';
	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}

	inject({ mode: dev ? 'development' : 'production' });
</script>

<nav>Nav</nav>
<slot />
