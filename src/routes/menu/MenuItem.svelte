<script lang="ts">
	import type { Dish } from '$lib/constants/types';
	import { locale } from 'svelte-i18n';
	export let dish: Dish;

	let priceString = dish.price
		? dish.price.toString().split('.').at(1)
			? dish.price.toString().split('.').at(1)?.length! < 2
				? dish.price.toString() + '0'
				: dish.price.toString()
			: dish.price.toString() + ',00'
		: undefined;
	priceString = priceString ? priceString.replace('.', ',') : undefined;

	function getStringPrice(price: number, addition?: boolean) {
		let pString = price.toString().split('.').at(1)
			? price.toString().split('.').at(1)?.length! < 2
				? price.toString() + '0'
				: price.toString()
			: price.toString() + ',00';
		pString = pString.replace('.', ',');
		if (addition) pString = '+' + pString;
		return pString;
	}

	let title = $locale == 'en' ? dish.title_en : $locale == 'it' ? dish.title_it : dish.title_nl;
</script>

<div class="flex flex-col gap-1 mt-6">
	<!-- Title -->
	<div class="flex items-end justify-between w-full gap-4">
		<p class="text-lg font-medium min-w-min max-w-[80%] shrink-0">{title}</p>
		{#if !dish.description_en && !dish.options}
			<!-- Divisor -->
			<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[10%] w-full">
				<div class=" h-[1px] bg-darkbrown-three opacity-20" />
			</div>
		{/if}
		{#if priceString}
			<p class="text-lg font-medium {dish.description_en ? 'sm:hidden' : ''} ">{priceString}€</p>
		{/if}
	</div>

	<!-- Description and price -->
	{#if dish.description_en}
		<div class="flex items-end justify-between gap-4">
			<p class="flex min-w-min max-w-[80%] shrink-0">
				{$locale == 'en'
					? dish.description_en
					: $locale == 'it'
					? dish.description_it
					: dish.description_nl}
			</p>

			<!-- Divisor -->
			<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[10%] w-full">
				<div class=" h-[1px] bg-darkbrown-three opacity-20" />
			</div>

			{#if priceString}
				<p class="hidden text-lg font-medium sm:flex">{priceString}€</p>
			{/if}
		</div>
	{/if}

	<!-- Options -->
	{#if dish.options}
		{#each dish.options as option}
			<div class="flex items-end justify-between gap-6 pb-4 sm:pb-2">
				<p class="flex min-w-min max-w-[70%] flex-shrink-0">
					{$locale == 'en' ? option.title_en : $locale == 'it' ? option.title_it : option.title_nl}
				</p>

				<!-- Divisor -->
				<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[8%] w-full flex-grow-0">
					<div class=" h-[1px] bg-darkbrown-three opacity-20" />
				</div>

				{#if option.price}
					<p class="flex text-lg font-medium">{getStringPrice(option.price, option.addition)}€</p>
				{/if}
			</div>
		{/each}
	{/if}
</div>
