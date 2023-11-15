<script>
	import { locale, locales } from 'svelte-i18n';
	import { theme } from '$lib/constants/theme';
	export let color = '';
	import { sidebar } from '$lib/store/SidebarStore';
</script>

<button
	on:click={() => {
		locale.set($locales[($locales.indexOf($locale ?? 'en') + 1) % $locales.length]);
	}}
	class="flex items-center justify-center h-12 font-semibold text-center uppercase transition-colors duration-200 ease-in-out w-14 langbutton"
	style="--color: {$sidebar.open ? theme.colors.background.three : color}; --white: {theme.colors
		.background.three}"
>
	{$locale?.substring(0, 2)}
</button>

<style lang="scss">
	.langbutton {
		color: var(--color);
		border-color: var(--color);
		border-width: 2px;

		&:hover {
			background-color: black;
			color: var(--white);
			border-color: black;
		}
	}
</style>
