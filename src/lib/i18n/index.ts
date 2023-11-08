// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('it', () => import('./locales/it.json'));
register('nl', () => import('./locales/nl.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
