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

<div>
	<button on:click={() => onDown(value)}> - </button>
	{$value}
	<button on:click={() => onUp(value)}> + </button>
</div>
