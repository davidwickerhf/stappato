import {
	ReviewType,
	type Review,
	type Dish,
	type MenuSection,
	type Employee,
	type OpeningTime,
	type Partnership
} from './types';

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
		]
	},
	{
		id: 'dinner',
		title: 'Dinner',
		fromTime: { hour: 12, minutes: 0 },
		toTime: { hour: 17, minutes: 0 },
		dishes: [
			{
				id: 'bolognese6',
				title: 'Bolognese',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				price: 18.5,
				vegetarian: true
			},
			{
				id: 'bolognese7',
				title: 'Bolognese',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				price: 18.5,
				vegetarian: true
			},
			{
				id: 'bolognese8',
				title: 'Bolognese',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				price: 18.5,
				vegetarian: true
			},
			{
				id: 'bolognese9',
				title: 'Bolognese',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				price: 18.5,
				vegetarian: true
			},
			{
				id: 'bolognese10',
				title: 'Bolognese',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				price: 18.5,
				vegetarian: true
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

// Contents
export const contents = {
	// Landing page
	landingPage: {
		landingImage: 'images/images/landing.png',
		welcomeText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		timComment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		specialRequestsText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	},

	// Menu page
	menuPage: {},

	// Team page
	teamPage: {},

	// Contact page
	contactPage: {}
};
