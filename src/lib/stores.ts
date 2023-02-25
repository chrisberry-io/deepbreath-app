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
export const fourSevenEightReps = writable(Number(fromLocalStorage('fourSevenEightReps', 2)));
export const evenReps = writable(Number(fromLocalStorage('evenReps', 2)));
export const currentTheme = writable(fromLocalStorage('theme', 'defaultDark'));
export const currentThemeHex = writable(fromLocalStorage('themeHex', '#000000'));

toLocalStorage(boxReps, 'boxReps');
toLocalStorage(fourSevenEightReps, 'fourSevenEightReps');
toLocalStorage(evenReps, 'evenReps');
toLocalStorage(currentTheme, 'theme');
toLocalStorage(currentTheme, 'currentThemeHex');
