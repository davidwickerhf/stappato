import {
	ReviewType,
	type Review,
	type Dish,
	type MenuSection,
	type Employee,
	type OpeningTime,
	type Partnership
} from './types';

// Contents
export const contents = {
	// Landing page
	landingPage: {
		landingImage: 'images/images/landing.png',
		welcomeText: 'database.welcome',
		timComment: 'database.timComment',
		specialRequestsText: 'database.specialRequests'
	},

	// Menu page
	menuPage: {},

	// Team page
	teamPage: {},

	// Contact page
	contactPage: {
		contactText: 'contents.contact.text'
	}
};

// DYNAMIC

// Employees
export const employees: Employee[] = [
	{
		id: 'tim',
		name: 'Tim de Vrouw',
		joined: 2022,
		position: 'Founder and Chef',
		bio: 'database.bio.tim',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'jordi',
		name: 'Jordi',
		joined: 2022,
		position: 'Chef',
		bio: 'database.bio.jordi',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'ricardo',
		name: 'Ricardo',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.ricardo',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'breght',
		name: 'Breght',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.breght',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'alex',
		name: 'Alex',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'david',
		name: 'David Wicker',
		joined: 2022,
		position: 'Waiter and Webmaster',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'alessia',
		name: 'Alessia Burigo',
		joined: 2022,
		position: 'Founder and Chef',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	}
];

