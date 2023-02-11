<script>
	import { Icon, ArrowLeft } from 'svelte-hero-icons';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { fade } from 'svelte/transition';
</script>

<nav class="exercise-nav" in:fade={{ delay: 500 }} out:fade>
	<a href="/" class="back">
		<Icon src={ArrowLeft} size="24" />
	</a>
</nav>

<PageTransition>
	<div class="wrapper">
		<slot />
	</div>
</PageTransition>

<style>
	.exercise-nav {
		display: flex;
		align-items: center;
	}
	.back {
		color: var(--color-text-default);
		display: block;
		padding: 1rem;
	}
</style>
