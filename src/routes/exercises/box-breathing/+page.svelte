<script>
	import BoxAnimation from '$lib/components/BoxAnimation.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<PageTransition>
	<div class="wrapper">
		<BoxAnimation />
	</div>
</PageTransition>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
