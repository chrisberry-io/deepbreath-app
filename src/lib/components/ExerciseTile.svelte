<script lang="ts">
	import type { Writable } from 'svelte/store';
	import UpDown from './UpDown.svelte';
	import { fade } from 'svelte/transition';
	import Modal from './Modal.svelte';

	// Props
	export let name: string;
	export let description: string;
	export let link: string;
	export let reps: Writable<number>;

	// State
	let modalVisible = false;

	// Handlers
	const showModal: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (event) => {
		modalVisible = true;
		event.stopPropagation();
	};
</script>

<li class="tile">
	<div class="left">
		<a href={link}>{name}</a>
		<p class="description">{description}</p>
		<button class="reps" transition:fade on:click={showModal}>{$reps} Reps</button>
	</div>
	<slot name="icon" />
</li>

<Modal bind:modalVisible>
	<div class="modal">
		<h2>How many reps?</h2>
		<UpDown value={reps} />
	</div>
</Modal>

<style lang="scss">
	.tile {
		margin: 0;
		padding: 0;
		background: var(--color-surface1);
		display: flex;
		border-radius: var(--radius-4);
		padding: 1.75rem;
		gap: 1.5rem;
		align-items: center;
		.left {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: var(--size-4);
			a {
				font-size: 1.5rem;
				font-weight: 500;
				color: var(--color-text1);
				text-decoration: none;
			}
		}
	}

	.reps {
		font-size: 0.75rem;
		color: var(--color-text2);
		backdrop-filter: brightness(1.5);
		align-self: flex-start;
		border-radius: var(--radius-round);
		padding: 0.25rem 0.75rem;
		border: 0;
		background: none;
	}

	.description {
		font-size: 0.9rem;
	}
</style>
