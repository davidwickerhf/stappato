import { writable } from 'svelte/store';

const data = 0;
export const verticalScroll = writable(data);

export const setVerticalScroll = (scroll: number) => {
	verticalScroll.update((current) => {
		return scroll;
	});
};

verticalScroll.subscribe((value) => {
	//console.log(value);
}); // logs '0'
