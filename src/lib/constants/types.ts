export enum ReviewType {
	TripAdvisor = 'Trip Advisor',
	TheFork = 'TheFork',
	GoogleMaps = 'Google Maps',
	Tim = 'Founder of STAPPATO'
}

export interface Dish {
	title: string;
	description: string;
	price: number;
	vegan?: boolean;
	vegetarain?: boolean;
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
