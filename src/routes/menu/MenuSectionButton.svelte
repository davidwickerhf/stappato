<script lang="ts">
	import type { MenuSection } from '$lib/constants/types';
	import { locale } from 'svelte-i18n';
	export let selected: boolean = true;
	export let section: MenuSection;
	export let inView: string;
</script>

<button
	class="flex justify-between items-center gap-6 text-lg group tracking-[3px] w-full"
	on:click={() => {
		inView = section.id;
		selected = true;
	}}
>
	<p class="w-full group-hover:underline text-start">
		{$locale == 'en' ? section.title_en : $locale == 'it' ? section.title_it : section.title_nl}
	</p>
	<div
		class="flex select-none transition-all duration-200 ease-in-out h-full items-center {selected
			? ' inline-block rotate-45'
			: ''}"
	>
		<span class="inline-block select-none material-symbols-outlined"> arrow_right_alt </span>
	</div>
</button>
