<script>
	import { locale, locales } from 'svelte-i18n';
	import { theme } from '$lib/constants/theme';
	export let color = '';
</script>

<div
	class="flex justify-between h-12 font-semibold uppercase align-middle transition-colors duration-200 ease-in-out border-2 langbutton"
	style="--color: {color}; --white: {theme.colors.background.three}"
>
	<button
		on:click={() => {
			locale.set($locales[($locales.indexOf($locale ?? 'en') + 1) % $locales.length]);
		}}
		class="w-12 h-full text-center uppercase align-middle justify-cente"
	>
		{$locale?.substring(0, 2)}
	</button>
</div>

<style lang="scss">
	.langbutton {
		color: var(--color);
		border-color: var(--color);

		:hover {
			background-color: black;
			color: var(--white);
			border-color: black;
		}
	}
</style>
