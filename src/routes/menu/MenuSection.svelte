<script lang="ts">
	import MenuItem from './MenuItem.svelte';

	import { h2, paddingLeft } from '$lib/constants/theme';
	import type { MenuSection } from '$lib/constants/types';

	export let section: MenuSection;
	export let selected: boolean;
</script>

<div class="lg:border-l-[1px] border-darkbrown-three border-opacity-20 {paddingLeft} w-full">
	<!-- Menu section -->
	<div class="">
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
				<h2 class=" {h2} ">{section.title}</h2>
				<p class="font-thin">
					{section.fromTime.hour}:{section.fromTime.minutes != 0 ? section.fromTime.minutes : '00'} to
					{section.toTime.hour}:{section.toTime.minutes != 0 ? section.toTime.minutes : '00'}
				</p>
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
				<MenuItem title={dish.title} description={dish.description} price={dish.price} />
			{/each}
		</div>
	</div>
</div>
