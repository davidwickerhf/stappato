import type { MenuSection, Dish } from '$lib/constants/types.js';
import Papa from 'papaparse';
import type { PageLoad } from '../$types';
import { BASE_URL } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
// export const load = async ({ fetch }) => {
// 	const sectionResults = await fetch('/database/sections.csv', {
// 		headers: { 'content-type': 'text/csv;charset=UTF-8' }
// 	});
// 	const dishesResults = await fetch('/database/dishes.csv', {
// 		headers: { 'content-type': 'text/csv;charset=UTF-8' }
// 	});

// 	if (!sectionResults.ok && !dishesResults.ok) {
// 		throw new Error('Failed to fetch data');
// 	}

// 	const sectionsContent = await sectionResults.text();
// 	const dishesContent = await dishesResults.text();

// 	let sectionsRaw: any;
// 	let dishesRaw: any;
// 	// Parse Sections RAW
// 	// await new Promise((resolve, reject) => {
// 	// 	// Papa.parse(sectionsContent, {
// 	// 	// 	header: true,
// 	// 	// 	dynamicTyping: true,
// 	// 	// 	complete: (parseResult) => {
// 	// 	// 		console.log(parseResult.data);
// 	// 	// 		// handle errors etc.
// 	// 	// 		//resolve();
// 	// 	// 		sectionsRaw = parseResult.data;
// 	// 	// 	}
// 	// 	// });
// 	// });
// 	await new Promise((resolve, reject) => {
// 		Papa.parse('/database/sections.csv', {
// 			download: true,
// 			header: true,
// 			dynamicTyping: true,
// 			complete: (parseResult) => {
// 				console.log(parseResult); // check for errors etc.

// 				//resolve();
// 			}
// 		});
// 	});
// 	return undefined;

// 	// await new Promise((resolve, reject) => {
// 	// 	Papa.parse(dishesContent, {
// 	// 		header: true,
// 	// 		dynamicTyping: true,
// 	// 		complete: (parseResult) => {
// 	// 			console.log(parseResult.data);
// 	// 			// handle errors etc.
// 	// 			//resolve();
// 	// 			dishesRaw = parseResult.data;
// 	// 		}
// 	// 	});
// 	// });

// 	// let dishes: Dish[] = [];
// 	// let lastMainDish: Dish;
// 	// for (let a = 0; a < dishesRaw.length; a++) {
// 	// 	if (dishesRaw[a].dish_id) {
// 	// 		// Treat this as the subdish of the previous main dish
// 	// 		let rawDish = dishesRaw[a];
// 	// 		let dish: Dish = {
// 	// 			id: rawDish.id,
// 	// 			title: rawDish.title,
// 	// 			description: rawDish.description,
// 	// 			price: rawDish.price,
// 	// 			vegetarian: rawDish.vegetarian,
// 	// 			addition: rawDish.addition
// 	// 		};
// 	// 		if (lastMainDish!.options == undefined) lastMainDish!.options = [];
// 	// 		lastMainDish!.options.push(dish);
// 	// 	} else {
// 	// 		// This is a main dish
// 	// 		let rawDish = dishesRaw[a];
// 	// 		let dish: Dish = {
// 	// 			id: rawDish.id,
// 	// 			title: rawDish.title,
// 	// 			description: rawDish.description,
// 	// 			price: rawDish.price,
// 	// 			vegetarian: rawDish.vegetarian,
// 	// 			addition: false
// 	// 		};
// 	// 		lastMainDish = dish;
// 	// 		dishes.push(dish);
// 	// 	}
// 	// }
// 	// console.log(dishes);

// 	// Parse sections contents
// 	// let sections: MenuSection[];
// 	// sectionsRaw!.forEach((el: any) => {
// 	// 	sections.push({
// 	// 		id: el.id,
// 	// 		title: el.title_en,
// 	// 		fromTime: el.from,
// 	// 		dishes: []
// 	// 	});
// 	// });
// };

// export const load = (async () => {
// 	await new Promise((resolve, reject) => {
// 		Papa.parse('/database/sections.csv', {
// 			download: true,
// 			header: true,
// 			dynamicTyping: true,
// 			complete: (parseResult) => {
// 				console.log(parseResult); // check for errors etc.

// 				//resolve();
// 			}
// 		});
// 	});
// 	return null;
// }) satisfies PageLoad;

export async function load({ fetch, params }) {
	const result = await fetch(`/database/sections.csv`, {
		headers: { 'content-type': 'text/csv;charset=UTF-8' }
	});

	if (!result.ok) {
		throw new Error('Failed to fetch data');
	}
	const fileContent = await result.text();
	new Promise((resolve, reject) => {
		Papa.parse(fileContent, {
			header: true,
			dynamicTyping: true,
			complete: (parseResult) => {
				console.log(parseResult);
				// handle errors etc.
				//resolve();
			}
		});
	});

	return {
		post: {
			title: `Title for goes here`,
			content: `Content forgoes here`
		}
	};
}
