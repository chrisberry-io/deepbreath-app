<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let value: Writable<number>;

	const onUp = (num: Writable<number>) => {
		num.update((n) => n + 1);
	};

	const onDown = (num: Writable<number>) => {
		num.update((n) => n - 1);
	};
</script>

<div class="wrapper">
	<input type="number" bind:value={$value} size="2" max="99" min="1" />
	<div class="button-wrapper">
		<button on:click={() => onDown(value)}> - </button>
		<button on:click={() => onUp(value)}> + </button>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	input {
		border: none;
		background: var(--color-surface1);
		border-radius: var(--radius-4);
		padding: 0.5rem;
		font-size: 1.5rem;
		font-weight: 500;
		color: var(--color-text1);
		text-align: center;
		font-size: var(--font-size-7);
		/* Chrome, Safari, Edge, Opera */
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		&[type='number'] {
			-moz-appearance: textfield;
		}
	}

	.button-wrapper {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		button {
			border: none;
			background: var(--color-surface1);
			border-radius: var(--radius-4);
			padding: 0.5rem;
			font-size: 1.5rem;
			font-weight: 500;
			color: var(--color-text1);
			width: var(--size-8);
			height: var(--size-8);
			background: var(--color-surface2);
			cursor: pointer;
			&:hover {
				background: var(--color-background-default);
			}
		}
	}
</style>
