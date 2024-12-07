import {
	ReviewType,
	type Review,
	type Dish,
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
		name: 'Tim de Rouw',
		joined: 2022,
		position: 'Founder and Chef',
		bio: 'database.bio.tim',
		src: '/images/images/tim.png',
		srcColored: '/images/images/tim-colored.png'
	},
	{
		id: 'jordi',
		name: 'Jordi',
		joined: 2022,
		position: 'Chef',
		bio: 'database.bio.jordi',
		src: '/images/images/jordi.png',
		srcColored: '/images/images/jordi-colored.png'
	},
	{
		id: 'antonio',
		name: 'Antonio ',
		joined: 2023,
		position: 'Chef',
		bio: 'database.bio.antonio',
		src: '/images/images/antonio.png',
		srcColored: '/images/images/antonio-colored.png'
	},
	{
		id: 'ricardo',
		name: 'Ricardo Luckers',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.ricardo',
		src: '/images/images/ricardo.png',
		srcColored: '/images/images/ricardo-colored.png'
	},
	{
		id: 'breght',
		name: 'Breght',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.breght',
		src: '/images/images/breght.png',
		srcColored: '/images/images/breght-colored.png'
	},
	{
		id: 'alex',
		name: 'Alexander Rutten',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'Alex has studied in Maastricht for 4 years and enjoys the city to the fullest extent! Always here for a chat and catch up, and takes great pride in ensuring the best of experiences at Stappato for every occasion',
		src: '/images/images/alex.png',
		srcColored: '/images/images/alex-colored.png'
	},
	{
		id: 'david',
		name: 'David Wicker',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.david',
		src: '/images/images/david.png',
		srcColored: '/images/images/david-colored.png'
	},
	{
		id: 'alessia',
		name: 'Alessia Burigo',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'database.bio.alessia',
		src: '/images/images/alessia.png',
		srcColored: '/images/images/alessia-colored.png'
	}
];

// Opening times
export const times: OpeningTime[] = [
	{
		day: 'contents.days.monday',
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
		title_en: 'Tagliatelle al ragù',
		title_it: 'Tagliatelle al ragù',
		title_nl: 'Tagliatelle al ragù',
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
		src: 'images/preview/burrata.jpg',
		id: 'burrata',
		section_id: 'starters',
		title_en: 'Burrata',
		title_it: 'Burrata',
		title_nl: 'Burrata',
		description_en:
			'Enjoy the refined creaminess of Burrata, an Italian cheese with a mozzarella-like outer layer and a creamy interior. Burrata is an Italian play on words, referring to its buttery.',
		description_it:
			'Goditi la raffinata cremosità della Burrata, un formaggio italiano contornato da mozzarella e con un cuore cremoso di stracciatella. ',
		description_nl:
			'Geniet van de verfijnde romigheid van Burrata, een Italiaanse kaas met een mozzarella achtige buitenkant en een romige binnenkant. Burrata is een Italiaanse woordspeling voor boterachtig',
		price: 12.5,
		vegetarian: true
	},
	{
		src: 'images/preview/day.fish.jpg',
		id: 'day.fish',
		section_id: 'main',
		title_en: 'Fish of the day',
		title_it: 'Pesce del giorno',
		title_nl: 'Vis van de dag',
		description_en:
			'Savor the catch of the day – a delectable fish dish served alongside a side of crisp salad, warm bread, or flavorful pasta.',
		description_it:
			'Assapora il pesce del giorno: un piatto delizioso di pesce servito con un contorno di insalata fresca, pane caldo o pasta saporita.',
		description_nl:
			'Geniet van de vis van de dag - een heerlijk visgerecht geserveerd met een bijgerecht van knapperige salade, warm brood of smaakvolle pasta.',
		vegetarian: false,
		vegan: false
	},
	{
		src: 'images/preview/day.meat.jpg',
		id: 'day.meat',
		section_id: 'main',
		title_en: 'Meat of the day',
		title_it: 'Carne del giorno',
		title_nl: 'Vlees van de dag',
		description_en:
			'Relish the daily meat special, served with a side of refreshing salad, crusty bread, or flavorful pasta for a delightful dining experience.',
		description_it:
			"Delizia del giorno: carne accompagnata da un contorno di insalata fresca, pane croccante o pasta saporita per un'esperienza gastronomica deliziosa.",
		description_nl:
			'Geniet van het vlees van de dag, vergezeld van een frisse salade, knapperig brood of smaakvolle pasta voor een heerlijke eetervaring.',

		vegetarian: false
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
			'Dit was onze eerste keer in Maastricht en we zochten een romantisch plekje om te dineren..na wat Google werk hier uitgekomen en dat beviel prima! Buiten op het terras kunnen zitten en fijn gegeten.',
		name: 'T. d.',
		origin: ReviewType.TheFork,
		rating: 10
	},
	{
		comment:
			'Op een mooie warme oktoberavond heerlijke vegetarische pasta gegeten. Vervolgens een lekkere panna cotta. En als afsluiter een eigen gemaakte limoncello van het huis. Fijne attente bediening.',
		name: 'Marco B.',
		origin: ReviewType.TheFork,
		rating: 8.5
	},
	{
		comment:
			'Authentiek Italiaans restaurant met uitstekende gerechten. Kwaliteit smaak en beleving zoals gewend in Italiaanse keuken. En…. de limoncello van het huis was niet te versmaden',
		name: 'Dirk Klaas K.',
		origin: ReviewType.TheFork,
		rating: 10
	},
	{
		comment:
			'Op de markt in Maastricht, sfeervol, klein, gezellig restaurant met Italiaans getinte gerechtjes, geluncht met een heerlijke zeebaars en ravioli met truffel saus, afsluiter met homemade limoncello, vooral vaker doen 😊',
		name: 'Anja',
		origin: ReviewType.TripAdvisor,
		rating: 10
	}
];
