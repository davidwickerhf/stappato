<script lang="ts">
	import MenuSectionButton from './MenuSectionButton.svelte';

	import MenuSection from './MenuSection.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import { padding, paddingY } from '$lib/constants/theme';
	import { _, locale } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;

	function scrollWindow(section_id: string) {
		let sectionElement;
		try {
			sectionElement = document.getElementById(section_id);
		} catch (error) {}
		if (!sectionElement) return;
		sectionElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	let inView = '';
	$: inView, scrollWindow(inView);

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
			<MenuSectionButton bind:inView bind:selected={selected[index]} {section} />
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
