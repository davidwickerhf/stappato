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
		welcomeText:
			"Welcome to Stappato, Maastricht's Italian culinary escape, proudly celebrating our first year! Immerse yourself in the essence of Italy with our authentic menu, meticulously crafted with passion. Our Dutch and Italian staff, friendly and always ready for a chat, are committed to making your experience memorable. Explore a curated selection of the finest Italian wines that perfectly complement our dishes. At Stappato, we invite you to join us for an unforgettable journey where each visit is a celebration of flavors, warmth, and genuine hospitality.",
		timComment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		specialRequestsText:
			"Your dining experience is our top priority! Do you have a special celebration, a large group gathering, or any unique requests in mind? We're here to make your visit extraordinary. For group reservations, special occasions, or any other personalized requests, please don't hesitate to reach out. Our team is dedicated to ensuring your time with us is tailored to your needs. Contact us today, and let's make your dining experience at Stappato exceptional. We look forward to hosting you and creating memorable moments together."
	},

	// Menu page
	menuPage: {},

	// Team page
	teamPage: {},

	// Contact page
	contactPage: {}
};

// DYNAMIC

// Employees
export const employees: Employee[] = [
	{
		id: 'tim',
		name: 'Tim de Vrouw',
		joined: 2022,
		position: 'Founder and Chef',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'jordi',
		name: 'Jordi',
		joined: 2022,
		position: 'Chef',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'ricardo',
		name: 'Ricardo',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		src: '/images/images/tim.jpg'
	},
	{
		id: 'breght',
		name: 'Breght',
		joined: 2022,
		position: 'Waiter and Bartender',
		bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
	},
	{
		id: 'nina',
		name: 'Nina Trettzel',
		joined: 2022,
		position: 'Waiter and Bartender',
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
export const menu: MenuSection[] = [
	{
		id: 'lunch',
		title: 'Lunch',
		fromTime: { hour: 12, minutes: 0 },
		toTime: { hour: 17, minutes: 0 },
		dishes: [
			{
				id: 'soup',
				title: "Chef's soup",
				price: 7
			},
			{
				id: 'pane',
				title: 'Pane',
				price: 7,
				options: [
					{
						id: 'pane-veg',
						title: 'Vegetable spread (vegetarian on request)',
						price: 7
					},
					{
						id: 'pane-mortadella',
						title: 'Mortadella, rucola and garlig oil',
						price: 8.5
					},
					{
						id: 'pane-salami',
						title: 'Salami, rucola and garlic oil',
						price: 8.5
					},
					{
						id: 'pane-ham',
						title: 'Parma ham, garlic oil and sun-dried tomato',
						price: 9.5
					},
					{
						id: 'pane-chicken',
						title: 'Fried chicken, aioli and tomato',
						price: 9.5
					},
					{
						id: 'pane-tuna',
						title: 'Home made tuna salad',
						price: 9.5
					},
					{
						id: 'pane-vitello',
						title: 'Vitello Tonnato, sliced veal and tuna mayonnaise',
						price: 12.5
					},
					{
						id: 'pane-carpaccio',
						title: 'Carpaccio, truffle mayonnaise, pine nuts and Parmesan cheese',
						price: 12.5
					}
				]
			},
			{
				id: 'tosti',
				title: 'Tosti Italiana',
				price: 9.5,
				options: [
					{
						id: 'tosti-mozzarella',
						title: 'Mozzarella, tomato and pesto',
						price: 9.5
					},
					{
						id: 'tosti-mozzarella-ham',
						title: 'With Parma ham',
						price: 2.5,
						addition: true
					}
				]
			},
			{
				id: 'insalata-mare',
				title: 'Instalata di Mare',
				description: 'Scampi, tuna, anchovies',
				price: 14.5
			},
			{
				id: 'insalata-burrata',
				title: 'Insalata Burrata',
				price: 14.5,
				options: [
					{
						id: 'insta-burrata-balsamic',
						title: 'Balsamic (vegetarian on request)',
						price: 14.5
					},
					{
						id: 'insta-burrata-nduja',
						title: 'With Nduja (salsiccia Calabrese)',
						price: 1.5,
						addition: true
					}
				]
			}
		]
	},
	{
		id: 'appetizers',
		title: 'Appetizers',
		fromTime: {
			hour: 12,
			minutes: 0
		},
		dishes: [
			{
				id: 'bruschetta',
				title: 'Bruschetta',
				price: 6.5,
				options: [
					{
						id: 'mushrooms',
						title: 'Wilde mushrooms (vegetarian on request)',
						price: 6.5,
						vegetarian: true
					},
					{
						id: 'tomato',
						title: 'Tomato and basil (vegetarian on request)',
						price: 6.5,
						vegetarian: true
					},
					{
						id: 'day',
						title: 'Of the day (vegetarian on request)',
						price: 6.5,
						vegetarian: true
					}
				]
			},
			{
				id: 'olives',
				title: 'Olives',
				description: 'Home marinated (vegetarian)',
				vegetarian: true,
				price: 4
			}
		]
	}
];

// Select Menu
export const previewMenu: Dish[] = [
	{
		id: 'bolognese1',
		title: 'Bolognese',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		price: 18.5,
		vegetarian: true
	},
	{
		id: 'bolognese2',
		title: 'Bolognese',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		price: 18.5,
		vegetarian: true
	},
	{
		id: 'bolognese3',
		title: 'Bolognese',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		price: 18.5,
		vegetarian: true
	},
	{
		id: 'bolognese4',
		title: 'Bolognese',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		price: 18.5,
		vegetarian: true
	},
	{
		id: 'bolognese5',
		title: 'Bolognese',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		price: 18.5,
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
