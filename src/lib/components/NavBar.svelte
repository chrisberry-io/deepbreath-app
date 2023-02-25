<script>
	import { Icon, ColorSwatch } from 'svelte-hero-icons';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let switcherIsOpen = false;
</script>

<header class="header">
	<h1 class="app-name">DeepBreath</h1>
	<button class="theme-button" on:click={() => (switcherIsOpen = !switcherIsOpen)}>
		<Icon src={ColorSwatch} size="24" /></button
	>
</header>
{#if switcherIsOpen}
	<ThemeSwitcher />
{/if}

<style>
	.header {
		display: grid;
		grid-template-columns: 100%;
		grid-template-areas: 'main';
	}

	.app-name {
		text-align: center;
		grid-area: main;
	}

	.theme-button {
		grid-area: main;
		width: 3rem;
		justify-self: end;
		margin-right: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		appearance: none;
		background: none;
		border: none;
		color: var(--color-text-default);
	}
</style>
