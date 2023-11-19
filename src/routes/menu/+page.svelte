<script lang="ts">
	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import { h2, padding, paddingLeft, paddingY } from '$lib/constants/theme';

	let lunch: boolean = true;
</script>

<svelte:head>
	<title>Stappato Menu</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title="Our menu" />

<div class="flex-row flex {padding} {paddingY} gap-24">
	<!-- Sidebar -->
	<div class="flex-col hidden gap-8 text-darkbrown-three lg:flex">
		<!-- Sidebar item -->
		<a href="/menu/" class="flex items-center gap-4 text-lg group tracking-[3px]">
			<p class="group-hover:underline">Lunch</p>
			<div
				class="select-none transition-all duration-200 ease-in-out {lunch
					? ' inline-block rotate-45'
					: ''}"
			>
				<span class="inline-block select-none material-symbols-outlined"> arrow_right_alt </span>
			</div>
		</a>
	</div>

	<!-- Menu contents -->
	<div class="lg:border-l-[1px] border-darkbrown-three border-opacity-20 {paddingLeft} w-full">
		<!-- Menu section -->
		<div class="">
			<!-- Dropdown title -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="flex w-full pb-2 border-b-[1px] border-darkbrown-three border-opacity-20 items-center justify-between hover:cursor-pointer"
				on:click={() => {
					lunch = !lunch;
				}}
			>
				<div class="flex items-center gap-10 text-darkbrown-three">
					<h2 class=" {h2} ">Lunch</h2>
					<p class="font-thin">12:00 to 17:00</p>
				</div>

				<div
					class="select-none transition-all duration-200 ease-in-out {lunch
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
				class="overflow-hidden transition-all ease-in-out duration-400 {lunch
					? 'min-h-[100px] h-fit'
					: 'h-0'}"
			>
				<!-- Menu item -->
				<div class="flex flex-col gap-1 mt-6">
					<!-- Title -->
					<div class="flex items-center justify-between w-full">
						<p class="text-lg font-medium">Chef's soup</p>
						<p class="text-lg font-medium sm:hidden">7,50€</p>
					</div>

					<!-- Description and price -->
					<div class="flex items-end justify-between gap-4">
						<p class="w-full h-fit">Ask our waiters for the ingredients in the soup of the day</p>
						<!-- Divisor -->
						<div class="hidden sm:flex h-[6px] flex-col justify-start w-full">
							<div class="w-full h-[1px] bg-darkbrown-three opacity-20" />
						</div>

						<p class="hidden text-lg font-medium sm:flex">7,50€</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
