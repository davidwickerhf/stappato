<script>
	import Button from '$lib/components/Button.svelte';
	import { padding, paddingY, theme } from '$lib/constants/theme';
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
<section class="min-h-screen">
	<div
		class="w-screen {padding} {paddingY} grid grid-flow-row gap-20 md:grid-cols-[auto_auto] md:grid-rows-[auto_minmax(0,1fr)]"
	>
		<!-- Paragraph and Heading -->
		<div class="flex flex-col gap-6">
			<h2 class="text-darkbrown-three sm:text-2xl md:text-3xl">Welcome to Stappato!</h2>
			<p class="">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>

		<!-- Map image -->
		<div class="flex md:row-span-2 w-full md:max-h-[375px] md:max-w-[550px]">
			<a
				href="https://maps.app.goo.gl/Wv3ZNrFMotgb3Qq68"
				class="w-full h-full map hover:cursor-pointer"
				style="--white: {theme.colors.background.three};"
			>
				<img
					class="invisible w-full h-full"
					alt="map hidden"
					src="/images/assets/stappatomap.png"
					style="visibility: hidden;"
				/>
			</a>
		</div>

		<!-- Action buttons -->
		<div
			class="flex flex-col justify-end h-full gap-6 md:flex-grow-0 md:gap-10 sm:flex-row max-w-fit"
		>
			<div class="flex flex-col justify-end flex-grow-0 max-w-fit">
				<Button
					url="/team"
					bgColor={theme.colors.darkbrown.three}
					textColor={theme.colors.background.three}>Meet the entire team!</Button
				>
			</div>

			<div class="flex flex-col justify-end flex-grow-0">
				<div
					class="flex items-center align-middle transition-all duration-200 ease-in-out max-w-fit hover:cursor-pointer hover:scale-105"
				>
					<a
						href="https://instagram.com/stappato"
						class="uppercase tracking-[2px] py-3 text-darkbrown-three">Follow us on Instagram</a
					>
					<span class="material-symbols-outlined text-darkbrown-three">chevron_right</span>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="h-screen">2</div>
<div class="h-screen">3</div>

<style lang="scss">
	.map {
		background-color: var(--white);
		background-image: url('/images/assets/stappatomap.png');
		mix-blend-mode: darken;
		background-size: 100% auto;
	}
</style>
