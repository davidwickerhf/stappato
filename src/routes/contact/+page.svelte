<script>
	import { padding } from '$lib/constants/theme';
</script>

<svelte:head>
	<title>Contact Stappato</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<div class="relative z-0 h-[550px] min-h-[500px] overflow-clip">
	<img
		alt="landing"
		src="images/images/menu.jpg"
		class="absolute object-cover w-screen h-screen min-h-[500px]"
	/>
	<div class="absolute w-full h-full bg-[rgba(0,0,0,.5)]" />

	<section
		class="absolute flex flex-col items-center justify-center w-screen h-full gap-8 {padding} pt-20 align-middle text-background-three"
	>
		<!-- Heading -->
		<div class="flex flex-col items-center justify-center gap-6">
			<h1 class="text-5xl uppercase sm:text-6xl md:text-7xl xl:text-8xl">Contact Us</h1>
		</div>
	</section>
</div>