// Opening times
export const times: OpeningTime[] = [
	{
		day: 'contents.days.monday',
		open: false
	},
	{
		day: 'contents.days.tuesday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	},
	{
		day: 'contents.days.wednesday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	},
	{
		day: 'contents.days.thursday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	},
	{
		day: 'contents.days.friday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	},
	{
		day: 'contents.days.saturday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	},
	{
		day: 'contents.days.sunday',
		open: true,
		fromTime: {
			hour: 10,
			minutes: 0
		},
		toTime: {
			hour: 23,
			minutes: 0
		}
	}
];

// Menu
// export const menu: MenuSection[] = [
// 	{
// 		id: 'lunch',
// 		title: 'Lunch',
// 		fromTime: { hour: 12, minutes: 0 },
// 		toTime: { hour: 17, minutes: 0 },
// 		dishes: [
// 			{
// 				id: 'soup',
// 				title: "Chef's soup",
// 				price: 7
// 			},
// 			{
// 				id: 'pane',
// 				title: 'Pane',
// 				price: 7,
// 				options: [
// 					{
// 						id: 'pane-veg',
// 						title: 'Vegetable spread (vegetarian on request)',
// 						price: 7
// 					},
// 					{
// 						id: 'pane-mortadella',
// 						title: 'Mortadella, rucola and garlig oil',
// 						price: 8.5
// 					},
// 					{
// 						id: 'pane-salami',
// 						title: 'Salami, rucola and garlic oil',
// 						price: 8.5
// 					},
// 					{
// 						id: 'pane-ham',
// 						title: 'Parma ham, garlic oil and sun-dried tomato',
// 						price: 9.5
// 					},
// 					{
// 						id: 'pane-chicken',
// 						title: 'Fried chicken, aioli and tomato',
// 						price: 9.5
// 					},
// 					{
// 						id: 'pane-tuna',
// 						title: 'Home made tuna salad',
// 						price: 9.5
// 					},
// 					{
// 						id: 'pane-vitello',
// 						title: 'Vitello Tonnato, sliced veal and tuna mayonnaise',
// 						price: 12.5
// 					},
// 					{
// 						id: 'pane-carpaccio',
// 						title: 'Carpaccio, truffle mayonnaise, pine nuts and Parmesan cheese',
// 						price: 12.5
// 					}
// 				]
// 			},
// 			{
// 				id: 'tosti',
// 				title: 'Tosti Italiana',
// 				price: 9.5,
// 				options: [
// 					{
// 						id: 'tosti-mozzarella',
// 						title: 'Mozzarella, tomato and pesto',
// 						price: 9.5
// 					},
// 					{
// 						id: 'tosti-mozzarella-ham',
// 						title: 'With Parma ham',
// 						price: 2.5,
// 						addition: true
// 					}
// 				]
// 			},
// 			{
// 				id: 'insalata-mare',
// 				title: 'Instalata di Mare',
// 				description: 'Scampi, tuna, anchovies',
// 				price: 14.5
// 			},
// 			{
// 				id: 'insalata-burrata',
// 				title: 'Insalata Burrata',
// 				price: 14.5,
// 				options: [
// 					{
// 						id: 'insta-burrata-balsamic',
// 						title: 'Balsamic (vegetarian on request)',
// 						price: 14.5
// 					},
// 					{
// 						id: 'insta-burrata-nduja',
// 						title: 'With Nduja (salsiccia Calabrese)',
// 						price: 1.5,
// 						addition: true
// 					}
// 				]
// 			}
// 		]
// 	},
// 	{
// 		id: 'appetizers',
// 		title: 'Appetizers',
// 		fromTime: {
// 			hour: 12,
// 			minutes: 0
// 		},
// 		dishes: [
// 			{
// 				id: 'bruschetta',
// 				title: 'Bruschetta',
// 				price: 6.5,
// 				options: [
// 					{
// 						id: 'mushrooms',
// 						title: 'Wilde mushrooms (vegetarian on request)',
// 						price: 6.5,
// 						vegetarian: true
// 					},
// 					{
// 						id: 'tomato',
// 						title: 'Tomato and basil (vegetarian on request)',
// 						price: 6.5,
// 						vegetarian: true
// 					},
// 					{
// 						id: 'day',
// 						title: 'Of the day (vegetarian on request)',
// 						price: 6.5,
// 						vegetarian: true
// 					}
// 				]
// 			},
// 			{
// 				id: 'olives',
// 				title: 'Olives',
// 				description: 'Home marinated (vegetarian)',
// 				vegetarian: true,
// 				price: 4
// 			}
// 		]
// 	}
// ];

// Select Menu
export const previewMenu: Dish[] = [
	{
		id: 'bolognese',
		section_id: 'lunch',
		title_en: 'Tagliatelle al ragu',
		title_it: 'Tagliatelle al ragu',
		title_nl: 'Tagliatelle al ragu',
		description_en:
			'Rich Italian Bolognese pasta features savory meat sauce simmered to perfection, generously coating al dente pasta for a hearty, comforting dish.',
		description_it:
			'La pasta alla Bolognese è un piatto italiano ricco, con una deliziosa salsa di carne cotta a perfezione che avvolge la pasta al dente.',
		description_nl:
			'Rijke Italiaanse Bolognese-pasta kenmerkt zich door een smaakvolle vleessaus die perfect suddert en genereus de al dente pasta bedekt voor een hartig en troostrijk gerecht.',
		price: 18.5,
		vegetarian: false
	},
	{
		id: 'burrata',
		section_id: 'starters',
		title_en: 'Burrata',
		title_it: 'Burrata',
		title_nl: 'Burrata',
		description_en:
			'Enjoy the refined creaminess of Burrata, an Italian cheese with a mozzarella-like outer layer and a creamy interior. Burrata is an Italian play on words, referring to its buttery.',
		description_it:
			'Goditi la raffinata cremosità della Burrata, un formaggio italiano contornato da mozzarella e con un cuore cremoso di stracciatella. Burrata è un gioco di parole italiano che si riferisce alla cremosità del formaggio stesso',
		description_nl:
			'Geniet van de verfijnde romigheid van Burrata, een Italiaanse kaas met een mozzarella achtige buitenkant en een romige binnenkant. Burrata is een Italiaanse woordspeling voor boterachtig',
		price: 12.5,
		vegetarian: true
	},
	{
		id: 'day.fish',
		section_id: 'main',
		title_en: 'Fish of the day',
		title_it: 'Pesce del giorno',
		title_nl: 'Burrata',
		description_en:
			'Enjoy the refined creaminess of Burrata, an Italian cheese with a mozzarella-like outer layer and a creamy interior. Burrata is an Italian play on words, referring to its buttery.',
		description_it:
			'Goditi la raffinata cremosità della Burrata, un formaggio italiano contornato da mozzarella e con un cuore cremoso di stracciatella. Burrata è un gioco di parole italiano che si riferisce alla cremosità del formaggio stesso',
		description_nl:
			'Geniet van de verfijnde romigheid van Burrata, een Italiaanse kaas met een mozzarella achtige buitenkant en een romige binnenkant. Burrata is een Italiaanse woordspeling voor boterachtig',
		price: 12.5,
		vegetarian: true
	},
	{
		id: 'day.meat',
		section_id: 'main',
		title_en: 'Meat of the day',
		title_it: 'Carne del giorno',
		title_nl: 'Burrata',
		description_en:
			'Enjoy the refined creaminess of Burrata, an Italian cheese with a mozzarella-like outer layer and a creamy interior. Burrata is an Italian play on words, referring to its buttery.',
		description_it:
			'Goditi la raffinata cremosità della Burrata, un formaggio italiano contornato da mozzarella e con un cuore cremoso di stracciatella. Burrata è un gioco di parole italiano che si riferisce alla cremosità del formaggio stesso',
		description_nl:
			'Geniet van de verfijnde romigheid van Burrata, een Italiaanse kaas met een mozzarella achtige buitenkant en een romige binnenkant. Burrata is een Italiaanse woordspeling voor boterachtig',
		price: 12.5,
		vegetarian: true
	}
];

// Partnerships
export const partnerships: Partnership[] = [
	{
		id: 'moretti',
		title: 'Birra Moretti',
		src: '/images/logos/moretti.svg',
		href: 'https://birramoretti.nl'
	},
	{
		id: 'segafredo',
		title: 'Segafredo Zanetti',
		src: '/images/logos/segafredo.svg',
		href: 'https://segafredo.nl'
	},
	{
		id: 'montetondo',
		title: 'Monte Tondo',
		src: '/images/logos/montetondo.svg'
	},
	{
		id: 'brand',
		title: 'Brand',
		src: '/images/logos/brand.svg',
		href: 'https://brand.nl'
	},
	{
		id: 'thiessen',
		title: 'Thiessen Maastricht',
		src: '/images/logos/thiessen.svg',
		href: 'https://thiessen.nl'
	}
];

// Reviews
export const reviews: Review[] = [
	{
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		name: 'Tim de Rouw',
		origin: ReviewType.TheFork,
		rating: 10
	},
	{
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		name: 'Tim de Rouw',
		origin: ReviewType.TheFork,
		rating: 10
	},
	{
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		name: 'Tim de Rouw',
		origin: ReviewType.TheFork,
		rating: 10
	},
	{
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		name: 'Tim de Rouw',
		origin: ReviewType.TheFork,
		rating: 10
	}
];
