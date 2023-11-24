import { ReviewType, type Review, type Dish, type MenuSection } from './types';

// Employees

// Opening times

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
