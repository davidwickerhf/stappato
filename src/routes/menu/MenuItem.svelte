<script lang="ts">
	import type { Dish } from '$lib/constants/types';
	export let dish: Dish;

	let priceString = dish.price.toString().split('.').at(1)
		? dish.price.toString().split('.').at(1)?.length! < 2
			? dish.price.toString() + '0'
			: dish.price.toString()
		: dish.price.toString() + ',00';
	priceString = priceString.replace('.', ',');

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
</script>

<div class="flex flex-col gap-1 mt-6">
	<!-- Title -->
	<div class="flex items-end justify-between w-full gap-4">
		<p class="text-lg font-medium min-w-min max-w-[80%] shrink-0">{dish.title}</p>
		{#if !dish.description && !dish.options}
			<!-- Divisor -->
			<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[10%] w-full">
				<div class=" h-[1px] bg-darkbrown-three opacity-20" />
			</div>
		{/if}
		{#if !dish.options}
			<p class="text-lg font-medium {dish.description ? 'sm:hidden' : ''} ">{priceString}€</p>
		{/if}
	</div>

	<!-- Description and price -->
	{#if dish.description}
		<div class="flex items-end justify-between gap-4">
			<p class="flex min-w-min max-w-[80%] shrink-0">{dish.description}</p>

			<!-- Divisor -->
			<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[10%] w-full">
				<div class=" h-[1px] bg-darkbrown-three opacity-20" />
			</div>

			<p class="hidden text-lg font-medium sm:flex">{priceString}€</p>
		</div>
	{/if}

	<!-- Options -->
	{#if dish.options}
		{#each dish.options as option}
			<div class="flex items-end justify-between gap-6 pb-4 sm:pb-2">
				<p class="flex min-w-min max-w-[70%] flex-shrink-0">{option.title}</p>

				<!-- Divisor -->
				<div class="hidden sm:flex h-[6px] flex-col justify-start min-w-[8%] w-full flex-grow-0">
					<div class=" h-[1px] bg-darkbrown-three opacity-20" />
				</div>

				<p class="flex text-lg font-medium">{getStringPrice(option.price, option.addition)}€</p>
			</div>
		{/each}
	{/if}
</div>
