<script>
	import Button from '$lib/components/Button.svelte';
	import { theme } from '$lib/constants/theme';
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
		class="absolute flex flex-col items-center justify-center w-screen h-full gap-8 px-6 pt-20 text-background-three"
	>
		<!-- Heading -->
		<div class="flex flex-col items-center justify-center gap-6">
			<h1 class="text-4xl uppercase sm:text-5xl md:text-6xl xl:text-8xl">Stappato</h1>
			<p class="font-thin uppercase text-md tracking-[4px]">Bar & trattoria</p>
		</div>

		<!-- Action buttons -->
		<div class="flex flex-col flex-wrap w-full gap-4 font-semibold sm:flex-row">
			<Button
				url="/menu"
				bgColor={theme.colors.background.three}
				textColor={theme.colors.stappatored.three}>View the menu</Button
			>
			<Button
				url=""
				bgColor={theme.colors.stappatored.three}
				textColor={theme.colors.background.three}>Reserve a table</Button
			>
		</div>
	</section>
</div>

<!-- Content Hero Section -->

<div class="h-screen">1</div>
<div class="h-screen">2</div>
<div class="h-screen">3</div>
