<script lang="ts">
	export let title: string;
	export let price: number;
	export let description: string;

	let priceString = price.toString().split('.').at(1)
		? price.toString().split('.').at(1)?.length! < 2
			? price.toString() + '0'
			: price.toString()
		: price.toString() + ',00';
	priceString = priceString.replace('.', ',');
</script>

<div class="flex flex-col gap-1 mt-6">
	<!-- Title -->
	<div class="flex items-center justify-between w-full">
		<p class="text-lg font-medium">{title}</p>
		<p class="text-lg font-medium sm:hidden">{priceString}€</p>
	</div>

	<!-- Description and price -->
	<div class="flex items-end justify-between gap-4">
		<p class="w-full h-fit">{description}</p>
		<!-- Divisor -->
		<div class="hidden sm:flex h-[6px] flex-col justify-start w-full">
			<div class="w-full h-[1px] bg-darkbrown-three opacity-20" />
		</div>

		<p class="hidden text-lg font-medium sm:flex">{priceString}€</p>
	</div>
</div>
