<script lang="ts">
	import { currentTheme, currentThemeHex } from '$lib/stores';
	import { fade, slide } from 'svelte/transition';

	type ThemeValue = 'defaultDark' | 'defaultLight' | 'midnight' | 'nord';
	type Theme = [string, ThemeValue, string];

	const themes: Theme[] = [
		['Dark', 'defaultDark', '#33293e'],
		['Light', 'defaultLight', '#fff'],
		['Midnight', 'midnight', '#0d1117'],
		['Nord', 'nord', '#2e3440']
	];

	$: themeHex = themes.find(([, value]) => value === $currentTheme)?.[2];

	function switchTheme(theme: ThemeValue) {
		document.documentElement.classList.value = theme;
		localStorage.setItem('theme', theme);
		$currentTheme = theme;
		$currentThemeHex = themeHex;
	}
</script>

<svelte:head>
	{#if themeHex !== undefined}
		<meta name="theme-color" content={themeHex} />
	{/if}
</svelte:head>

<div class="theme-switcher" in:slide out:slide={{ delay: 250 }}>
	{#each themes as [theme, value]}
		<button
			on:click={() => switchTheme(value)}
			class="button {value}"
			in:fade={{ delay: 200 }}
			out:fade
		>
			<div class="surface1">
				<div class="left">
					{theme}
					<span class="surface2" />
				</div>
				<div class="gradient" />
			</div>
		</button>
	{/each}
</div>

<style>
	.theme-switcher {
		display: grid;
		gap: 0.5rem;
		padding: 1.5rem 0;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		overflow: scroll;
		scroll-snap-type: x mandatory;
		padding: 1rem 0.5rem;
	}
	.button {
		background-color: var(--color-background-default);
		color: var(--color-text-default);
		border: none;
		border-radius: var(--radius-4);
		padding: 1rem;
		font-size: 0.9rem;
		font-weight: bold;
		border: 1px solid var(--color-surface2);
		display: flex;
		align-items: center;
		gap: 1rem;
		scroll-snap-align: start;
	}
	.surface1 {
		background-color: var(--color-surface1);
		border-radius: var(--radius-4);
		padding: 1rem;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		gap: 0.5rem;
	}
	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.surface2 {
		background-color: var(--color-surface2);
		border-radius: var(--radius-4);
		height: 1rem;
		width: 100%;
	}
	.gradient {
		background: linear-gradient(
			0deg,
			var(--color-gradient-stop2) 0%,
			var(--color-gradient-stop1) 100%
		);
		flex-basis: 2rem;
		flex-shrink: 0;
		width: 2rem;
		height: 2rem;
		border-radius: var(--radius-4);
	}
</style>
