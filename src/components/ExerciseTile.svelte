<script lang="ts">
	import type { Writable } from 'svelte/store';
	import UpDown from './UpDown.svelte';

	export let name: string;
	export let link: string;
	export let reps: Writable<number>;
</script>

<li class="tile">
	<a href={link}>{name}</a>
	<UpDown value={reps} />
</li>

<style>
	.tile {
		margin: 0;
		padding: 0;
	}
</style>
