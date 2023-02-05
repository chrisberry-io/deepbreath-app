<script>
	import ExerciseTile from '../components/ExerciseTile.svelte';
	import PageTransition from '../components/PageTransition.svelte';
	import { boxReps } from '../stores';
	import BoxExample from '../components/svg/BoxExample.svelte';
</script>

<PageTransition>
	<div class="wrapper">
		<h1>Time to breathe</h1>
		<ul class="option">
			<ExerciseTile name="Box Breathing" link="/exercises/box-breathing" reps={boxReps}>
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
