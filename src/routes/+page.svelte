<script>
	import ExerciseTile from '$lib/components/ExerciseTile.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { boxReps, fourSevenEightReps, evenReps } from '../stores';
	import BoxExample from '$lib/components/svg/BoxExample.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import FourSevenEightExample from '$lib/components/svg/FourSevenEightExample.svelte';
	import EvenExample from '$lib/components/svg/EvenExample.svelte';
</script>

<PageTransition>
	<NavBar />
	<div class="wrapper">
		<ul class="options">
			<ExerciseTile
				name="Even Breathing"
				link="/exercises/even-breathing"
				reps={evenReps}
				description="Breathe in for 4 seconds, breathe out for 4 seconds. Repeat."
			>
				<EvenExample slot="icon" />
			</ExerciseTile>
			<ExerciseTile
				name="Box Breathing"
				link="/exercises/box-breathing"
				reps={boxReps}
				description="Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, hold for 4 seconds. Repeat."
			>
				<BoxExample slot="icon" />
			</ExerciseTile>
			<ExerciseTile
				name="4-7-8 Breathing"
				link="/exercises/4-7-8-breathing"
				reps={fourSevenEightReps}
				description="Breathe in for 4 seconds, hold for 7 seconds, breathe out for 8 seconds. Repeat."
				playOffset="4px"
			>
				<FourSevenEightExample slot="icon" />
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
	}
	.options {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
		margin: 1.5rem 0 0;
		padding: 0;
	}
</style>
