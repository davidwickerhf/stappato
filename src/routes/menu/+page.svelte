<script lang="ts">
	import MenuSectionButton from './MenuSectionButton.svelte';

	import MenuSection from './MenuSection.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import { padding, paddingY } from '$lib/constants/theme';
	import { _, locale } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	let selected: boolean[] = [];

	data.sections.forEach((section) => {
		selected.push(true);
	});
</script>

<svelte:head>
	<title>Stappato Menu</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title={$_('contents.menu.title')} />

<div class="flex-row flex {padding} {paddingY} gap-24">
	<!-- Sidebar -->
	<div class="flex-col hidden gap-8 text-darkbrown-three lg:flex">
		<!-- Sidebar item -->
		{#each data.sections as section, index}
			<MenuSectionButton
				bind:selected={selected[index]}
				section={$locale == 'en'
					? section.title_en
					: $locale == 'it'
					? section.title_it
					: section.title_nl}
			/>
		{/each}
	</div>

	<!-- Menu contents -->
	<div
		class="flex flex-col gap-10 lg:border-l-[1px] border-darkbrown-three border-opacity-20 w-full"
	>
		{#each data.sections as section, index}
			<MenuSection bind:selected={selected[index]} {section} />
		{/each}
	</div>
</div>
