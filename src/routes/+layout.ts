import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import type { MenuSection, Dish } from '$lib/constants/types.js';
import Papa from 'papaparse';

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

export const load: LayoutLoad = async ({ fetch, params }) => {
	await waitLocale();
	if (browser) {
		if (window.navigator.language.includes('en')) locale.set('en');
		else if (window.navigator.language.includes('it')) locale.set('it');
		else locale.set('nl');
	} else {
		locale.set('nl');
	}

	const sectionRes = await fetch(`/database/sections.csv`, {
		headers: { 'content-type': 'text/csv;charset=UTF-8' }
	});
	const dishRes = await fetch(`/database/dishes.csv`, {
		headers: { 'content-type': 'text/csv;charset=UTF-8' }
	});
	const wineRes = await fetch(`/database/wines.csv`, {
		headers: { 'content-type': 'text/csv;charset=UTF-8' }
	})

	if (!sectionRes.ok || !dishRes.ok) {
		throw new Error('Failed to fetch data');
	}

	let sectionData;
	let wineData: Array<any> = [];
	let dishData: Array<any> = [];

	const sectionFile = await sectionRes.text();
	new Promise((resolve, reject) => {
		Papa.parse(sectionFile, {
			header: true,
			dynamicTyping: true,
			complete: (parseResult) => {
				//console.log(parseResult);
				sectionData = parseResult.data;
				// handle errors etc.
				//resolve();
			}
		});
	});
	const dishFile = await dishRes.text();
	new Promise((resolve, reject) => {
		Papa.parse(dishFile, {
			header: true,
			dynamicTyping: true,
			complete: (parseResult) => {
				//console.log(parseResult);
				dishData = parseResult.data as Object[];
				// handle errors etc.
				//resolve();
			}
		});
	});
	const wineFile = await wineRes.text();
	new Promise((resolve, reject) => {
		Papa.parse(wineFile, {
			header: true,
			dynamicTyping: true,
			complete: (parseResult) => {
				wineData = parseResult.data as Object[];
			}
		})
	})

	// Parse data into predefined types
	let dishes: Dish[] = [];
	let lastMainDish: Dish;
	for (let a = 0; a < dishData.length; a++) {
		if (dishData[a].dish_id) {
			// Treat this as the subdish of the previous main dish
			let rawDish = dishData[a];
			let dish: Dish = {
				id: rawDish.id,
				section_id: rawDish.section_id,
				title_en: rawDish.title_en,
				title_it: rawDish.title_it,
				title_nl: rawDish.title_nl,
				description_en: rawDish.description_en,
				description_it: rawDish.description_it,
				description_nl: rawDish.description_nl,
				price: rawDish.price,
				vegetarian: rawDish.vegetarian,
				addition: rawDish.addition
			};
			if (lastMainDish!.options == undefined) lastMainDish!.options = [];
			lastMainDish!.options.push(dish);
		} else {
			// This is a main dish
			let rawDish = dishData[a];
			let dish: Dish = {
				id: rawDish.id,
				section_id: rawDish.section_id,
				title_en: rawDish.title_en,
				title_it: rawDish.title_it,
				title_nl: rawDish.title_nl,
				description_en: rawDish.description_en,
				description_it: rawDish.description_it,
				description_nl: rawDish.description_nl,
				price: rawDish.price,
				vegetarian: rawDish.vegetarian,
				addition: false
			};
			lastMainDish = dish;
			dishes.push(dish);
		}
	}

	// Parse wines into predefined Dish types
	let wines: Dish[] = [];
	for (let a = 0; a < wineData.length; a++) {
		let rawWine = wineData[a];

		let bottlePrice: Dish | undefined = undefined;
		if (rawWine.bottle) {
			bottlePrice = {
				id: rawWine.id + '-bottle',
				section_id: rawWine.section_id,
				title_en: 'Price per bottle',
				title_it: 'Prezzo per bottiglia',
				title_nl: 'Prijs per fles',
				price: rawWine.bottle
			}
		}

		let glassPrice: Dish | undefined = undefined;
		if (rawWine.glass) {
			glassPrice = {
				id: rawWine.id + '-glass',
				section_id: rawWine.section_id,
				title_en: 'Price per glass',
				title_it: 'Prezzo per calice',
				title_nl: 'Prijs per glas',
				price: rawWine.glass
			}
		}

		let wine: Dish = {
			id: rawWine.id,
			section_id: rawWine.section_id,
			title_en: rawWine.title,
			title_it: rawWine.title,
			title_nl: rawWine.title,
			description_en: `(${rawWine.liters}) ` + rawWine.grapes,
			description_it: `(${rawWine.liters}) ` +rawWine.grapes,
			description_nl: `(${rawWine.liters}) ` +rawWine.grapes,
		}

		if (glassPrice) {
			if (wine.options == undefined) wine.options = [];
			wine.options.push(glassPrice);
		}

		if (bottlePrice) {
			if (wine.options == undefined) wine.options = [];
			wine.options.push(bottlePrice);
		}		
		wines.push(wine);
	}

	// Join all dishes and wines
	dishes = dishes.concat(wines);

	//Parse sections contents
	let sections: MenuSection[] = [];
	sectionData!.forEach((el: any) => {
		sections.push({
			id: el.id,
			title_en: el.title_en,
			title_it: el.title_it,
			title_nl: el.title_nl,
			fromTime: el.from
				? {
						hour: el.from,
						minutes: 0
				  }
				: undefined,
			toTime: el.to
				? {
						hour: el.to,
						minutes: 0
				  }
				: undefined,
			dishes: dishes.filter((dish) => dish.section_id == el.id),
			category: el.category
		});
	});
	sections = sections.filter((section) => section.dishes.length > 0);

	return {
		sections: sections
	};
};
