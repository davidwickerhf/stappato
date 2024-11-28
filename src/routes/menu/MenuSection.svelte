<script lang="ts">
	import MenuItem from './MenuItem.svelte';

	import { h2 } from '$lib/constants/theme';
	import type { MenuSection } from '$lib/constants/types';
	import { locale, _ } from 'svelte-i18n';

	export let section: MenuSection;
	export let selected: boolean;
</script>

<div class="w-full lg:pl-16" id={section.id}>
	<!-- Menu section -->
	<div class="w-full">
		<!-- Dropdown title -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="flex w-full pb-2 border-b-[1px] border-darkbrown-three border-opacity-20 items-center justify-between hover:cursor-pointer"
			on:click={() => {
				selected = !selected;
			}}
		>
			<div class="flex items-center gap-10 text-darkbrown-three">
				<h2 class=" {h2} ">
					{$locale == 'en'
						? section.title_en
						: $locale == 'it'
						? section.title_it
						: section.title_nl}
				</h2>
				{#if section.fromTime != undefined}
					<p class="font-thin">
						{$_('contents.menu.from')}
						{section.fromTime.hour}:{section.fromTime.minutes != 0
							? section.fromTime.minutes
							: '00'}
					</p>
				{/if}

				{#if section.toTime}
					<p class="font-thin">
						{$_('contents.menu.to')}
						{section.toTime.hour}:{section.toTime.minutes != 0 ? section.toTime.minutes : '00'}
					</p>
				{/if}
			</div>

			<div
				class="select-none transition-all duration-200 ease-in-out {selected
					? ' inline-block rotate-90'
					: ''}"
			>
				<span
					class="inline-block select-none material-symbols-outlined text-darkbrown-three"
					style="font-size: 28px; ">keyboard_arrow_right</span
				>
			</div>
		</div>

		<!-- Menu items -->
		<div
			class="overflow-hidden transition-all ease-in-out duration-400 {selected
				? 'min-h-[100px] h-fit'
				: 'h-0'}"
		>
			<!-- Menu item -->
			{#each section.dishes as dish}
				<MenuItem {dish} />
			{/each}
		</div>
	</div>
</div>
