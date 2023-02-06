<script lang="ts">
	import type { Writable } from 'svelte/store';
	import UpDown from './UpDown.svelte';

	export let name: string;
	export let link: string;
	export let reps: Writable<number>;
</script>

<li class="tile">
	<div class="left">
		<a href={link}>{name}</a>
		<UpDown value={reps} />
	</div>
	<slot name="icon" />
</li>

<style lang="scss">
	.tile {
		margin: 0;
		padding: 0;
		background: var(--color-surface1);
		display: flex;
		border-radius: 1.5rem;
		padding: 1.75rem;
		gap: 1.5rem;
		.left {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			a {
				font-size: 1.5rem;
				font-weight: 500;
				color: var(--color-text1);
				text-decoration: none;
			}
		}
	}
</style>
