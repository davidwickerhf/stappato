export enum ReviewType {
	TripAdvisor = 'Trip Advisor',
	TheFork = 'TheFork',
	GoogleMaps = 'Google Maps',
	Tim = 'Founder of STAPPATO'
}

export interface Review {
	comment: string;
	name: string;
	origin: ReviewType;
	rating: number;
}

export interface Dish {
	title: string;
	description: string;
	price: number;
	vegan?: boolean;
	vegetarian?: boolean;
	src?: string;
}

export interface Time {
	hour: number;
	minutes: number;
}

export interface MenuSection {
	title: string;
	description?: string;
	fromTime: Time;
	toTime: Time;
	dishes: Dish[];
}
