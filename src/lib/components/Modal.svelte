<script lang="ts">
	import Portal from 'svelte-portal';
	import { fade, fly } from 'svelte/transition';
	import { focusTrap } from 'svelte-focus-trap';

	export let modalVisible = false;

	function clickOutside(element: HTMLElement, callbackFunction: () => void) {
		function onClick(event: Event) {
			if (!element.contains(event.target as HTMLElement)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: () => void) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	function hideModal() {
		modalVisible = false;
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			hideModal();
		}
	}
</script>

{#if modalVisible}
	<Portal>
		<div class="modal-wrapper" transition:fade>
			<div
				class="modal"
				transition:fly={{ x: 0, y: -100, duration: 200 }}
				use:clickOutside={hideModal}
				use:focusTrap
			>
				<slot />
			</div>
		</div>
	</Portal>
{/if}

<svelte:window on:keydown={onKeyDown} />

<style lang="scss">
	.modal-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.modal {
		background: var(--color-surface1);
		padding: var(--size-6);
		border-radius: var(--radius-4);
	}
</style>
