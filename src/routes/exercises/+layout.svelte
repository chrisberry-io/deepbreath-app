<script>
	import { Icon, ArrowLeft } from 'svelte-hero-icons';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="wrapper">
	<nav class="exercise-nav" in:fade={{ delay: 400 }} out:fade>
		<a href="/" class="back">
			<Icon src={ArrowLeft} size="24" />
		</a>
	</nav>

	<main class="main">
		<PageTransition>
			<slot />
		</PageTransition>
	</main>
</div>

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
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 100dvh;
	}
	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
