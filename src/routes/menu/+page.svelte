<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import { padding, paddingY } from '$lib/constants/theme';

	import MenuSectionButton from './MenuSectionButton.svelte';
	import MenuSection from './MenuSection.svelte';
	import LandingPicture from '$lib/components/LandingPicture.svelte';

	import { verticalScroll } from '$lib/store/ScrollStore';

	export let data: PageData;

	// Handle scroll to view
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

	// Handle moving menu navbar

	let nav: any;
	let contents: any;
	let divHeight = 0;
	$: console.log($verticalScroll);
	$: divHeight = setHeight($verticalScroll, nav, contents, divHeight);

	function setHeight(scroll: number, nav: HTMLDivElement, box: HTMLDivElement, divHeight: number) {
		if (box && nav) {
			if (scroll - 500 < box.clientHeight) {
				return scroll - 500 - nav.clientHeight;
			}
		}
		return divHeight;
	}

	// Handle contents
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

<div class=" flex-row flex {padding} {paddingY} gap-20 max-h-fit">
	<!-- Sidebar -->
	<div class="flex-col hidden max-h-full text-darkbrown-three lg:flex" bind:this={nav}>
		<!-- <div class="w-full bg-black" style="height: {divHeight}px;" /> -->
		<!-- Sidebar item -->
		<dvi class="flex flex-col gap-8 min-w-max">
			{#each data.sections as section, index}
				<MenuSectionButton bind:inView bind:selected={selected[index]} {section} />
			{/each}
		</dvi>
	</div>

	<!-- Menu contents -->
	<div
		bind:this={contents}
		class="flex flex-col gap-10 lg:border-l-[1px] border-darkbrown-three border-opacity-20 w-full"
	>
		{#each data.sections as section, index}
			<MenuSection bind:selected={selected[index]} {section} />
		{/each}
	</div>
</div>
