import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Get value from localStorage if in browser and the value is stored, otherwise fallback
function fromLocalStorage(storageKey: string, fallbackValue: any) {
	if (browser) {
		const storedValue = window.localStorage.getItem(storageKey);

		if (storedValue !== 'undefined' && storedValue !== null) {
			return typeof fallbackValue === 'object' ? JSON.parse(storedValue) : storedValue;
		}
	}

	return fallbackValue;
}

// Subscribe to store and save value to localStorage
function toLocalStorage(store: Writable<any>, storageKey: string) {
	if (browser) {
		store.subscribe((value) => {
			const storageValue = typeof value === 'object' ? JSON.stringify(value) : value;

			window.localStorage.setItem(storageKey, storageValue);
		});
	}
}

export const boxReps = writable(Number(fromLocalStorage('boxReps', 2)));

toLocalStorage(boxReps, 'boxReps');
