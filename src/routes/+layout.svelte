<script lang="ts">
	import '$lib/assets/scss/global.scss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import { webVitals } from '$lib/webvitals';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID as string;
	let path: string;
	let params: Record<string, string>;

	page.subscribe((page) => {
		path = page.path;
		params = page.params;
	});

	onMount(() => {
		if (analyticsId) webVitals({ path, params, analyticsId });
	});

	inject({ mode: dev ? 'development' : 'production' });
</script>

<nav>Nav</nav>
<slot />
