import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser
	? window.localStorage.getItem('menu-state')
		? JSON.parse(window.localStorage.getItem('menu-state')!)
		: { open: false }
	: { open: false };

export const sidebar = writable(data);

export const setScrolled = () => {
	sidebar.update((current) => {
		let v = { open: current.open };
		if (browser) window.localStorage.setItem('menu-state', JSON.stringify(v));
		return v;
	});
};

export const toggleSidebar = (v: boolean | undefined = undefined) => {
	sidebar.update((current) => {
		let value = {
			open: v ?? !current.open
		};
		if (browser) window.localStorage.setItem('menu-state', JSON.stringify(value));
		return value;
	});
};

sidebar.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('menu-state', JSON.stringify(v));
	}
});
