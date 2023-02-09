<script>
	import '$lib/assets/scss/global.scss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import NavBar from '$lib/components/NavBar.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<NavBar />
<slot />
