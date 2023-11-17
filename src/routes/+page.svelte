<script lang="ts">
	import TextButton from '../lib/components/TextButton.svelte';

	import Review from '../lib/components/Review.svelte';

	import Dish from '../lib/components/Dish.svelte';

	import Map from '../lib/components/Map.svelte';

	import Logo from '../lib/components/Logo.svelte';

	import Button from '$lib/components/Button.svelte';
	import { h2, padding, paddingY, theme } from '$lib/constants/theme';
	import { ReviewType } from '$lib/constants/types';
</script>

<svelte:head>
	<title>Stappato</title>
	<meta name="description" content="Stappato Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<div class="relative z-0 h-screen min-h-[500px]">
	<img
		alt="landing"
		src="images/images/landing.png"
		class="absolute object-cover w-screen h-screen min-h-[500px]"
	/>
	<div class="absolute w-full h-full bg-[rgba(0,0,0,.5)]" />

	<section
		class="absolute flex flex-col items-center justify-center w-screen h-full gap-8 {padding} pt-20 align-middle text-background-three"
	>
		<!-- Heading -->
		<div class="flex flex-col items-center justify-center gap-6">
			<h1 class="text-5xl uppercase sm:text-6xl md:text-7xl xl:text-8xl">Stappato</h1>
			<p class="font-thin uppercase text-md tracking-[4px]">Bar & trattoria</p>
		</div>

		<!-- Action buttons -->
		<div
			class="flex flex-col flex-wrap justify-center w-full gap-4 font-semibold align-middle sm:gap-6 sm:flex-row md:gap-8"
		>
			<Button
				url="/menu"
				bgColor={theme.colors.background.three}
				padding={40}
				textColor={theme.colors.stappatored.three}>View the menu</Button
			>
			<Button
				url=""
				bgColor={theme.colors.stappatored.three}
				padding={40}
				textColor={theme.colors.background.three}>Reserve a table</Button
			>
		</div>
	</section>
</div>

<!-- Content Hero Section -->
<section class=" welcome">
	<div
		class="relative w-screen {padding} {paddingY} grid grid-flow-row gap-8 lg:gap-10 xl:gap-20 lg:grid-cols-[auto_auto] lg:grid-rows-[auto_minmax(0,1fr)]"
	>
		<!-- Paragraph and Heading -->
		<div class="flex flex-col gap-6">
			<h2 class="{h2} text-darkbrown-three">Welcome to Stappato!</h2>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>

		<!-- Map image -->
		<Map />

		<!-- Action buttons -->
		<div
			class="flex flex-col justify-start w-full h-full gap-4 sm:flex-wrap-reverse md:flex-grow-0 xl:gap-10 sm:flex-row sm:justify-between"
		>
			<div class="flex flex-col justify-end w-full md:flex-grow-0 sm:max-w-fit">
				<Button
					url="/team"
					bgColor={theme.colors.darkbrown.three}
					textColor={theme.colors.background.three}>Meet the entire team!</Button
				>
			</div>

			<div class="flex flex-col items-center justify-end sm:flex-grow-0">
				<div
					class="flex items-center justify-center w-full gap-4 font-semibold align-middle transition-all duration-200 ease-in-out md:gap-6 sm:max-w-fit sm:hover:cursor-pointer sm:hover:scale-105 bg-stappatored-three sm:bg-transparent text-background-three sm:text-darkbrown-three sm:font-normal hover:bg-black sm:hover:bg-transparent"
				>
					<a
						href="https://instagram.com/stappato_maastricht"
						class="uppercase sm:normal-case tracking-[2px] py-3">Follow us on Instagram</a
					>
					<div class="items-center justify-start hidden align-middle sm:flex">
						<span class="material-symbols-outlined">chevron_right</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Background Corkscrew Image -->
		<div class="absolute opacity-20 top-10 lg:top-40 -left-20 -z-10">
			<img
				alt="Dancing Corks"
				src="/images/corkscrews/Dancing Corks.png"
				class="max-h-[275px] lg:max-h-none"
			/>
		</div>
	</div>
</section>

<!-- Partnerships -->
<section class="{padding} {paddingY}">
	<div class="flex justify-center w-full">
		<h3 class="uppercase tracking-[6px]">Partnered with</h3>
	</div>

	<!-- Partnership scrollview -->
	<div class="flex justify-between w-full gap-8 pt-8 overflow-scroll">
		<Logo src={'/images/logos/moretti.svg'} />
		<Logo src={'/images/logos/segafredo.svg'} />
		<Logo src={'/images/logos/montetondo.svg'} />
		<Logo src={'/images/logos/brand.svg'} />
		<Logo src={'/images/logos/thiessen.svg'} />
	</div>
