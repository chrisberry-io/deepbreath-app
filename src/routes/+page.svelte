<script>
	import ExerciseTile from '$lib/components/ExerciseTile.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { boxReps } from '../stores';
	import BoxExample from '$lib/components/svg/BoxExample.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<PageTransition>
	<NavBar />
	<div class="wrapper">
		<ul class="option">
			<ExerciseTile
				name="Box Breathing"
				link="/exercises/box-breathing"
				reps={boxReps}
				description="Breath in for 4 seconds, hold for 4 seconds, breath out for 4 seconds, hold for 4 seconds. Repeat."
			>
				<BoxExample slot="icon" />
			</ExerciseTile>
		</ul>
	</div>
</PageTransition>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}
	.option {
		display: flex;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