</section>

<!-- Menu Preview -->
<div
	class=" relative {paddingY} bg-darkbrown-three background bg-[center_top_400px] lg:bg-[center_top_275px]"
	style="--brown: {theme.colors.darkbrown.three};"
>
	<div class="z-10 flex flex-col gap-6">
		<h2 class="{padding} {h2} text-background-three">A preview of our menu</h2>
		<!-- Menu options -->
		<div class="relative h-[460px]">
			<div class="absolute {padding} flex flex-shrink-0 w-full gap-6 overflow-scroll h-[480px]">
				<!-- First menu item -->
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
				<Dish
					title="Bolognese"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
					vegan
					src="/images/images/dish.jpg"
				/>
			</div>
		</div>

		<!-- Vegan or vegetarian divs -->
		<div class="{padding} flex flex-col gap-16">
			<div class=" flex flex-col text-background-three uppercase tracking-[2px] gap-4">
				<div class="flex gap-4">
					<span class="material-symbols-outlined">nutrition</span>
					Vegetarian
				</div>
				<div class="flex gap-4">
					<span class="material-symbols-outlined">nest_eco_leaf</span>
					Vegan
				</div>
			</div>
			<!-- Full menu button -->
			<Button url="/menu" textColor={theme.colors.darkbrown.three}>See the full menu</Button>
		</div>
	</div>
</div>

<section class="relative {padding} {paddingY} flex flex-col gap-8 overflow-x-clip">
	<!-- Background image -->
	<div class="absolute z-10 -rotate-45 opacity-100 -top-20 md:-top-40 lg:-top-80 -right-8">
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Flying Cork 2.png"
			class="max-h-[375px] md:max-h-[550px] lg:max-h-none mix-blend-darken"
		/>
	</div>

	<h2 class="z-20 text-darkbrown-three {h2}">What people say about us</h2>

	<!-- Container grid -->
	<div class="z-20 grid gap-4 md:grid-cols-[1fr_1fr] xl:grid-cols-3">
		<div class="md:col-span-2">
			<Review
				comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam."
				src="/images/images/tim.jpg"
				name="Tim de Rouw"
				type={ReviewType.Tim}
			/>
		</div>

		<Review
			comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam."
			name="Tim de Rouw"
			type={ReviewType.TheFork}
			rating={10}
		/>
		<Review
			comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam."
			name="Tim de Rouw"
			type={ReviewType.TripAdvisor}
			rating={5}
		/>
		<Review
			comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam."
			name="Tim de Rouw"
			type={ReviewType.TheFork}
			rating={10}
		/>
		<Review
			comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam."
			name="Tim de Rouw"
			type={ReviewType.TheFork}
			rating={9.8}
		/>
	</div>

	<TextButton url="https://www.thefork.com/restaurant/stappato-r750369"
		>See all the reviews on The Fork</TextButton
	>
</section>

<!-- Reserve section -->
<section class="relative {padding} {paddingY}   bg-white flex flex-col gap-8">
	<!-- Background image -->
	<div class="absolute left-0 z-10 rotate-45 opacity-100 -top-2 md:top-20 lg:top-30">
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Open Bottle.png"
			class="max-h-[275px] md:max-h-[325px] lg:max-h-[375px]"
		/>
	</div>

	<h2 class="text-darkbrown-three {h2}">Reserve a table with us</h2>
	<div class="border h-fit min-h-fit bg-darkbrown-three">
		<iframe
			title="booking"
			src="https://widget.thefork.com/aca1fc5b-ac25-4e38-baec-1e4f908fb726"
			style="width: 100%; height:100%; min-height: 500px; overflow:scroll; background-color: white;"
		/>
	</div>
</section>

<!-- Special requests -->
<section class="{padding} {paddingY} h-[600px] flex flex-col gap-8">
	<h2 class="text-darkbrown-three {h2}">Any special request?</h2>
	<p class="max-w-[700px]">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>

	<div>
		<Button
			url="/contact"
			bgColor={theme.colors.darkbrown.three}
			textColor={theme.colors.background.three}>Contact us</Button
		>
	</div>
</section>

<style lang="scss">
	.background {
		background-image: url('/images/corkscrews/Stuck Cork.png');
		background-color: var(--brown);
		background-blend-mode: darken;
		background-size: contain;
		background-repeat: no-repeat;
		background-position-x: -100px;
	}
</style>
